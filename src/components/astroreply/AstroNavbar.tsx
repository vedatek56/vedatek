"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AstroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dual Engine", href: "#dual-engine" },
    { name: "Synastry & Memory", href: "#synastry-memory" },
    { name: "Languages", href: "#languages" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080a12]/90 backdrop-blur-xl border-b border-amber-400/20 py-3 shadow-2xl shadow-black/80"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo & Product Name */}
          <Link
            href="/astroreply"
            aria-label="AstroReply Homepage"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-indigo-600 p-[1.5px] shadow-lg shadow-amber-400/20 group-hover:shadow-amber-400/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0d1122] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-white drop-shadow-sm">
                  Astro<span className="text-amber-400">Reply</span>
                </span>
                <span className="text-[10px] font-extrabold tracking-widest uppercase px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  AI
                </span>
              </div>
              <span className="text-[11px] text-indigo-300/90 tracking-wider block font-semibold">
                by VedaTek
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-white hover:text-amber-300 drop-shadow-sm transition-colors duration-200 focus:outline-none"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/astroreply/privacy"
              className="text-xs font-bold text-white hover:text-amber-300 flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-amber-400/30 hover:border-amber-400/70 bg-[#172146]/90 hover:bg-[#1e2a58] shadow-md shadow-indigo-950/50 transition-all shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Privacy & Trust
            </Link>
            <a
              href="#pricing"
              className="group flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 text-xs font-extrabold uppercase tracking-wider py-2.5 px-5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 focus:outline-none"
            >
              Get AstroReply
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-100 hover:text-amber-400 p-2 rounded-xl border border-white/20 bg-[#141b3a] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden bg-[#080a14]/98 border-b border-amber-500/20 backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-300 hover:bg-[#141b3a] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-white/20 flex flex-col gap-2.5">
                <Link
                  href="/astroreply/privacy"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-200 border border-white/20 bg-[#141b3a]"
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Privacy & Store Compliance
                </Link>
                <a
                  href="#pricing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm shadow-md"
                >
                  Start Free (3 Questions / Day)
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
