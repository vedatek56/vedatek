import { Check, Sparkles, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function AstroPricing() {
  const plans = [
    {
      name: "Free Tier",
      price: "£0",
      period: "forever",
      description: "Ideal for daily astrological touchpoints and basic horoscopes.",
      features: [
        "3 Free AI Questions Daily",
        "Basic Vedic & Western Sun Sign Insights",
        "Daily Transit Summary",
        "English + 4 Regional Languages",
        "Zero Ads, 100% Private",
      ],
      ctaText: "Start Free Today",
      ctaHref: "#download-play",
      popular: false,
      badge: "No Credit Card",
      buttonClass: "bg-[#18224b] hover:bg-[#1f274a] text-white border border-white/25",
    },
    {
      name: "Monthly Flex",
      price: "£2.99",
      period: "per month",
      description: "Full access on a flexible, month-to-month basis with instant cancellation.",
      features: [
        "Unlimited AI Astrological Chats",
        "Full Janma Kundali & D9 Navamsha Charts",
        "Vimshottari Dasha & Transit Forecasts",
        "AstroReply Conversational Memory",
        "Cancel Anytime in 1-Click",
      ],
      ctaText: "Choose Monthly",
      ctaHref: "#download-play",
      popular: false,
      badge: "Flexible",
      buttonClass: "bg-[#18224b] hover:bg-[#1f274a] text-white border border-white/25",
    },
    {
      name: "Annual Pass",
      price: "£14.99",
      period: "per year",
      description: "Our most popular membership. Includes a 7-day free trial, equivalent to just £1.25/mo.",
      features: [
        "Everything in Monthly Flex",
        "Includes 7-Day Risk-Free Trial",
        "36-Point Ashta Kuta Synastry Matching",
        "High-Priority Ephemeris Compute Engine",
        "Save 58% Compared to Monthly",
        "Continuous Life Journey Memory Graph",
      ],
      ctaText: "Start 7-Day Free Trial",
      ctaHref: "#download-play",
      popular: true,
      badge: "Most Popular • Best Value",
      buttonClass: "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold shadow-xl shadow-amber-500/30",
    },
    {
      name: "Lifetime Access",
      price: "£39.99",
      period: "one-time payment",
      description: "Own AstroReply forever with permanent VIP status and zero recurring fees.",
      features: [
        "Forever Unlimited Everything",
        "Zero Subscriptions or Renewals",
        "All Future Feature Updates Included",
        "VIP Fast-Track Model Responses",
        "Unlimited Multi-Person Chart Storage",
        "Family & Synastry Vault",
      ],
      ctaText: "Get Lifetime Access",
      ctaHref: "#download-play",
      popular: false,
      badge: "One-Time Pay",
      buttonClass: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-extrabold shadow-xl shadow-indigo-500/30",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 border-t border-white/20 bg-[#080b18]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/40 bg-amber-400/15 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400" />
            Simple & Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-sm">
            Start Free. Upgrade when you want <br className="hidden sm:inline" />
            <span className="astro-gold-gradient">unlimited depth.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#cbd5e1] font-normal">
            No dark patterns, no hidden subscription traps. Enjoy 3 free questions every day, or unlock limitless deep ephemeris consultations.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-7 flex flex-col justify-between space-y-6 transition-all duration-300 relative ${
                plan.popular
                  ? "bg-[#11162e] border-2 border-amber-400 shadow-2xl shadow-amber-500/20 scale-[1.03] z-10"
                  : "bg-[#11152a]/90 border border-white/25 hover:border-amber-400/50 shadow-xl shadow-black/50"
              }`}
            >
              {/* Badge */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      plan.popular
                        ? "bg-amber-400 text-slate-950 font-black shadow-md"
                        : "bg-[#181e38] border border-white/25 text-slate-200"
                    }`}
                  >
                    {plan.badge}
                  </span>
                  {plan.popular && (
                    <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                  )}
                </div>

                {/* Plan Name & Price */}
                <div>
                  <h3 className="text-xl font-extrabold text-white">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-200 font-semibold">
                      /{plan.period}
                    </span>
                  </div>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed font-medium">
                    {plan.description}
                  </p>
                </div>

                {/* Feature List */}
                <div className="pt-4 border-t border-white/20 space-y-3">
                  <span className="text-[11px] font-bold uppercase text-slate-200 tracking-wider block">
                    What&apos;s Included:
                  </span>
                  <ul className="space-y-2.5 text-xs text-slate-100 font-medium">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={plan.ctaHref}
                  className={`w-full py-3.5 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${plan.buttonClass}`}
                >
                  {plan.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-3xl mx-auto p-6 rounded-3xl bg-[#11162e] border border-white/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-200 text-center sm:text-left shadow-xl">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-white text-sm block">Apple & Google In-App Purchase Protection</span>
              <span className="text-slate-200 font-normal">Manage or cancel your subscription at any time directly in your App Store or Play Store settings.</span>
            </div>
          </div>
          <span className="shrink-0 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
            100% Secure
          </span>
        </div>

      </div>
    </section>
  );
}
