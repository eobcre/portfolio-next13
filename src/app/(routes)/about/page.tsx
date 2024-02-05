'use client';

// components
import TypeWriting from '@/app/components/TypeWriting';

const AboutPage = () => {
  const divStyle =
    'bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6';
  const h1Style = 'custom-text text-5xl font-bold sm:text-[8vw]';

  return (
    <div className='px-10 py-20 md:pl-10 w-full min-h-screen md:pr-48'>
      <TypeWriting text='About.' delay={200} />
      <div className='xl:px-36'>
        <div className='pt-20'>
          <h1 className={h1Style}>Me.</h1>
          <div className={divStyle}>
            <div className='p-14'>
              <p className='text-gray-300'></p>
            </div>
          </div>
        </div>
        <div className='pt-20'>
          <h1 className={h1Style}>Experience</h1>
          <div className={divStyle}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
