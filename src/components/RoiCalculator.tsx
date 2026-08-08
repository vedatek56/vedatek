"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Calculator, ArrowRight, TrendingUp, Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function RoiCalculator() {
  const [ordersPerMonth, setOrdersPerMonth] = useState(1000);

  // Calculations
  const manualMinutesPerOrder = 3;
  const adminHourlyRate = 20;
  
  const hoursWasted = Math.round((ordersPerMonth * manualMinutesPerOrder) / 60);
  const moneyWasted = hoursWasted * adminHourlyRate;
  const estimatedErrors = Math.round(ordersPerMonth * 0.02); // 2% error rate

  // Animation values
  const containerVariants: any = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } 
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase mb-6">
            <Calculator className="w-3.5 h-3.5" />
            <span>ROI Calculator</span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-black text-slate-100 mb-6 tracking-tight">
            Stop Guessing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-indigo">Calculate Your Savings.</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Manual data entry is quietly draining your margins. Use the slider below to see exactly how much time and money a VEDATEK automated integration will save your business every single month.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="bg-slate-900/40 border border-brand-border/60 rounded-3xl p-6 sm:p-12 backdrop-blur-xl relative overflow-hidden"
        >
          {/* Inner decorative glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-brand-indigo/10 blur-[100px] rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left: Input Section */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-200 mb-2">Monthly Order Volume</h3>
                <p className="text-slate-400 text-sm mb-8">How many orders do you process across all channels?</p>
                
                <div className="relative mb-8">
                  <div className="flex justify-between text-brand-cyan font-mono font-bold text-2xl mb-4">
                    <span>{ordersPerMonth.toLocaleString()}</span>
                    <span className="text-slate-500 text-sm mt-1">Orders / month</span>
                  </div>
                  
                  <input 
                    type="range" 
                    min="100" 
                    max="20000" 
                    step="100"
                    value={ordersPerMonth}
                    onChange={(e) => setOrdersPerMonth(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-cyan focus:outline-none focus:ring-2 focus:ring-brand-cyan/50"
                  />
                  <div className="flex justify-between text-xs text-slate-500 font-mono mt-3">
                    <span>100</span>
                    <span>20,000+</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50">
                <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider font-mono">Assumptions:</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span><strong className="text-slate-300">3 minutes</strong> manual admin time per order</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span><strong className="text-slate-300">£20/hour</strong> average admin wage</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                    <span><strong className="text-slate-300">2%</strong> average human error rate</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Results Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Cost Savings */}
              <div className="sm:col-span-2 bg-gradient-to-br from-brand-cyan/10 to-brand-indigo/10 border border-brand-cyan/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <TrendingUp className="w-24 h-24 text-brand-cyan" />
                </div>
                <div className="relative z-10">
                  <span className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider block mb-2">Money Saved Per Month</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl text-slate-300">£</span>
                    <motion.span 
                      key={moneyWasted}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-5xl sm:text-6xl font-black text-white tracking-tighter"
                    >
                      {moneyWasted.toLocaleString()}
                    </motion.span>
                  </div>
                  <p className="text-slate-400 text-sm mt-3">Direct labor cost eliminated through automated integration.</p>
                </div>
              </div>

              {/* Time Savings */}
              <div className="bg-slate-800/40 border border-brand-border/40 rounded-2xl p-6">
                <Clock className="w-6 h-6 text-brand-teal mb-4" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Time Recovered</span>
                <motion.div 
                  key={hoursWasted}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-3xl font-black text-slate-200"
                >
                  {hoursWasted.toLocaleString()} <span className="text-lg text-slate-400 font-bold">hrs</span>
                </motion.div>
              </div>

              {/* Error Reduction */}
              <div className="bg-slate-800/40 border border-brand-border/40 rounded-2xl p-6">
                <AlertTriangle className="w-6 h-6 text-brand-indigo mb-4" />
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Errors Prevented</span>
                <motion.div 
                  key={estimatedErrors}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-3xl font-black text-slate-200"
                >
                  {estimatedErrors.toLocaleString()} <span className="text-lg text-slate-400 font-bold">/ mo</span>
                </motion.div>
              </div>

              <div className="sm:col-span-2 mt-4">
                <Link href="/book" className="group flex items-center justify-center gap-2 w-full bg-white text-slate-950 font-bold py-4 px-6 rounded-xl text-sm uppercase tracking-wider hover:bg-slate-200 transition-colors">
                  Claim These Savings
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
