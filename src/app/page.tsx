import NameTitle from './components/NameTitle';
import TypeWritter from './components/TypeWritter';

export default function Home() {
  return (
    <main>
      <div className='flex flex-col justify-center items-center h-[70vh]'>
        <NameTitle text="Hi, I'm Emmy." />
        <TypeWritter text="I'm a Frontend Developer." delay={200} />
      </div>
    </main>
  );
}
