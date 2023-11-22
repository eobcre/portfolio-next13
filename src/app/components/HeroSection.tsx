// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import SubNavBar from './SubNavBar';
import Button from './Button';

const HeroSection = () => {
  return (
    <div className='flex flex-col justify-center h-full'>
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text='Frontend Developer.' delay={200} />
      <SubNavBar />
      <Button buttonName='Resume' />
    </div>
  );
};

export default HeroSection;
