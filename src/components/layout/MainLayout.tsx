import { useState } from "react";
import RemoteLogo from "../../assets/images/RemoteLogo.png";
import HeroSection from "../HeroSection";
import FeaturesSection from "../FeatureSection";
import ShowcaseTalentsSection from "../ShowcaseTalentsSection";
import CallToActionSection from "../CallToActionSection";
import CommonQuestions from "../CommonQuestions";
import  { PricingAndFooterSection } from "../PricingAndFooterSection";

const MainLayout = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          minHeight: "520px",
          background:
            "linear-gradient(135deg, #1a3a6e 0%, #214889 35%, #2d5fa8 65%, #3567A5 100%)",
        }}
      >
        {/* Navigation */}
        <nav className="relative z-10 flex flex-row items-center justify-between px-8 pt-5 pb-2 w-full">
          {/* Logo */}
          {/* <div className="flex flex-col leading-tight select-none">
            <span
              className="font-extrabold text-xl tracking-wide"
              style={{
                color: "#4dc8f0",
                fontFamily: "'Nunito Sans', 'Inter', sans-serif",
              }}
            >
              Remote
            </span>
            <span
              className="font-extrabold text-xl tracking-wide"
              style={{
                color: "#ffffff",
                fontFamily: "'Nunito Sans', 'Inter', sans-serif",
              }}
            >
              Recruit
            </span>
          </div> */}
          <div>
            <img
              src={RemoteLogo}
              alt="RemoteRecruit Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex items-center gap-5">
            <button
              className="text-white text-sm font-medium hover:text-cyan-200 transition-colors bg-transparent border-none cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sign In
            </button>
            <button
              className="text-white text-sm font-semibold px-5 py-2 cursor-pointer transition-all hover:opacity-90 active:scale-95"
              style={{
                background: "rgba(77,200,240,0.75)",
                border: "none",
                borderRadius: "20px",
                fontFamily: "'Inter', sans-serif",
                backdropFilter: "blur(4px)",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="sm:hidden text-white bg-transparent border-none cursor-pointer text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden absolute top-16 right-4 z-20 bg-blue-900 rounded-xl shadow-lg p-5 flex flex-col gap-4 min-w-40">
            <button className="text-white text-sm font-medium bg-transparent border-none cursor-pointer text-left">
              Sign In
            </button>
            <button
              className="text-white text-sm font-semibold px-5 py-2 cursor-pointer rounded-full"
              style={{ background: "rgba(77,200,240,0.85)" }}
            >
              Sign Up
            </button>
          </div>
        )}
        {/* Hero Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-4"
          style={{ marginTop: "80px", paddingBottom: "120px" }}
        >
          <h1
            className="font-extrabold text-white leading-tight"
            style={{
              fontFamily: "'Poppins', 'Nunito Sans', 'Inter', sans-serif",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 800,
              letterSpacing: "-0.5px",
              maxWidth: "900px",
              marginBottom: "28px",
            }}
          >
            RemoteRecruit's Difference
          </h1>

          <p
            className="leading-relaxed text-center"
            style={{
              fontFamily: "'Inter', 'Nunito Sans', sans-serif",
              fontSize: "clamp(16px, 2vw, 19px)",
              fontWeight: 400,
              color: "rgba(190, 220, 255, 0.92)",
              maxWidth: "700px",
              lineHeight: 1.7,
            }}
          >
            RemoteRecruit is connecting the world with an easy-to-use platform
            that lets full-time, part-time, and freelance workers showcase their
            talents to businesses that need them. With no paywalls, no fees, and
            no barriers, there's nothing but you, your talents, and the next
            step in your career.
          </p>
        </div>
        
        {/* Wave SVG at the bottom of the hero section */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ lineHeight: 0 }}
        >
          {/* SVG Wave */}
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: "block", width: "100%", height: "160px" }}
          >
            <path
              d="M0,140 C200,140 280,60 520,80 C700,95 820,30 1100,15 C1260,7 1360,5 1440,3 L1440,160 L0,160 Z"
              fill="white"
            />
            {/* Subtle secondary wave for depth */}
            <path
              d="M0,155 C300,130 600,100 900,85 C1100,75 1300,70 1440,68 L1440,160 L0,160 Z"
              fill="rgba(255,255,255,0.35)"
            />
          </svg>
        </div>
      </div>

      {/* Google Fonts import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@700;800&family=Nunito+Sans:wght@400;600;700;800&display=swap');
      `}</style>

      <HeroSection />
      <FeaturesSection />
      <ShowcaseTalentsSection />
      <CallToActionSection />
      <CommonQuestions />
      <PricingAndFooterSection />
    </div>
  );
};

export default MainLayout;
