"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll detection to update navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-lg shadow-black/10"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Wordmark */}
          <Link href="/" className="flex items-center gap-1 group focus:outline-none">
            <span className="text-xl font-bold tracking-wider text-slate-100 transition-colors duration-200 group-hover:text-brand-indigo">
              VEDA
            </span>
            <span className="text-xl font-black tracking-wider text-brand-cyan transition-colors duration-200 group-hover:text-brand-indigo">
              TEK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-200 relative py-1 focus:outline-none ${
                    isActive
                      ? "text-brand-cyan"
                      : "text-slate-300 hover:text-slate-100"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-indigo to-brand-cyan"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group flex items-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 text-sm font-semibold py-2.5 px-5 rounded-full shadow-lg shadow-brand-indigo/10 hover:shadow-brand-indigo/25 transition-all duration-300 focus:outline-none"
            >
              Discuss Your Challenge
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-slate-100 p-1 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-brand-dark/95 border-b border-brand-border backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors focus:outline-none ${
                      isActive
                        ? "bg-slate-900/60 text-brand-cyan font-semibold border-l-2 border-brand-cyan"
                        : "text-slate-300 hover:bg-slate-900/10 hover:text-slate-100"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-brand-border/60">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-semibold py-3 px-4 rounded-xl shadow-md transition-all duration-200 focus:outline-none"
                >
                  Discuss Your Challenge
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
