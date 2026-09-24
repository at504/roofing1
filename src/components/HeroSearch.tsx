import React, { useState } from 'react';
import { Phone, Shield, Calendar, ArrowRight, CheckCircle2, Calculator, Clock, Star, Sparkles, MapPin } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { LOCATIONS_DATA } from '../data/locationsData';
import { BUSINESS_NAP } from '../data/siteData';
import heroRooferImg from '../assets/images/hero_roofer_toms_river_1790236081328.jpg';

interface HeroSearchProps {
  onSearch?: (locationSlug: string, serviceSlug: string) => void;
  onOpenQuote: () => void;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ onOpenQuote }) => {
  // Interactive Live Estimator State
  const [selectedServiceType, setSelectedServiceType] = useState<'replacement' | 'repair' | 'metal' | 'emergency'>('replacement');
  const [selectedHomeSize, setSelectedHomeSize] = useState<'1500' | '2500' | '3500'>('2500');
  const [activeTab, setActiveTab] = useState<'proof' | 'estimator'>('proof');

  // Dynamic estimate calculation
  const getEstimateData = () => {
    switch (selectedServiceType) {
      case 'repair':
        return {
          title: 'Emergency & Leak Repair',
          range: selectedHomeSize === '1500' ? '$350 – $750' : selectedHomeSize === '2500' ? '$550 – $1,250' : '$850 – $1,950',
          duration: 'Same-Day (2 – 5 Hrs)',
          warranty: '10-Year Workmanship',
          crew: '2 Master Roofers',
        };
      case 'metal':
        return {
          title: 'Standing Seam Metal Roof',
          range: selectedHomeSize === '1500' ? '$14,500 – $19,000' : selectedHomeSize === '2500' ? '$21,000 – $28,500' : '$29,000 – $39,000',
          duration: '2 – 3 Days',
          warranty: 'Lifetime Wind & Salt Air',
          crew: '6 Certified Metal Craftsmen',
        };
      case 'emergency':
        return {
          title: '24/7 Storm & Tarp Dispatch',
          range: '$250 – $850 (Tarp & Stabilize)',
          duration: '< 60 Min Arrival',
          warranty: 'Weather-Tight Seal Guarantee',
          crew: 'Emergency Response Van',
        };
      case 'replacement':
      default:
        return {
          title: 'Full Architectural Roof Replacement',
          range: selectedHomeSize === '1500' ? '$7,800 – $10,500' : selectedHomeSize === '2500' ? '$12,500 – $16,800' : '$17,500 – $24,500',
          duration: '1 – 2 Days',
          warranty: '50-Year GAF Golden Pledge',
          crew: '6–8 Factory Certified Installers',
        };
    }
  };

  const estimate = getEstimateData();

  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-800">
      {/* Authentic Roofing Project Background Photo with Gradient Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src={heroRooferImg}
          alt=""
          className="w-full h-full object-cover filter saturate-150 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-slate-950/80" />
      </div>

      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Trust Badges, and High-Converting Prominent Call Button */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Kicker: Unboxed Clean Editorial Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Dispatch Active at 377 Dallas Dr
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1 text-slate-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                4.9/5.0 Rated (200+ Ocean County Reviews)
              </span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-mono">NJ Lic #13VH09842100</span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] font-heading text-white">
              Toms River's Premier <span className="text-amber-400 underline decoration-amber-400/40 decoration-4 underline-offset-8">Roofing Contractors</span> & Repair Specialists
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Protecting Ocean County homes from nor'easter winds and coastal moisture since 2011. Zero upfront deposit, guaranteed 10-year workmanship warranty, and certified 50-year GAF roofing systems.
            </p>

            {/* High-Converting CTA Buttons - Prominent Direct Call Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              
              {/* PRIMARY PROMINENT CALL BUTTON */}
              <a
                href={`tel:${BUSINESS_NAP.phoneRaw}`}
                className="group relative px-6 py-4 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-black text-base shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
                <div className="text-left leading-tight">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-900 opacity-90">
                    Call 24/7 Master Roofer
                  </div>
                  <div className="text-lg font-black tracking-tight text-slate-950">
                    {BUSINESS_NAP.phone}
                  </div>
                </div>
              </a>

              {/* SECONDARY FREE QUOTE CTA BUTTON */}
              <button
                onClick={onOpenQuote}
                className="px-6 py-4 rounded-2xl bg-slate-800/90 hover:bg-slate-800 text-white font-black text-sm border border-slate-700 hover:border-amber-400/50 shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get Instant Written Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Bullet Grid (Under Buttons) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Deposit Required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Free 21-Point Drone Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Under 60 Min Emergency Arrival</span>
              </div>
            </div>

          </div>

          {/* Right Column: Replaced Video Section with High-Converting Interactive Estimate & Crew Dispatch Center */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-3xl border border-slate-800 p-6 sm:p-7 shadow-2xl relative overflow-hidden">
              
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Live Dispatch Station
                  </span>
                </div>
                
                {/* Mode Selector */}
                <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
                  <button
                    onClick={() => setActiveTab('proof')}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'proof'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Toms River Crew (Active)
                  </button>
                  <button
                    onClick={() => setActiveTab('estimator')}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      activeTab === 'estimator'
                        ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Quick Estimator
                  </button>
                </div>
              </div>

              {activeTab === 'estimator' ? (
                /* Interactive Instant Estimator */
                <div className="pt-5 space-y-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      1. Select Roofing Scope:
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'replacement', label: 'Full Replacement' },
                        { id: 'repair', label: 'Leak & Storm Repair' },
                        { id: 'metal', label: 'Standing Seam Metal' },
                        { id: 'emergency', label: 'Emergency Tarping' },
                      ].map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setSelectedServiceType(type.id as any)}
                          className={`p-2.5 rounded-xl text-xs font-bold text-left transition-all border cursor-pointer ${
                            selectedServiceType === type.id
                              ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          {type.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      2. Approximate Home Footprint:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { size: '1500', label: 'Under 1,800 sq ft', tag: 'Ranch / Cape' },
                        { size: '2500', label: '1,800 – 2,800 sq ft', tag: 'Colonial / Split' },
                        { size: '3500', label: '3,000+ sq ft', tag: 'Custom Estate' },
                      ].map((sz) => (
                        <button
                          key={sz.size}
                          onClick={() => setSelectedHomeSize(sz.size as any)}
                          className={`p-2 rounded-xl text-center transition-all border cursor-pointer ${
                            selectedHomeSize === sz.size
                              ? 'bg-amber-400/10 border-amber-400 text-amber-300'
                              : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div className="text-xs font-black">{sz.label}</div>
                          <div className="text-[10px] text-slate-400">{sz.tag}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Calculated Result Box */}
                  <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800/90 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Estimated Range (Ocean County):</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Turnkey Scope
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-black text-amber-400 font-heading">
                      {estimate.range}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Turnaround:</span>
                        <span className="font-semibold">{estimate.duration}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[10px] uppercase font-bold">Warranty:</span>
                        <span className="font-semibold text-slate-200">{estimate.warranty}</span>
                      </div>
                    </div>
                  </div>

                  {/* Lock In Quote CTA */}
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Lock In Free Estimate & Inspection</span>
                  </button>

                  <div className="text-center text-[11px] text-slate-400">
                    No obligations. An itemized quote will be sent within 15 minutes.
                  </div>
                </div>
              ) : (
                /* Certified Roofer Crew & Workmanship Proof (NO fake video play button) */
                <div className="pt-5 space-y-4">
                  <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-950 border border-slate-800">
                    <img
                      src={heroRooferImg}
                      alt="Certified Master Roofer on roof in Toms River NJ"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=80';
                      }}
                    />
                    <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs text-amber-400 font-bold flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5" />
                      <span>GAF Master Elite® Contractor</span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur-md p-3 rounded-xl border border-slate-800 text-xs text-white flex items-center justify-between">
                      <div>
                        <span className="text-amber-400 font-extrabold block">Toms River Dispatch Van #4</span>
                        <span className="text-[11px] text-slate-400">Stationed at 377 Dallas Dr</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        READY
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 font-medium">Ocean County Wind Rating:</span>
                      <span className="font-bold text-white">130 MPH Hurricane Fastened</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 font-medium">Cleanup Protocol:</span>
                      <span className="font-bold text-white">Triple Magnetic Nail Sweep</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800">
                      <span className="text-slate-400 font-medium">Permit & Code Filing:</span>
                      <span className="font-bold text-white">100% Handled By Us</span>
                    </div>
                  </div>

                  <a
                    href={`tel:${BUSINESS_NAP.phoneRaw}`}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Direct Call: {BUSINESS_NAP.phone}</span>
                  </a>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
