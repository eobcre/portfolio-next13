// Latest.jsx
import React from 'react';
import ScrollObserver from '../ScrollObserver';

const Latest = () => {
  return (
    <div className='px-10 py-20 md:pl-10 md:pr-48'>
      <ScrollObserver title="What's New .">
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 pre-md:-mt-5 md:-mt-5 lg:-mt-6 '>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            delectus incidunt, quas explicabo libero repellat, vitae reiciendis
            culpa repudiandae labore magnam minus reprehenderit corrupti.
            Voluptatem optio aut officia. Incidunt, corrupti.
          </p>
        </div>
      </ScrollObserver>
    </div>
  );
};

export default Latest;
