'use client';

import { useState, useEffect } from 'react';

// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import TypeWritterMobile from './TypeWritterMobile';
import SubNavBar from './SubNavBar';
import Description from './Description';

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
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text='Frontend Developer.' delay={200} />
      <TypeWritterMobile text='Frontend' delay={200} />
      {isFrontendFinished && (
        <TypeWritterMobile text='Developer.' delay={200} />
      )}
      <SubNavBar />
      <Description />
    </div>
  );
};

export default HeroSection;
