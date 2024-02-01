// components
import HeroSection from './components/HeroSection/HeroSection';
import Latest from './components/HeroSection/Latest';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <Latest />
    </main>
  );
}
