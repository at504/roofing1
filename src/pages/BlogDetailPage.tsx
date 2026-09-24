import React, { useState } from 'react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { BUSINESS_NAP, BlogPostItem } from '../data/siteData';
import { Clock, Calendar, User, ShieldCheck, ArrowRight, ChevronDown, ChevronUp, Share2, CheckCircle2 } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface BlogDetailPageProps {
  slug: string;
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const BlogDetailPage: React.FC<BlogDetailPageProps> = ({
  slug,
  onNavigate,
  onOpenQuote
}) => {
  const post = BLOG_POSTS_DATA.find((p) => p.slug === slug) || BLOG_POSTS_DATA[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* Breadcrumb Strip */}
      <div className="bg-slate-100 py-3 border-b border-slate-200 text-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-slate-500">
          <button onClick={() => onNavigate('home')} className="hover:text-slate-900">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('blog')} className="hover:text-slate-900">Roofing Guides</button>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate">{post.title}</span>
        </div>
      </div>

      {/* Main Article Container */}
      <article className="py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <header className="mb-10 text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <span>Ocean County Roofing Intelligence</span>
              <span>·</span>
              <span>2026 Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 font-medium pt-2">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-slate-800">{post.author.name}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{post.date}</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Quick Direct Answer Box (Google Featured Snippet Anchor) */}
          <div className="mb-12 p-6 sm:p-7 bg-amber-50/80 rounded-2xl border-2 border-amber-300 shadow-xs space-y-2">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Quick Answer / Key Takeaway</span>
            </div>
            <p className="text-base sm:text-lg text-slate-900 font-bold leading-relaxed">
              {post.introAnswer}
            </p>
          </div>

          {/* Body Sections */}
          <div className="prose prose-slate max-w-none space-y-10 text-slate-700 leading-relaxed text-base sm:text-lg">
            {post.sections.map((sec, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading">
                  {sec.h2}
                </h2>
                <p className="leading-relaxed text-slate-700">
                  {sec.content}
                </p>
              </section>
            ))}
          </div>

          {/* Internal Links Silo Anchor Box */}
          <div className="my-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Relevant Local Resources & Service Inquiries:
            </h4>
            <div className="flex flex-wrap gap-3">
              {post.linkedServices.map((ls, i) => (
                <button
                  key={i}
                  onClick={() => onNavigate('service-detail', ls.slug)}
                  className="px-4 py-2 bg-white hover:bg-slate-900 hover:text-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span>{ls.anchor}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ))}
              <button
                onClick={() => onNavigate('location-detail', post.linkedLocation.slug)}
                className="px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-950 rounded-xl border border-amber-200 text-xs font-bold transition-colors flex items-center gap-1.5"
              >
                <span>{post.linkedLocation.anchor}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="my-12">
            <h3 className="text-2xl font-black text-slate-950 mb-6 font-heading">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3">
              {post.faqs.map((faq, i) => (
                <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left p-5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronDown className="w-5 h-5 text-amber-600 rotate-180 transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 transition-transform" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="p-5 pt-0 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Author E-E-A-T Box */}
          <div className="mt-14 p-6 sm:p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shrink-0 shadow-lg">
              MV
            </div>
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                Article Author & Reviewer
              </span>
              <h4 className="text-xl font-black text-white font-heading">
                {post.author.name}
              </h4>
              <p className="text-xs font-semibold text-slate-300">
                {post.author.title} · {post.author.experience}
              </p>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                Marcus oversees residential inspections, storm damage insurance claims, and commercial project scoping for Roofers Toms River at 377 Dallas Dr, Toms River, NJ.
              </p>
            </div>
          </div>

        </div>
      </article>

      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
