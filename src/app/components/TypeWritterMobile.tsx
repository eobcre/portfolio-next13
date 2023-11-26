'use client';

import { useState, useEffect } from 'react';

type TypeWritterProps = {
  text: string;
  delay: number;
};

const TypeWritterMobile: React.FC<TypeWritterProps> = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCursorVisible, setIsCursorVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCursorVisible((prev) => !prev);
    }, delay * 2);

    return () => clearTimeout(timeout);
  }, [isCursorVisible, delay]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  const isFrontendDisplayed = currentText.includes('Developer.');
  const shouldShowCursor =
    currentIndex >= 'Frontend'.length && !isFrontendDisplayed;

  return (
    <span className='custom-text text-6xl font-bold py-4 xs:text-8xl pre-md:hidden'>
      {currentText}
      <span className={shouldShowCursor ? 'cursor' : ''}>
        {isCursorVisible ? '|' : ''}
      </span>
    </span>
  );
};

export default TypeWritterMobile;
