import React from 'react';

import TypeWritter from '../TypeWritter';

const Latest = () => {
  return (
    <div className='px-10 py-20 md:pl-10 md:pr-48'>
      <TypeWritter
        text="What's New ."
        delay={200}
        className='custom-text text-4xl sm:text-6xl font-bold pre-md:text-7xl md:text-[5rem] lg:text-8xl 4xl:text-[12rem]'
      />
      <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 pre-md:-mt-5 md:-mt-5 lg:-mt-6 '>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
          incidunt, quas explicabo libero repellat, vitae reiciendis culpa
          repudiandae labore magnam minus reprehenderit corrupti. Voluptatem
          optio aut officia. Incidunt, corrupti.
        </p>
      </div>
    </div>
  );
};

export default Latest;
