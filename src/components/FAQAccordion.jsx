"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const faqs = [
    {
      id: "age-criteria",
      question: "What is the age criteria for admission?",
      answer: "For Playgroup/Nursery, the child should be 2.5 to 3 years old by April 30th of the academic session. For Grade 1, the child should be 5+ years of age. Please refer to our admission desk for specific stage waivers.",
    },
    {
      id: "routes",
      question: "Which areas do the school bus transport cover in Aligarh?",
      answer: "Our smart school buses cover major routes across Aligarh including Ramghat Road, Kwarsi, Civil Lines, Center Point, Sasni Gate, and nearby surrounding corridors. All vehicles feature live GPS tracking and verified transit conductors.",
    },
    {
      id: "safety",
      question: "What safety and security protocols are implemented on campus?",
      answer: "We implement 24/7 security guarding, comprehensive high-definition CCTV coverage across all classrooms, corridors and play zones, verified support credentials, and double-checked gate entry logs for external visitors.",
    },
    {
      id: "fees",
      question: "How can I obtain the school prospectus and fee structure?",
      answer: "You can download a digital copy of our fee framework by requesting a callback through our 'Book a Campus Tour' drawer, or visit our administration desk at Ramghat Road, Aligarh during standard hours (8 AM - 2 PM).",
    },
    {
      id: "stream",
      question: "What does 'STREAM Focus' mean in your classrooms?",
      answer: "STREAM stands for Science, Technology, Reading, Engineering, Arts, and Mathematics. Rather than teaching these subjects in isolation, we design integrated project blocks where kids build coding games, paint models, and conduct practical science lab work.",
    },
  ];

  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-800 tracking-tight mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8 text-[#FFBE91]" />
            <span>Frequently Asked Questions</span>
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base">
            Find quick answers to common queries regarding admissions, transport logs, security details, and academic methodologies.
          </p>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#FFBE91] bg-white/50 shadow-lg"
                    : "border-white/60 bg-white/45 hover:bg-white/50"
                } frosted-glass-premium`}
              >
                {/* FAQ Question Bar */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full py-5 px-6 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-800 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen ? "bg-slate-800 text-white" : "bg-white/60 text-slate-600 shadow-sm border border-white/50"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* FAQ Answer Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 font-sans text-xs sm:text-sm leading-relaxed border-t border-white/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
