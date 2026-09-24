import React from 'react';
import { LOCATIONS_DATA } from '../data/locationsData';
import { MapPin, ArrowRight, ShieldCheck, Phone, Navigation, Clock, Wind, Building2, CheckCircle2 } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';
import { CtaStrip } from '../components/CtaStrip';

interface LocationsPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero: Authoritative Navy Header with Direct Call Button */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Navigation className="w-4 h-4" />
            <span>9 Dedicated Municipal Service Zones · Ocean County, NJ</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-heading mb-5">
            Ocean County Roofing Service Areas
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Headquartered centrally at 377 Dallas Dr in Toms River. We provide immediate storm tarping, localized building code filings, and 50-year warranty installations with zero travel fees.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${BUSINESS_NAP.phoneRaw}`}
              className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm shadow-xl shadow-amber-500/20 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Call Toms River HQ: {BUSINESS_NAP.phone}</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm border border-slate-700 hover:border-amber-400/40 transition-all cursor-pointer"
            >
              Check Your Town's Dispatch Time
            </button>
          </div>
        </div>
      </section>

      {/* 2. Grid of 9 Locations with Two-Tone Premium Cards (NO boring white boxes, NO all-black gloom) */}
      <section className="py-20 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-2">
              Micro-Climate & Municipal Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-heading">
              Select Your Municipality For Local Details & Reviews
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Direct dispatch from our central Toms River facility with zero travel surcharges across all 9 zones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-slate-200/90 transform hover:-translate-y-1"
              >
                {/* Two-Tone Card Top: Navy Header with Amber Icon, Town Name & Badges */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-5 text-white relative">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black group-hover:scale-110 transition-transform shadow-md shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-700/60 shadow-xs">
                        {loc.distanceFromHQ}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                        Pop. {loc.population}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-white group-hover:text-amber-300 transition-colors font-heading leading-tight">
                    {loc.name}, NJ
                  </h3>
                  <span className="text-[11px] text-amber-400/90 font-medium block mt-0.5 truncate">
                    {loc.tagline}
                  </span>
                </div>

                {/* Two-Tone Card Bottom: Crisp White Surface with Amber Accents */}
                <div className="bg-white p-6 flex flex-col flex-grow space-y-4">
                  
                  {/* Weather Exposure Pill */}
                  <div className="flex items-center gap-2 text-[11px] font-bold text-amber-900 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200">
                    <Wind className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">Barnegat Bay & Coastal Salt Exposure Zone</span>
                  </div>

                  {/* Summary Intro */}
                  <p className="text-xs text-slate-600 leading-relaxed flex-grow line-clamp-3">
                    {loc.intro}
                  </p>

                  {/* Local Landmarks Preview (Soft Warm Amber Box) */}
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1">
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider block flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-amber-600" />
                      Key Municipal Coverage:
                    </span>
                    <div className="text-xs text-slate-700 font-medium line-clamp-2">
                      {loc.landmarks.slice(0, 3).join(' · ')}
                    </div>
                  </div>

                  {/* Action button & Surcharge notice */}
                  <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero Travel Fee</span>
                    </div>

                    <button
                      onClick={() => onNavigate('location-detail', loc.slug)}
                      className="px-4 py-2 bg-slate-900 group-hover:bg-amber-400 group-hover:text-slate-950 text-white font-black text-xs rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Town Guide & Code</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Ocean County Coastal Weather Assessment Card */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Wind className="w-4 h-4" />
                <span>Jersey Shore Atmospheric Matrix</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
                Why Ocean County Needs Coastal-Grade Roofing Systems
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Homes situated in Toms River, Brick, Pine Beach, and Seaside Heights sit directly in the path of Atlantic storm tracks. Salt fog, gale-force nor'easters, and severe humidity accelerate fastener rust and shingle loss if standard installation techniques are used.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${BUSINESS_NAP.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-xs transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Emergency Dispatch: {BUSINESS_NAP.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <span className="text-amber-400 font-mono text-2xl font-black block mb-1">130 MPH</span>
                <div className="text-white font-bold text-sm mb-1">Wind Uplift Rating</div>
                <p className="text-xs text-slate-300">LayerLock® GAF shingle technology prevents blow-offs during coastal hurricanes.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <span className="text-amber-400 font-mono text-2xl font-black block mb-1">0% Rust</span>
                <div className="text-white font-bold text-sm mb-1">Hot-Dipped Galvanized</div>
                <p className="text-xs text-slate-300">Ring-shank coil nails withstand Barnegat Bay salt air corrosion for 50+ years.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <span className="text-amber-400 font-mono text-2xl font-black block mb-1">&lt;60 Min</span>
                <div className="text-white font-bold text-sm mb-1">Emergency Dispatch</div>
                <p className="text-xs text-slate-300">Stationed at 377 Dallas Dr with tarp vans fully loaded for quick deployment.</p>
              </div>
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700">
                <span className="text-amber-400 font-mono text-2xl font-black block mb-1">100% NJ</span>
                <div className="text-white font-bold text-sm mb-1">Permit Compliant</div>
                <p className="text-xs text-slate-300">We file all municipal building permits and coordinate town inspector signoffs.</p>
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
