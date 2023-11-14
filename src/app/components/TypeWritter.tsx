'use client';

import { useState, useEffect } from 'react';

type TypeWritterProps = {
  text: string;
  delay: number;
};

const TypeWritter: React.FC<TypeWritterProps> = ({ text, delay }) => {
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

  return (
    <>
      <span className='custom-text text-4xl p-4 min-[984px]:text-7xl'>
        {currentText}
        <span className={isCursorVisible ? 'cursor' : ''}>|</span>
      </span>
    </>
  );
};
export default TypeWritter;
