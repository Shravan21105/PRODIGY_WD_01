import React from 'react';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import FeatureSection from './Components/FeatureSection';
import Workflow from './Components/Workflow';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <section id="hero">
          <HeroSection />
        </section>
        <section id="features">
          <FeatureSection />
        </section>
        <section id="workflow">
          <Workflow />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
