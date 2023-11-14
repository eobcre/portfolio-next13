// components
import NameTitle from './NameTitle';
import TypeWritter from './TypeWritter';
import SubNavBar from './SubNavBar';

const HeroSectionLightTheme = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
      <NameTitle text="Hi, I'm Emmy." />
      <TypeWritter text="I'm a Frontend Developer." delay={200} />
      <SubNavBar />
    </div>
  );
};

export default HeroSectionLightTheme;
