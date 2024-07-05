import { useState, useEffect } from 'react';

const useWordCount = (text = '') => {
    const [wordCount, setWordCount] = useState(0);

    useEffect(() => {
        if (text.trim() === '') {
            setWordCount(0);
        } else {
            const words = text.trim().split(/\s+/);
            setWordCount(words.length);
        }
    }, [text]);

    return wordCount;
}

export { useWordCount };