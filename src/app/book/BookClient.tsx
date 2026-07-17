"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, CheckCircle2, AlertCircle, Loader2, ArrowLeft } from "lucide-react";

export default function BookClient() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [step, setStep] = useState<1 | 2>(1);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    systems: [] as string[],
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Generate next 7 business days dynamically starting from today
  const getNextBusinessDays = (count: number) => {
    const days = [];
    let current = new Date();
    // Move to next day if it's currently past 5 PM local time to avoid booking same-day past slots
    if (current.getHours() >= 17) {
      current.setDate(current.getDate() + 1);
    }
    
    while (days.length < count) {
      const dayOfWeek = current.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Formatted date string for display e.g. "Monday, 20 Jul"
        const formatted = current.toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "short",
        });
        // Key value e.g. "2026-07-20"
        const value = current.toISOString().split("T")[0];
        days.push({ formatted, value });
      }
      current.setDate(current.getDate() + 1);
    }
    return days;
  };

  const businessDays = getNextBusinessDays(7);

  const timeSlots = [
    "09:30 AM",
    "11:00 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM"
  ];

  const systemsList = [
    "Linnworks",
    "Microsoft Dynamics 365 Business Central",
    "EDI (B2B Ordering)",
    "Shopify",
    "AWS / Cloud DevOps",
    "Custom API / Database Sync"
  ];

  const handleSystemToggle = (system: string) => {
    setFormData((prev) => {
      const isSelected = prev.systems.includes(system);
      return {
        ...prev,
        systems: isSelected
          ? prev.systems.filter((s) => s !== system)
          : [...prev.systems, system],
      };
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleNext = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    const selectedDayObj = businessDays.find((d) => d.value === selectedDate);
    const dateFormatted = selectedDayObj ? selectedDayObj.formatted : selectedDate;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: "4c203520-e95e-4ca1-90cd-61bbcbbf1f45",
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          company: formData.company,
          phone: formData.phone || "Not provided",
          subject: `[DISCOVERY CALL BOOKING] ${formData.name} - ${formData.company}`,
          from_name: "VEDATEK Booking System",
          message: `
Requested Date: ${dateFormatted}
Requested Time: ${selectedTime}

Systems Config: ${formData.systems.length > 0 ? formData.systems.join(", ") : "None specified"}
Current Operations Challenge:
${formData.notes || "No details provided"}
          `
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to book appointment");
      }
      
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen py-20 sm:py-28">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Header */}
        <div className="space-y-4 mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-bold block">Discovery Call</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Schedule a Technical Diagnostic Call.
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Choose a time for a direct, 30-minute operational review with a senior engineer. <br />
            <strong>No high-pressure sales pitch. Just systems, architecture, and practical engineering solutions.</strong>
          </p>
        </div>

        {/* Steps Progress Indicator */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? "bg-brand-cyan text-slate-950" : "bg-slate-800 text-slate-400"}`}>1</span>
            <span className={`text-xs font-semibold ${step === 1 ? "text-slate-200" : "text-slate-500"}`}>Select Date &amp; Time</span>
          </div>
          <div className="w-10 h-[1px] bg-slate-800"></div>
          <div className="flex items-center gap-2">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? "bg-brand-cyan text-slate-950" : "bg-slate-800 text-slate-400"}`}>2</span>
            <span className={`text-xs font-semibold ${step === 2 ? "text-slate-200" : "text-slate-500"}`}>Tell Us About Your System</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="bg-slate-900/30 border border-brand-border/60 rounded-3xl p-8 sm:p-12 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-brand-cyan/10 border border-brand-cyan/30 rounded-2xl flex items-center justify-center mx-auto text-brand-cyan">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-100">Discovery Call Requested</h2>
              <div className="text-slate-400 text-sm max-w-md mx-auto space-y-4 font-light leading-relaxed">
                <p>
                  Thank you! We have received your booking request for:
                </p>
                <div className="bg-slate-950/60 border border-brand-border/20 rounded-2xl p-4 inline-flex flex-col items-center justify-center">
                  <span className="text-brand-cyan font-bold font-mono text-sm uppercase">
                    {businessDays.find((d) => d.value === selectedDate)?.formatted}
                  </span>
                  <span className="text-slate-200 text-xl font-bold mt-1">
                    {selectedTime}
                  </span>
                </div>
                <p>
                  A senior engineer will review your operational requirements and email you a calendar invite containing the Google Meet video link within the next 4 business hours.
                </p>
              </div>
            </motion.div>
          ) : step === 1 ? (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              {/* Date Selection */}
              <div className="md:col-span-7 space-y-4">
                <label className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold block flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-indigo" />
                  1. Pick a Day (Mon - Fri)
                </label>
                <div className="space-y-2">
                  {businessDays.map((day) => {
                    const isSelected = selectedDate === day.value;
                    return (
                      <button
                        key={day.value}
                        type="button"
                        onClick={() => {
                          setSelectedDate(day.value);
                          setSelectedTime(""); // reset time on day change
                        }}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex justify-between items-center ${
                          isSelected
                            ? "bg-brand-indigo/10 border-brand-indigo text-slate-100 font-bold shadow-md shadow-brand-indigo/5"
                            : "bg-slate-900/30 border-brand-border/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                        }`}
                      >
                        <span className="text-sm">{day.formatted}</span>
                        {isSelected && <span className="text-xs font-mono uppercase bg-brand-indigo text-white px-2 py-0.5 rounded">Selected</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              <div className="md:col-span-5 space-y-4">
                <label className="text-xs uppercase font-mono tracking-widest text-slate-400 font-bold block flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-teal" />
                  2. Choose a Slot
                </label>
                {!selectedDate ? (
                  <div className="h-[300px] border border-dashed border-brand-border/30 rounded-2xl flex items-center justify-center text-slate-500 text-xs italic text-center p-6">
                    Please select a date first to view available time slots.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {timeSlots.map((time) => {
                      const isSelected = selectedTime === time;
                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`w-full text-center p-4 rounded-2xl border transition-all duration-200 text-sm ${
                            isSelected
                              ? "bg-brand-teal/10 border-brand-teal text-slate-100 font-bold shadow-md shadow-brand-teal/5"
                              : "bg-slate-900/30 border-brand-border/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}

                    <div className="pt-6">
                      <button
                        type="button"
                        onClick={handleNext}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 disabled:text-slate-500 font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all"
                      >
                        Next Step
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-slate-900/10 border border-brand-border/40 rounded-3xl p-6 sm:p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Back button */}
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-brand-cyan"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Back to Date Selection
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan ${
                        errors.name ? "border-red-500/80" : "border-brand-border/40"
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 font-mono">{errors.name}</p>}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Retail Ltd"
                      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan ${
                        errors.company ? "border-red-500/80" : "border-brand-border/40"
                      }`}
                    />
                    {errors.company && <p className="text-[10px] text-red-400 font-mono">{errors.company}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@company.com"
                      className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan ${
                        errors.email ? "border-red-500/80" : "border-brand-border/40"
                      }`}
                    />
                    {errors.email && <p className="text-[10px] text-red-400 font-mono">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +44 7911 123456"
                      className="w-full bg-slate-950 border border-brand-border/40 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan"
                    />
                  </div>
                </div>

                {/* System Checkboxes */}
                <div className="space-y-2.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">
                    Which systems are you connecting? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {systemsList.map((system) => {
                      const isSelected = formData.systems.includes(system);
                      return (
                        <button
                          key={system}
                          type="button"
                          onClick={() => handleSystemToggle(system)}
                          className={`text-left px-4 py-3 rounded-xl border text-xs transition-all duration-200 flex items-center gap-2.5 ${
                            isSelected
                              ? "bg-brand-indigo/10 border-brand-indigo text-slate-200 font-bold"
                              : "bg-slate-950 border-brand-border/40 text-slate-400 hover:border-slate-800"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded border flex items-center justify-center ${
                            isSelected ? "border-brand-cyan bg-brand-cyan text-slate-950" : "border-slate-800 bg-slate-900"
                          }`}>
                            {isSelected && <span className="text-[9px] leading-none">✓</span>}
                          </span>
                          {system}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Challenge Notes */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-mono tracking-widest uppercase text-slate-400 font-bold block">
                    Briefly describe your main operational bottlenecks *
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="e.g., Inventory sync lags 30 mins between Shopify and Business Central causing occasional overselling. Want to move to direct API connection with error tracking."
                    className="w-full bg-slate-950 border border-brand-border/40 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan"
                  ></textarea>
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-4 flex gap-3 text-xs text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 disabled:text-slate-500 font-bold py-4 px-6 rounded-full text-xs uppercase tracking-wider transition-all"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting booking request...
                      </>
                    ) : (
                      <>
                        Request Booking
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
