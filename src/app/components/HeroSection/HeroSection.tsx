'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// components
import TypeWriting from '../TypeWriting';
import TypeWritingMobile from '../TypeWritingMobile';
import IconBar from './IconBar';

import Space from '../../assets/background.png';

const HeroSection = () => {
  const [isFrontendFinished, setIsFrontendFinished] = useState(false);

  useEffect(() => {
    const frontendTimeout = setTimeout(() => {
      setIsFrontendFinished(true);
    }, 2000);
    return () => clearTimeout(frontendTimeout);
  }, []);

  return (
    <div className='flex flex-col pl-4 w-full'>
      <h1 className='text-white text-4xl font-bold py-4 xs:text-5xl sm:text-5xl md:text-6xl'>
        Hi, I'm Emmy.
      </h1>
      <TypeWriting
        text='Frontend Developer .'
        delay={200}
        className='hidden pre-md:block custom-text font-bold py-4 pre-md:text-7xl md:text-[5rem] lg:text-8xl 2xl:text-[7rem] 4xl:text-[12rem]'
      />
      <TypeWritingMobile text='Frontend' delay={200} />
      {isFrontendFinished && (
        <TypeWritingMobile text='Developer.' delay={200} />
      )}
      <IconBar />
      <div className='text-[#333333] text-7xl font-bold py-4'>
        <Image src={Space} alt='Image' className='w-[1000px]' />
      </div>
    </div>
  );
};

export default HeroSection;
