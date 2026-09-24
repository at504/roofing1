import React, { useState } from 'react';
import { Phone, Shield, Menu, X, ArrowRight, Award, FileCode, CheckCircle2 } from 'lucide-react';
import { BUSINESS_NAP } from '../data/siteData';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentTab, onNavigate, onOpenQuote }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (tab: string, param?: string) => {
    onNavigate(tab, param);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Urgency Trust Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-medium text-slate-200">
              <strong className="text-white">Emergency Crews On Call:</strong> Toms River & Ocean County Same-Day Dispatch
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              NJ License #{BUSINESS_NAP.licenseNumber}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              GAF Master Elite® Certified
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              href={`tel:${BUSINESS_NAP.phoneRaw}`}
              className="text-amber-400 font-extrabold hover:text-amber-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {BUSINESS_NAP.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Header matching Reference Template */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo Left */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 flex items-center justify-center text-amber-400 font-black text-2xl shadow-md group-hover:scale-105 transition-transform">
              R
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 block leading-tight font-heading">
                Roofers Toms River
              </span>
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">
                Ocean County, NJ · Est. 2009
              </span>
            </div>
          </button>

          {/* Nav Links Center */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-bold text-slate-700">
            <button
              onClick={() => handleNav('home')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'home' ? 'text-amber-600' : ''}`}
            >
              Home
            </button>
            <button
              onClick={() => handleNav('services')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'services' || currentTab === 'service-detail' ? 'text-amber-600' : ''}`}
            >
              Services (14)
            </button>
            <button
              onClick={() => handleNav('locations')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'locations' || currentTab === 'location-detail' ? 'text-amber-600' : ''}`}
            >
              Service Areas (9)
            </button>
            <button
              onClick={() => handleNav('projects')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'projects' ? 'text-amber-600' : ''}`}
            >
              Projects
            </button>
            <button
              onClick={() => handleNav('blog')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'blog' || currentTab === 'blog-detail' ? 'text-amber-600' : ''}`}
            >
              Roofing Guides (15)
            </button>
            <button
              onClick={() => handleNav('about')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'about' ? 'text-amber-600' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => handleNav('contact')}
              className={`hover:text-slate-950 transition-colors ${currentTab === 'contact' ? 'text-amber-600' : ''}`}
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Phone + Get a Quote Button */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BUSINESS_NAP.phoneRaw}`}
              className="hidden lg:flex flex-col text-right group"
            >
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                Emergency 24/7 Hotline
              </span>
              <span className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors">
                {BUSINESS_NAP.phone}
              </span>
            </a>

            <button
              onClick={onOpenQuote}
              className="px-6 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 hover:text-slate-950 rounded-lg hover:bg-slate-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <button
              onClick={() => handleNav('home')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('services')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Roofing Services (14)
            </button>
            <button
              onClick={() => handleNav('locations')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Service Areas (9 Towns)
            </button>
            <button
              onClick={() => handleNav('projects')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Projects Portfolio
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Topical Roofing Guides (15)
            </button>
            <button
              onClick={() => handleNav('about')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              About Roofers Toms River
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="block w-full text-left py-2 px-3 rounded-lg font-bold text-slate-800 hover:bg-slate-100"
            >
              Contact Us
            </button>
            <div className="pt-2 border-t border-slate-100">
              <a
                href={`tel:${BUSINESS_NAP.phoneRaw}`}
                className="w-full py-3 bg-amber-400 hover:bg-amber-500 text-slate-950 font-black rounded-xl flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_NAP.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
