'use client';

import { useState, useEffect } from 'react';

// components
import TypeWriting from '../TypeWriting';
import IconBar from './IconBar';

const HeroSection = () => {
  const [isFrontendFinished, setIsFrontendFinished] = useState(false);

  useEffect(() => {
    const frontendTimeout = setTimeout(() => {
      setIsFrontendFinished(true);
    }, 2000);
    return () => clearTimeout(frontendTimeout);
  }, []);

  const initialText = 'Frontend';
  const finalText = 'Developer.';

  return (
    <div className='flex flex-col pl-4 py-10 w-full'>
      <h1 className='text-white text-3xl uppercase font-bold pb-4 sm:text-[5vw]'>
        Emmy Manning
      </h1>
      <TypeWriting text={initialText} delay={200} />
      {isFrontendFinished && <TypeWriting text={finalText} delay={200} />}
      <IconBar />
    </div>
  );
};

export default HeroSection;
