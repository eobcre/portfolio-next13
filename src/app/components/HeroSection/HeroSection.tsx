'use client';

import { useState, useEffect } from 'react';

// components
import TypeWriting from '../TypeWriting';
import IconBar from './IconBar';

const HeroSection = () => {
  const [isFrontendFinished, setIsFrontendFinished] = useState(false);

  const h1Style = 'text-white text-3xl uppercase font-bold pb-4 sm:text-[5vw]';

  useEffect(() => {
    const frontendTimeout = setTimeout(() => {
      setIsFrontendFinished(true);
    }, 2000);
    return () => clearTimeout(frontendTimeout);
  }, []);

  return (
    <div className='flex flex-col pl-4 py-10'>
      <h1 className={h1Style}>Emmy Manning</h1>
      <div className='flex flex-col h-[30vw]'>
        <TypeWriting text='Frontend' delay={200} />
        {isFrontendFinished && <TypeWriting text='Developer.' delay={200} />}
      </div>
      <IconBar />
    </div>
  );
};

export default HeroSection;
