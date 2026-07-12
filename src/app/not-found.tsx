import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-slate-950 min-h-[75vh] flex items-center justify-center py-20 px-4">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-brand-indigo/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-md text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-brand-border/60 flex items-center justify-center text-brand-cyan mx-auto animate-bounce">
          <Compass className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-semibold block">Error 404</span>
          <h1 className="text-3xl font-black text-white tracking-tight">Resource Not Found</h1>
          <p className="text-slate-400 text-sm leading-relaxed max-w-sm mx-auto">
            The page or dynamic resource you are looking for does not exist or has been moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center bg-gradient-to-r from-brand-indigo to-brand-cyan hover:from-brand-indigo/90 hover:to-brand-cyan/90 text-slate-950 font-bold py-3 px-6 rounded-full text-xs uppercase tracking-wider shadow-md"
          >
            Back to Safety
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-350 font-semibold py-3 px-6 rounded-full text-xs uppercase tracking-wider"
          >
            Contact Support <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
