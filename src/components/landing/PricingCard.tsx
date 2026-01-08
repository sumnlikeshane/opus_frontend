import { Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";

interface PricingCardProps {
  title: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  secondaryCta?: string;
  highlight?: boolean;
}

const PricingCard = ({
  title,
  price,
  subtitle,
  description,
  features,
  cta,
  secondaryCta,
  highlight = false,
}: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isHighlighted = isHovered || highlight;
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300
        ${
          isHighlighted
            ? "border-white bg-white/5 shadow-[0_0_60px_rgba(255,255,255,0.08)]"
            : "border-white/10 bg-white/2"
        }`}
    >
      <div>
        {/* HEADER */}
        <h3 className="text-2xl font-semibold">{title}</h3>

        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="ml-2 text-white/50">{subtitle}</span>
        </div>

        <p className="mt-4 text-white/60">
          {description}
        </p>

        {/* FEATURES */}
        <ul className="mt-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-white/80 mt-0.5" />
              <span className="text-white/70">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-10">
        <button
          className={`w-full py-3 rounded-xl text-sm font-medium transition
            ${
              isHighlighted
                ? "bg-white text-black hover:bg-white/90"
                : "border border-white/20 hover:border-white/40"
            }`}
        >
          {cta}
        </button>

        {secondaryCta && (
          <button className="mt-4 w-full text-sm text-white/50 hover:text-white flex items-center justify-center gap-1">
            {secondaryCta}
            <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
