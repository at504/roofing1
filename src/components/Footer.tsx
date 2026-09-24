import React from 'react';
import { Phone, MapPin, Clock, Shield, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';
import { SERVICES_DATA } from '../data/servicesData';
import { LOCATIONS_DATA } from '../data/locationsData';

interface FooterProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <>
      <footer className="bg-slate-950 text-slate-300 pt-16 pb-28 md:pb-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 4 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-slate-800">
            
            {/* Col 1: NAP Consistency & Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-black text-xl shadow-md">
                  R
                </div>
                <div>
                  <span className="text-xl font-black text-white tracking-tight block leading-tight font-heading">
                    {BUSINESS_NAP.name}
                  </span>
                  <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                    Ocean County Headquarters
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                The premier licensed roofing contractor in Toms River and Ocean County. Specializing in architectural shingle replacement, storm nor'easter repairs, and coastal metal installations.
              </p>

              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>
                    <strong className="text-white block font-semibold">Physical Address:</strong>
                    {BUSINESS_NAP.street}, {BUSINESS_NAP.city}, {BUSINESS_NAP.state} {BUSINESS_NAP.zip}, USA
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Direct Phone:</span>
                    <a
                      href={`tel:${BUSINESS_NAP.phoneRaw}`}
                      className="text-white hover:text-amber-400 font-extrabold text-base transition-colors"
                    >
                      {BUSINESS_NAP.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>
                    <strong className="text-white block font-semibold">Service Hours:</strong>
                    {BUSINESS_NAP.hours}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-900 text-xs text-slate-500">
                <span>NJ Home Improvement Contractor: #{BUSINESS_NAP.licenseNumber}</span>
              </div>
            </div>

            {/* Col 2: All 14 Roofing Services */}
            <div>
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">
                Roofing Services
              </h4>
              <ul className="space-y-2 text-xs">
                {SERVICES_DATA.map((svc) => (
                  <li key={svc.id}>
                    <button
                      onClick={() => onNavigate('service-detail', svc.slug)}
                      className="text-slate-400 hover:text-amber-400 transition-colors text-left flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-amber-400"></span>
                      <span>{svc.shortName}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: All 9 Service Areas (Ocean County) */}
            <div>
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">
                Ocean County Areas
              </h4>
              <ul className="space-y-2.5 text-xs">
                {LOCATIONS_DATA.map((loc) => (
                  <li key={loc.id}>
                    <button
                      onClick={() => onNavigate('location-detail', loc.slug)}
                      className="text-slate-400 hover:text-amber-400 transition-colors text-left flex items-center justify-between w-full group"
                    >
                      <div className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-amber-400"></span>
                        <span className="font-semibold text-slate-300 group-hover:text-amber-400">{loc.name}, NJ</span>
                      </div>
                      <span className="text-[10px] text-slate-500 group-hover:text-slate-400">{loc.distanceFromHQ.split(' ')[0]} mi</span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-900">
                <button
                  onClick={() => onNavigate('locations')}
                  className="text-xs text-amber-400 hover:underline font-bold flex items-center gap-1"
                >
                  <span>Explore All Service Areas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Col 4: Trust, Credentials & Quick Quote CTA */}
            <div>
              <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-3">
                Credentials & Warranty
              </h4>

              <div className="space-y-3 mb-6">
                <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>GAF Master Elite® Contractor</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Top 2% of roofers in North America. Golden Pledge 50-year non-prorated factory warranty.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800">
                  <div className="flex items-center gap-2 text-white font-bold text-xs mb-1">
                    <Shield className="w-4 h-4 text-amber-400" />
                    <span>10-Year Workmanship Warranty</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Every shingle, flashing, and valley sealed with our written zero-leak protection guarantee.
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-3.5 px-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Free Roof Inspection</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Bottom Copyright & Technical Links */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} {BUSINESS_NAP.name}. All Rights Reserved. rooferstomsriver.us</p>
            <div className="flex flex-wrap items-center gap-5">
              <button onClick={() => onNavigate('theme-zip')} className="text-amber-400 hover:underline font-bold">
                Download WordPress Theme (ZIP)
              </button>
              <button onClick={() => onNavigate('seo-audit')} className="hover:text-slate-300">
                Schema & SEO Audit
              </button>
              <span>377 Dallas Dr, Toms River, NJ 08753</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Sticky Mobile Call Bar (Matching Reference Template CRO Specs) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-950 border-t-2 border-amber-400 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href={`tel:${BUSINESS_NAP.phoneRaw}`}
          className="flex-1 py-3 px-3 bg-amber-400 text-slate-950 font-black text-sm rounded-xl flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 fill-slate-950" />
          <span>Call (732) 973-8127</span>
        </a>
        <button
          onClick={onOpenQuote}
          className="flex-1 py-3 px-3 bg-slate-800 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-transform border border-slate-700"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </button>
      </div>

      {/* Floating "Get Free Quote" Button (Desktop Right Side) */}
      <button
        onClick={onOpenQuote}
        className="hidden md:flex fixed right-6 bottom-6 z-40 px-5 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-black text-sm shadow-2xl border-2 border-amber-400 items-center gap-2.5 hover:scale-105 transition-all group cursor-pointer"
        aria-label="Request Free Roof Quote"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
        <span>Get Free Quote</span>
        <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
      </button>
    </>
  );
};
