import React from 'react';

// --- Icon Helpers (Pure inline SVG format for dependency-free rendering) ---
const CheckIcon = ({ className = "w-4 h-4 text-sky-500" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CrossIcon = ({ className = "w-4 h-4 text-slate-300" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const PricingAndFooterSection = () => {
  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col justify-between min-h-screen">
      
      {/* The Wave Graphic Divider Context Matrix
        Ensures perfect rendering transition from White to Deep Corporate Blue 
      */}
      <div className="absolute inset-x-0 bottom-0 top-[35%] lg:top-[40%] bg-[#1E3A8A] z-0 pointer-events-none">
        <svg 
          className="absolute left-0 right-0 top-0 w-full transform -translate-y-[99%] text-[#1E3A8A] fill-current" 
          viewBox="0 0 1440 74" 
          preserveAspectRatio="none"
        >
          <path d="M0,32 C240,74 480,74 720,32 C960,-10 1200,-10 1440,32 L1440,74 L0,74 Z" />
        </svg>
      </div>

      {/* --- Main Pricing Segment --- */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-8 pt-12 pb-24 flex-1">
        
        {/* A. Header Context Block */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#0F172A] tracking-tight mb-16 select-none">
          Help Is One Click Away
        </h2>

        {/* B & C. Adaptive Dual Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch w-full">
          
          {/* LEFT CARD: Free / Basic Option */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 items-start shadow-xl border-2 border-transparent transition-transform duration-300 hover:scale-[1.01]">
            
            {/* Left Block Header inside Card */}
            <div className="bg-[#F0F7FF] rounded-2xl p-6 w-full md:w-40 lg:w-full xl:w-40 flex flex-col items-center justify-center flex-shrink-0 select-none">
              <span className="text-2xl font-black text-sky-500 tracking-tight">Free</span>
              <span className="text-xs font-bold text-slate-400 mt-0.5 uppercase tracking-wider">Basic</span>
            </div>

            {/* Right Block Checklist content stack */}
            <div className="flex-1 flex flex-col gap-6 w-full h-full justify-between">
              <div className="flex flex-col gap-3.5 pt-1">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span>1 Active Job</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon />
                  </div>
                  <span>Basic List Placement</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                  <div className="w-5 h-5 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CrossIcon />
                  </div>
                  <span className="line-through decoration-slate-200">Unlimited Job Applicants</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-400">
                  <div className="w-5 h-5 bg-slate-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CrossIcon />
                  </div>
                  <span className="line-through decoration-slate-200">Invite Anyone to Apply</span>
                </div>
              </div>

              {/* Card CTA */}
              <button className="w-full border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-slate-50 font-extrabold text-sm py-3.5 text-center rounded-xl transition-all active:scale-[0.99] mt-6 md:mt-0">
                Get Started
              </button>
            </div>
          </div>

          {/* RIGHT CARD: Premium Option (Featured Option with Pink Boundary Line) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row lg:flex-col xl:flex-row gap-6 items-start shadow-2xl border-2 border-pink-500 relative overflow-visible transition-transform duration-300 hover:scale-[1.01]">
            
            {/* Float Premium Accent Tag */}
            <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#E0F2FE] text-[#0369A1] font-extrabold text-[10px] tracking-wider uppercase px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              Premium
            </div>

            {/* Left Block Pricing Header */}
            <div className="bg-slate-50 rounded-2xl p-6 w-full md:w-40 lg:w-full xl:w-40 flex flex-col items-center justify-center flex-shrink-0 pt-7 select-none">
              <span className="text-2xl font-black text-[#1E3A8A] tracking-tight">$79.99</span>
              <span className="text-[10px] font-bold text-slate-400 mt-0.5 uppercase tracking-wider">Per Month</span>
            </div>

            {/* Right Block Checklist stack */}
            <div className="flex-1 flex flex-col gap-6 w-full h-full justify-between">
              <div className="flex flex-col gap-3.5 pt-1">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>Unlimited Job Posts</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>Instant Job Post Approval</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>Premium List Placement</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 bg-sky-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckIcon className="w-4 h-4 text-sky-600" />
                  </div>
                  <span>Unlimited Job Applicants</span>
                </div>
              </div>

              {/* Card CTA with high-contrast background drop design */}
              <button className="w-full bg-gradient-to-b from-blue-600 to-[#1E3A8A] hover:from-blue-700 hover:to-blue-900 text-white font-extrabold text-sm py-4 text-center rounded-xl shadow-md shadow-blue-900/20 transition-all active:scale-[0.99] mt-6 md:mt-0">
                Get Started
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* --- D. Corporate Brand Footer Hub --- */}
      <footer className="relative z-10 w-full bg-[#1E3A8A] pt-8 pb-12 border-t border-white/10">
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 flex flex-col gap-10">
          
          {/* Left/Right Horizontal Information Row Split */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Monogram branding typography */}
            <div className="flex items-center gap-2 select-none">
              <span className="text-white font-black text-xl tracking-tight">Remote</span>
              <span className="text-cyan-400 font-black text-xl tracking-tight">Recruit</span>
            </div>

            {/* Social Asset Grid Track */}
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              {['facebook', 'instagram', 'x-twitter', 'twitter', 'linkedin', 'snapchat'].map((network) => (
                <a 
                  key={network}
                  href={`#${network}`}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white/90 flex items-center justify-center transition-all duration-200 active:scale-95"
                  aria-label={`Follow RemoteRecruit on ${network}`}
                >
                  {/* Simplistic dynamic glyph generation box fallback */}
                  <span className="text-[10px] font-black uppercase tracking-tighter scale-90 opacity-75">
                    {network.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Symmetrical centerline layout decorative matrix mark */}
          <div className="w-full flex justify-center pt-2 select-none pointer-events-none">
            <div className="flex items-center gap-1 opacity-25">
              <div className="w-4 h-4 rounded bg-cyan-400 rotate-45" />
              <div className="w-4 h-4 rounded bg-white -ml-2 -mt-2" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default PricingAndFooterSection;