import React from 'react';
import { Star, CheckCircle, MapPin, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Mark & Donna Sullivan",
      location: "Silverton, Toms River, NJ",
      service: "Complete Tear-Off & GAF HDZ Shingle Replacement",
      quote: "After a severe autumn nor'easter blew off shingles near our chimney, Roofers Toms River arrived in under an hour to tarp the roof. They replaced the entire roof the following week with GAF Timberline HDZ shingles. Spotless yard cleanup, 7-man crew, finished in 1.5 days. Absolute professionals!",
      rating: 5,
      date: "2 weeks ago",
      verified: true
    },
    {
      name: "Steven Peterson",
      location: "Midstreams, Brick, NJ",
      service: "Architectural Roof Replacement & Velux Skylight",
      quote: "Our split-level in Brick had ugly black algae streaks and leaked around the master skylight. Roofers Toms River gave us an honest upfront quote with zero pressure. The new roof and solar skylight look breathtaking and our leak is 100% gone through 3 torrential rains.",
      rating: 5,
      date: "1 month ago",
      verified: true
    },
    {
      name: "Yitzchok Lieberman",
      location: "Lake Carasaljo Area, Lakewood, NJ",
      service: "Large 4,200 Sq Ft Residential Roof Installation",
      quote: "We needed a complete roof replacement on our large family home. They mobilized an 8-man crew at 7:00 AM sharp and finished tear-off, structural decking repair, and CertainTeed shingle installation in 2 days. Punctual, respectful, and three magnetic nail sweeps.",
      rating: 5,
      date: "3 weeks ago",
      verified: true
    },
    {
      name: "Capt. Richard Hayes",
      location: "Riverside Dr, Pine Beach, NJ",
      service: "Standing Seam Coastal Marine Aluminum Roof",
      quote: "Facing the Toms River directly, winds peeled back our old shingles repeatedly. Roofers Toms River installed a marine-grade standing seam aluminum roof. Through two 65-mph nor'easters, not a sound or drip. Best investment we've ever made for our shore property.",
      rating: 5,
      date: "2 months ago",
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
            <span>Verified Customer Reviews</span>
            <span>·</span>
            <span>Ocean County Neighbors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
            What Toms River Homeowners Say
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            With over 200 five-star reviews across Google, BBB, and Angi, see why Ocean County trusts Roofers Toms River for every leak repair and replacement.
          </p>
        </div>

        {/* 4 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col relative group transform hover:-translate-y-1"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-2xl opacity-80" />

              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-amber-200 absolute top-5 right-5" />

              {/* Star Rating */}
              <div className="flex text-amber-400 mb-3 pt-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 flex-grow italic">
                "{rev.quote}"
              </p>

              {/* Author & Location */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-extrabold text-sm text-slate-950">{rev.name}</span>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-xs text-amber-700 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-600" />
                  <span>{rev.location}</span>
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">
                  {rev.service}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge Banner */}
        <div className="mt-12 p-6 bg-slate-950 text-white rounded-2xl border border-slate-800 flex flex-wrap items-center justify-around gap-6 text-center text-xs font-bold shadow-xl">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌟</span>
            <span>4.9 / 5.0 Google Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🛡️</span>
            <span className="text-amber-400">GAF Master Elite® Contractor</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <span>Best of Ocean County 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">📝</span>
            <span>100% Written Workmanship Warranty</span>
          </div>
        </div>

      </div>
    </section>
  );
};
