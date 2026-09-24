import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { BUSINESS_NAP, ServiceItem } from '../data/siteData';
import { Wrench, Shield, CheckCircle2, Phone, AlertTriangle, Award, ArrowRight, DollarSign, Clock, ChevronDown, ChevronUp, Star, ShieldCheck, MapPin } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface ServiceDetailPageProps {
  slug: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const service = SERVICES_DATA.find((s) => s.slug === slug) || SERVICES_DATA[0];
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
          <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">Services</button>
          <span>/</span>
          <span className="text-white font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* 2. Hero Section: Authoritative Navy Header with Call Button & Fast Stats */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Certified Ocean County Service · GAF Master Elite®</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
                {service.title} in <span className="text-amber-400 underline decoration-amber-400/30 underline-offset-8">Toms River, NJ</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                {service.shortDesc} Fastened to NJ Uniform Construction Code standards with 130-mph wind warranties and triple magnetic cleanup.
              </p>

              {/* Call & Quote High-Converting Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${BUSINESS_NAP.phoneRaw}`}
                  className="px-8 py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-base transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Dispatch: {BUSINESS_NAP.phone}</span>
                </a>
                <button
                  onClick={onOpenQuote}
                  className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-base border border-slate-700 hover:border-amber-400/40 transition-all cursor-pointer"
                >
                  Request Written Estimate
                </button>
              </div>

              {/* Fast Spec Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800 text-xs">
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Avg Timeline</span>
                  <span className="text-amber-400 font-black text-sm">{service.avgDuration}</span>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Est. Pricing</span>
                  <span className="text-white font-black text-sm">{service.priceRange}</span>
                </div>
                <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">Emergency Dispatch</span>
                  <span className="text-emerald-400 font-black text-sm">Under 60 Mins</span>
                </div>
              </div>
            </div>

            {/* Right Card: Quick Request Panel */}
            <div className="lg:col-span-5 bg-slate-900 p-7 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl relative text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  Live Dispatch Available
                </span>
                <span className="text-[11px] text-slate-400">Zero Upfront Deposit</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2 font-heading">
                Book Inspection for {service.title}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Direct dispatch from 377 Dallas Dr, Toms River. Written quote within 24 hours, zero obligation.
              </p>

              <div className="space-y-4">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free On-Site Inspection</span>
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
              
              {/* 1. Deep Overview Card */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 mb-4 font-heading">
                  Comprehensive Service Scope
                </h2>
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
                  <p>{service.intro}</p>
                  <p>{service.problemContext}</p>
                </div>
              </div>

              {/* 2. Warning Signs Box with High-Contrast Alert Styling */}
              <div className="p-8 bg-amber-50 rounded-3xl border-2 border-amber-300 relative overflow-hidden shadow-xs">
                <div className="flex items-center gap-2 text-amber-800 font-black text-xs uppercase tracking-wider mb-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Critical Property Warnings</span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 mb-2 font-heading">
                  Warning Signs You Need Prompt Inspection
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 mb-6">
                  If you notice any of these signs on your Ocean County roof, delay leads to water intrusion and decking dry rot:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.signs.map((sign, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-amber-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-bold text-slate-900">{sign}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Step-by-Step Master Execution Process */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2 font-heading">
                  Our Precision Step-by-Step Execution Process
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  We follow a standardized, factory-certified protocol on every Ocean County property:
                </p>
                <div className="space-y-4">
                  {service.process.map((st, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 text-amber-400 flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
                        0{st.step}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-950 mb-1">{st.title || `Step ${st.step}`}</h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Factory Certified Materials */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-2 font-heading">
                  Premium Materials & Factory Warranties
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6">
                  We exclusively install authentic manufacturer products engineered for Jersey Shore winds:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.materials.map((mat, i) => (
                    <div key={i} className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-600 shrink-0" />
                        <span className="text-sm font-black text-slate-900">{mat.name} ({mat.brand})</span>
                      </div>
                      <span className="text-xs text-amber-800 font-bold bg-amber-100/70 px-2.5 py-0.5 rounded-md inline-block self-start border border-amber-200">
                        {mat.warranty}
                      </span>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{mat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. FAQs Section (Accordion) */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-6 font-heading">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {service.faqs.map((faq, i) => (
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
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">Speak with Roofer</span>
                    <span className="text-sm font-black text-white">Live Ocean County Dispatch</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  Have an active leak, missing shingles, or storm damage in Toms River? Call directly for immediate response.
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
                  <span>Request Written Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>

                <div className="pt-3 border-t border-slate-800 space-y-2 text-[11px] text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Station: 377 Dallas Dr, Toms River</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>NJ Lic #13VH09842100</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Zero Deposit Required</span>
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
