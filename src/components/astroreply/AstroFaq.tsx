"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function AstroFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate are the astronomical calculations in AstroReply?",
      answer: "AstroReply utilizes the Swiss Ephemeris system alongside NASA JPL planetary ephemeris tables to compute planetary longitudes, house cusps (Placidus, Koch, Whole Sign, Equal), Nakshatra Padas, and Vimshottari Dashas down to 0.001 degrees of arc precision for any geographic coordinate on Earth from 1800 to 2100 CE.",
    },
    {
      question: "What is the difference between the Vedic and Western astrology engines?",
      answer: "The Vedic engine uses the Sidereal Zodiac (Lahiri Ayanamsha) aligned with fixed star constellations, featuring 27 Nakshatras, Janma Kundali (D1), Navamsha (D9), and Vimshottari timing. The Western engine uses the Tropical Zodiac aligned with the equinoxes, focusing on Placidus houses, major aspect matrices (trines, squares, oppositions), and psychological archtypes.",
    },
    {
      question: "How does AstroReply's Continuous Conversational Memory work?",
      answer: "AstroReply maintains a private, encrypted context graph tied securely to your account. It remembers career developments, relationship history, and previous chart discussions so you never have to repeat your background. You can inspect, modify, or permanently wipe memory slots at any time from in-app settings.",
    },
    {
      question: "Is my personal birth data and chat history private?",
      answer: "Yes, absolutely. VedaTek adheres to strict GDPR principles and Apple/Google store data safety policies. We never sell personal data, never share your birth data with data brokers, and never train public foundation AI models on your private consultations. All data is encrypted in transit and at rest.",
    },
    {
      question: "Which languages are fully supported?",
      answer: "AstroReply natively supports English, Gujarati (ગુજરાતી), Hindi (हिन्दी), Marathi (मराठी), and Spanish (Español). The AI understands regional dialect idioms, Sanskrit astrological nomenclature, and scripts flawlessly.",
    },
    {
      question: "How do I manage or cancel my subscription?",
      answer: "All payments are processed securely through Apple App Store In-App Purchases or Google Play Billing. You can cancel or switch tiers anytime in your device's subscription settings with zero cancellation fees.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 border-t border-white/20 bg-[#06070d]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/40 bg-indigo-400/15 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-indigo-400" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-sm">
            Everything you need to know about <br />
            <span className="astro-gold-gradient">AstroReply.</span>
          </h2>
          <p className="text-base text-[#cbd5e1] font-normal">
            Have questions about precision calculations, data safety, or subscriptions?
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={faq.question}
                className="rounded-3xl overflow-hidden border border-white/20 bg-[#11152a] transition-colors shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-label={`Toggle answer for: ${faq.question}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-[#18224b] transition-colors"
                >
                  <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#e2e8f0] leading-relaxed border-t border-white/20 pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
