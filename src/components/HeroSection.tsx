// --- Sub-components ---

/**
 * FloatingProfileCard
 * A high-fidelity card component representing a job candidate.
 * Features smooth lift animations on hover and exact brand ring colors around the avatar.
 */
const FloatingProfileCard = ({ role, name, avatarUrl, className = "" }: { role: string; name: string; avatarUrl: string; className?: string }) => {
  return (
    <div
      className={`
        flex items-center gap-4 bg-white p-4 pr-12 rounded-2xl md:rounded-3xl
        shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08),0_4px_12px_-2px_rgba(0,0,0,0.03)]
        border border-slate-100/50 backdrop-blur-md
        transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl
        select-none ${className}
      `}
    >
      <div className="relative flex-shrink-0">
        <img
          src={avatarUrl}
          alt={name}
          className="w-12 h-12 rounded-full object-cover ring-4 ring-[#FBBF24]"
        />
      </div>
      <div className="flex flex-col min-w-[140px]">
        <span className="text-xs font-bold text-[#0284C7] tracking-wide uppercase mb-0.5">
          {role}
        </span>
        <span className="text-base font-extrabold text-[#0F172A]">{name}</span>
      </div>
    </div>
  );
};

/**
 * AbstractedDashboardMockup
 * Recreates the underlying dashboard app container using pure Tailwind CSS utility layers.
 * Avoids rigid media assets to maintain vector-sharp visual scaling.
 */
const AbstractedDashboardMockup = () => {
  const dummyTags = ["UI/UX", "Front End", "Back End", "Data Science", "Sales"];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-[280px] md:h-[340px] opacity-95">
      {/* Top Application Bar */}
      <div className="border-b border-slate-100 px-4 py-3 flex items-center justify-between bg-slate-50/50">
        <div className="flex flex-col">
          <span className="text-[10px] text-slate-400 font-medium">
            Welcome Max
          </span>
          <span className="text-xs font-bold text-slate-800">
            Let's Find Work
          </span>
        </div>
        <div className="w-24 h-5 bg-slate-200/60 rounded-md" />
      </div>

      {/* Main Inner Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Mini Sidebar */}
        <div className="w-12 border-r border-slate-100 p-2 flex flex-col gap-2 bg-slate-50/30">
          <div className="w-full h-8 bg-blue-500/10 rounded-lg" />
          <div className="w-full h-8 bg-slate-100 rounded-lg" />
        </div>

        {/* Dynamic Context Canvas */}
        <div className="flex-1 p-4 flex flex-col gap-3">
          {/* Internal Input Layouts */}
          <div className="flex gap-2">
            <div className="w-1/3 h-6 bg-slate-100 rounded-md" />
            <div className="w-2/3 h-6 bg-slate-100 rounded-md" />
          </div>

          {/* Tag Chips */}
          <div className="flex gap-1.5 flex-wrap">
            {dummyTags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-[9px] px-2 py-0.5 rounded font-medium ${idx === 0 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Mock Feed Cards */}
          <div className="border border-slate-100 rounded-xl p-3 flex flex-col gap-2 mt-1 bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-16 h-3 bg-slate-200 rounded" />
              <div className="w-8 h-3 bg-blue-100 rounded" />
            </div>
            <div className="w-32 h-4 bg-slate-800 rounded-md" />
            <div className="w-full h-2 bg-slate-100 rounded" />
            <div className="w-5/6 h-2 bg-slate-100 rounded" />
          </div>
        </div>

        {/* Right Filter Sidebar Mock */}
        <div className="w-24 border-l border-slate-100 p-3 flex flex-col gap-3 bg-slate-50/20">
          <div className="w-10 h-3 bg-slate-300 rounded" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 border border-slate-300 rounded-sm bg-white" />
              <div className="w-12 h-2 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main Feature Hero Component ---

export const HeroSection = () => {
  // Mock image placeholders utilizing standard creative assets
  const gruAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80";
  const melAvatar =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80";

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center">
      {/* Core Adaptive Matrix Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        {/* Left Frame: Message Delivery & Branding */}
        <div className="flex flex-col items-start text-left lg:col-span-6 xl:col-span-5">
          {/* Global Category Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#E6F6FF] text-[#0284C7] mb-6 tracking-wide uppercase">
            Global Reach
          </div>

          {/* Main Direct Pitch Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-extrabold tracking-tight text-[#0F172A] leading-[1.12] mb-6">
            The First Fully Global Job Board, Anywhere, Ever
          </h1>

          {/* Informational Subtext */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
            RemoteRecruit connects candidates with opportunities around the
            world. With today's remote-first workforce, you need to be able to
            find the best jobs and the best people for them, wherever they may
            be.
          </p>
        </div>

        {/* Right Frame: Interactive Abstract Visual Compositions */}
        <div className="relative w-full max-w-[580px] lg:max-w-none mx-auto lg:col-span-6 xl:col-span-7 flex justify-center items-center px-4">
          {/* Base Backdrop Canvas Engine Wrapper */}
          <div className="relative w-full lg:w-[90%] xl:w-[85%] pr-8 pb-12 pt-6">
            {/* Soft Ambient Decorative Orbs */}
            <div className="absolute -top-8 -left-8 w-6 h-6 rounded-full bg-sky-400/60 blur-xs animate-pulse" />

            {/* The Integrated Dynamic Dashboard Mockup */}
            <div className="relative z-10 transform -rotate-1 shadow-[0_20px_50px_rgba(15,23,42,0.08)] rounded-2xl">
              <AbstractedDashboardMockup />
            </div>

            {/* Foreground Floating Elements Layer */}

            {/* Candidate Card 1: Felonious Gru */}
            <FloatingProfileCard
              role="Python Developer"
              name="Felonious Gru"
              avatarUrl={gruAvatar}
              className="absolute top-[35%] -left-4 sm:-left-8 z-30 transform scale-95 md:scale-100"
            />

            {/* Candidate Card 2: Mel Muselphiem */}
            <FloatingProfileCard
              role="Front End Wizard"
              name="Mel Muselphiem"
              avatarUrl={melAvatar}
              className="absolute bottom-2 right-4 sm:right-0 z-30 transform scale-95 md:scale-100"
            />

            {/* Floating Brand Orb Token */}
            <div
              className="
                absolute top-[22%] -right-3 md:-right-6 z-20 w-14 h-14 md:w-16 md:h-16 rounded-full 
                bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center 
                shadow-[0_8px_24px_rgba(2,132,199,0.4)] transition-transform duration-500 ease-in-out 
                hover:rotate-12 cursor-pointer select-none
              "
            >
              {/* Corporate "RR" Monogram Logo Mark */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-7 h-7 md:w-8 md:h-8 text-white"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 21V4a2 2 0 0 1 2-2h4a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H4" />
                <path d="M12 12c2 0 4 1 5 3s1 5 1 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
