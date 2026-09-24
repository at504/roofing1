import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';

interface CtaStripProps {
  headline?: string;
  subtext?: string;
  onOpenQuote: () => void;
}

export const CtaStrip: React.FC<CtaStripProps> = ({
  headline = "Ready to Protect Your Ocean County Home With a Lifetime Roof?",
  subtext = "Same-day leak inspection · 10-year written workmanship warranty · 0% financing available",
  onOpenQuote
}) => {
  return (
    <section className="bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 border-y border-slate-800 text-white relative overflow-hidden">
      {/* Background Accent subtle glow */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Left copy */}
        <div className="text-center lg:text-left space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400">
            <ShieldCheck className="w-4 h-4" />
            <span>24/7 Ocean County Emergency Hotline</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight font-heading">
            {headline}
          </h3>
          <p className="text-slate-300 text-sm sm:text-base font-medium">
            {subtext}
          </p>
        </div>

        {/* Right CTA Buttons (Repeat Pattern: Call Now + Get Free Quote) */}
        <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
          <a
            href={`tel:${BUSINESS_NAP.phoneRaw}`}
            className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-full text-base transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            <span>Call {BUSINESS_NAP.phone}</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full text-base border-2 border-amber-400/40 hover:border-amber-400 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Get Free Quote</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
