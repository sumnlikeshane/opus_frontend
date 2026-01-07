import { useState, useRef } from "react";

const VideoLauncher = () => {
  const [open, setOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const openVideo = () => {
    setOpen(true);
    setTimeout(() => videoRef.current?.play(), 100);
  };

  const closeVideo = () => {
    videoRef.current?.pause();
    setOpen(false);
  };

  return (
    <>
      {/* SECTION */}
      <section
        onClick={openVideo}
        className="relative h-screen w-full flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* subtle background depth (NOT a new color) */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

        {/* vertical guide line */}
        <div className="absolute inset-y-0 left-1/2 w-px bg-white/10" />

        {/* LEFT TEXT */}
        <h1 className="absolute left-[2%] text-[clamp(3rem,10vw,9rem)] 
        font-medium tracking-[0.06em] 
        text-white/50 
        drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] 
        select-none pointer-events-none">
        START
        </h1>

        {/* CENTER */}
        <div className="relative z-10 flex items-center justify-center">
          {/* SEGMENTED RING */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(8)].map((_, i) => (
              <span
                key={i}
                className="absolute w-[520px] h-[520px] rounded-full"
                style={{
                  transform: `rotate(${i * 45}deg)`,
                }}
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-6 bg-white/20 rounded-sm" />
              </span>
            ))}
          </div>

          {/* VIDEO CIRCLE */}
          <div className="relative w-[420px] h-[420px] rounded-full overflow-hidden">
            <video
              src="/assets/videos/opus-intro.mp4"
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT TEXT */}
        <h1 className="absolute right-[2%] text-[clamp(3rem,10vw,9rem)] 
        font-medium tracking-[0.06em] 
        text-white/50
        drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] 
        select-none pointer-events-none">
        VIDEO
        </h1>
      </section>

      {/* FULLSCREEN */}
      {open && (
        <div className="fixed inset-0 z-[999] bg-black flex items-center justify-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeVideo();
            }}
            className="absolute top-6 left-6 z-10 text-white/80 text-sm tracking-widest uppercase hover:text-white transition cursor-pointer"
          >
            ← Back
          </button>

          <video
            ref={videoRef}
            src="/assets/videos/opus-intro.mp4"
            controls
            autoPlay
            className="w-full h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default VideoLauncher;
