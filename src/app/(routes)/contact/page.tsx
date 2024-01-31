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
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            className='rounded-md outline-none mt-10 p-4 w-full'
          />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className='rounded-md outline-none mt-6 p-4 w-full'
          />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'
            className='rounded-md outline-none resize-none mt-6 p-4 w-full'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
