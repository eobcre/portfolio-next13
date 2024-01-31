// components
import HeroSection from './components/HeroSection/HeroSection';
import Latest from './components/HeroSection/Latest';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <Latest />
      <Footer />
    </main>
  );
}
