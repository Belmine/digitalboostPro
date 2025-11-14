


"use client"
import React from 'react';
import Header from '@/componentstwo/Header'; // Ajoutez ce composant
import HeroSection from '@/componentstwo/HeroSection';
import AboutSection from '@/componentstwo/Apropos';
import Services from '@/componentstwo/Services';
import ProcessusSection from '@/componentstwo/ProcessusSection';
import TestimonialsSection from '@/componentstwo/Testimonials';
import Footer from '@/componentstwo/Footer';
import "../styles/globals.css"

const App = () => {
  return (
    <>
      
      <div id="hero">
        <HeroSection />
      </div>
      
      <div id="about">
        <AboutSection />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <div id="processus">
        <ProcessusSection />
      </div>
      
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      
      
    </>
  );
}

export default App;



























