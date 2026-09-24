import React, { useState } from 'react';
import { LOCATIONS_DATA } from '../data/locationsData';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_NAP, LocationItem } from '../data/siteData';
import { MapPin, Phone, ShieldCheck, CheckCircle2, Star, ChevronDown, ChevronUp, ArrowRight, Home, Wind, Compass, FileText, AlertCircle, Building } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface LocationDetailPageProps {
  slug: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const location = LOCATIONS_DATA.find((l) => l.slug === slug) || LOCATIONS_DATA[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Breadcrumb Strip */}
      <div className="bg-slate-900 text-slate-400 py-3 border-b border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2">
          <button onClick={() => onNavigate('home')} className="hover:text-amber-400 transition-colors cursor-pointer">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('locations')} className="hover:text-amber-400 transition-colors cursor-pointer">Service Areas</button>
          <span>/</span>
          <span className="text-white font-bold truncate">{location.name}, NJ</span>
        </div>
      </div>

      {/* 2. Hero Section: Authoritative Navy Header with Call Button & Local Dispatch Details */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                <MapPin className="w-4 h-4" />
                <span>Ocean County Municipal Service Zone · {location.distanceFromHQ}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                Roofing Company in <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">{location.name}, NJ</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {location.tagline}. Dedicated local roofers protecting {location.name} homeowners with hurricane-rated shingles, 24/7 leak tarping, and factory warranties.
              </p>

              {/* High-Converting Call & Quote Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${BUSINESS_NAP.phoneRaw}`}
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-base transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {location.name} Hotline: {BUSINESS_NAP.phone}</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-base border border-slate-700 hover:border-amber-400/40 transition-all cursor-pointer"
                >
                  Get {location.name} Free Estimate
                </button>
              </div>

              {/* Fast Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Distance from 377 Dallas Dr</span>
                  <span className="text-amber-400 font-black text-sm">{location.distanceFromHQ}</span>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Emergency Dispatch</span>
                  <span className="text-white font-black text-sm">&lt; 45 Min Arrival</span>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Permit Coordination</span>
                  <span className="text-emerald-400 font-black text-sm">100% Handled Locally</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Dispatch to this Town */}
            <div className="lg:col-span-5 bg-slate-900 p-7 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  {location.name} Van On Duty
                </span>
                <span className="text-[11px] text-slate-400">Station: Toms River HQ</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 font-heading">
                Book Free Inspection in {location.name}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Direct dispatch from 377 Dallas Dr, Toms River. Zero cost, physical attic & drone scan, zero obligation.
              </p>

              <div className="space-y-4">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Written {location.name} Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-center pt-2">
                  <span className="text-xs text-slate-400 block">Or speak with our Ocean County foreman:</span>
                  <a
                    href={`tel:${BUSINESS_NAP.phoneRaw}`}
                    className="text-amber-400 font-black text-lg hover:underline mt-1 inline-block"
                  >
                    {BUSINESS_NAP.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Main Content: Crisp, Colorful, Balanced Cards */}
      <main className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Column (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 1. Town Overview Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-4 font-heading">
                  Roofing Standards in {location.name}, NJ
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <p>{location.intro}</p>
                </div>
              </div>

              {/* 2. Municipal Building Code & Permit Guide Box */}
              <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-2">
                  <FileText className="w-4 h-4 text-amber-600" />
                  <span>Municipal Compliance</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-3 font-heading">
                  {location.name} Building Permits & NJ UCC Regulations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  {location.buildingPermitInfo || `${location.name} enforces the New Jersey Uniform Construction Code (UCC) for all residential and commercial re-roofing projects. Roofers Toms River handles all municipal permit filings, engineering documentation, and final building inspector sign-offs on your behalf.`}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-black text-slate-950 mb-1">Permit Paperwork Handled</div>
                    <p className="text-xs text-slate-600">We prepare architectural drawings, submit the UCC permit application, and handle municipal payments.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-xs font-black text-slate-950 mb-1">Final Town Inspection Signoff</div>
                    <p className="text-xs text-slate-600">We schedule and attend the final inspection with the {location.name} building inspector to ensure 100% compliance.</p>
                  </div>
                </div>
              </div>

              {/* 3. Specific Neighborhoods & Landmarks Served */}
              <div className="p-8 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 shadow-lg">
                <div className="flex items-center gap-2 text-amber-400 font-black text-xs uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4 text-amber-400" />
                  <span>Neighborhood Coverage</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-4 font-heading">
                  Areas & Landmarks Served Across {location.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {location.landmarks.map((lm, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/10 p-3.5 rounded-xl border border-white/15 backdrop-blur-xs">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="text-xs font-bold text-white truncate">{lm}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Common Roof Types in this Town */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl font-black text-slate-950 mb-4 font-heading">
                  Dominant Roofing Systems in {location.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {(location.commonRoofTypes || ['GAF Timberline HDZ® Architectural Shingles', 'CertainTeed Landmark®', 'Standing Seam Metal (.032 Aluminum)', 'Commercial TPO Flat Membrane', 'Emergency Storm Tarping']).map((rf: string, i: number) => (
                    <span key={i} className="px-3.5 py-1.5 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl border border-slate-200">
                      {rf}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Whether your home has architectural shingles, flat rubber membrane, or standing seam metal, our crews carry manufacturer specifications and matching replacement inventory on dispatch.
                </p>
              </div>

              {/* 5. Frequently Asked Questions for this Town */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-6 font-heading">
                  {location.name} Roofing FAQs
                </h3>
                <div className="space-y-3">
                  {location.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
                    >
                      <button
                        onClick={() => toggleFaq(i)}
                        className="w-full text-left p-5 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer transition-colors"
                      >
                        <span>{faq.q}</span>
                        {openFaq === i ? (
                          <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                        )}
                      </button>
                      {openFaq === i && (
                        <div className="p-5 pt-3 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Direct Call Box */}
              <div className="p-6 bg-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl space-y-4 sticky top-24">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">{location.name} Hotline</span>
                    <span className="text-sm font-black text-white">Direct Local Dispatch</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Need emergency tarping or an estimate in {location.name}, NJ? Our trucks are stationed right on Dallas Dr.
                </p>

                <a
                  href={`tel:${BUSINESS_NAP.phoneRaw}`}
                  className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_NAP.phone}</span>
                </a>

                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-all border border-slate-700 cursor-pointer"
                >
                  <span>Request Free Estimate</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>HQ: 377 Dallas Dr, Toms River</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>NJ Lic #13VH09842100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Travel Surcharge</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* CTA Strip */}
      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
