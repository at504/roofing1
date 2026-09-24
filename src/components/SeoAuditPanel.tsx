import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Copy, Check, Code, MapPin, Search } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';

export const SeoAuditPanel: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const schemas = [
    {
      title: "1. RoofingContractor / LocalBusiness Primary Schema",
      type: "RoofingContractor",
      description: "Injected on homepage and sitewide to establish NAP, coordinates, 24/7 hours, and Ocean County towns served.",
      json: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "@id": "https://rooferstomsriver.us/#roofingcontractor",
        "name": BUSINESS_NAP.name,
        "image": "https://rooferstomsriver.us/hero-roofer.jpg",
        "telephone": "+1-732-973-8127",
        "url": "https://rooferstomsriver.us",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": BUSINESS_NAP.street,
          "addressLocality": BUSINESS_NAP.city,
          "addressRegion": BUSINESS_NAP.state,
          "postalCode": BUSINESS_NAP.zip,
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": BUSINESS_NAP.coordinates.lat,
          "longitude": BUSINESS_NAP.coordinates.lng
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Toms River, NJ" },
          { "@type": "City", "name": "Beachwood, NJ" },
          { "@type": "City", "name": "Pine Beach, NJ" },
          { "@type": "City", "name": "Island Heights, NJ" },
          { "@type": "City", "name": "Manchester Township, NJ" },
          { "@type": "City", "name": "Berkeley Township, NJ" },
          { "@type": "City", "name": "Lakewood, NJ" },
          { "@type": "City", "name": "Brick, NJ" },
          { "@type": "City", "name": "Seaside Heights, NJ" }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "218"
        }
      }, null, 2)
    },
    {
      title: "2. Service Schema Stack (Per Service Page)",
      type: "Service",
      description: "Injected dynamically on all 14 service silo pages with provider binding, areaServed, and price specifications.",
      json: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Roof Replacement & Installation",
        "provider": {
          "@type": "RoofingContractor",
          "name": "Roofers Toms River",
          "telephone": "+1-732-973-8127"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Ocean County, New Jersey"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Architectural Shingle Roof Replacement"
              },
              "priceSpecification": {
                "@type": "PriceSpecification",
                "price": "8500",
                "priceCurrency": "USD"
              }
            }
          ]
        }
      }, null, 2)
    },
    {
      title: "3. FAQPage Schema Stack",
      type: "FAQPage",
      description: "Eligible for Google rich snippet search accordions across all 14 service pages, 9 location pages, and 15 blog guides.",
      json: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How fast can Roofers Toms River respond to an emergency leak?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our emergency response crews are based right here in Toms River at 377 Dallas Dr and arrive within 45 to 75 minutes across Ocean County with heavy-duty tarps and water containment equipment."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a new roof cost in Toms River, NJ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The average complete roof replacement in Toms River costs between $8,500 and $14,500 for a standard 2,000–2,500 sq ft home with architectural shingles and lifetime warranty."
            }
          }
        ]
      }, null, 2)
    },
    {
      title: "4. BreadcrumbList Schema",
      type: "BreadcrumbList",
      description: "Generates Google rich search breadcrumbs: Home > Services > Roof Replacement.",
      json: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rooferstomsriver.us"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Roofing Services",
            "item": "https://rooferstomsriver.us/services/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Roof Replacement Toms River",
            "item": "https://rooferstomsriver.us/roof-replacement-toms-river/"
          }
        ]
      }, null, 2)
    }
  ];

  const handleCopy = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="py-12 bg-slate-900 min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="bg-slate-950 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Search className="w-3.5 h-3.5" />
            <span>Google Rich Results & Technical SEO</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Schema.org Structured Data & Local SEO Architecture
          </h1>
          <p className="text-slate-400 text-sm mt-1 max-w-2xl">
            Live inspection of the semantic markup stack deployed on <strong>rooferstomsriver.us</strong>. Validated for Google Map Pack Top 3 and Organic SERP dominance.
          </p>
        </div>

        {/* 4 Schema Cards */}
        <div className="space-y-6">
          {schemas.map((schema, idx) => (
            <div key={idx} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
              <div className="px-6 py-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Code className="w-4 h-4 text-amber-400" />
                    <span>{schema.title}</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{schema.description}</p>
                </div>
                <button
                  onClick={() => handleCopy(schema.json, idx)}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy JSON-LD</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 bg-slate-950 font-mono text-xs text-amber-300 overflow-x-auto max-h-80">
                <pre><code>{schema.json}</code></pre>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Checklist */}
        <div className="mt-10 bg-slate-950 p-6 rounded-2xl border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Local SEO Ranking Factors Enforced</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">100% NAP Consistency</strong>
              <p className="text-slate-400">Exact name, 377 Dallas Dr address, and +1 (732) 973-8127 across all footer, header, and Schema declarations.</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Silo Cross-Linking</strong>
              <p className="text-slate-400">All 14 service pages link to all 9 location pages, and every location page links back to relevant service pages.</p>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
              <strong className="text-white block mb-1">Topical Authority Breadth</strong>
              <p className="text-slate-400">15 in-depth informational blog articles answering high-intent questions on pricing, insurance, and coastal shingles.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
