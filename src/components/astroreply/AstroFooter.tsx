"use client";

import Link from "next/link";
import { Sparkles, Mail, ShieldCheck, FileText, ArrowUpRight } from "lucide-react";

export default function AstroFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#04060a] border-t border-slate-800/80 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800/60">
          
          {/* Brand & Description */}
          <div className="md:col-span-5 space-y-4">
            <Link
              href="/astroreply"
              aria-label="AstroReply Homepage"
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-indigo-500 to-indigo-900 p-[1px] shadow-md shadow-amber-400/15">
                <div className="w-full h-full bg-[#0c0f1d] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Astro<span className="text-amber-400">Reply</span>
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Your personal AI astrologer. Grounded astrological guidance powered by your unique birth chart, high-precision astronomical ephemeris, and personalized conversational memory.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-500">
              <span>A product of</span>
              <a 
                href="https://vedatek.co.uk" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-semibold text-slate-300 hover:text-amber-400 transition-colors flex items-center gap-1"
              >
                VedaTek (uk.co.vedatek.astroreply)
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Engine Capabilities */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Astrological Engines
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Vedic Jyotish & Nakshatras</li>
              <li>Vimshottari Dasha Analysis</li>
              <li>Western Tropical & Placidus</li>
              <li>36-Point Ashta Kuta Synastry</li>
              <li>Saturn Sade Sati & Dhaiya</li>
              <li>Swiss Ephemeris & NASA JPL</li>
            </ul>
          </div>

          {/* Supported Languages */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Supported Languages
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">🇬🇧 English</li>
              <li className="flex items-center gap-1.5">🇮🇳 ગુજરાતી (Gujarati)</li>
              <li className="flex items-center gap-1.5">🇮🇳 हिन्दी (Hindi)</li>
              <li className="flex items-center gap-1.5">🇮🇳 मराठी (Marathi)</li>
              <li className="flex items-center gap-1.5">🇪🇸 Español (Spanish)</li>
            </ul>
          </div>

          {/* Legal & Compliance Support */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Trust & Support
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link
                  href="/astroreply/privacy"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Privacy Policy (GDPR)
                </Link>
              </li>
              <li>
                <Link
                  href="/astroreply/terms"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-amber-400" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@vedatek.co.uk"
                  className="hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  support@vedatek.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="space-y-4 text-xs text-slate-500">
          <p className="leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800/80">
            <strong className="text-slate-400 font-semibold">Astrological Reflection Disclaimer:</strong> AstroReply provides personalized astrological interpretations for introspection, cultural exploration, and personal reflection. Astrology is not a substitute for qualified professional advice (medical, psychological, financial, or legal).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p>
              &copy; {currentYear} AstroReply. Developed and maintained by VedaTek. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <Link href="/astroreply/privacy" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/astroreply/terms" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <a href="mailto:support@vedatek.co.uk" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
