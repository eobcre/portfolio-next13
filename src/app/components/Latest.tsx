import React from 'react';

import TypeWritter from './TypeWritter';

const Latest = () => {
  return (
    <div className='pl-10 pr-48 py-20'>
      <TypeWritter
        text="What's New ."
        delay={200}
        className='custom-text text-8xl font-bold'
      />
      <div className='bg-[#333333] bg-opacity-50 rounded-md p-10 -mt-3'>
        <p className='text-white'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus
          incidunt, quas explicabo libero repellat, vitae reiciendis culpa
          repudiandae labore magnam minus reprehenderit corrupti. Voluptatem
          optio aut officia? Incidunt, corrupti.
        </p>
      </div>
    </div>
  );
};

export default Latest;
