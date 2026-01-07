import React from 'react';
import Navbar from '../../components/landing/Navbar';
import Hero from '../../components/landing/Hero';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Landing;