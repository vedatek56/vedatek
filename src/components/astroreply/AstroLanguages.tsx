"use client";

import { useState } from "react";
import { Globe, Sparkles, Check, MessageSquare } from "lucide-react";

export default function AstroLanguages() {
  const languages = [
    {
      id: "en",
      name: "English",
      native: "English",
      flag: "🇬🇧",
      sampleQuery: "What are the planetary transits affecting my business in 2026?",
      sampleResponse: "Jupiter transiting into your 11th house of gains aligns favorably with your natal Mercury, indicating high expansion potential for contracts and partnerships from mid-year onwards.",
      badge: "Global Standard",
    },
    {
      id: "gu",
      name: "Gujarati",
      native: "ગુજરાતી",
      flag: "🇮🇳",
      sampleQuery: "મારી કુંડળી મુજબ શનિની સાડાસાતી ક્યારે પૂર્ણ થશે?",
      sampleResponse: "તમારી જન્મ રાશિ પરથી શનિનું ભ્રમણ હાલ બીજા તબક્કામાં છે. ૨૦૨૬ ના અંત સુધીમાં શનિનું સંક્રમણ પૂર્ણ થતાં વેપાર અને માનસિક શાંતિમાં નોંધપાત્ર પ્રગતિ જોવા મળશે.",
      badge: "શુદ્ધ જ્યોતિષ ભાષા",
    },
    {
      id: "hi",
      name: "Hindi",
      native: "हिन्दी",
      flag: "🇮🇳",
      sampleQuery: "मेरी गुरु महादशा में करियर और पदोन्नति के क्या योग हैं?",
      sampleResponse: "आपकी कुंडली में बृहस्पति दशम भाव में स्वगृही हैं। गुरु-शुक्र अंतर्दशा के दौरान वरिष्ठ अधिकारियों का सहयोग और पदोन्नति के प्रबल योग बन रहे हैं।",
      badge: "प्रामाणिक फलित ज्योतिष",
    },
    {
      id: "mr",
      name: "Marathi",
      native: "मराठी",
      flag: "🇮🇳",
      sampleQuery: "माझ्या पत्रिकेतील नवमांश कुंडली आणि वैवाहिक सौख्य कसे आहे?",
      sampleResponse: "तुमच्या नवमांश (D9) पत्रिकेत शुक्र व गुरु अत्यंत शुभ स्थितीत आहेत. वैवाहिक जीवनात सामंजस्य व स्थैर्य लाभण्याचे उत्तम संकेत आहेत.",
      badge: "अचूक ग्रहमान विश्लेषण",
    },
    {
      id: "es",
      name: "Spanish",
      native: "Español",
      flag: "🇪🇸",
      sampleQuery: "¿Cómo influye el retorno de Saturno en mi vocación profesional?",
      sampleResponse: "Tu retorno de Saturno en la Casa 10 exige reestructurar tus metas a largo plazo. La cuadratura con tu Sol natal te empuja a consolidar tu verdadera autoridad profesional.",
      badge: "Astrología Psicológica",
    },
  ];

  const [activeLang, setActiveLang] = useState(languages[0]);

  return (
    <section id="languages" className="relative py-24 border-t border-white/20 bg-[#06070d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-400/40 bg-indigo-400/15 text-indigo-300 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-indigo-400" />
            Global Polyglot Astrological AI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Speaks Your Heart in <br className="hidden sm:inline" />
            <span className="astro-cosmic-gradient">5 Native Languages.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1] font-normal">
            Astrological insights carry profound cultural nuances. AstroReply natively reasons and replies with authentic cultural depth, Vedic terminology, and psychological clarity.
          </p>
        </div>

        {/* Interactive Language Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang) => {
            const isSelected = activeLang.id === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                onClick={() => setActiveLang(lang)}
                aria-label={`Select ${lang.name} language preview`}
                className={`flex items-center gap-3 px-6 py-3.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 scale-105"
                    : "bg-[#11152a] border border-white/25 text-slate-200 hover:text-white hover:border-amber-400/50"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
                <span className="text-xs opacity-80">({lang.native})</span>
              </button>
            );
          })}
        </div>

        {/* Live Conversation Showcase Card */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 space-y-6 bg-[#11162e] border-2 border-amber-400/30 shadow-2xl shadow-black/80 relative overflow-hidden">
          {/* Top Accent */}
          <div className="flex items-center justify-between border-b border-white/20 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{activeLang.flag}</span>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  {activeLang.name} — {activeLang.native}
                </h3>
                <span className="text-xs text-indigo-300/80 font-medium">Native Ephemeris AI Consultation</span>
              </div>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
              {activeLang.badge}
            </span>
          </div>

          {/* User Query Bubble */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" />
              User Inquiry
            </span>
            <div className="p-4 sm:p-5 rounded-2xl rounded-tl-sm bg-[#161c38] border border-white/20 text-white text-sm sm:text-base font-semibold leading-relaxed">
              &ldquo;{activeLang.sampleQuery}&rdquo;
            </div>
          </div>

          {/* AI Response Bubble */}
          <div className="space-y-2">
            <span className="text-[11px] uppercase font-bold text-amber-300 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              AstroReply Response
            </span>
            <div className="p-5 sm:p-6 rounded-2xl rounded-tr-sm bg-gradient-to-br from-[#1b2346] to-[#121730] border-2 border-amber-400/30 text-white text-sm sm:text-base leading-relaxed font-medium">
              &ldquo;{activeLang.sampleResponse}&rdquo;
            </div>
          </div>

          {/* Bottom guarantee */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200 border-t border-white/20 font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Check className="w-4 h-4" />
              Accurate Devanagari & Gujarati Fonts Rendered Crisp
            </span>
            <span className="text-slate-200">
              Switch languages seamlessly mid-chat
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
