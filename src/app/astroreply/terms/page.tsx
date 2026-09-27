import type { Metadata } from "next";
import Link from "next/link";
import AstroNavbar from "@/components/astroreply/AstroNavbar";
import AstroFooter from "@/components/astroreply/AstroFooter";
import { FileText, AlertTriangle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | AstroReply (VedaTek)",
  description:
    "Terms of Service for AstroReply by VedaTek (uk.co.vedatek.astroreply). Astrological entertainment and reflection disclaimer, in-app subscription terms, and user guidelines.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AstroReplyTermsPage() {
  return (
    <div className="astro-theme astro-radial-bg min-h-screen text-slate-100 flex flex-col selection:bg-amber-400 selection:text-slate-950">
      <AstroNavbar />

      <div className="flex-grow pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb / Back link */}
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link
              href="/astroreply"
              className="hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to AstroReply Home
            </Link>
            <span>/</span>
            <span className="text-amber-400">Terms of Service</span>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              Legal Agreement & Astrological Disclaimer
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Terms of Service
            </h1>
            <p className="text-sm text-slate-400">
              Last Updated: January 1, 2026 • Application: <strong>AstroReply</strong> (<code className="text-amber-300 text-xs bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">uk.co.vedatek.astroreply</code>) • Operated by <strong>VedaTek</strong>
            </p>
          </div>

          {/* Critical Astrological Disclaimer Banner */}
          <div className="p-6 rounded-3xl bg-amber-950/30 border-2 border-amber-500/40 space-y-3">
            <div className="flex items-center gap-2.5 text-amber-400 font-bold text-sm sm:text-base">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
              IMPORTANT ASTROLOGICAL & ENTERTAINMENT DISCLAIMER
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              AstroReply provides AI-generated astrological interpretations based on astronomical ephemeris algorithms for <strong>introspection, cultural study, personal reflection, and entertainment purposes only</strong>. AstroReply does NOT provide medical, mental health, legal, investment, or professional financial advice. You should never make critical life, medical, or financial decisions solely based on astrological readings. Always consult a qualified licensed professional for healthcare, financial, or legal matters.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, accessing, or using the <strong>AstroReply</strong> mobile application or website (<a href="https://astroreply.vedatek.co.uk" className="text-amber-400 hover:underline">astroreply.vedatek.co.uk</a>), you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use the application.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                2. Eligibility & Account Registration
              </h2>
              <p>
                You must be at least 13 years of age (or 16 in certain European jurisdictions) to use AstroReply. By using the app, you represent that you meet the age requirements and that all birth information (date, time, and birthplace) you provide is accurate for chart calculation purposes.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                3. Subscriptions, In-App Purchases & Billing
              </h2>
              <p>AstroReply offers both free tier features and optional paid subscriptions:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 pl-2">
                <li>
                  <strong className="text-white">Free Tier:</strong> Includes 3 free astrological queries every 24 hours.
                </li>
                <li>
                  <strong className="text-white">Monthly Flex (£2.99 / month):</strong> Billed monthly, auto-renews unless canceled at least 24 hours before the renewal date.
                </li>
                <li>
                  <strong className="text-white">Annual Pass (£14.99 / year):</strong> Includes a 7-day free trial. If not canceled before the trial concludes, the annual subscription is billed.
                </li>
                <li>
                  <strong className="text-white">Lifetime Access (£39.99 one-time):</strong> Grants perpetual access to AstroReply features without recurring renewal charges.
                </li>
              </ul>
              <p className="pt-1">
                <strong>Payment Processing & Cancellation:</strong> All financial transactions and renewals are handled directly through Apple App Store (Apple Media Services) or Google Play Store (Google LLC). You can cancel subscriptions at any time via your device&apos;s Apple ID or Google Play Account Settings.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                4. Acceptable Use & Conduct
              </h2>
              <p>You agree not to:</p>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-2">
                <li>Use AstroReply to harass, abuse, or defame any individual.</li>
                <li>Attempt to reverse engineer, decompile, or extract the underlying astronomical ephemeris or AI model routing algorithms.</li>
                <li>Circumvent free tier question rate limits or payment verification systems.</li>
                <li>Use automated scripts, bots, or scraping tools against our APIs.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                5. Intellectual Property Rights
              </h2>
              <p>
                All trademarks, logos, UI designs, code, ephemeris integration pipelines, and branding associated with AstroReply and VedaTek are the exclusive property of VedaTek. You are granted a limited, personal, non-exclusive, non-transferable license to use the app for personal use.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, VedaTek and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your access to or inability to access AstroReply, or any reliance placed on astrological interpretations provided by the software.
              </p>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                7. Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms of Service are governed by and construed in accordance with the laws of <strong>England and Wales</strong>, without regard to its conflict of law principles. Any legal dispute shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 border-t border-slate-800 pt-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                8. Contact Information
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                <p><strong>VedaTek — Legal Department</strong></p>
                <p>Application: AstroReply (uk.co.vedatek.astroreply)</p>
                <p>Email: <a href="mailto:support@vedatek.co.uk" className="text-amber-400 hover:underline">support@vedatek.co.uk</a></p>
                <p>Website: <a href="https://astroreply.vedatek.co.uk" className="text-amber-400 hover:underline">https://astroreply.vedatek.co.uk</a></p>
              </div>
            </section>

          </div>

        </div>
      </div>

      <AstroFooter />
    </div>
  );
}
