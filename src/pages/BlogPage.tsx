import React from 'react';
import { BLOG_POSTS_DATA } from '../data/blogData';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface BlogPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-white">
      {/* Blog Hub Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Topical Authority & Homeowner Knowledge</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading mb-4">
            Toms River Roofing Advice & Cost Guides
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Unbiased, contractor-verified answers on roof repair pricing, storm damage insurance, shingle comparisons, and coastal maintenance across New Jersey.
          </p>
        </div>
      </section>

      {/* 15 Articles Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS_DATA.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col p-6 group cursor-pointer"
                onClick={() => onNavigate('blog-detail', post.slug)}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-bold text-amber-600 uppercase tracking-wider">Ocean County Guide</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-black text-slate-950 mb-3 group-hover:text-amber-600 transition-colors font-heading leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                {/* Author & Read More */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-900 text-amber-400 font-bold text-[10px] flex items-center justify-center">
                      MV
                    </div>
                    <span className="text-slate-700 font-semibold">{post.author.name}</span>
                  </div>

                  <span className="text-amber-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read →
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
