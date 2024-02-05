'use client';

// components
import TypeWriting from '@/app/components/TypeWriting';

const ContactPage = () => {
  const inputStyle = 'rounded-md outline-none p-4 w-full';
  const textareaStyle = 'rounded-md outline-none resize-none mt-6 p-4 w-full'

  return (
    <div className='px-10 py-20 w-full min-h-screen md:pl-10 md:pr-48'>
      <TypeWriting text='Contact.' delay={200} />
      <div className='pt-20 xl:px-36'>
        <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>
          Say Hello.
        </h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            className={`mt-10 ${inputStyle}`}
          />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className={`mt-6 ${inputStyle}`}
          />
          <textarea
            name=''
            id=''
            cols={30}
            rows={10}
            placeholder='Message'
            className={textareaStyle}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
