'use client';

// components
import ScrollObserver from '@/app/components/ScrollObserver';

const ContactPage = () => {
  return (
    <div className='px-10 py-20 md:pl-10 md:pr-48'>
      <ScrollObserver title='Contact.'>
        <></>
      </ScrollObserver>
      <div>
        <h1 className='custom-text text-5xl font-bold sm:text-[8vw]'>Say Hello.</h1>
        <div className='bg-[#333333] bg-opacity-50 rounded-md -mt-3 sm:-mt-4 p-10 md:-mt-5 lg:-mt-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In ea quae
          maxime dolorum, non velit impedit dolorem quisquam, dolores quidem
          repellendus! Labore eos ex autem commodi nesciunt veritatis similique
          assumenda!
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
