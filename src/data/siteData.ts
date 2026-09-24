export interface BusinessNAP {
  name: string;
  domain: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  phone: string;
  phoneRaw: string;
  primaryCity: string;
  county: string;
  geo: {
    lat: number;
    lng: number;
  };
  rating: number;
  reviewCount: number;
  hours: string;
  emergency: string;
  license: string;
  certifications: string[];
}

export const SITE_NAP: BusinessNAP = {
  name: "Roofers Toms River",
  domain: "rooferstomsriver.us",
  address: {
    street: "377 Dallas Dr",
    city: "Toms River",
    state: "NJ",
    zip: "08753",
    full: "377 Dallas Dr, Toms River, NJ 08753, USA",
  },
  phone: "+1 (732) 973-8127",
  phoneRaw: "+17329738127",
  primaryCity: "Toms River, NJ",
  county: "Ocean County, NJ",
  geo: {
    lat: 40.0046,
    lng: -74.1979,
  },
  rating: 4.9,
  reviewCount: 218,
  hours: "Monday – Sunday: 7:00 AM – 8:00 PM",
  emergency: "24/7 Emergency Dispatch Available",
  license: "NJ HIC License #13VH09842100",
  certifications: [
    "GAF Master Elite® Certified Contractor",
    "CertainTeed SELECT ShingleMaster™",
    "Owens Corning Preferred Contractor",
    "EPA Lead-Safe Certified Firm",
  ],
};

export const BUSINESS_NAP = {
  name: "Roofers Toms River",
  domain: "rooferstomsriver.us",
  street: "377 Dallas Dr",
  city: "Toms River",
  state: "NJ",
  zip: "08753",
  addressFull: "377 Dallas Dr, Toms River, NJ 08753, USA",
  phone: "+1 (732) 973-8127",
  phoneRaw: "+17329738127",
  primaryCity: "Toms River, NJ",
  county: "Ocean County, NJ",
  hours: "Monday – Sunday: 7:00 AM – 8:00 PM (24/7 Emergency Dispatch)",
  licenseNumber: "13VH09842100",
  coordinates: {
    lat: 40.0046,
    lng: -74.1979,
  },
};

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortName?: string;
  name?: string;
  primaryKeyword: string;
  shortDesc: string;
  metaDescription?: string;
  heroSubtitle?: string;
  detailedDescription?: string;
  icon: string;
  priceRange: string;
  avgDuration: string;
  typicalDuration?: string;
  emergencyEligible: boolean;
  intro: string;
  problemContext: string;
  signs: string[];
  commonSigns?: string[];
  benefits: { title: string; desc: string }[];
  process: { step: number | string; title?: string; desc: string }[];
  processSteps?: { step: number | string; desc: string }[];
  materials: { name: string; brand: string; warranty: string; desc: string }[];
  materialsUsed?: string[];
  pricingTable: { service: string; price: string; detail: string }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  relatedLocations: string[];
  relatedBlogSlugs: string[];
}

export interface LocationItem {
  id: string;
  slug: string;
  name: string;
  state: string;
  primaryKeyword: string;
  tagline: string;
  population: string;
  distanceFromHQ: string;
  landmarks: string[];
  housingStock: string;
  weatherExposure: string;
  buildingPermitInfo?: string;
  commonRoofTypes?: string[];
  intro: string;
  commonProblems: string[];
  localReviews: { name: string; area: string; review: string; service: string; rating: number }[];
  faqs: { q: string; a: string }[];
  relatedServices: string[];
  neighboringTowns: string[];
}

export interface BlogPostItem {
  slug: string;
  title: string;
  primaryKeyword: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: {
    name: string;
    title: string;
    experience: string;
  };
  introAnswer: string;
  sections: { h2: string; content: string }[];
  faqs: { q: string; a: string }[];
  linkedServices: { slug: string; anchor: string }[];
  linkedLocation: { slug: string; anchor: string };
}

export interface ProjectItem {
  id: string;
  numberBadge: string;
  title: string;
  location: string;
  roofType: string;
  price: string;
  sqFt: string;
  duration: string;
  rating: number;
  reviewCount: number;
  reviewText: string;
  clientName: string;
  image: string;
  serviceSlug: string;
  locationSlug: string;
}
