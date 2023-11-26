// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import SubNavBar from './SubNavBar';
import Description from './Description';

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text='Frontend Developer.' delay={200} />
      <SubNavBar />
      <Description />
    </div>
  );
};

export default HeroSection;
