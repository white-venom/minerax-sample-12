import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import ImpactStats from './components/ImpactStats';
import VideoSection from './components/VideoSection';
import CastingSlideshow from './components/CastingSlideshow';
import AlloySpecCalculator from './components/AlloySpecCalculator';
import CastingCollage from './components/CastingCollage';
import { Facilities } from './components/Facilities';
import { Capabilities } from './components/Capabilities';
import GlobalMap from './components/GlobalMap';
import Certifications from './components/Certifications';
import { Contact } from './components/Contact';
import Footer from './components/Footer';
import RfqModal from './components/RfqModal';

export default function App() {
  const [isRfqOpen, setIsRfqOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-500 selection:text-slate-900">
      <Header onOpenRfq={() => setIsRfqOpen(true)} />
      
      <main>
        <HeroSlider />
        <ImpactStats />
        <VideoSection />
        <CastingSlideshow />
        <AlloySpecCalculator onOpenRfq={() => setIsRfqOpen(true)} />
        <CastingCollage />
        <Facilities />
        <Capabilities />
        <GlobalMap />
        <Certifications />
        <Contact />
      </main>

      <Footer />

      <RfqModal isOpen={isRfqOpen} onClose={() => setIsRfqOpen(false)} />
    </div>
  );
}
