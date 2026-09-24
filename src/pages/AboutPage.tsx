import React from 'react';
import { BUSINESS_NAP } from '../data/siteData';
import { Award, ShieldCheck, Users, MapPin, Phone, CheckCircle2, Star, Clock } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface AboutPageProps {
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Ocean County Master Roofers Since 2009</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading mb-4">
            About Roofers Toms River
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Headquartered at 377 Dallas Dr, Toms River, NJ. We are Ocean County's premier GAF Master Elite® certified roofing contractor, dedicated to outlasting coastal weather.
          </p>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-600 block">
                Local Integrity & Master Craftsmanship
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-heading">
                We Don't Chase Storms — We Build Lifelong Relationships in Ocean County
              </h2>
              <div className="prose prose-slate text-slate-700 leading-relaxed text-base space-y-4">
                <p>
                  Founded over 15 years ago right here in Toms River, New Jersey, Roofers Toms River was built on a simple philosophy: provide homeowners with the highest level of craftsmanship, uncompromising material quality, and complete price transparency.
                </p>
                <p>
                  While transient storm chasers swarm Ocean County after major nor'easters and disappear months later, our roots are firmly planted at 377 Dallas Dr. Our roofing crews live in Toms River, Brick, Beachwood, and Berkeley Township. We know how coastal salt air corrodes electro-galvanized nails, how 75-mph nor'easters draft wind-driven rain under standard flashings, and how hot summer attics bake shingles from the inside out.
                </p>
                <p>
                  That's why we don't cut corners. We achieve what only the top 2% of roofers in North America can achieve: GAF Master Elite® certification. This allows us to back our full replacements with factory-backed Golden Pledge 50-year non-prorated warranties and our own 10-year written workmanship guarantee.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>NJ HIC License #{BUSINESS_NAP.licenseNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>$2M Commercial Liability & Workers' Comp</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Zero Down Payment Required</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Triple Magnetic Nail Sweep Guarantee</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3]">
                <img
                  src="/src/assets/images/featured_project_residential_1790236138317.jpg"
                  alt="Roofers Toms River crew project"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-slate-950 text-white p-6 rounded-2xl shadow-xl border border-slate-800 max-w-xs">
                <div className="flex text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm font-extrabold text-white">4.9 Star Rating (200+ Reviews)</p>
                <p className="text-xs text-slate-400">Ocean County's Most Trusted Local Roofer</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
