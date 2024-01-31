'use client';

// components
import TypeWriting from '@/app/components/TypeWriting';

const ContactPage = () => {
  return (
    <div className='px-10 py-20 w-full md:pl-10 md:pr-48'>
      <TypeWriting text='Contact.' delay={200} />
      <div className='pt-20'>
        <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>
          Say Hello.
        </h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
