// components
import HeroSection from './components/HeroSection/HeroSection';
import Repos from './components/HeroSection/Repos';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <Repos />
    </main>
  );
}
