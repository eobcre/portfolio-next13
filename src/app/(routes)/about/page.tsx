'use client';

// components
import TypeWriting from '@/app/components/TypeWriting';

const AboutPage = () => {
  return (
    <div className='px-10 py-20 md:pl-10 w-full md:pr-48'>
      <TypeWriting text='About.' delay={200} />
      <div className='pt-20'>
      <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>Me.</h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'>
          <div className='p-14'>
            <p className='text-gray-300'></p>
          </div>
        </div>
      </div>
      <div className='pt-20'>
        <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>Skills</h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'></div>
      </div>
      <div className='pt-20'>
        <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>
          Experience
        </h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'></div>
      </div>
    </div>
  );
};

export default AboutPage;
