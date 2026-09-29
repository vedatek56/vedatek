"use client";

import { useState } from "react";
import { 
  Sparkles, 
  ShieldCheck, 
  Compass, 
  Moon, 
  Sun, 
  Brain, 
  CheckCircle2, 
  Send,
  Lock
} from "lucide-react";

export default function AstroHero() {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);

  const sampleConversations = [
    {
      userQuery: "How does my current Jupiter Mahadasha impact my career shift this month?",
      aiResponse: "With your 10th House Sun in Leo and Jupiter transiting your 9th House of fortune, this period marks a high-clarity expansion window. Your Vimshottari Jupiter-Mercury Antardasha brings analytical precision to negotiations. Expect pivotal developments near the upcoming full moon.",
      meta: "Vedic Dasha Engine • Swiss Ephemeris • NASA JPL Precision",
      tag: "Career & Dasha",
    },
    {
      userQuery: "What does my Western Natal Chart say about my emotional processing?",
      aiResponse: "Your Moon in Taurus (2nd House) forms a grounding trine to Saturn in Virgo, giving you strong emotional resilience and deliberate processing. However, Mars square Pluto prompts intense transformative breakthroughs when speaking your authentic truth.",
      meta: "Tropical Placidus • 0.001° Accuracy • Aspect Matrix",
      tag: "Natal Psychology",
    },
    {
      userQuery: "Can we evaluate 36-point Ashta Kuta compatibility for marriage?",
      aiResponse: "Analyzing Ashta Kuta: Nadi (8/8 points - complete bio-energy balance), Bhakoot (7/7 points - mutual love resonance), Gana (6/6 points - Deva alignment). Total score: 32.5 / 36 (Outstanding auspicious match).",
      meta: "36-Point Ashta Kuta • Synastry Engine • Nakshatra Porutham",
      tag: "Synastry Match",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Starfield & Celestial Aurora */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-indigo-600/25 rounded-full blur-[150px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-purple-600/18 rounded-full blur-[140px]" />
        {/* Starfield dots */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fbbf24 1.5px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-7">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 text-amber-300 text-xs font-bold tracking-wide shadow-md shadow-amber-500/10">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>Next-Generation Astrological Intelligence</span>
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Your Personal <br />
              <span className="astro-gold-gradient">AI Astrologer.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#e2e8f0] max-w-2xl leading-relaxed font-normal">
              Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/25 bg-[#141b3a]/90 text-xs font-semibold text-white shadow-lg">
                <div className="w-7 h-7 rounded-lg bg-amber-400/20 flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4 text-amber-400" />
                </div>
                <span>Dual Vedic & Western</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-2xl border border-white/25 bg-[#141b3a]/90 text-xs font-semibold text-white shadow-lg">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                  <Brain className="w-4 h-4 text-indigo-400" />
                </div>
                <span>Persistent Memory</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-2xl border border-white/25 bg-[#141b3a]/90 text-xs font-semibold text-white shadow-lg">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Lock className="w-4 h-4 text-emerald-400" />
                </div>
                <span>100% Private & Secure</span>
              </div>
            </div>

            {/* Dual App Store CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              {/* Google Play Button */}
              <a
                href="#download-play"
                aria-label="Download AstroReply for Android on Google Play Store"
                className="group relative inline-flex items-center justify-center sm:justify-start gap-4 px-6 py-3.5 rounded-2xl bg-[#111528] border-2 border-amber-400/50 hover:border-amber-400 text-white shadow-xl shadow-black/60 hover:shadow-amber-400/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-amber-400" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186c-.354-.25-.61-.7-.61-1.286V3.1c0-.586.256-1.036.61-1.286zm11.233 11.233l2.25 2.25-11.836 6.842 9.586-9.092zm0-2.094L5.256 1.861l11.836 6.842-2.25 2.25zm1.48 1.047l3.65-2.11c.96-.554.96-1.464 0-2.02l-3.65-2.11-2.457 2.457 2.457 2.457z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-slate-200 tracking-wider">
                    GET IT ON
                  </span>
                  <span className="block text-sm font-black text-white group-hover:text-amber-300 transition-colors">
                    Google Play
                  </span>
                </div>
              </a>

              {/* Apple App Store Button */}
              <a
                href="#download-apple"
                aria-label="Download AstroReply for iOS on Apple App Store"
                className="group relative inline-flex items-center justify-center sm:justify-start gap-4 px-6 py-3.5 rounded-2xl bg-[#111528] border-2 border-indigo-400/50 hover:border-indigo-400 text-white shadow-xl shadow-black/60 hover:shadow-indigo-400/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 fill-indigo-300" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.06 1.72-.93 2.74 1 .08 2.02-.49 2.64-1.24z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[10px] uppercase font-bold text-slate-200 tracking-wider">
                    DOWNLOAD ON THE
                  </span>
                  <span className="block text-sm font-black text-white group-hover:text-indigo-300 transition-colors">
                    App Store
                  </span>
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                3 Free Questions Daily
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0" />
                Zero Personal Data Sold
              </span>
            </div>
          </div>

          {/* Right Column: Premium Mobile App Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Ambient Glowing Aura Behind Phone */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/30 via-indigo-600/40 to-purple-600/30 rounded-[52px] blur-3xl -z-10" />

            {/* Mobile Device Frame */}
            <div className="relative mx-auto max-w-[340px] sm:max-w-[365px] rounded-[46px] border-[5px] border-slate-600/90 bg-[#0b0f22] p-3.5 shadow-2xl shadow-black/95">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full border border-slate-700/80 flex items-center justify-center gap-2 z-20">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-950 border border-slate-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* In-App Screen Content */}
              <div className="mt-7 rounded-[32px] bg-[#0c1022] border border-white/20 overflow-hidden flex flex-col h-[560px]">
                
                {/* In-App Header */}
                <div className="px-4 py-3 bg-[#172148] border-b border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-400 to-indigo-500 p-[1.5px]">
                      <div className="w-full h-full bg-[#0c1022] rounded-full flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-amber-400" />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        AstroReply AI
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      </div>
                      <div className="text-[10px] text-slate-200">
                        Birth Chart: London (Vedic + Tropical)
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-full border border-amber-400/40">
                    Live Engine
                  </span>
                </div>

                {/* Natal Chart Mini Ribbon */}
                <div className="px-3.5 py-2 bg-gradient-to-r from-indigo-950/80 via-[#13182e] to-amber-950/60 border-b border-white/20 flex items-center justify-between text-[11px] font-semibold">
                  <div className="flex items-center gap-3 text-white">
                    <span className="flex items-center gap-1 text-amber-300">
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                      Leo 10H
                    </span>
                    <span className="flex items-center gap-1 text-indigo-300">
                      <Moon className="w-3.5 h-3.5 text-indigo-400" />
                      Rohini
                    </span>
                    <span className="flex items-center gap-1 text-purple-300">
                      <Compass className="w-3.5 h-3.5 text-purple-400" />
                      Asc Scorpio
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    NASA JPL
                  </span>
                </div>

                {/* Interactive Query Selector Pills */}
                <div className="px-3 pt-2.5 pb-1 flex gap-1.5 overflow-x-auto no-scrollbar">
                  {sampleConversations.map((item, idx) => (
                    <button
                      key={item.tag}
                      type="button"
                      onClick={() => setActiveQueryIndex(idx)}
                      aria-label={`View sample conversation for ${item.tag}`}
                      className={`text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                        activeQueryIndex === idx
                          ? "bg-amber-400 text-slate-950 shadow-md shadow-amber-500/30 scale-105"
                          : "bg-[#162044] text-slate-200 border border-white/20 hover:text-white"
                      }`}
                    >
                      {item.tag}
                    </button>
                  ))}
                </div>

                {/* Chat Conversation Body */}
                <div className="flex-1 p-3.5 space-y-3 overflow-y-auto text-xs">
                  
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold px-4 py-2.5 shadow-lg">
                      {sampleConversations[activeQueryIndex].userQuery}
                    </div>
                  </div>

                  {/* AI Response Card */}
                  <div className="flex justify-start">
                    <div className="max-w-[95%] rounded-2xl rounded-tl-sm bg-[#161d38] border-2 border-amber-400/40 text-white px-4 py-3.5 shadow-xl space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-amber-300 font-bold border-b border-white/20 pb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Ephemeris AI Insight
                        </span>
                        <span className="text-slate-300 text-[10px] font-normal">Just now</span>
                      </div>
                      <p className="text-[12px] leading-relaxed text-slate-100 font-medium">
                        {sampleConversations[activeQueryIndex].aiResponse}
                      </p>
                      <div className="pt-1 flex items-center justify-between text-[10px] font-semibold text-indigo-300 bg-indigo-950/80 px-2.5 py-1 rounded-lg border border-indigo-500/30">
                        <span>{sampleConversations[activeQueryIndex].meta}</span>
                      </div>
                    </div>
                  </div>

                  {/* Memory Context Pill */}
                  <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-slate-200 bg-[#12172e] py-1 px-3.5 rounded-full border border-white/20 mx-auto w-fit">
                    <Brain className="w-3 h-3 text-indigo-400" />
                    <span>AstroReply Memory: Retained 14 previous natal insights</span>
                  </div>
                </div>

                {/* Mock Chat Input Field */}
                <div className="p-3 bg-[#172148] border-t border-white/20">
                  <div className="flex items-center gap-2 bg-[#0b0f22] border border-white/25 rounded-full px-3.5 py-2">
                    <input
                      type="text"
                      readOnly
                      placeholder="Ask about transits, dasha, or synastry..."
                      className="bg-transparent text-[11px] text-white placeholder-slate-400 w-full focus:outline-none font-medium"
                    />
                    <button
                      type="button"
                      aria-label="Send query"
                      className="w-7 h-7 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
