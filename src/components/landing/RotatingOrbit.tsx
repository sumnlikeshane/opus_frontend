import React, { useEffect, useRef, useState } from "react";

type OrbitItem = {
  id: string;
  content: React.ReactNode;
};

interface RotatingOrbitProps {
  items: OrbitItem[];
};


const OrbitPath: React.FC<{ radiusX: number }> = ({ radiusX }) => {
  const STEPS = 160;

  const HEIGHT = 220;
  const UPPER_COMPRESS = 0.65;
  const LOWER_STRETCH = 1.15;

  const points = Array.from({ length: STEPS + 1 }, (_, i) => {
    const t = (i / STEPS) * Math.PI; // TOP HALF ONLY

    const rawY = Math.sin(t);
    const y =
      rawY > 0
        ? rawY * HEIGHT * UPPER_COMPRESS
        : rawY * HEIGHT * LOWER_STRETCH;

    const x = Math.cos(t) * radiusX;

    return { x, y };
  });

  const pathD = points
    .map((p, i) => {
      const px = 50 + (p.x / radiusX) * 50;
      const py = 100 - (p.y / (HEIGHT * LOWER_STRETCH)) * 100;
      return `${i === 0 ? "M" : "L"} ${px} ${py}`;
    })
    .join(" ");

  return (
    <svg
      className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 z-0"
      width={radiusX * 2}
      height={260}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <path
        d={pathD}
        fill="none"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="0.8"
        strokeDasharray="2 6"
      />
    </svg>
  );
};

/* =======================
   ROTATING ORBIT
======================= */
const RotatingOrbit: React.FC<RotatingOrbitProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const phaseRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const lastInteractionRef = useRef(0);

  const widthRef = useRef(1200);
  const [radiusX, setRadiusX] = useState(600);

  // CONFIG
  const HEIGHT = 220;
  const SPEED = 0.00025;
  const IDLE_TIMEOUT = 100;

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) return;
      const w =
        containerRef.current.parentElement?.clientWidth ?? 1200;
      widthRef.current = w;
      setRadiusX(w / 3.2);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      if (!containerRef.current) return;

      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      const idle =
        Date.now() - lastInteractionRef.current > IDLE_TIMEOUT;

      if (!isDraggingRef.current && idle) {
        phaseRef.current += delta * SPEED;
      }

      const children = Array.from(
        containerRef.current.children
      ) as HTMLDivElement[];

      children.forEach((el, index) => {
        const t =
          phaseRef.current +
          (index / items.length) * Math.PI * 2;

        const rawY = Math.sin(t);
        const x = Math.cos(t) * radiusX;

        const y =
          rawY > 0
            ? rawY * HEIGHT * 0.65
            : rawY * HEIGHT * 1.15;

        const depth = Math.max(0, rawY);

        const scale =
          rawY >= 0 ? 0.9 + depth * 0.25 : 0.9;

        const opacity =
          rawY >= 0
            ? 0.4 + depth * 0.6
            : Math.max(0, 1 + rawY * 2.2) * 0.4;

        el.style.transform = `
          translate(-50%, 0)
          translate(${x}px, ${-y}px)
          scale(${scale})
        `;
        el.style.opacity = `${opacity}`;
        el.style.zIndex = `${Math.floor(depth * 100)}`;
      });

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [items.length, radiusX]);

  const onPointerDown = () => {
    isDraggingRef.current = true;
    lastInteractionRef.current = Date.now();
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    phaseRef.current -= e.movementX * 0.004;
    lastInteractionRef.current = Date.now();
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
    lastInteractionRef.current = Date.now();
  };

  return (
    <div className="relative w-full">
      <div
        className="relative mx-auto w-full h-[520px] overflow-hidden"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <OrbitPath radiusX={radiusX} />

        <div
          ref={containerRef}
          className="absolute left-1/2 bottom-0 z-10"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="absolute left-1/2 bottom-0 will-change-transform select-none"
            >
              {item.content}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute left-[-10vw] right-1/2 bottom-0 h-px bg-white/20 z-20" />
        <div className="pointer-events-none absolute left-1/2 right-[-10vw] bottom-0 h-px bg-white/20 z-20" />
      </div>
    </div>
  );
};

export default RotatingOrbit;
