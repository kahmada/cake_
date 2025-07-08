import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CakeList from './components/CakeList';
import InfoSection from './components/InfoSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <main>
        <h2 className="main-title">Delicious Cakes Are Here</h2>
        <h3 className="subtitle">A few cakes are free</h3>
        <CakeList />
        <InfoSection />
      </main>
    </>
  );
}

