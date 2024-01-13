'use client';

import { useState, useEffect } from 'react';

type TypeWritingProps = {
  text: string;
  delay: number;
  className: string;
};

const TypeWriting: React.FC<TypeWritingProps> = ({
  text,
  delay,
  className,
}) => {
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
    <span className={className}>
      {currentText}
      <span className={isCursorVisible ? 'cursor' : ''}>|</span>
    </span>
  );
};

export default TypeWriting;
