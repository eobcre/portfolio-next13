// Latest.jsx
import React from 'react';

const Repos = () => {
  const h1Style='custom-text text-5xl font-bold sm:text-[8vw]'

  return (
    <div className='px-10 py-20 md:pl-10 md:pr-48'>
      <div className='xl:px-36'>
        <h1 className={h1Style}>Repos</h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'>
          <p className='text-white'></p>
        </div>
      </div>
    </div>
  );
};

export default Repos;
