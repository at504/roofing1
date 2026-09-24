import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/projectsData';
import { ProjectItem } from '../data/siteData';
import { Star, MapPin, Maximize2, Clock, Filter, Award, ArrowRight } from 'lucide-react';
import { CtaStrip } from '../components/CtaStrip';

interface ProjectsPageProps {
  onNavigate: (tab: string, param?: string) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuote }) => {
  const [filterTown, setFilterTown] = useState('all');

  const towns = ['all', 'Toms River', 'Pine Beach', 'Brick', 'Island Heights', 'Manchester', 'Seaside Heights', 'Beachwood'];

  const filteredProjects = filterTown === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.location.toLowerCase().includes(filterTown.toLowerCase()));

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-slate-950 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Proven Ocean County Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading mb-4">
            Roofing Case Studies & Real Projects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Real roofs, real prices, and authentic reviews from Toms River and neighboring shore towns. Filter by location to see our local craftsmanship.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
            <Filter className="w-4 h-4 text-amber-600" />
            <span>Filter by Town:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {towns.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTown(t)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  filterTown === t
                    ? 'bg-slate-900 text-amber-400 font-black shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {t === 'all' ? 'All Ocean County' : t}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-500 font-semibold">
            Showing {filteredProjects.length} Projects
          </span>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group transform hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-slate-950/90 text-amber-400 font-black text-xs flex items-center justify-center border border-slate-700 shadow-md">
                    {project.numberBadge}
                  </div>
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-xs shadow-md">
                    {project.price}
                  </div>
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-white text-[11px] font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-amber-400" />
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                    <span className="flex items-center gap-1 text-slate-700 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-600" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">
                      <Maximize2 className="w-3 h-3 text-slate-400" />
                      {project.sqFt}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-950 mb-2 font-heading group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-600 mb-4 font-medium">
                    <strong className="text-slate-800">Materials:</strong> {project.roofType}
                  </p>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 mb-6 italic text-xs text-slate-700 leading-relaxed">
                    "{project.reviewText}"
                    <span className="block mt-1 font-bold text-slate-900 not-italic">— {project.clientName}</span>
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-slate-900 ml-1">5.0</span>
                    </div>

                    <button
                      onClick={onOpenQuote}
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Get Similar Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaStrip onOpenQuote={onOpenQuote} />
    </div>
  );
};
