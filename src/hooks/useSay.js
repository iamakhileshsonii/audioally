import { useState, useCallback, useEffect } from 'react';

const useSay = () => {
  const [speaking, setSpeaking] = useState(false);
  const [voices, setVoices] = useState([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const handleVoicesChanged = () => {
      setVoices(synth.getVoices());
    };

    synth.addEventListener('voiceschanged', handleVoicesChanged);
    handleVoicesChanged();

    return () => {
      synth.removeEventListener('voiceschanged', handleVoicesChanged);
    };
  }, [synth]);

  const speak = useCallback((text, voice = null, rate = 1.0) => {
    if (!synth) return;

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) {
      utterance.voice = voice;
    }
    utterance.rate = rate;

    utterance.onstart = () => {
      setSpeaking(true);
    };

    utterance.onend = () => {
      setSpeaking(false);
    };

    utterance.onerror = (err) => {
      setSpeaking(false);
      console.error('SpeechSynthesisUtterance.onerror', err);
    };

    synth.speak(utterance);
  }, [synth]);

  const stop = useCallback(() => {
    if (synth && synth.speaking) {
      synth.cancel();
      setSpeaking(false);
    }
  }, [synth]);

  useEffect(() => {
    return () => {
      if (synth && synth.speaking) {
        synth.cancel();
      }
    };
  }, [synth]);

  return { speaking, speak, stop, voices };
};

export default useSay;
