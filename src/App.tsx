import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { LocationsPage } from './pages/LocationsPage';
import { LocationDetailPage } from './pages/LocationDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ThemeCodeViewer } from './components/ThemeCodeViewer';
import { SeoAuditPanel } from './components/SeoAuditPanel';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'home' | 'services' | 'service-detail' | 'locations' | 'location-detail' | 'projects' | 'blog' | 'blog-detail' | 'about' | 'contact' | 'theme-zip' | 'seo-audit'>('home');
  const [activeParam, setActiveParam] = useState<string>('');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);

  // Scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab, activeParam]);

  const handleNavigate = (tab: string, param?: string) => {
    setCurrentTab(tab as any);
    if (param) {
      setActiveParam(param);
    }
  };

  const handleOpenQuote = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Primary Sticky Header */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Main Content Area */}
      <div className="flex-grow">
        {currentTab === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'services' && (
          <ServicesPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'service-detail' && (
          <ServiceDetailPage
            slug={activeParam || 'roof-replacement-toms-river'}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'locations' && (
          <LocationsPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'location-detail' && (
          <LocationDetailPage
            slug={activeParam || 'toms-river-roofing'}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'projects' && (
          <ProjectsPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'blog' && (
          <BlogPage onNavigate={handleNavigate} onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'blog-detail' && (
          <BlogDetailPage
            slug={activeParam || 'how-much-does-roof-repair-cost-in-nj'}
            onNavigate={handleNavigate}
            onOpenQuote={handleOpenQuote}
          />
        )}

        {currentTab === 'about' && (
          <AboutPage onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'contact' && (
          <ContactPage onOpenQuote={handleOpenQuote} />
        )}

        {currentTab === 'theme-zip' && (
          <ThemeCodeViewer />
        )}

        {currentTab === 'seo-audit' && (
          <SeoAuditPanel />
        )}
      </div>

      {/* Primary Footer with Silo Links & Sticky Mobile Call Bar */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={handleOpenQuote}
      />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
      />
    </div>
  );
}
