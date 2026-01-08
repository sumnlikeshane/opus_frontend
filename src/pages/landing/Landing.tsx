import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import VideoLauncher from "../../components/landing/VideoLauncher";
import InfoSection from "../../components/landing/InfoSection";
import Footer from "../../components/landing/Footer";
import PricingSection from "../../components/landing/PricingSection";


const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />

      <VideoLauncher />

      <InfoSection/>

      <PricingSection/>

      <Footer />
    </div>
  );
};

export default Landing;
