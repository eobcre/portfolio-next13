'use client';

import { useState, useEffect } from 'react';

// components
// import TypeWriting from '../TypeWriting';
import TypeWritingMobile from '../TypeWritingMobile';
import IconBar from './IconBar';

const HeroSection = () => {
  const [isFrontendFinished, setIsFrontendFinished] = useState(false);

  useEffect(() => {
    const frontendTimeout = setTimeout(() => {
      setIsFrontendFinished(true);
    }, 2000);
    return () => clearTimeout(frontendTimeout);
  }, []);

  return (
    <div className='flex flex-col justify-center pl-4 py-4 w-full'>
      <h1 className='text-white text-3xl uppercase font-bold py-4 sm:text-[5vw]'>
        Emmy Manning
      </h1>
      {/* <TypeWriting
        text='Frontend Developer .'
        delay={200}
        className='hidden pre-md:block custom-text font-bold py-4 pre-md:text-7xl md:text-[5rem] lg:text-8xl 2xl:text-[7rem] 4xl:text-[12rem]'
      /> */}
      <TypeWritingMobile text='Frontend' delay={200} />
      {isFrontendFinished && (
        <TypeWritingMobile text='Developer.' delay={200} />
      )}
      <IconBar />
    </div>
  );
};

export default HeroSection;
