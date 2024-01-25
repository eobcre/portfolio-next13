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
    <div className='flex flex-col pl-4 pb-10 py-6 w-full lg:h-screen'>
      <h1 className='text-white text-3xl uppercase font-bold py-4 sm:text-[5vw]'>
        Emmy Manning
      </h1>
      <IconBar />
        <div>
          <TypeWriting text={initialText} delay={200} />
        </div>
        <div>
          {isFrontendFinished && <TypeWriting text={finalText} delay={200} />}
        </div>
    </div>
  );
};

export default HeroSection;
