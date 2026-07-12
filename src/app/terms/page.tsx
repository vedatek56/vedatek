import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Terms of Service</h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: {lastUpdated}</p>
        </div>

        <div className="space-y-6 text-slate-400 text-sm leading-relaxed">
          <p>
            Welcome to the VEDATEK website (vedatek.co.uk). By browsing or using this website, you agree to comply with and be bound by the following terms and conditions of use.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">1. Nature of the Website</h2>
            <p>
              This website serves strictly as an informational portal describing the professional technology consulting capabilities, systems integration expertise, and custom software services offered by VEDATEK. The content does not constitute binding technical recommendations, engineering certifications, or formal client offers.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">2. Intellectual Property</h2>
            <p>
              Unless otherwise stated, all intellectual property rights in the designs, copywriting, SVG components, and layout code of this website belong to VEDATEK. You may view or print pages for your personal reference, but you may not duplicate, copy, or sell the assets without our express written consent.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">3. Form Submissions & Communication</h2>
            <p>
              Submitting an inquiry through our contact form does not create a client-consultant relationship or commit VEDATEK to delivering engineering services. Formal projects are subject to separate, explicitly signed Statement of Work (SOW) documents and consulting contracts.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">4. Disclaimer of Liability</h2>
            <p>
              The information on this site is provided on an &ldquo;as is&rdquo; basis for general reference. VEDATEK tries to ensure accuracy but makes no warranties regarding the complete precision, uptime, or lack of errors in the site content. We are not liable for any direct or indirect business losses arising from your use of this site or any external links.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-200">5. Governing Law</h2>
            <p>
              Your use of this website and any disputes arising out of it are subject to the laws of England and Wales, and the exclusive jurisdiction of the English courts.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-brand-border/30">
            <h2 className="text-lg font-bold text-slate-200">6. Clarifications</h2>
            <p>
              If you require clarification on any of these terms, please contact our team at:
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
