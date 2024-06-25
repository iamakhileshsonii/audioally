import React, { useState, useEffect } from 'react';
import useSay from '../../hooks/useSay';
import HeroSection from './components/HeroSection';
import { useCharacterCount } from '../../hooks/useCharacterCount.js';
import FeaturedSection from './components/FeaturedSection.jsx';

const Home = () => {
  const { speaking, speak, stop, voices } = useSay();
  const [text, setText] = useState('');
  const [filename, setFilename] = useState('output.wav');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [rate, setRate] = useState(1.0);
  const [pitch, setPitch] = useState(1.0);
  const characterCount = useCharacterCount(text);

  const handleSpeak = (e) => {
    e.preventDefault();
    speak(text, selectedVoice, rate, pitch);
  };

  const handleExport = (e) => {
    e.preventDefault();
    console.log('handleExport called');
  };

  return (
    <div className='p-10'>
      <HeroSection />
      <div className='py-18 sm:py-10 sm:px-28 sm:my-20 bg-sectionBg-light rounded-lg'>
        <div className="grid justify-center ">
          <div className='grid justify-center text-center pb-16'>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
              Try Audioally Now
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 px-10 sm:px-52">
              Experience the power of Audioally firsthand! Convert your text into high-quality speech in just a few simple steps. Enter your text below, choose your preferred voice settings, and click 'Convert' to hear the magic.
            </p>
          </div>
        </div>
        <form className='px-2 sm:px-0' onSubmit={handleExport} id='audioallytool'>
          <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-start gap-16 px-3 py-2 border-b dark:border-gray-600">
            
              
              <div className="mb-4 flex items-center gap-2">
            <label htmlFor="voice" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Voice
            </label>
            <select
              id="voice"
              className="block w-full mt-1 text-sm border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:text-white dark:border-gray-600"
              value={selectedVoice ? selectedVoice.name : ''}
              onChange={(e) => {
                const selected = voices.find((voice) => voice.name === e.target.value);
                setSelectedVoice(selected);
              }}
            >
              {voices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
                </div>
                <div className="mb-4 flex items-center gap-2">
            <label htmlFor="rate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Rate
            </label>
            <input
              type="range"
              id="rate"
              min="0.5"
              max="2.0"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              className="w-full mt-1"
            />
            <p>{rate}</p>
                </div>
                <div className="mb-4 flex items-center gap-2">
            <label htmlFor="pitch" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Pitch
            </label>
            <input
              type="range"
              id="pitch"
              min="0.5"
              max="2.0"
              step="0.1"
              value={pitch}
              onChange={(e) => setPitch(parseFloat(e.target.value))}
              className="w-full mt-1"
            />
            <p>{pitch}</p>
          </div>
         
            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">Publish post</label>
              <textarea
                id="editor"
                rows="8"
                className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                placeholder="Write an article..."
                value={text}
                required
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <p>Characters: {characterCount}</p>
             
          <p className='bg-red-default text-white px-2 rounded-md hover:cursor-pointer hover:shadow-xl' onClick={stop}>Stop</p>
            </div>
          </div>

          

          <button
            className="bg-green-default inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
            onClick={handleSpeak}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
            </svg>
            Listen
          </button>
        </form>
      </div>
      <FeaturedSection />
    </div>
  );
};

export default Home;
