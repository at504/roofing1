import React, { useState } from 'react';
import { BUSINESS_NAP } from '../data/siteData';
import { SERVICES_DATA } from '../data/servicesData';
import { LOCATIONS_DATA } from '../data/locationsData';
import { Phone, MapPin, Clock, ShieldCheck, Mail, Send, CheckCircle2 } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface ContactPageProps {
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuote }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState(SERVICES_DATA[0].name);
  const [town, setTown] = useState(LOCATIONS_DATA[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>24/7 Ocean County Dispatch</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading mb-4">
            Contact Roofers Toms River
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Need an emergency roof tarp or scheduling a free 21-point physical & drone inspection? Contact our local team today.
          </p>
        </div>
      </section>

      {/* Main Grid: NAP & Details Left | Contact Form Right */}
      <section className="py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* NAP Info (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
                <h2 className="text-2xl font-black text-slate-950 font-heading">
                  Headquarters & Contact Details
                </h2>

                <div className="space-y-5 text-sm text-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-extrabold">Physical Address:</strong>
                      <span>{BUSINESS_NAP.street}, {BUSINESS_NAP.city}, {BUSINESS_NAP.state} {BUSINESS_NAP.zip}, USA</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-extrabold">Direct Telephone (Click to Call):</strong>
                      <a href={`tel:${BUSINESS_NAP.phoneRaw}`} className="text-amber-600 font-black text-base hover:underline">
                        {BUSINESS_NAP.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-extrabold">Official Domain & Email:</strong>
                      <span>info@rooferstomsriver.us · rooferstomsriver.us</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-extrabold">Working Hours:</strong>
                      <span>Mon – Sat: 7:00 AM – 7:00 PM | Sun: 8:00 AM – 4:00 PM</span>
                      <span className="block text-rose-600 font-bold text-xs mt-0.5">24/7 Emergency Storm Tarping Active</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-slate-950 font-extrabold">State License & Insurance:</strong>
                      <span>NJ Home Improvement Contractor #13VH09842100</span>
                      <span className="block text-xs text-slate-500">$2,000,000 Fully Bonded & Insured</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`tel:${BUSINESS_NAP.phoneRaw}`}
                    className="w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Central Dispatch: {BUSINESS_NAP.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl text-slate-900">
              {!submitted ? (
                <>
                  <div className="mb-8">
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                      Direct Estimator Queue
                    </span>
                    <h2 className="text-3xl font-black text-slate-950 font-heading">
                      Send a Message or Request Inspection
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                      We respond to all online inquiries within 5 to 10 minutes during operating hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(732) 555-0199"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Property Address</label>
                        <input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Street Address in Ocean County"
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Service</label>
                        <select
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                        >
                          {SERVICES_DATA.map((s) => (
                            <option key={s.id} value={s.name}>{s.shortName}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Town</label>
                        <select
                          value={town}
                          onChange={(e) => setTown(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                        >
                          {LOCATIONS_DATA.map((loc) => (
                            <option key={loc.id} value={loc.name}>{loc.name}, NJ</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Message / Project Notes</label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about leaks, shingle age, or nor'easter storm damage..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-amber-400 focus:outline-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-slate-950 hover:bg-slate-800 text-amber-400 font-black rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer border border-slate-800"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Send Request to Estimator</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 font-heading">
                    Thank You, {name}!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your request for <strong className="text-slate-900">{service}</strong> in <strong className="text-slate-900">{town}, NJ</strong> has been sent to our Toms River dispatch desk. An estimator will contact you at <strong className="text-slate-900">{phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-slate-900 text-amber-400 text-xs font-bold rounded-xl hover:bg-slate-800"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
