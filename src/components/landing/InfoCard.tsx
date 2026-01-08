import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  image,
  imagePosition = "right",
}) => {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Image */}
      {image && isImageLeft && (
        <div className="w-full h-[400px] rounded-2xl bg-neutral-800 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
          {title}
        </h2>
        <p className="mt-4 text-neutral-400 max-w-md leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image */}
      {image && !isImageLeft && (
        <div className="w-full h-[400px] rounded-2xl bg-neutral-800 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default InfoCard;
