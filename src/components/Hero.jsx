"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Sparkles, Play, Shield, Users, Trophy, X, ArrowRight } from "lucide-react";

export default function Hero({ onOpenInquiry }) {
  const [showVideo, setShowVideo] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  // Parallax Scroll Effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // 3D Perspective Tilt State
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate cursor positions relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Scale and constrain angles
    setTilt({
      x: -y / 15,
      y: x / 15,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-dot-pattern-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-2.5 mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 border border-white/50 text-slate-800 text-xs font-bold shadow-sm backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                STREAM Focus Education
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/40 border border-white/50 text-slate-800 text-xs font-bold shadow-sm backdrop-blur-md">
                Holistic Growth
              </span>
            </motion.div>

            {/* Glowing & Responsive Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight leading-[1.1] mb-6"
            >
              Where <span className="bg-gradient-to-r from-[#FFBE91] via-[#F59E0B] to-[#FFDDB0] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.5)] animate-pulse font-black inline-block">Curiosity</span> <br />
              Meets <span className="text-slate-800">Excellence</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 font-sans text-sm sm:text-base max-w-xl mb-8 leading-relaxed"
            >
              <span className="inline-block px-3 py-1.5 rounded-xl bg-[#FFDDB0]/40 font-extrabold text-slate-900 border border-[#FFBE91]/40 shadow-sm leading-none">Excellence International School, Aligarh</span> is a premier educational sanctuary nurturing future leaders, thinkers, and creators through personalized and practical concept-based learning.
            </motion.p>

            {/* Tactile Cloud Shape Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap items-center gap-6 w-full sm:w-auto mt-2"
            >
              {/* Explore Programs Cloud Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#programs"
                className="relative inline-flex items-center justify-center gap-2 px-12 py-5.5 sm:px-15 text-white font-heading font-bold text-xs sm:text-[13px] transition-all w-full sm:w-auto cursor-pointer focus:outline-none group"
              >
                {/* Cloud Background Layer */}
                <svg className="absolute inset-0 w-full h-full text-slate-800 fill-current drop-shadow-[0_8px_16px_rgba(30,41,59,0.15)] transition-all group-hover:text-slate-900 group-hover:drop-shadow-[0_12px_24px_rgba(255,190,145,0.3)]" viewBox="0 0 351 47" preserveAspectRatio="none">
                  <path d="M25,45 C12,45 4,37 4,28 C4,19 12,12 25,12 C28,12 31,13 34,15 C39,6 50,0 62,0 C74,0 85,6 90,15 C96,6 107,0 119,0 C131,0 142,6 147,15 C152,6 163,0 175,0 C187,0 198,6 203,15 C208,6 219,0 231,0 C243,0 254,6 259,15 C264,6 275,0 287,0 C299,0 310,6 315,15 C320,13 323,12 326,12 C339,12 347,19 347,28 C347,37 339,45 326,45 Z" />
                </svg>
                <span className="relative z-10 flex items-center gap-1.5">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 text-[#FFDDB0]" />
                </span>
              </motion.a>

              {/* Virtual Tour Cloud Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowVideo(true)}
                className="relative inline-flex items-center justify-center gap-2 px-12 py-5.5 sm:px-15 text-slate-800 font-heading font-bold text-xs sm:text-[13px] transition-all w-full sm:w-auto cursor-pointer focus:outline-none group backdrop-blur-md rounded-full"
              >
                {/* Cloud Background Layer (Frosted Glass style with higher visibility) */}
                <svg className="absolute inset-0 w-full h-full text-slate-100/75 fill-current stroke-[#FFBE91]/80 stroke-2 drop-shadow-[0_8px_16px_rgba(0,0,0,0.04)] transition-all group-hover:text-slate-200/85 group-hover:drop-shadow-[0_12px_24px_rgba(255,190,145,0.25)]" viewBox="0 0 351 47" preserveAspectRatio="none">
                  <path d="M25,45 C12,45 4,37 4,28 C4,19 12,12 25,12 C28,12 31,13 34,15 C39,6 50,0 62,0 C74,0 85,6 90,15 C96,6 107,0 119,0 C131,0 142,6 147,15 C152,6 163,0 175,0 C187,0 198,6 203,15 C208,6 219,0 231,0 C243,0 254,6 259,15 C264,6 275,0 287,0 C299,0 310,6 315,15 C320,13 323,12 326,12 C339,12 347,19 347,28 C347,37 339,45 326,45 Z" />
                </svg>
                <span className="relative z-10 flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Play className="w-2.5 h-2.5 text-slate-800 fill-current ml-0.5" />
                  </div>
                  <span>Virtual Campus Tour</span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: 3D Perspective Card & Floating Badges */}
          <div 
            className="lg:col-span-5 relative w-full h-[320px] sm:h-[450px] flex items-center justify-center mt-8 lg:mt-0"
            style={{ perspective: 1000 }}
          >
            {/* Interactive 3D Perspective Tilt Card */}
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                y: yParallax,
                rotateX: tilt.x,
                rotateY: tilt.y,
                transformStyle: "preserve-3d"
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="relative w-full h-full max-w-[390px] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100 cursor-grab active:cursor-grabbing"
            >
              <img
                src="/images/hero-campus.png"
                alt="Excellence International School Campus"
                className="w-full h-full object-cover object-center transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Frosted Glassmorphism Badge 1: Safety */}
            <motion.div
              initial={{ opacity: 0, x: -35, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-4 left-0 sm:-left-6 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_20px_50px_rgba(31,38,135,0.08)] rounded-3xl p-3.5 flex items-center gap-2.5 animate-float-reverse z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Shield className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-slate-800 text-sm leading-none">100%</span>
                <span className="text-[9px] text-slate-500 font-bold leading-none mt-1">Student Safety</span>
              </div>
            </motion.div>

            {/* Frosted Glassmorphism Badge 2: Ratio */}
            <motion.div
              initial={{ opacity: 0, x: 35, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-4 -right-2 sm:-right-6 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_20px_50px_rgba(31,38,135,0.08)] rounded-3xl p-3.5 flex items-center gap-2.5 animate-float z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <Users className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-extrabold text-slate-800 text-sm leading-none">15 : 1</span>
                <span className="text-[9px] text-slate-500 font-bold leading-none mt-1">Teacher Ratio</span>
              </div>
            </motion.div>

            {/* Floating Badge 3: Award */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute top-1/2 -right-8 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_20px_50px_rgba(31,38,135,0.08)] rounded-3xl p-2.5 flex items-center justify-center hidden md:flex z-20"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <Trophy className="w-4.5 h-4.5 text-[#FFBE91]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Video Modal (Virtual Tour) */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-[32px] overflow-hidden max-w-4xl w-full shadow-2xl relative"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video bg-slate-900/90 relative flex flex-col items-center justify-center text-white p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-[#FFDDB0] flex items-center justify-center mb-4 text-slate-800 shadow-lg animate-pulse">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <h3 className="font-heading font-bold text-2xl mb-2 text-white">Experience Excellence Campus</h3>
                <p className="text-slate-300 max-w-md mb-6 text-sm">
                  Walk through our state-of-the-art labs, creative play areas, and digital classrooms.
                </p>
                <button
                  onClick={() => {
                    setShowVideo(false);
                    onOpenInquiry();
                  }}
                  className="px-6 py-2.5 rounded-full bg-white text-slate-800 font-heading font-bold text-xs shadow-md hover:bg-slate-100 transition-colors"
                >
                  Schedule an In-Person Tour
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Fluffy double-layered cloud divider at bottom */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20 pointer-events-none w-full overflow-hidden leading-none">
        {/* Layer 1: Darker Warm Sunset cloud shadow */}
        <svg className="relative block w-full h-[45px] sm:h-[70px] opacity-60 fill-[#FFDDB0] translate-y-3" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L1440,120 L1440,75 C1410,60 1370,55 1330,65 C1280,40 1200,35 1150,60 C1090,30 990,25 940,55 C880,25 790,20 730,50 C670,20 580,15 520,45 C460,15 370,10 310,40 C250,15 170,10 110,40 C60,25 20,35 0,55 Z"></path>
        </svg>
        {/* Layer 2: Pale Cream background color matching cloud */}
        <svg className="relative block w-full h-[45px] sm:h-[70px] fill-[#FFFCE1]" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,120 L1440,120 L1440,90 C1410,75 1370,70 1330,80 C1280,55 1200,50 1150,75 C1090,45 990,40 940,70 C880,40 790,35 730,65 C670,35 580,30 520,60 C460,30 370,25 310,55 C250,30 170,25 110,55 C60,40 20,50 0,70 Z"></path>
        </svg>
      </div>
    </section>
  );
}
