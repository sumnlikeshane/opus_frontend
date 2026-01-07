import React from "react";
import RotatingOrbit from "./RotatingOrbit";
import OrbitCard from "./OrbitCard";

const orbit1 = "/assets/images/orbit1.png";
const orbit2 = "/assets/images/orbit2.png";
const orbit3 = "/assets/images/orbit3.png";
const orbit4 = "/assets/images/orbit4.png";
const orbit5 = "/assets/images/orbit5.png";
const orbit6 = "/assets/images/orbit6.png";

const Hero: React.FC = () => {
  const orbitItems = [
  {
    id: "1",
    content: (
      <OrbitCard
        title="Student Career Hub"
        image={orbit1}
      />
    ),
  },
  {
    id: "2",
    content: (
      <OrbitCard
        title="College Oversight"
        image={orbit2}
      />
    ),
  },
  {
    id: "3",
    content: (
      <OrbitCard
        title="Recruiter Workspace"
        image={orbit3}
      />
    ),
  },
  {
    id: "4",
    content: (
      <OrbitCard
        title="AI Resume Screening"
        image={orbit4}
      />
    ),
  },
  {
    id: "5",
    content: (
      <OrbitCard
        title="Compatibility Matching"
        image={orbit5}
      />
    ),
  },
  {
    id: "6",
    content: (
      <OrbitCard
        title="Placement Governance"
        image={orbit6}
      />
    ),
  },
];


  return (
    <section className=" pt-50 flex flex-col items-center text-center">
      
      {/* Heading */}
      <h1
        className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight"
        style={{ fontFamily: '"Boldonse", system-ui' }}
      >
        OPUS PLACEMENT PLATFORM
      </h1>

      {/* Subheading */}
      <p className="mt-6 max-w-3xl text-gray-400 text-base md:text-lg leading-relaxed">
        A unified placement ecosystem built to seamlessly connect students, recruiters,
        and institutions — streamlining hiring, placements, and outcomes at scale.
      </p>

      {/* Rotating Orbit */}
      <RotatingOrbit items={orbitItems} />

    </section>
  );
};

export default Hero;
