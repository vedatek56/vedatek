import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "July 2026";

  return (
    <div className="bg-slate-950 min-h-screen py-16 sm:py-24 text-left">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-brand-cyan uppercase hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="space-y-4 border-b border-brand-border/40 pb-8">
          <div className="w-12 h-12 rounded-xl bg-slate-900 border border-brand-border/60 flex items-center justify-center text-brand-cyan">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
          <p>
            At VEDATEK, we are committed to protecting and respecting your privacy. This policy explains how we collect, use, and protect your personal information when you visit our website (vedatek.co.uk) or fill out our contact forms.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">1. Information We Collect</h2>
            <p>
              We collect information that you choose to provide directly to us when filling out our contact form, starting a project inquiry, or sending us an email. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and Job Title</li>
              <li>Company Name</li>
              <li>Contact Information (Work Email, Phone Number)</li>
              <li>Details of your technology challenge or integration project</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Respond to your initial project inquiries or requests for consultations</li>
              <li>Understand your business needs and propose technical solutions</li>
              <li>Improve the usability and security of our website and services</li>
              <li>Comply with our legal and regulatory obligations in the UK</li>
            </ul>
            <p>We will never sell or lease your personal information to third parties.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">3. Data Security and Storage</h2>
            <p>
              We prioritize data security. The information submitted via our forms is transmitted securely and stored in encrypted environments. We implement robust access controls, firewalls, and secrets management to prevent unauthorized access, modification, or exposure of your data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">4. Legal Basis under UK GDPR</h2>
            <p>
              Under the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018, the legal bases we rely on for processing this information are:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Consent:</strong> When you voluntarily submit your contact information to start a conversation.</li>
              <li><strong>Legitimate Interests:</strong> To run our business consultancy and respond to business-related technical requests.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">5. Your Data Protection Rights</h2>
            <p>Under UK data protection law, you have rights including:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Your right of access:</strong> You have the right to ask us for copies of your personal information.</li>
              <li><strong>Your right to rectification:</strong> You have the right to ask us to rectify personal information you think is inaccurate.</li>
              <li><strong>Your right to erasure:</strong> You have the right to ask us to erase your personal information in certain circumstances.</li>
              <li><strong>Your right to restriction of processing:</strong> You have the right to ask us to restrict the processing of your personal information.</li>
            </ul>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/30">
            <h2 className="text-lg font-bold text-slate-200">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or how we manage your personal information, please contact us at:
            </p>
            <p className="font-mono text-xs text-brand-cyan">
              Email: hello@vedatek.co.uk
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
