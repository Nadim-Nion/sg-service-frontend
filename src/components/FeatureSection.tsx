import React from 'react';

// --- Sub-components ---

/**
 * CheckIcon
 * Custom vector checkmark icon styled exactly to fit the primary brand blue layout.
 */
const CheckIcon = () => (
  <span className="flex-shrink-0 bg-[#0284C7] text-white rounded-full w-5 h-5 flex items-center justify-center p-1 shadow-sm">
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      className="w-3 h-3" 
      stroke="currentColor" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  </span>
);

/**
 * PayPalIcon
 * Rendered inline SVG simulating the signature PayPal corporate visual emblem.
 */
const PayPalIcon = () => (
  <div className="w-10 h-10 bg-[#EDF2FA] rounded-full flex items-center justify-center flex-shrink-0">
    <svg 
      viewBox="0 0 24 24" 
      className="w-5 h-5 text-[#003087]" 
      fill="currentColor"
    >
      <path d="M7 21h3c.5 0 .9-.3 1-.8l2.3-11.7c.1-.4-.2-.8-.6-.8H9.2c-.5 0-.9.3-1 .8L5.9 20.2c-.1.4.2.8.6.8z" />
      <path d="M11 17h2.6c.5 0 .9-.3 1-.8l1.8-9.2c.1-.4-.2-.8-.6-.8h-3.5c-.5 0-.9.3-1 .8L10.5 16.2c-.1.4.2.8.6.8z" opacity="0.6" />
    </svg>
  </div>
);

// --- Main Feature Component ---

export const FeaturesSection = () => {
  const premiumFeatures = [
    "Up to 25 active job posts",
    "Premium Placement & Visibility",
    "Messaging anyone, unlimited",
    "Unlimited invites",
    "View all applicants",
    "Unlimited invites to jobseekers"
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden flex items-center justify-center py-12 lg:py-24">
      {/* Container Context Boundary */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">
        
        {/* Left Column: Layered Interactive Graphic Mockup */}
        <div className="w-full max-w-[480px] lg:max-w-none mx-auto lg:col-span-6 flex justify-center items-center px-4 lg:px-0">
          
          {/* Sizing wrapper with padding to absorb the overflowing floating absolute badges gracefully */}
          <div className="relative w-full max-w-[360px] md:max-w-[390px] pt-6 pb-8 px-4">
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-1 -left-1 w-4 h-4 rounded-full bg-sky-400/80 animate-pulse z-0" />
            
            {/* The Base Premium Card Structure */}
            <div className="relative bg-white border border-slate-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] z-10 transition-all duration-300 hover:scale-[1.01]">
              
              {/* Header Context Layout */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Your Membership Tier
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#0284C7] mt-1">
                  Premium
                </h3>
              </div>

              {/* Dynamic Feature Checklist Layout */}
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-slate-400 block mb-4 uppercase">
                  Features
                </span>
                <ul className="flex flex-col gap-4">
                  {premiumFeatures.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-0.5">
                      <CheckIcon />
                      <span className="text-sm md:text-[15px] font-semibold text-slate-700 tracking-tight">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Floating Badge Overlay 1: Brand Orb Token */}
            <div 
              className="
                absolute -right-6 top-[22%] z-20 w-16 h-16 rounded-full 
                bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center 
                shadow-[0_12px_28px_-4px_rgba(2,132,199,0.5)] transition-transform duration-500 
                ease-in-out hover:rotate-12 cursor-pointer select-none
              "
            >
              {/* Brand "RR" Monogram Logo Mark */}
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                className="w-8 h-8 text-white" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M4 21V4a2 2 0 0 1 2-2h4a5 5 0 0 1 5 5v0a5 5 0 0 1-5 5H4" />
                <path d="M12 12c2 0 4 1 5 3s1 5 1 6" />
              </svg>
            </div>

            {/* Floating Badge Overlay 2: PayPal Billing Status */}
            <div 
              className="
                absolute -left-6 sm:-left-12 -bottom-2 z-20 bg-white border border-slate-100/80 
                rounded-full py-3.5 px-5 pr-8 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.12)] 
                flex items-center gap-3.5 whitespace-nowrap select-none max-w-[290px]
                transition-all duration-300 ease-in-out hover:-translate-y-0.5
              "
            >
              <PayPalIcon />
              <div className="flex flex-col">
                <span className="text-[9px] font-extrabold text-[#003087]/70 tracking-wider uppercase">
                  Upcoming Payment In...
                </span>
                <span className="text-[15px] font-black text-slate-900 tracking-tight mt-0.5">
                  14 Days - $79.99
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Direct Text Copy Block */}
        <div className="w-full flex flex-col items-start text-left lg:col-span-6 lg:pl-6">
          {/* Value Category Accent Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold bg-[#E6F6FF] text-[#0284C7] mb-6 tracking-wide uppercase">
            Actually Fee Free
          </div>

          {/* Core Feature Section Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15] mb-6">
            Fee-Free Forever
          </h2>

          {/* Contextual Narrative Paragraph */}
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
            We don’t charge you fees and we don’t put up paywalls. We’re the bridge 
            that connects job opportunities with the best candidates, with no 
            middleman involved.
          </p>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;