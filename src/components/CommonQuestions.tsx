import React from 'react';

// --- Types & Interfaces (If using TypeScript, otherwise safe as standard JS props) ---
interface FAQItemProps {
  question: string;
  answer: string;
}

// --- Sub-components ---

/**
 * FAQRow
 * Renders an unbordered, typographically optimized question and answer block.
 */
const FAQRow: React.FC<FAQItemProps> = ({ question, answer }) => (
  <div className="flex flex-col items-start w-full group">
    <h3 className="text-base md:text-lg font-bold text-[#0F172A] mb-2.5 tracking-tight group-hover:text-slate-800 transition-colors duration-200">
      {question}
    </h3>
    <p className="text-sm md:text-base font-normal text-[#64748B] leading-relaxed max-w-3xl">
      {answer}
    </p>
  </div>
);

// --- Main FAQ Component ---

export const CommonQuestions = () => {
  // Static array matching the explicit layout requirements
  const faqData = [
    {
      question: "Do I have to sign a long-term contract?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    },
    {
      question: "Can I pay for a whole year?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage"
    },
    {
      question: "What if I need help?",
      answer: "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party"
    }
  ];

  return (
    <section className="w-full bg-white flex items-center justify-center py-16 lg:py-24">
      {/* Container Wrapper Context */}
      <div className="w-full max-w-4xl mx-auto px-6 md:px-8 flex flex-col items-start justify-center">
        
        {/* Main Section Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A] mb-12 text-left select-none">
          Common Questions
        </h2>

        {/* Typographic Open Matrix List Grid */}
        <div className="flex flex-col gap-10 w-full mb-12 text-left">
          {faqData.map((item, idx) => (
            <FAQRow 
              key={idx} 
              question={item.question} 
              answer={item.answer} 
            />
          ))}
        </div>

        {/* Bottom Secondary Custom Ghost-Capsule Action Button */}
        <button 
          type="button"
          className="
            inline-flex items-center justify-center bg-white 
            border-2 border-sky-100 hover:border-[#0284C7] 
            text-[#0284C7] font-bold text-sm px-6 py-3.5 rounded-xl 
            shadow-xs hover:shadow-sm
            transition-all duration-200 ease-in-out 
            cursor-pointer select-none active:scale-[0.98]
          "
        >
          More Questions
        </button>

      </div>
    </section>
  );
};

export default CommonQuestions;