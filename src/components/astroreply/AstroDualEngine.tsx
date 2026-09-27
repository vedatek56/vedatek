"use client";

import { useState } from "react";
import { 
  Sparkles, 
  Compass, 
  Moon, 
  Sun, 
  Heart, 
  Brain, 
  ShieldCheck, 
  Flame, 
  Layers, 
  Check, 
  Zap, 
  Star 
} from "lucide-react";

export default function AstroDualEngine() {
  const [activeTab, setActiveTab] = useState<"vedic" | "western">("vedic");

  const vedicFeatures = [
    {
      title: "Janma Rashi & Nakshatra Padas",
      description: "Precise Moon sign calculations across the 27 lunar mansions (Nakshatras) and 108 Padas with planetary lords (Adhipati).",
      icon: Moon,
      tag: "Lunar Matrix",
    },
    {
      title: "Vimshottari Dasha Timeline",
      description: "Multi-tiered 120-year Mahadasha, Antardasha, and Pratyantardasha timing for career, financial, and personal inflection points.",
      icon: Zap,
      tag: "Predictive Timing",
    },
    {
      title: "Shani Sade Sati & Dhaiya Tracking",
      description: "Real-time orbital tracking of Saturn transits through the 12th, 1st, and 2nd houses from your natal Moon with practical remedies.",
      icon: Flame,
      tag: "Saturn Transits",
    },
    {
      title: "Navamsha (D9) & Divisional Charts",
      description: "Deep dive into your D9 Navamsha chart to examine marriage destiny, inner soul path (Dharma), and late-life planetary strengths.",
      icon: Layers,
      tag: "Harmonic D9",
    },
  ];

  const westernFeatures = [
    {
      title: "Tropical Sun, Moon & Rising Triad",
      description: "Your foundational psychological blueprint blending your conscious core (Sun), instinctual subconscious (Moon), and outer aura (Ascendant).",
      icon: Sun,
      tag: "Big Three",
    },
    {
      title: "Placidus House Cusps (0.001° Ephemeris)",
      description: "Precise house system calculations powered by Swiss Ephemeris data mapping career (10H), relationships (7H), and transformation (8H).",
      icon: Compass,
      tag: "House Division",
    },
    {
      title: "Geometric Aspect Matrix & Orbs",
      description: "Identifies exact Conjunctions, Sextiles, Squares, Trines, and Oppositions with tight 1° to 3° orb tolerances for psychological nuance.",
      icon: Star,
      tag: "Major Aspects",
    },
    {
      title: "Planetary Transits & Returns",
      description: "Continuous real-time tracking of Solar Returns, Saturn Returns, and outer planet transits (Jupiter, Uranus, Neptune, Pluto).",
      icon: Sparkles,
      tag: "Current Cycles",
    },
  ];

  const synastryPoints = [
    { name: "Nadi Kuta", score: "8 Points", desc: "Bio-magnetic & genetic compatibility (Adi, Madhya, Antya)." },
    { name: "Bhakoot Kuta", score: "7 Points", desc: "Emotional prosperity, longevity, and psychological harmony." },
    { name: "Gana Kuta", score: "6 Points", desc: "Temperamental alignment (Deva, Manushya, Rakshasa)." },
    { name: "Maitri Kuta", score: "5 Points", desc: "Planetary friendship and mutual intellectual respect." },
    { name: "Yoni Kuta", score: "4 Points", desc: "Physical intimacy, sexual attraction, and instinctual bond." },
    { name: "Tara Kuta", score: "3 Points", desc: "Destiny, health, and mutual longevity through lunar days." },
    { name: "Vasya Kuta", score: "2 Points", desc: "Mutual influence, magnetism, and emotional devotion." },
    { name: "Varna Kuta", score: "1 Point", desc: "Ego compatibility and spiritual growth velocity." },
  ];

  return (
    <section id="dual-engine" className="relative py-24 border-t border-slate-800/80 bg-[#08090e]">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            Dual-Engine Astrological Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Vedic Wisdom meets <br className="hidden sm:inline" />
            <span className="astro-gold-gradient">Western Psychology.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Why choose between ancient Sidereal calculations and modern Tropical psychological depth? AstroReply executes both high-precision engines simultaneously using NASA JPL ephemeris.
          </p>
        </div>

        {/* Engine Switcher Tabs */}
        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center gap-2 shadow-xl">
              <button
                type="button"
                onClick={() => setActiveTab("vedic")}
                aria-label="Switch to Vedic Jyotish Engine view"
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  activeTab === "vedic"
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md shadow-amber-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Moon className="w-4 h-4" />
                Vedic Jyotish (Sidereal)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("western")}
                aria-label="Switch to Western Psychological Engine view"
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  activeTab === "western"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md shadow-indigo-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <Sun className="w-4 h-4" />
                Western Psychological (Tropical)
              </button>
            </div>
          </div>

          {/* Grid of features based on active engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(activeTab === "vedic" ? vedicFeatures : westernFeatures).map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="astro-card rounded-2xl p-6 flex flex-col justify-between space-y-4 relative group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activeTab === "vedic" 
                          ? "bg-amber-400/10 border border-amber-400/30 text-amber-400" 
                          : "bg-indigo-500/10 border border-indigo-500/30 text-indigo-300"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                        {feature.tag}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
                    <Check className="w-3.5 h-3.5" />
                    <span>Real-time Ephemeris Verified</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 2: Synastry & AstroReply Memory Showcase */}
        <div id="synastry-memory" className="pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 36-Point Ashta Kuta Synastry Card */}
          <div className="lg:col-span-6 astro-card rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-rose-400" />
                Relationship Synastry
              </div>
              <h3 className="text-2xl font-bold text-white">
                36-Point Ashta Kuta Compatibility
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Compare two birth charts across the rigorous classical 8-kuta matrix. Discover authentic emotional, intellectual, and bio-magnetic resonance without generic pop astrology fluff.
              </p>

              {/* Matrix List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {synastryPoints.map((kuta) => (
                  <div key={kuta.name} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs space-y-0.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{kuta.name}</span>
                      <span className="text-[10px] font-bold text-rose-300 bg-rose-500/10 px-1.5 py-0.2 rounded">
                        {kuta.score}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">{kuta.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-rose-950/40 to-slate-900/60 border border-rose-500/20 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Includes Manglik Dosha Analysis & Remedies</span>
              <span className="font-bold text-amber-300">100% Comprehensive</span>
            </div>
          </div>

          {/* AstroReply Continuous Conversational Memory Card */}
          <div className="lg:col-span-6 astro-card rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-400/30 bg-indigo-400/10 text-indigo-300 text-xs font-semibold">
                <Brain className="w-3.5 h-3.5 text-indigo-400" />
                Personalized AI Memory
              </div>
              <h3 className="text-2xl font-bold text-white">
                Continuous Conversational Memory
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Unlike stateless chatbots that forget who you are every time you close the app, AstroReply retains a private, encrypted contextual graph of your life journey, aspirations, and ongoing planetary transitions.
              </p>

              {/* Memory Capability Features */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-indigo-500/20 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Brain className="w-4 h-4 text-indigo-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Career & Goal Continuity</span>
                    <span className="text-[11px] text-slate-300">Remembers your career promotions, business ventures, and interviews across multi-week dasha transits.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-amber-500/20 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Emotional & Relationship Context</span>
                    <span className="text-[11px] text-slate-300">Tracks emotional patterns and relationship dynamics discussed in past consultations to offer deeper contextual guidance.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/70 border border-emerald-500/20 flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Client-Controlled Privacy</span>
                    <span className="text-[11px] text-slate-300">Wipe memory slots, delete specific memories, or purge your entire profile with a single tap at any time.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900/60 border border-indigo-500/20 flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">End-to-End Encrypted Memory State</span>
              <span className="font-bold text-emerald-400">Zero AI Training on Private Chats</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
