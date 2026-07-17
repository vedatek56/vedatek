"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Download, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function LeadMagnet() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid work email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

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
          subject: `[LEAD MAGNET DOWNLOAD] ${formData.name} requested Integration Mistakes Guide`,
          from_name: "VEDATEK Lead Magnet",
          message: `${formData.name} (${formData.email}) has requested the '25 Costliest Systems Integration Mistakes' guide.`
        })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit request");
      }

      setStatus("success");

      // Trigger automatic download of the guide asset
      const link = document.createElement("a");
      link.href = "/downloads/vedatek-integration-mistakes.pdf";
      link.setAttribute("download", "vedatek-integration-mistakes.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to initiate download. Please try again.");
    }
  };

  return (
    <div className="bg-slate-900/40 border border-brand-border/60 rounded-3xl p-6 sm:p-10 max-w-3xl mx-auto my-12 relative overflow-hidden">
      {/* Decorative gradient sphere */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-cyan/5 blur-2xl pointer-events-none"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Cover / Info Column */}
        <div className="md:col-span-6 space-y-4 text-left">
          <div className="w-10 h-10 rounded-xl bg-brand-indigo/10 border border-brand-indigo/30 flex items-center justify-center text-brand-cyan">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono tracking-widest uppercase text-brand-cyan font-bold block">Free Engineering Resource</span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-100 tracking-tight leading-tight">
            The 25 Costliest Systems Integration Mistakes.
          </h3>
          <p className="text-slate-400 text-xs leading-relaxed font-light">
            Avoid inventory drifts, failed API payloads, security loopholes, and custom code lock-ins. Written by senior engineers who have built setups for UK banks and enterprise e-commerce.
          </p>
        </div>

        {/* Form Column */}
        <div className="md:col-span-6 bg-slate-950/40 border border-brand-border/30 rounded-2xl p-5 sm:p-6 text-left">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-4 space-y-3"
              >
                <div className="w-10 h-10 bg-brand-teal/10 border border-brand-teal/30 rounded-full flex items-center justify-center mx-auto text-brand-teal">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-200">Download Started!</h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                  Your PDF guide is downloading. If it didn&apos;t start automatically,{" "}
                  <a href="/downloads/vedatek-integration-mistakes.pdf" download className="text-brand-cyan font-semibold hover:underline">
                    click here to download manually
                  </a>.
                </p>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono tracking-wider uppercase text-slate-400 font-bold block">First Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sarah"
                    className={`w-full bg-slate-950/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan ${
                      errors.name ? "border-red-500/80" : "border-brand-border/40"
                    }`}
                  />
                  {errors.name && <p className="text-[9px] text-red-400 font-mono">{errors.name}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-mono tracking-wider uppercase text-slate-400 font-bold block">Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. sarah@company.com"
                    className={`w-full bg-slate-950/80 border rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-cyan ${
                      errors.email ? "border-red-500/80" : "border-brand-border/40"
                    }`}
                  />
                  {errors.email && <p className="text-[9px] text-red-400 font-mono">{errors.email}</p>}
                </div>

                {status === "error" && (
                  <div className="bg-red-950/20 border border-red-500/30 rounded-xl p-3 flex gap-2 text-[10px] text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-1.5 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 disabled:from-slate-800 disabled:to-slate-800 text-slate-950 disabled:text-slate-500 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Sending PDF...
                    </>
                  ) : (
                    <>
                      Download Guide (PDF)
                      <Download className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
