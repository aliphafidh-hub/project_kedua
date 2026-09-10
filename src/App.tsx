import React from 'react';
import { UnderwaterBackground } from './components/UnderwaterBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { EducationExperience } from './components/EducationExperience';
import { TechStack } from './components/TechStack';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Dynamic Underwater Canvas & Ambiance */}
      <UnderwaterBackground />

      {/* Floating Modern Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          onExplorePortfolio={scrollToPortfolio}
          onContactClick={scrollToContact}
        />
        <About onContactClick={scrollToContact} />
        <Stats />
        <EducationExperience />
        <TechStack />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
