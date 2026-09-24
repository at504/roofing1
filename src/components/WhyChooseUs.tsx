import React from 'react';
import { ShieldCheck, Award, DollarSign, CheckCircle2, Phone, Star, Wrench, Shield } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const points = [
    {
      icon: Award,
      title: "Factory-Certified GAF Master Elite® Materials",
      desc: "Only 2% of US roofers qualify for GAF Master Elite certification. We install GAF Timberline HDZ® with LayerLock® technology engineered to withstand 130-MPH coastal hurricane winds with zero-leak guarantees."
    },
    {
      icon: ShieldCheck,
      title: "In-House Master Roofing Crews (No Subcontractors)",
      desc: "Our installers average 14+ years working together on Ocean County roofs. We operate under strict OSHA safety guidelines, utilize perimeter catchment nets, and conduct triple magnetic sweeps leaving lawns cleaner than we found them."
    },
    {
      icon: DollarSign,
      title: "Transparent Written Pricing & 0% Financing",
      desc: "Every quote includes itemized material, labor, and municipal permit costs with zero down payment required. We provide flexible 0% APR financing options and direct insurance claims assistance."
    }
  ];

  return (
    <section className="py-20 bg-slate-950 border-b border-slate-800 text-white relative overflow-hidden">
      {/* Subtle Background Radial Glows */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Roofer images & verified credentials stamps */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-72 sm:w-96 aspect-square">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/40 animate-[spin_60s_linear_infinite]"></div>

              {/* Main Circular Image */}
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl border-4 border-slate-800 bg-slate-900">
                <img
                  src="/src/assets/images/hero_roofer_toms_river_1790236081328.jpg"
                  alt="Certified Toms River roofer inspecting shingle roof"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Smaller floating circular badge top right */}
              <div className="absolute -top-3 -right-3 w-28 h-28 rounded-full overflow-hidden border-4 border-slate-800 shadow-xl bg-slate-900 hidden sm:block">
                <img
                  src="/src/assets/images/roof_inspection_diagnostic_1790236126633.jpg"
                  alt="Roof diagnostic inspection in Toms River"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Bottom Left Badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-slate-700 max-w-[210px]">
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-extrabold text-white">4.9 / 5.0 Rating</div>
                <div className="text-[11px] text-slate-400">200+ Ocean County Reviews</div>
              </div>

              {/* Center Floating Certified Stamp */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 p-3.5 rounded-2xl shadow-xl font-black text-center text-xs">
                <div className="font-extrabold text-[10px] tracking-wider uppercase">10-YEAR</div>
                <div className="text-sm font-black">WARRANTY</div>
              </div>

            </div>
          </div>

          {/* Right Column: Copy + Checkpoints */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-400 mb-2">
                <span>The Toms River Standard</span>
                <span>·</span>
                <span>Proven Local Track Record</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight">
                Why Ocean County Homeowners Choose Us
              </h2>
              <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
                Roofing along the Barnegat Bay and Jersey Shore coast demands specialized wind-resistance and corrosion-proof flashing. We install roofs engineered specifically for New Jersey's atmospheric conditions.
              </p>
            </div>

            {/* Feature Points Cards */}
            <div className="space-y-4">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-amber-400/40 transition-all items-start">
                    <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1 font-heading">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuote}
                className="px-8 py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-sm shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
              >
                Schedule Free 21-Point Drone Inspection
              </button>
              <a
                href={`tel:${BUSINESS_NAP.phoneRaw}`}
                className="px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm border border-slate-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {BUSINESS_NAP.phone}</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
