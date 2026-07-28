import React from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import VideoSection from './components/VideoSection';
import CastingSlideshow from './components/CastingSlideshow';
import CastingCollage from './components/CastingCollage';
import { Facilities } from './components/Facilities';
import { Capabilities } from './components/Capabilities';
import GlobalMap from './components/GlobalMap';
import Certifications from './components/Certifications';
import { Contact } from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-amber-500 selection:text-slate-900">
      <Header />
      
      <main>
        <HeroSlider />
        <VideoSection />
        <CastingSlideshow />
        <CastingCollage />
        <Facilities />
        <Capabilities />
        <GlobalMap />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
