"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    project: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const servicesList = [
    { label: "AI & Automation", value: "AI & Automation" },
    { label: "Software Development", value: "Software Development" },
    { label: "Systems Integration", value: "Systems Integration" },
    { label: "EDI & Business Automation", value: "EDI & Business Automation" },
    { label: "Cloud & DevOps", value: "Cloud & DevOps" },
    { label: "Reliability & Observability", value: "Reliability & Observability" },
    { label: "Security & Infrastructure", value: "Security & Infrastructure" },
    { label: "Technology Consulting", value: "Technology Consulting" },
    { label: "Something Else", value: "Something Else" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    
    // Email regex
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }

    if (!formData.service) newErrors.service = "Please select a service interest";
    if (!formData.project.trim()) {
      newErrors.project = "Please tell us briefly about your project or challenge";
    } else if (formData.project.trim().length < 15) {
      newErrors.project = "Please provide a bit more detail (at least 15 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    try {
      // Simulate API network latency (1.5s)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // In a real application, you would connect this to your backend handler or serverless function:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      // if (!res.ok) throw new Error("Server error");
      
      setStatus("success");
      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        project: "",
      });
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your inquiry. Please try again or email us directly at hello@vedatek.co.uk.");
    }
  };

  return (
    <div className="w-full bg-slate-900/40 backdrop-blur-md rounded-2xl border border-brand-border/60 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-48 h-48 bg-brand-cyan/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-indigo/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center text-center py-12"
          >
            <div className="w-16 h-16 rounded-full bg-brand-teal/15 flex items-center justify-center mb-6 border border-brand-teal/30">
              <CheckCircle2 className="w-8 h-8 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold text-slate-100 mb-3">Conversation Started</h3>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed text-sm">
              Thank you for reaching out. We have received your inquiry and a senior engineer will review it shortly. We aim to respond within one business day.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand-cyan hover:text-white border-b border-brand-cyan/35 hover:border-white transition-all pb-1 focus:outline-none"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-5"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name field */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Name <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. David Ross"
                  disabled={status === "submitting"}
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 ${
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Company field */}
              <div>
                <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Company <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Acme Logistics Ltd"
                  disabled={status === "submitting"}
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 ${
                    errors.company ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30"
                  }`}
                />
                {errors.company && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.company}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Work Email field */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Work Email <span className="text-brand-cyan">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. david.ross@acme.com"
                  disabled={status === "submitting"}
                  className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Phone field */}
              <div>
                <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                  Phone <span className="text-slate-600">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +44 20 7946 0958"
                  disabled={status === "submitting"}
                  className="w-full bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30 transition-all duration-200"
                />
              </div>
            </div>

            {/* Help Dropdown field */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                What can we help with? <span className="text-brand-cyan">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                disabled={status === "submitting"}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none appearance-none cursor-pointer transition-all duration-200 ${
                  errors.service ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30"
                }`}
              >
                <option value="" className="text-slate-600">Select an area of interest...</option>
                {servicesList.map((item) => (
                  <option key={item.value} value={item.value} className="bg-slate-950 text-slate-200">
                    {item.label}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
                </p>
              )}
            </div>

            {/* Project / Challenge text area */}
            <div>
              <label htmlFor="project" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                Describe your Project or Challenge <span className="text-brand-cyan">*</span>
              </label>
              <textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="What systems are you trying to connect? What repetitive workflows or technical hurdles are slowing your business down?"
                disabled={status === "submitting"}
                rows={5}
                className={`w-full bg-slate-950/60 border rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none transition-all duration-200 resize-none ${
                  errors.project ? "border-red-500/50 focus:border-red-500" : "border-slate-800 focus:border-brand-indigo/60 focus:ring-1 focus:ring-brand-indigo/30"
                }`}
              ></textarea>
              {errors.project && (
                <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.project}
                </p>
              )}
            </div>

            {status === "error" && (
              <div className="p-4 bg-red-950/30 border border-red-800/40 rounded-xl flex gap-3 text-xs text-red-400 leading-relaxed">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <p>{errorMessage}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg shadow-brand-indigo/10 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Inquiry...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Start a Conversation
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
