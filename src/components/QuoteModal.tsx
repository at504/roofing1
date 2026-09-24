import React, { useState } from 'react';
import { X, Phone, ShieldCheck, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';
import { SERVICES_DATA } from '../data/servicesData';
import { LOCATIONS_DATA } from '../data/locationsData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultLocation?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  defaultLocation
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState(defaultService || SERVICES_DATA[0].name);
  const [location, setLocation] = useState(defaultLocation || LOCATIONS_DATA[0].name);
  const [urgency, setUrgency] = useState('Emergency (Today/Tomorrow)');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 text-white relative shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>5-Minute Response Guaranteed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white font-heading">
                Request Free Roof Estimate
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                Zero pressure, no upfront deposit, and 100% free 21-point physical & drone inspection in Ocean County, NJ.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Miller"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(732) 555-0199"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Property Address / Street
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="377 Dallas Dr, Toms River"
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.name}>{s.shortName}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                    Location / Town
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none cursor-pointer"
                  >
                    {LOCATIONS_DATA.map((loc) => (
                      <option key={loc.id} value={loc.name}>{loc.name}, NJ</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                  How Urgent Is Your Roof Request?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Emergency Leak', 'This Week', 'Planning / Quotes'].map((urg) => (
                    <button
                      type="button"
                      key={urg}
                      onClick={() => setUrgency(urg)}
                      className={`py-2 px-3 rounded-lg text-xs font-bold border transition-colors ${
                        urgency === urg
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {urg}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-300 mb-1">
                  Tell Us About the Roof Issue (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe leaks, missing shingles, storm damage, or age of roof..."
                  className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white text-sm focus:border-amber-400 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl text-base transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Submitting Request...' : 'Lock In Free 21-Point Inspection'}
              </button>

              <div className="text-center">
                <span className="text-xs text-slate-500">
                  Or call directly for immediate emergency tarping:
                </span>{' '}
                <a
                  href={`tel:${BUSINESS_NAP.phoneRaw}`}
                  className="text-amber-400 font-bold text-xs hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="w-3 h-3" />
                  {BUSINESS_NAP.phone}
                </a>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white font-heading">
              Estimate Request Received!
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Our senior roofing estimator in Toms River is reviewing your request for <strong className="text-amber-400">{service}</strong> in <strong className="text-amber-400">{location}, NJ</strong>.
            </p>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Direct Contact:</span>
                <span className="text-white font-bold">{phone}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Estimated Response:</span>
                <span className="text-emerald-400 font-bold">Within 5 Minutes</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Assigned Crew:</span>
                <span className="text-white">Ocean County Mobile Unit 2</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-2">
              Need immediate assistance? Call our direct 24/7 hotline at{' '}
              <a href={`tel:${BUSINESS_NAP.phoneRaw}`} className="text-amber-400 font-bold hover:underline">
                {BUSINESS_NAP.phone}
              </a>
            </p>

            <button
              onClick={handleReset}
              className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-sm transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
