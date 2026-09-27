import type { Metadata } from "next";
import Link from "next/link";
import AstroNavbar from "@/components/astroreply/AstroNavbar";
import AstroFooter from "@/components/astroreply/AstroFooter";
import { ShieldCheck, Lock, Trash2, EyeOff, ArrowLeft, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | AstroReply (VedaTek)",
  description:
    "GDPR, Apple App Store, and Google Play compliant Privacy Policy for AstroReply by VedaTek (uk.co.vedatek.astroreply). Zero sale of personal data, precision ephemeris calculations, and instant account deletion.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function AstroReplyPrivacyPage() {
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
            <span className="text-amber-400">Privacy Policy</span>
          </div>

          {/* Page Header */}
          <div className="space-y-4 border-b border-slate-800 pb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              GDPR & App Store Compliant
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-sm text-slate-400">
              Effective Date: January 1, 2026 • Application: <strong>AstroReply</strong> (Package: <code className="text-amber-300 text-xs bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">uk.co.vedatek.astroreply</code>) • Operated by <strong>VedaTek</strong>
            </p>
          </div>

          {/* Key Privacy Highlights Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                <EyeOff className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-white">Zero Data Sale</h2>
              <p className="text-[11px] text-slate-300">We never sell, monetize, or broker your personal or astrological data.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Lock className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-white">No Public AI Training</h2>
              <p className="text-[11px] text-slate-300">Your private chat transcripts are never used to train public LLM models.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                <Trash2 className="w-4 h-4" />
              </div>
              <h2 className="text-xs font-bold text-white">Instant Data Erasure</h2>
              <p className="text-[11px] text-slate-300">Purge your conversational memory or delete your entire account with 1 click.</p>
            </div>
          </div>

          {/* Privacy Content Sections */}
          <div className="space-y-10 text-slate-300 text-sm leading-relaxed">
            
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                1. Data Controller & Identity
              </h2>
              <p>
                This Privacy Policy governs the mobile application <strong>AstroReply</strong> (Android / iOS) and associated web services located at <a href="https://astroreply.vedatek.co.uk" className="text-amber-400 hover:underline">astroreply.vedatek.co.uk</a>. AstroReply is owned and operated by <strong>VedaTek</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered in the United Kingdom.
              </p>
              <p>
                If you have any questions regarding your personal data, you can reach our Data Protection team directly at <a href="mailto:support@vedatek.co.uk" className="text-amber-400 hover:underline">support@vedatek.co.uk</a>.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                2. Information We Collect
              </h2>
              <p>To provide high-precision astrological interpretations and continuous conversational context, we collect the following categories of information:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 pl-2">
                <li>
                  <strong className="text-white">Birth Chart Data:</strong> Date of birth, exact time of birth, and birth city/geographic coordinates (latitude/longitude). This data is strictly required to calculate planetary positions via the Swiss Ephemeris / NASA JPL ephemeris engine.
                </li>
                <li>
                  <strong className="text-white">User Inquiries & Chat Messages:</strong> Questions and reflections you submit within the AstroReply chat interface.
                </li>
                <li>
                  <strong className="text-white">AstroReply Conversational Memory:</strong> Encrypted key-value astrological summaries (e.g. current career goals, relationship dynamics) preserved across sessions to ensure personalized conversational continuity.
                </li>
                <li>
                  <strong className="text-white">Purchase & Subscription State:</strong> Anonymous receipt identifiers provided by Apple App Store (StoreKit) or Google Play Billing to verify active Free, Monthly, Annual, or Lifetime entitlements. We do not store raw credit card numbers.
                </li>
                <li>
                  <strong className="text-white">Basic Device Telemetry:</strong> Device OS version, application build number, and crash diagnostics to maintain software reliability.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                3. Purpose of Processing & Legal Basis (GDPR)
              </h2>
              <p>We process your data under the following GDPR lawful bases:</p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 pl-2">
                <li>
                  <strong className="text-white">Performance of Contract:</strong> To compute astrological birth charts, calculate Vimshottari Dashas and Western aspect matrices, and deliver conversational AI answers.
                </li>
                <li>
                  <strong className="text-white">User Consent:</strong> For storing conversational memory context across sessions, which you can withdraw or delete at any time.
                </li>
                <li>
                  <strong className="text-white">Legitimate Interests:</strong> To detect app crashes, prevent fraudulent abuse of free daily question quotas, and maintain system security.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                4. Absolute Privacy Commitments & AI Ethics
              </h2>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-amber-500/20 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  Our Core Commitments to AstroReply Users:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  <li>• <strong>No Data Selling:</strong> We do NOT sell, rent, or lease your personal data or astrological profiles to advertisers or third-party data brokers.</li>
                  <li>• <strong>No Public AI Training:</strong> Your chat messages and birth charts are NOT used to train public artificial intelligence models.</li>
                  <li>• <strong>Ephemeral Ephemeris Processing:</strong> Ephemeris coordinate calculations are performed deterministically.</li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                5. Data Retention & Instant Account Deletion
              </h2>
              <p>
                You maintain complete sovereign control over your data. In compliance with Apple App Store Account Deletion guidelines and Google Play user data policies:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 pl-2">
                <li>
                  <strong className="text-white">In-App Account Deletion:</strong> You can navigate to <em>Settings &rarr; Privacy &rarr; Delete Account</em> within the AstroReply mobile app to immediately and permanently delete your birth chart, chat history, and memory graph from our servers.
                </li>
                <li>
                  <strong className="text-white">Email Deletion Request:</strong> You may also request complete data erasure by emailing <a href="mailto:support@vedatek.co.uk" className="text-amber-400 hover:underline">support@vedatek.co.uk</a> with your user ID. Requests are processed within 48 hours.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                6. Your Rights Under GDPR & International Law
              </h2>
              <p>
                Depending on your jurisdiction (including the UK GDPR, EU GDPR, and California CCPA/CPRA), you have the right to:
              </p>
              <ul className="space-y-1.5 list-disc list-inside text-slate-300 pl-2">
                <li>Request access to copies of your personal data.</li>
                <li>Request rectification of inaccurate birth data.</li>
                <li>Request permanent erasure (&ldquo;Right to be Forgotten&rdquo;).</li>
                <li>Export your data in a portable JSON format.</li>
                <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO).</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                7. Children&apos;s Privacy
              </h2>
              <p>
                AstroReply is not intended for children under the age of 13 (or 16 in certain European jurisdictions). We do not knowingly collect personal data from children. If you believe a minor has provided birth data without parental consent, please notify us immediately at <a href="mailto:support@vedatek.co.uk" className="text-amber-400 hover:underline">support@vedatek.co.uk</a> for immediate removal.
              </p>
            </section>

            {/* Section 8 */}
            <section className="space-y-3 border-t border-slate-800 pt-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                8. Contact Information
              </h2>
              <p>
                For privacy inquiries, data subject access requests (DSAR), or compliance questions:
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs">
                <p><strong>VedaTek — Privacy & Legal Team</strong></p>
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
