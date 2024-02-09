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
            <div className='flex flex-col gap-6 md:p-14'>
              <p className='text-2xl text-gray-300'>
                Frontend Developer based in Beaver, PA.
              </p>
              <p className='text-gray-300'>
                Fast-forward to the present, I've had the privilege of leading a
                Frontend Developer internship at a startup specializing in web
                development. I began my journey in the industry as a software
                tester, navigated through map alignment, and contributed to
                developing medical surveys. I'm always passionate about creative
                coding and curious about learning new technologies!
              </p>
              <p className='text-gray-300'>
                During my time away from the computer, I'm usually reading,
                cooking and enjoying a coffee at cafe.
              </p>
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
