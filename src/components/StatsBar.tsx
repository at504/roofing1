import React from 'react';
import { Award, Users, MapPin, Home } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      label: 'Projects Completed',
      value: '1,850+',
      icon: Award,
      desc: 'Residential & commercial in Ocean County'
    },
    {
      label: 'Happy Clients',
      value: '2,100+',
      icon: Users,
      desc: '4.9★ Average rating across Google & BBB'
    },
    {
      label: 'Cities Covered',
      value: '9 Towns',
      icon: MapPin,
      desc: 'Dedicated crews for every municipality'
    },
    {
      label: 'Roofs Installed',
      value: '3,400+',
      icon: Home,
      desc: 'Zero leak callbacks with written warranty'
    }
  ];

  return (
    <section className="bg-slate-950 py-12 border-y border-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-400/50 transition-all duration-300 flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-1 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-amber-400 mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 font-medium">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
