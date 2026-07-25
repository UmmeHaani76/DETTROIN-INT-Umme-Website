"use client";

import { useState } from "react";
import { motion as motionReact, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check, Sparkles, Phone, Mail, User, Clock } from "lucide-react";
import confetti from "canvas-confetti";

export default function InquiryDrawer({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    grade: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    callbackTime: "morning", // morning, afternoon, evening
  });

  const [errors, setErrors] = useState({});

  const grades = [
    { label: "Pre-Primary (Playgroup / Nursery)", value: "Pre-Primary" },
    { label: "Primary (Grades 1 - 5)", value: "Primary" },
    { label: "Middle School (Grades 6 - 8)", value: "Middle" },
    { label: "Daycare Services", value: "Daycare" },
  ];

  const handleGradeSelect = (val) => {
    setFormData({ ...formData, grade: val });
    setErrors({ ...errors, grade: "" });
    setStep(2);
  };

  const validateStep2 = () => {
    let errs = {};
    if (!formData.parentName.trim()) errs.parentName = "Full Name is required";
    if (!formData.parentPhone.trim()) {
      errs.parentPhone = "Phone Number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.parentPhone)) {
      errs.parentPhone = "Invalid phone number format";
    }
    if (!formData.parentEmail.trim()) {
      errs.parentEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.parentEmail)) {
      errs.parentEmail = "Invalid email format";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextStep2 = () => {
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });
    setStep(4);
  };

  const handleReset = () => {
    setFormData({
      grade: "",
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      callbackTime: "morning",
    });
    setErrors({});
    setStep(1);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motionReact.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm"
          />

          {/* Sliding Right Frosted Glass Drawer */}
          <motionReact.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-white/70 backdrop-blur-2xl shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-white/50 overflow-y-auto"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-slate-200/50">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFBE91]/20 flex items-center justify-center text-slate-800">
                    <Sparkles className="w-4 h-4 text-[#FFBE91]" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-800">
                    Inquire Admission
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/60 border border-white/80 hover:bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Steps Progress Bar */}
              {step < 4 && (
                <div className="flex items-center justify-between mt-6 mb-8 px-2">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center flex-1 last:flex-initial">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          step >= s
                            ? "bg-slate-800 text-[#FFDDB0] shadow-sm"
                            : "bg-white/50 border border-white/80 text-slate-400"
                        }`}
                      >
                        {step > s ? <Check className="w-4 h-4 text-[#FFBE91]" /> : s}
                      </div>
                      {s < 3 && (
                        <div
                          className={`h-0.5 flex-1 mx-2 rounded-full transition-all ${
                            step > s ? "bg-slate-800" : "bg-white/40"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Form Content Steps */}
              <div className="mt-4">
                {step === 1 && (
                  <motionReact.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col text-left"
                  >
                    <h4 className="font-heading font-bold text-base text-slate-800 mb-2">
                      Select Grade Level
                    </h4>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm mb-6 leading-relaxed">
                      Please select the learning stage you are looking for your child.
                    </p>

                    <div className="flex flex-col gap-3">
                      {grades.map((grade) => (
                        <button
                          key={grade.value}
                          onClick={() => handleGradeSelect(grade.value)}
                          className={`p-4 rounded-2xl border text-left font-heading font-semibold text-xs sm:text-sm transition-all hover:bg-white/60 hover:border-slate-300 ${
                            formData.grade === grade.value
                              ? "border-slate-800 bg-white/90 text-slate-800 shadow-sm"
                              : "border-white/50 text-slate-700 bg-white/40"
                          }`}
                        >
                          {grade.label}
                        </button>
                      ))}
                    </div>
                  </motionReact.div>
                )}

                {step === 2 && (
                  <motionReact.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col text-left"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <button
                        onClick={() => setStep(1)}
                        className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h4 className="font-heading font-bold text-base text-slate-800">
                        Parent / Guardian Details
                      </h4>
                    </div>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm mb-6 leading-relaxed pl-7">
                      Provide contact information so our admission officer can reach you.
                    </p>

                    <div className="flex flex-col gap-4 pl-1">
                      {/* Name input */}
                      <div className="flex flex-col">
                        <label className="text-slate-600 font-sans font-bold text-xs mb-1.5 flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-[#FFBE91]" />
                          <span>Full Name</span>
                        </label>
                        <input
                          type="text"
                          value={formData.parentName}
                          onChange={(e) =>
                            setFormData({ ...formData, parentName: e.target.value })
                          }
                          placeholder="Enter your full name"
                          className="px-4 py-3 rounded-xl border border-white/60 font-sans text-sm focus:outline-none focus:border-slate-800 bg-white/50 focus:bg-white transition-all shadow-inner"
                        />
                        {errors.parentName && (
                          <span className="text-red-500 text-[10px] font-bold mt-1">
                            {errors.parentName}
                          </span>
                        )}
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col">
                        <label className="text-slate-600 font-sans font-bold text-xs mb-1.5 flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5 text-[#FFBE91]" />
                          <span>Phone Number</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.parentPhone}
                          onChange={(e) =>
                            setFormData({ ...formData, parentPhone: e.target.value })
                          }
                          placeholder="e.g. +91 9876543210"
                          className="px-4 py-3 rounded-xl border border-white/60 font-sans text-sm focus:outline-none focus:border-slate-800 bg-white/50 focus:bg-white transition-all shadow-inner"
                        />
                        {errors.parentPhone && (
                          <span className="text-red-500 text-[10px] font-bold mt-1">
                            {errors.parentPhone}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="flex flex-col">
                        <label className="text-slate-600 font-sans font-bold text-xs mb-1.5 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5 text-[#FFBE91]" />
                          <span>Email Address</span>
                        </label>
                        <input
                          type="email"
                          value={formData.parentEmail}
                          onChange={(e) =>
                            setFormData({ ...formData, parentEmail: e.target.value })
                          }
                          placeholder="e.g. parent@example.com"
                          className="px-4 py-3 rounded-xl border border-white/60 font-sans text-sm focus:outline-none focus:border-slate-800 bg-white/50 focus:bg-white transition-all shadow-inner"
                        />
                        {errors.parentEmail && (
                          <span className="text-red-500 text-[10px] font-bold mt-1">
                            {errors.parentEmail}
                          </span>
                        )}
                      </div>
                    </div>
                  </motionReact.div>
                )}

                {step === 3 && (
                  <motionReact.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col text-left"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <button
                        onClick={() => setStep(2)}
                        className="text-slate-400 hover:text-slate-600 transition-colors p-1"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <h4 className="font-heading font-bold text-base text-slate-800">
                        Preferred Callback Schedule
                      </h4>
                    </div>
                    <p className="text-slate-500 font-sans text-xs sm:text-sm mb-6 leading-relaxed pl-7">
                      Select when it is best for our administrative desk to call you.
                    </p>

                    <div className="flex flex-col gap-3 pl-1">
                      <label className="text-slate-600 font-sans font-bold text-xs mb-1 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#FFBE91]" />
                        <span>Callback Hours</span>
                      </label>

                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { label: "Morning (9am - 12pm)", value: "morning" },
                          { label: "Afternoon (12pm - 4pm)", value: "afternoon" },
                          { label: "Evening (4pm - 7pm)", value: "evening" },
                        ].map((time) => (
                          <button
                            key={time.value}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, callbackTime: time.value })
                            }
                            className={`p-3 rounded-xl border font-sans text-xs font-bold text-center transition-all ${
                              formData.callbackTime === time.value
                                ? "border-slate-800 bg-white text-slate-800 shadow-sm"
                                : "border-white/50 text-slate-600 bg-white/40"
                            }`}
                          >
                            {time.label}
                          </button>
                        ))}
                      </div>

                      <div className="p-4 rounded-2xl bg-white/40 border border-white/60 text-xs text-slate-600 mt-6 leading-relaxed shadow-sm">
                        <strong>Admission Note:</strong> By submitting this inquiry request, our counselors will contact you on the phone and provide complete digital copies of our school prospectus, fees framework, and route logistics.
                      </div>
                    </div>
                  </motionReact.div>
                )}

                {step === 4 && (
                  <motionReact.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-8 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-800 text-[#FFBE91] flex items-center justify-center mb-6 shadow-md">
                      <Check className="w-8 h-8" />
                    </div>

                    <h4 className="font-heading font-extrabold text-2xl text-slate-800 mb-3">
                      Callback Requested!
                    </h4>
                    <p className="text-slate-600 font-sans text-xs sm:text-sm mb-8 leading-relaxed max-w-sm">
                      Thank you, <strong>{formData.parentName}</strong>. We've successfully registered your request for grade <strong>{formData.grade}</strong>. Our officer will call you in the <strong>{formData.callbackTime}</strong>.
                    </p>

                    <button
                      onClick={handleReset}
                      className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-heading font-bold text-sm shadow-md"
                    >
                      Close Inquiry
                    </button>
                  </motionReact.div>
                )}
              </div>
            </div>

            {/* Footer Buttons */}
            {step < 4 && (
              <div className="flex items-center gap-3 pt-5 border-t border-slate-200/40">
                {step > 1 && (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-5 py-3.5 rounded-xl bg-white/60 border border-white/80 hover:bg-slate-100 text-slate-700 font-heading font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                )}
                <button
                  onClick={step === 3 ? handleSubmit : handleNextStep2}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-heading font-bold text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  <span>{step === 3 ? "Submit Callback Request" : "Next Step"}</span>
                  <ArrowRight className="w-4 h-4 text-[#FFDDB0]" />
                </button>
              </div>
            )}
          </motionReact.div>
        </>
      )}
    </AnimatePresence>
  );
}
