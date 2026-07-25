"use client";

import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer({ onOpenInquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 pt-20 pb-8 border-t border-slate-800 overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Logo & Vision */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.a
              href="#"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center gap-2.5 group mb-6 w-fit"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-950 to-slate-850 flex items-center justify-center border border-slate-700 shadow-md transition-transform group-hover:scale-105 ring-2 ring-[#FFDDB0]/50 group-hover:ring-[#F59E0B] transition-all">
                <span className="text-[#FFDDB0] font-heading font-black text-xl">E</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-white tracking-tight text-lg leading-none flex items-center gap-1 group-hover:scale-102 transition-all">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-[#FFDDB0] bg-clip-text text-transparent">Excellence</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400 font-extrabold tracking-wider uppercase leading-none mt-1.5">
                  International School, Aligarh
                </span>
              </div>
            </motion.a>

            <p className="text-slate-400 font-sans text-sm leading-relaxed mb-6 max-w-sm">
              Dedicated to offering a transformative academic journey that blends traditional values, modern STREAM tools, and sports discipline for overall student success.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { 
                  icon: (
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ),
                  href: "https://facebook.com",
                  label: "Facebook"
                },
                { 
                  icon: (
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  ),
                  href: "https://instagram.com",
                  label: "Instagram"
                },
                { 
                  icon: (
                    <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.42 4.814a2.476 2.476 0 0 1-1.768 1.768c-1.56.419-7.812.419-7.812.419s-6.253 0-7.812-.419a2.476 2.476 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.42-4.814a2.476 2.476 0 0 1 1.768-1.768C5.747 5 12 5 12 5s6.253 0 7.812.418ZM10 14.5l6-2.5-6-2.5v5Z" clipRule="evenodd" />
                    </svg>
                  ),
                  href: "https://youtube.com",
                  label: "Youtube"
                },
              ].map((social, idx) => {
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white border border-slate-700 transition-colors"
                  >
                    {social.icon}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 flex flex-col items-start text-left">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white tracking-wider uppercase mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3 font-sans text-sm">
              <a href="#programs" className="hover:text-[#FFBE91] transition-colors">Academic Journey</a>
              <a href="#why-choose-us" className="hover:text-[#FFBE91] transition-colors">Why Choose Us</a>
              <a href="#experience" className="hover:text-[#FFBE91] transition-colors">Life at Excellence</a>
              <a href="#faq" className="hover:text-[#FFBE91] transition-colors">General FAQs</a>
              <button 
                onClick={onOpenInquiry} 
                className="text-left hover:text-[#FFDDB0] text-[#FFBE91] font-bold transition-colors cursor-pointer"
              >
                Inquire Admission
              </button>
            </nav>
          </div>

          {/* Col 3: Contact Details */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <h4 className="font-heading font-bold text-sm sm:text-base text-white tracking-wider uppercase mb-6">
              Contact Details
            </h4>
            <div className="flex flex-col gap-4 font-sans text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFBE91] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Ramghat Road, Near Kwarsi Bypass, Aligarh, UP, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFBE91] shrink-0" />
                <span>+91 7055582117</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFBE91] shrink-0" />
                <a href="mailto:info@excellenceinternationalschool.com" className="hover:text-white transition-colors">
                  info@excellenceinternationalschool.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright area */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 gap-4">
          <p className="text-slate-500 font-sans text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Excellence International School, Aligarh. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
