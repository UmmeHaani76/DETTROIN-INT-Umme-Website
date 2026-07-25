"use client";

import { motion } from "framer-motion";
import { Calendar, Menu, X, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Programs", href: "#programs" },
    { name: "Why Excellence", href: "#why-choose-us" },
    { name: "Experience", href: "#experience" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8 max-w-7xl mx-auto"
    >
      {/* Frosted Glass Pill Navbar */}
      <div className="frosted-glass-premium rounded-full px-6 py-3.5 flex items-center justify-between border-white/60">
        {/* Logo and Name wrapped in a floating glass capsule */}
        <motion.a
          href="#"
          animate={{ y: [0, -5.5, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center gap-3.5 group bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-2.5xl border border-white/90 shadow-[0_6px_20px_rgba(30,41,59,0.05)] hover:bg-white/95 hover:border-white transition-all duration-300"
        >
          <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center shadow-md transition-transform group-hover:scale-105 border border-white/20 ring-2 ring-[#FFDDB0] group-hover:ring-[#F59E0B] transition-all">
            <span className="text-[#FFDDB0] font-heading font-black text-xl">E</span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-black text-slate-900 tracking-tight text-lg sm:text-xl leading-none flex items-center gap-1.5">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-[#F59E0B] bg-clip-text text-transparent">Excellence</span>
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
            </span>
            <span className="text-[10px] sm:text-[11px] text-slate-700 font-extrabold tracking-wider uppercase leading-none mt-1.5">
              International School
            </span>
          </div>
        </motion.a>

        {/* Status Pill (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 text-slate-700 border border-white/60 text-xs font-semibold shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#FFBE91] animate-pulse-slow" />
          <span className="text-[11px] font-bold text-slate-700">Admissions Open 2026-27</span>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-bold transition-colors relative py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFBE91] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -10px rgba(30, 41, 59, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800 text-white hover:bg-slate-900 font-heading font-bold text-xs shadow-md transition-all cursor-pointer focus:ring-2 focus:ring-[#FFBE91] focus:outline-none"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FFDDB0]" />
            <span>Book a Campus Tour</span>
          </motion.button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="frosted-glass-premium absolute top-20 left-4 right-4 rounded-3xl p-6 flex flex-col gap-4 border-white/60 md:hidden text-left"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/40">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FFBE91] animate-pulse-slow" />
              Admissions Open 2026-27
            </span>
          </div>

          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-700 hover:text-slate-900 font-heading font-bold text-base py-2 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-slate-800 text-white hover:bg-slate-900 font-heading font-bold text-sm shadow-md transition-colors mt-2"
          >
            <Calendar className="w-4 h-4 text-[#FFDDB0]" />
            <span>Book a Campus Tour</span>
          </button>
        </motion.div>
      )}
    </motion.header>
  );
}
