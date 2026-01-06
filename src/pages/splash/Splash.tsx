import React, { useEffect, useState } from 'react';
import Landing from '../landing/Landing';
import './Splash.css';

const Splash: React.FC = () => {
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLanding(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (showLanding) {
    return <Landing />;
  }

  return (
    <div className="splash-container fixed inset-0 w-screen h-screen flex justify-center items-center">
      <div className="splash-title flex justify-center items-center text-white text-[200px] font-[800]">
        <span className="letter o inline-block">O</span>
        <span className="letter p inline-block">P</span>
        <span className="letter u inline-block">U</span>
        <span className="letter s inline-block">S</span>
      </div>
    </div>
  );
};

export default Splash;