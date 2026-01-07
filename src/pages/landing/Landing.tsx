import React from "react";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import VideoLauncher from "../../components/landing/VideoLauncher";

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <Hero />

      <VideoLauncher />
    </div>
  );
};

export default Landing;
