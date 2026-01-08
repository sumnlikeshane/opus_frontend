import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white px-8 pt-16 pb-12 overflow-hidden">
      {/* subtle grain / depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_55%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* MAIN LAYOUT: TITLE LEFT, CONTENT RIGHT */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* LEFT: BIG WORDMARK */}
          <div className="flex-shrink-0">
            <h1
              className="
                text-[clamp(3rem,12vw,8rem)]
                font-semibold
                tracking-tight
                leading-none
                text-white
                select-none
              "
              style={{ fontFamily: '"Boldonse", system-ui' }}
            >
              OPUS
            </h1>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex-1">
            {/* DIVIDER */}
            <div className="mb-6 h-px bg-white/10 md:hidden" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* LEFT COLUMN */}
              <div className="space-y-4">
                <p className="text-white/60 max-w-sm">
                  Opus is a placement platform built for students, recruiters,
                  and colleges — focused on relevance, clarity, and outcomes.
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <a className="hover:text-white/80 transition" href="#">
                    <Linkedin size={20} />
                  </a>
                  <a className="hover:text-white/80 transition" href="#">
                    <Twitter size={20} />
                  </a>
                  <a className="hover:text-white/80 transition" href="#">
                    <Github size={20} />
                  </a>
                  <a className="hover:text-white/80 transition" href="#">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              {/* CENTER COLUMN */}
              <div className="space-y-3">
                <p className="uppercase tracking-widest text-xs text-white/40">
                  Platform
                </p>
                {[
                  "For Students",
                  "For Recruiters",
                  "For Colleges",
                  "Pricing",
                  "Security",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-3">
                <p className="uppercase tracking-widest text-xs text-white/40">
                  Company
                </p>
                {[
                  "About",
                  "Careers",
                  "Contact",
                  "Privacy Policy",
                  "Terms of Service",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="flex items-center gap-2 text-white/70 hover:text-white transition"
                  >
                    {item}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <span>© {new Date().getFullYear()} Opus</span>
          <span>Built with precision.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
