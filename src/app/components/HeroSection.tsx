// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import SubNavBar from './SubNavBar';

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center pl-3 h-full'>
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text='Frontend Developer.' delay={200} />
      <SubNavBar />
    </div>
  );
};

export default HeroSection;
