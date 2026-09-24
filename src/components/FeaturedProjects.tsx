import React from 'react';
import { Star, MapPin, Maximize2, Clock, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projectsData';

interface FeaturedProjectsProps {
  onViewAllProjects: () => void;
  onSelectProject: (projectId: string) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  onViewAllProjects,
  onSelectProject
}) => {
  // Take first 4 cards for the reference template structure
  const featured = PROJECTS_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 mb-2">
              <span>Real Ocean County Case Studies</span>
              <span>·</span>
              <span>E-E-A-T Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-heading">
              Featured Roofing Projects
            </h2>
            <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-2xl">
              Inspect transparent pricing, square footage, materials, and real customer reviews across Toms River and surrounding shore towns.
            </p>
          </div>

          <button
            onClick={onViewAllProjects}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-amber-400 font-black text-xs shadow-md transition-all self-start md:self-auto cursor-pointer border border-slate-800"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project.id)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Container with Number Badge and Price */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Number Badge (01-04) */}
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-slate-950/90 backdrop-blur-md text-amber-400 flex items-center justify-center font-black text-sm border border-slate-700 shadow-md">
                  {project.numberBadge}
                </div>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-amber-400 text-slate-950 font-black text-xs shadow-md">
                  {project.price}
                </div>

                {/* Duration Overlay */}
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-semibold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Location & Sq Ft */}
                <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
                    {project.sqFt}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors font-heading mb-2 line-clamp-2 leading-snug">
                  {project.title}
                </h3>

                {/* Roof Type Pill */}
                <div className="mb-3">
                  <span className="inline-block text-[11px] font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                    {project.roofType}
                  </span>
                </div>

                {/* Customer Review Quote Snippet */}
                <p className="text-xs text-slate-600 italic mb-4 flex-grow line-clamp-3 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                  "{project.reviewText}"
                </p>

                {/* Rating & Client Name */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto text-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-extrabold text-slate-900">{project.rating.toFixed(1)}</span>
                    <span className="text-slate-400">({project.reviewCount})</span>
                  </div>
                  <span className="font-bold text-slate-700 text-[11px] truncate max-w-[120px]">
                    {project.clientName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
