import React from 'react';

// --- Types & Interfaces ---
interface SkillTagProps {
  label: string;
}

interface FloatingFeedbackProps {
  avatarUrl: string;
  className?: string;
}

// --- Sub-components ---

/**
 * SkillTag
 * Render small, uniform metadata pills with clean geometric alignment.
 */
const SkillTag: React.FC<SkillTagProps> = ({ label }) => (
  <span className="bg-slate-50 border border-slate-100 text-slate-600 text-xs px-3.5 py-1.5 rounded-xl font-bold transition-colors duration-200 hover:bg-slate-100/80 cursor-default">
    {label}
  </span>
);

/**
 * FloatingFeedbackCard
 * Layered client review widget featuring deep atmospheric text styling and exact avatar borders.
 */
const FloatingFeedbackCard: React.FC<FloatingFeedbackProps> = ({ avatarUrl, className = '' }) => {
  return (
    <div 
      className={`
        absolute z-20 bg-white border border-slate-50 rounded-full p-3 pr-8 
        shadow-[0_20px_40px_-5px_rgba(15,23,42,0.12),0_8px_16px_-4px_rgba(15,23,42,0.04)]
        flex items-center gap-3 select-none whitespace-nowrap
        transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl
        ${className}
      `}
    >
      <img 
        src={avatarUrl} 
        alt="Client Avatar" 
        className="w-10 h-10 rounded-full object-cover ring-4 ring-[#FBBF24]" 
      />
      <div className="flex flex-col text-left">
        <span className="text-[10px] font-extrabold text-slate-400 tracking-wide uppercase">
          Past Client Feedback
        </span>
        <span className="text-sm font-extrabold text-[#0F172A] mt-0.5">
          Best Developer Ever!
        </span>
      </div>
    </div>
  );
};

// --- Main Showcase Feature Component ---

export const ShowcaseTalentsSection: React.FC = () => {
  // Safe premium asset representations for avatars
  const dylanAvatar = "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80";
  const clientAvatar = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80";

  const skillList = ["Python Dev", "Javascript", "Front End", "Back End", "iOS Development", "+12"];

  return (
    <section className="relative w-full bg-white overflow-hidden flex items-center justify-center py-16 lg:py-24">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Side: Brand Narrative Copy Block */}
        <div className="flex flex-col items-start text-left lg:col-span-5">
          {/* Section Category Overline */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#E6F6FF] text-[#0284C7] mb-6 tracking-wide uppercase">
            Custom Profile
          </div>

          {/* Primary Proposition Heading */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] mb-6">
            Showcase Your Talents
          </h2>

          {/* Contextual Body Paragraph */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
            Personalize your profile with everything that makes you unique. Add an 
            introductory video and other media for a personal touch that stands out to 
            employers and candidates.
          </p>
        </div>

        {/* Right Side: Multi-Depth Layered Card Graphic Mockup */}
        <div className="relative w-full max-w-[500px] lg:max-w-none mx-auto lg:col-span-7 flex justify-center items-center px-4 lg:px-6">
          
          {/* Spatial Anchor Canvas Container */}
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] pt-8 pb-10">
            
            {/* Background Ambient Circle Asset */}
            <div className="absolute top-2 -left-3 w-5 h-5 rounded-full bg-[#0284C7]/90 animate-pulse z-0" />
            
            {/* Base Card Document Box */}
            <div className="relative bg-white border border-slate-100 rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.08)] z-10 w-full">
              
              {/* Profile Top Banner Canvas */}
              <div className="bg-[#1D2433] p-5 pb-8 relative text-white flex flex-col justify-between overflow-hidden h-[150px]">
                
                {/* Embedded Geometric Abstract Art Ornament */}
                <div className="absolute right-[-20px] top-[-10px] w-36 h-36 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/40 blur-md pointer-events-none" />

                {/* Top Statistics Indicator Row */}
                <div className="flex justify-between items-center z-10">
                  <span className="text-[10px] font-bold text-slate-300 tracking-wide uppercase">
                    102 Jobs Completed!
                  </span>
                  <div className="w-4 h-4 rounded-full border border-slate-400/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                </div>

                {/* Identity Frame Wrapper */}
                <div className="flex items-center gap-3.5 mt-auto z-10">
                  <img 
                    src={dylanAvatar} 
                    alt="Dylan" 
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-orange-400" 
                  />
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg font-bold tracking-tight">Dylan</span>
                    {/* Inline Checked Verified Micro-badge */}
                    <span className="bg-emerald-500 text-white rounded-full p-0.5 flex items-center justify-center w-4 h-4 shadow-sm">
                      <svg viewBox="0 0 24 24" fill="none" className="w-2.5 h-2.5" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                  </div>
                  <button className="ml-auto text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30 rounded-lg px-2.5 py-1 backdrop-blur-xs transition-colors hover:bg-sky-500/30">
                    Details
                  </button>
                </div>
              </div>

              {/* Floating Dynamic Video Play Bar Controls */}
              <div className="absolute left-6 top-[132px] z-20 backdrop-blur-md bg-white/90 border border-slate-100/60 rounded-xl p-2 px-3.5 shadow-md flex items-center gap-2.5 select-none transition-transform duration-300 hover:scale-[1.02]">
                <span className="w-5 h-5 bg-[#0284C7] rounded-full flex items-center justify-center shadow-sm text-white cursor-pointer">
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current ml-0.5">
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </span>
                <span className="text-[10px] font-extrabold text-slate-700 tracking-tight">
                  Intro Video
                </span>
              </div>

              {/* Profile Midsection Text Grid Details */}
              <div className="p-6 pt-10 grid grid-cols-12 gap-4 border-b border-slate-50">
                <div className="col-span-4 flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">About Dylan</span>
                  <div className="w-14 h-2.5 bg-slate-200 rounded mt-2" />
                  <div className="w-10 h-2 bg-slate-100 rounded mt-1.5" />
                </div>
                <div className="col-span-8 flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Dylan's Bio</span>
                  <p className="text-[11px] leading-relaxed text-slate-500 font-medium mt-1.5">
                    Hello, I'm Dylan, an enterprise developer with years of active experience coding robust data platforms...
                  </p>
                </div>
              </div>

              {/* Lower Section: Skills Grid Capsule Layout */}
              <div className="p-6 bg-white">
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, index) => (
                    <SkillTag key={index} label={skill} />
                  ))}
                </div>
              </div>

            </div>

            {/* Foreground Floating Badge Overlay 1: Left Aligned Reviews */}
            <FloatingFeedbackCard 
              avatarUrl={dylanAvatar} 
              className="-left-6 bottom-[26%] hidden sm:flex" 
            />
            
            {/* Fallback layout for tight narrow mobile viewports */}
            <FloatingFeedbackCard 
              avatarUrl={dylanAvatar} 
              className="-left-2 bottom-[26%] flex sm:hidden scale-90 origin-left" 
            />

            {/* Foreground Floating Badge Overlay 2: Right Aligned Profile Circular Frame */}
            <div 
              className="
                absolute -right-4 top-[35%] z-20 w-16 h-16 rounded-full 
                border-[5px] border-white bg-white overflow-hidden shadow-xl
                transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer
              "
            >
              <img 
                src={clientAvatar} 
                alt="Client Closeup" 
                className="w-full h-full object-cover" 
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ShowcaseTalentsSection;