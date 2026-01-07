import React from "react";

interface OrbitCardProps {
  title: string;
  image: string;
}

const OrbitCard: React.FC<OrbitCardProps> = ({ title, image }) => {
  return (
    <div className="relative w-64 h-80 rounded-2xl overflow-hidden shadow-2xl">
      
      {/* Full Card Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Gradient Overlay - dark at bottom, transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Text Content - positioned at bottom in dark area */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white text-lg font-semibold">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-300">
          Learn more about {title.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default OrbitCard;
