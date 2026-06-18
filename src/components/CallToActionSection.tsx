import React from 'react';

// --- Sub-components ---

/**
 * MockDashboardWindow
 * Rebuilds the desktop product workspace using pure semantic HTML and Tailwind.
 */
const MockDashboardWindow = () => {
  const filterOptions = [
    { label: 'Full Time', checked: false },
    { label: 'Part Time', checked: true },
    { label: 'Hourly', checked: false },
    { label: 'Fixed Rate', checked: true },
    { label: 'Worldwide', checked: false },
  ];

  return (
    <div className="w-full bg-slate-50 rounded-2xl md:rounded-[24px] border-2 border-purple-500/80 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden flex h-[360px] md:h-[440px] text-slate-800 select-none">
      {/* Left Sidebar Navigation Grid */}
      <div className="w-20 md:w-44 bg-[#0F172A] p-3 md:p-4 flex flex-col gap-6 flex-shrink-0">
        <div className="flex items-center gap-2 px-1">
          <div className="w-6 h-6 rounded bg-sky-400 flex items-center justify-center text-white font-black text-xs">
            R
          </div>
          <span className="hidden md:inline text-white font-extrabold text-xs tracking-tight">
            RemoteRecruit
          </span>
        </div>

        {/* Navigation Items */}
        <div className="flex flex-col gap-1">
          <div className="bg-sky-500/10 text-sky-400 rounded-lg p-2 flex items-center gap-2 text-xs font-bold cursor-pointer">
            <div className="w-3 h-3 bg-sky-400 rounded-sm" />
            <span className="hidden md:inline">Find Work</span>
          </div>
          <div className="text-slate-400 hover:text-white rounded-lg p-2 flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors">
            <div className="w-3 h-3 bg-slate-600 rounded-sm" />
            <span className="hidden md:inline">Your Jobs</span>
            <span className="hidden md:inline-flex ml-auto bg-sky-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
              4
            </span>
          </div>
          <div className="text-slate-400 hover:text-white rounded-lg p-2 flex items-center gap-2 text-xs font-medium cursor-pointer transition-colors">
            <div className="w-3 h-3 bg-slate-600 rounded-sm" />
            <span className="hidden md:inline">Settings</span>
          </div>
        </div>
      </div>

      {/* Main Panel Hub */}
      <div className="flex-1 flex overflow-hidden">
        {/* Central Feed Feed Layout */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Welcome Max</span>
            <h4 className="text-base font-extrabold text-[#0F172A]">Let's Find Work</h4>
          </div>

          {/* Search Controls Mockup */}
          <div className="flex gap-2">
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-1.5 px-3 flex items-center gap-2 text-[11px] text-slate-400">
              <span>Most Recent Jobs</span>
            </div>
            <div className="w-24 bg-white border border-slate-200 rounded-lg p-1.5 px-3 flex items-center gap-2 text-[11px] text-slate-400">
              <span>Search</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-1.5">
            {['UI/UX', 'Front End', 'Back End', 'Data Science', 'Sales'].map((tag, idx) => (
              <span 
                key={tag} 
                className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                  idx === 0 ? 'bg-[#0F172A] text-white' : 'bg-white border border-slate-200 text-slate-500'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Core Mock Listing Card */}
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-xs flex flex-col gap-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-slate-100 rounded border border-slate-200 flex items-center justify-center text-[10px] font-bold">B</div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] font-bold text-slate-800">Banjie</span>
                  <span className="text-[8px] bg-sky-50 text-sky-600 px-1.5 py-0.2 rounded font-extrabold uppercase tracking-tight">Hourly</span>
                </div>
                <span className="text-[8px] text-slate-400">Full Time • 3 Months • English</span>
              </div>
            </div>
            <h5 className="text-xs font-extrabold text-slate-900 leading-tight">
              Senior UI/UX Designer needed for ongoing support
            </h5>
            <div className="w-full h-2 bg-slate-100 rounded-full" />
            <div className="w-4/5 h-2 bg-slate-100 rounded-full" />
          </div>
        </div>

        {/* Right Filter Panel Sub-layout */}
        <div className="w-32 border-l border-slate-200/60 bg-white p-3 hidden sm:flex flex-col gap-3">
          <span className="text-[10px] font-extrabold text-slate-800 tracking-wider uppercase">Filter</span>
          <div className="flex flex-col gap-2">
            {filterOptions.map((opt) => (
              <label key={opt.label} className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={opt.checked} 
                  readOnly
                  className="w-3 h-3 rounded text-sky-500 border-slate-300 focus:ring-0 accent-sky-500" 
                />
                <span className="text-[10px] font-semibold text-slate-600">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Feature Component ---

export const CallToActionSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden flex items-center justify-center py-16 lg:py-24">
      {/* Background Soft Mesh Ambient Layer */}
      <div className="absolute -right-20 top-0 w-[450px] h-[450px] rounded-full bg-purple-200/30 blur-3xl pointer-events-none -z-10" />
      
      {/* Floating Graphic Props */}
      <div className="absolute top-4 left-[20%] w-8 h-8 rounded-full bg-gradient-to-br from-amber-300 to-yellow-500 shadow-lg shadow-yellow-200/50 hidden lg:block z-0 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-6 right-[42%] w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md hidden lg:block z-0" />

      {/* Primary Adaptive Matrix Split Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:grid lg:grid-cols-12 gap-16 lg:gap-16 items-center z-10">
        
        {/* Left Grid Side: Reconstructed Functional Application Dashboard Mockup */}
        <div className="w-full lg:col-span-7 flex justify-center items-center">
          <div className="w-full max-w-[560px] lg:max-w-none">
            <MockDashboardWindow />
          </div>
        </div>

        {/* Right Grid Side: Dynamic Text Conversion Callout Hub */}
        <div className="w-full lg:col-span-5 flex flex-col items-start text-left lg:pl-4">
          
          {/* Overline Indicator */}
          <span className="text-base font-bold text-blue-700 tracking-tight mb-3 block">
            Are you ready?
          </span>

          {/* Heading with safe, inline cursor mock overlay wrapper to avoid layout reflows */}
          <h2 className="text-4xl sm:text-5xl lg:text-[46px] xl:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.15] mb-6 max-w-md relative">
            Help is only a few {' '}
            <span className="relative inline-block text-slate-900 whitespace-nowrap">
              clicks
              {/* Presence Cursor Active Pill Element */}
              <span className="absolute left-[80%] top-[60%] flex items-start z-30 pointer-events-none select-none scale-90 sm:scale-100">
                {/* SVG Vector Cursor Pointer */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-purple-600 drop-shadow-sm flex-shrink-0" fill="currentColor">
                  <path d="M4.3 2.1c-.2-.1-.5 0-.6.2-.1.1-.1.2-.1.3v17.7c0 .4.3.6.7.6.1 0 .3-.1.4-.2l4.8-4.8h6.8c.4 0 .7-.3.7-.7 0-.2-.1-.3-.2-.4L4.8 2.3c-.1-.1-.3-.2-.5-.2z" />
                </svg>
              </span>
            </span>
            {' '} away!
          </h2>

          {/* Subtext Paragraph */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-sm mb-8 font-medium">
            Click Below to get set up super quickly and find help now!
          </p>

          {/* Primary Action Button Capsule */}
          <button 
            className="
              inline-flex items-center gap-3.5 bg-[#E6F4FE] hover:bg-[#D4EDFE] text-[#0284C7] 
              font-extrabold py-3.5 px-7 rounded-full border border-sky-100 shadow-sm 
              group transition-all duration-300 ease-in-out hover:-translate-y-0.5 active:translate-y-0
            "
          >
            {/* Smooth vector wrapper icon */}
            <span className="w-6 h-6 bg-cyan-400 text-white rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shadow-xs">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-3.5 h-3.5" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
            <span className="text-sm tracking-tight">Get Started</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default CallToActionSection;