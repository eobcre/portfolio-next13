'use client';

// components
import TypeWriting from '@/app/components/TypeWriting';

const GalleryPage = () => {
  return (
    <div className='px-10 py-20 md:pl-10 w-full md:pr-48'>
      <TypeWriting text='Gallery.' delay={200} />
      <div className='pt-28 xl:px-36'>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'></div>
      </div>
    </div>
  );
};

export default GalleryPage;
