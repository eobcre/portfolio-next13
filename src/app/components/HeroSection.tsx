// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import SubNavBar from './SubNavBar';

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text='Frontend Developer.' delay={200} />
      <SubNavBar />
      <div className='text-[#333333] text-7xl font-bold p-4'>
        <p>Dive into Creativity</p>
        <p>Lorem Lorem Lorem Lorem</p>
      </div>
    </div>
  );
};

export default HeroSection;
