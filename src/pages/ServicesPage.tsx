import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_NAP } from '../data/siteData';
import { Wrench, Shield, CheckCircle2, ArrowRight, DollarSign, Clock, Phone, AlertTriangle, Sparkles, Filter, ShieldCheck } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface ServicesPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'residential' | 'emergency' | 'specialty'>('all');

  const filteredServices = SERVICES_DATA.filter((svc) => {
    if (selectedFilter === 'emergency') return svc.emergencyEligible;
    if (selectedFilter === 'residential') return svc.id.includes('shingle') || svc.id.includes('roof-replacement') || svc.id.includes('roof-repair') || svc.id.includes('skylight');
    if (selectedFilter === 'specialty') return svc.id.includes('metal') || svc.id.includes('flat') || svc.id.includes('commercial') || svc.id.includes('cedar') || svc.id.includes('slate');
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Authoritative Navy Hero Header with Direct Call Button */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>14 Certified Roofing Solutions · Toms River & Ocean County</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading mb-5">
            Full-Scope Roofing Services in <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Toms River, NJ</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            From same-day emergency leak tarping to 50-year GAF architectural shingle replacements. Hand-fastened by our master crews to 130-mph hurricane code.
          </p>

          {/* Quick Dual Actions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_NAP.phoneRaw}`}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Call Direct: {BUSINESS_NAP.phone}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm border border-slate-700 hover:border-amber-400/40 transition-all cursor-pointer"
            >
              Request Free Written Estimate
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Filter Bar */}
      <section className="bg-white py-4 px-4 sm:px-6 lg:px-8 border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Filter className="w-3.5 h-3.5 text-amber-600" />
            <span>Filter Categories:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All 14 Services' },
              { id: 'residential', label: 'Residential Shingle' },
              { id: 'emergency', label: '24/7 Emergency & Leaks' },
              { id: 'specialty', label: 'Metal & Commercial' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-slate-900 text-amber-400 font-black shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Grid: Two-Tone Luxury Cards (NO plain white boxes, NO dark mode gloom) */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1 bg-white"
              >
                {/* Two-Tone Top: Dark Navy Header with Amber Icon */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-5 text-white relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-md shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      {svc.emergencyEligible && (
                        <span className="text-[10px] font-black uppercase tracking-wider text-white bg-rose-600 px-2.5 py-0.5 rounded-full shadow-xs">
                          24/7 Dispatch
                        </span>
                      )}
                      <span className="text-xs font-bold text-slate-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                        {svc.avgDuration}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors font-heading leading-tight">
                    {svc.title}
                  </h2>
                </div>

                {/* Two-Tone Bottom: Crisp White Surface */}
                <div className="p-6 flex flex-col flex-grow bg-white space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow">
                    {svc.shortDesc}
                  </p>

                  {/* Key Process Highlights Box */}
                  <div className="space-y-2 text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                    <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">Execution Scope:</span>
                    {svc.process.slice(0, 3).map((st, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1 font-medium text-slate-800">{st.title || st.desc}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing & CTA Button */}
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Est. Cost Range</span>
                      <span className="text-base font-black text-slate-950">{svc.priceRange}</span>
                    </div>

                    <button
                      onClick={() => onNavigate('service-detail', svc.slug)}
                      className="px-4 py-2 bg-slate-900 group-hover:bg-amber-400 group-hover:text-slate-950 text-white font-black text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Architectural Workmanship Matrix Section */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-amber-400 text-xs font-bold uppercase tracking-widest">
                Zero Compromise Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
                How We Engineer Roofs For Ocean County Coastal Weather
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Standard inland roofing practices fail within 5 years along the Barnegat Bay and coastal NJ. Our engineering protocols exceed building code to guarantee zero leaks.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg cursor-pointer"
                >
                  Schedule Your Free Engineering Inspection
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="text-amber-400 font-black text-sm mb-1">130-MPH Fastening Pattern</div>
                <p className="text-xs text-slate-300">6 ring-shank nails per shingle driven into solid plywood decking, preventing tear-off during nor'easters.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="text-amber-400 font-black text-sm mb-1">Double Ice & Water Shield</div>
                <p className="text-xs text-slate-300">Self-adhering membrane installed 6 feet up from eaves and inside all valleys to prevent winter freeze-thaw leaks.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="text-amber-400 font-black text-sm mb-1">Salt-Air Proof Flashing</div>
                <p className="text-xs text-slate-300">Heavy-gauge aluminum and copper chimney flashing custom-bent on site to resist salt mist corrosion.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <div className="text-amber-400 font-black text-sm mb-1">Continuous Ridge Ventilation</div>
                <p className="text-xs text-slate-300">Baffled intake and exhaust systems that lower attic summer temperatures by up to 35°F and prevent mold.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
