import React from 'react';
import { HeroSearch } from '../components/HeroSearch';
import { StatsBar } from '../components/StatsBar';
import { FeaturedProjects } from '../components/FeaturedProjects';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { CtaStrip } from '../components/CtaStrip';
import { SERVICES_DATA } from '../data/servicesData';
import { LOCATIONS_DATA } from '../data/locationsData';
import { BUSINESS_NAP } from '../data/siteData';
import { Shield, Wrench, MapPin, ArrowRight, Star, Clock, CheckCircle2, ShieldCheck, Sparkles, Navigation, Wind } from 'lucide-react';

interface HomePageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Authoritative Navy Hero with Prominent Call Button & Live Estimate Center */}
      <HeroSearch onOpenQuote={onOpenQuote} />

      {/* 2. Stats Bar (High-Contrast 4-Counter Proof Grid) */}
      <StatsBar />

      {/* 3. Services Grid: Two-Tone Luxury Cards (Navy Header + Crisp Body - NO all-white, NO all-black) */}
      <section className="py-20 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Full-Scope Certified Roofing Solutions</span>
              <span>·</span>
              <span>Ocean County, NJ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
              Our Certified Roofing Services
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Every installation and repair is backed by our written 10-year workmanship warranty, GAF Master Elite® factory credentials, and Ocean County building code compliance.
            </p>
          </div>

          {/* 8 Featured Service Cards: Two-Tone Cards with Navy Tops and Crisp White Bodies */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES_DATA.slice(0, 8).map((svc) => (
              <div
                key={svc.id}
                onClick={() => onNavigate('service-detail', svc.slug)}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1 bg-white"
              >
                {/* Two-Tone Top: Dark Navy Header with Amber Icon */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-4 text-white relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform shadow-md">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-200 bg-white/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 border border-white/20">
                      <Clock className="w-3 h-3 text-amber-400" />
                      {svc.avgDuration}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors font-heading line-clamp-1">
                    {svc.title}
                  </h3>
                </div>

                {/* Two-Tone Bottom: Crisp White Surface */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 flex-grow line-clamp-3">
                    {svc.shortDesc}
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs mt-auto">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">Est. Pricing</span>
                      <span className="font-extrabold text-slate-950 text-sm">{svc.priceRange}</span>
                    </div>
                    <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Details →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-4 bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-sm rounded-full shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2 cursor-pointer border border-slate-800"
            >
              <span>Explore All 14 Certified Roofing Services</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Strip 1: Navy/Gold Emergency Response */}
      <CtaStrip
        headline="Suffered Roof Damage in Recent Ocean County Storms?"
        subtext="Our emergency dispatch van is stationed at 377 Dallas Dr and reaches any Ocean County municipality in under 60 minutes."
        onOpenQuote={onOpenQuote}
      />

      {/* 4. Featured Projects (Real Case Studies with Rich Photography) */}
      <FeaturedProjects
        onViewAllProjects={() => onNavigate('projects')}
        onSelectProject={(id) => onNavigate('projects')}
      />

      {/* 5. Why Choose Us (Dark Navy Architectural Section with Seals & High Contrast) */}
      <WhyChooseUs onOpenQuote={onOpenQuote} />

      {/* CTA Strip 2: Transparent Written Estimate Banner */}
      <CtaStrip
        headline="Get an Upfront Written Estimate Before Any Work Begins"
        subtext="Zero upfront deposit · GAF Golden Pledge 50-year warranty eligibility · 100% free physical & drone inspections."
        onOpenQuote={onOpenQuote}
      />

      {/* 6. Testimonials (Verified Ocean County Homeowners) */}
      <Testimonials />

      {/* 7. Service Areas Hub: Two-Tone Municipal Cards */}
      <section className="py-20 bg-slate-100/80 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              <Navigation className="w-4 h-4" />
              <span>Direct Ocean County Municipal Coverage</span>
              <span>·</span>
              <span>Zero Travel Fees</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
              Dedicated Crews in 9 Ocean County Towns
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-3">
              Stationed centrally at 377 Dallas Dr in Toms River. We provide immediate storm dispatch, localized building permit filings, and micro-climate expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS_DATA.map((loc) => (
              <div
                key={loc.id}
                onClick={() => onNavigate('location-detail', loc.slug)}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1 bg-white"
              >
                {/* Two-Tone Top Header */}
                <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-base font-black text-white group-hover:text-amber-300 transition-colors font-heading">
                        {loc.name}, NJ
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-700/60">
                      {loc.distanceFromHQ}
                    </span>
                  </div>
                </div>

                {/* Two-Tone Bottom Body */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  <p className="text-xs text-slate-600 mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {loc.intro}
                  </p>

                  <div className="pt-3 border-t border-slate-100 text-xs flex items-center justify-between mt-auto">
                    <span className="text-slate-500 font-semibold">Pop. {loc.population}</span>
                    <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Town Guide & Specs →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Town Navigation Bar */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-950">Don't see your Ocean County neighborhood?</h4>
                <p className="text-xs text-slate-600">We dispatch to all areas including Silverton, Dover, Gilford Park, and Beachwood.</p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_NAP.phoneRaw}`}
              className="px-6 py-3 bg-slate-950 hover:bg-slate-900 text-amber-400 font-bold text-xs rounded-xl shadow-md transition-colors shrink-0"
            >
              Verify Your Address: {BUSINESS_NAP.phone}
            </a>
          </div>

        </div>
      </section>

      {/* CTA Strip 3: Final Call Before Footer */}
      <CtaStrip
        headline="Schedule Your Free 21-Point Drone & Attic Inspection"
        subtext="Get high-resolution imagery of your roof deck, flashing conditions, and guaranteed written pricing."
        onOpenQuote={onOpenQuote}
      />
    </div>
  );
};
