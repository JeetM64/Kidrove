import React from 'react';
import { Users, Calendar, Laptop, IndianRupee, Play } from 'lucide-react';

interface DetailItem {
  id: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  bgGradient: string;
  iconColor: string;
}

export default function DetailsGrid() {
  const details: DetailItem[] = [
    {
      id: 'detail-age',
      label: 'Age Group',
      value: '8–14 Years',
      icon: <Users className="w-8 h-8" />,
      bgGradient: 'from-orange-500/10 to-amber-500/10 border-orange-500/20 hover:border-orange-500/40',
      iconColor: 'text-orange-500 bg-orange-100',
    },
    {
      id: 'detail-duration',
      label: 'Duration',
      value: '4 Weeks',
      icon: <Calendar className="w-8 h-8" />,
      bgGradient: 'from-indigo-500/10 to-blue-500/10 border-indigo-500/20 hover:border-indigo-500/40',
      iconColor: 'text-indigo-500 bg-indigo-100',
    },
    {
      id: 'detail-mode',
      label: 'Mode',
      value: 'Online (Live)',
      icon: <Laptop className="w-8 h-8" />,
      bgGradient: 'from-cyan-500/10 to-teal-500/10 border-cyan-500/20 hover:border-cyan-500/40',
      iconColor: 'text-cyan-500 bg-cyan-100',
    },
    {
      id: 'detail-fee',
      label: 'Workshop Fee',
      value: '₹2,999',
      icon: <IndianRupee className="w-8 h-8" />,
      bgGradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40',
      iconColor: 'text-emerald-500 bg-emerald-100',
    },
    {
      id: 'detail-start',
      label: 'Start Date',
      value: '15 July 2026',
      icon: <Play className="w-8 h-8" />,
      bgGradient: 'from-rose-500/10 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40',
      iconColor: 'text-rose-500 bg-rose-100',
    },
  ];

  return (
    <section id="details-section" className="py-20 bg-slate-50 relative scroll-mt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Workshop Quick Overview
          </h2>
          <div className="w-16 h-1.5 bg-indigo-500 mx-auto rounded-full mt-4"></div>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about the upcoming summer camp sessions.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {details.map((detail) => (
            <div
              key={detail.id}
              id={detail.id}
              className={`premium-card p-6 bg-white border rounded-2xl flex flex-col items-center text-center shadow-sm hover:shadow-md ${detail.bgGradient}`}
            >
              {/* Icon Container */}
              <div className={`p-4 rounded-xl mb-4 ${detail.iconColor} transition-transform duration-300 hover:rotate-6`}>
                {detail.icon}
              </div>
              
              {/* Label */}
              <span className="text-sm font-semibold tracking-wider text-slate-400 uppercase mb-1">
                {detail.label}
              </span>
              
              {/* Value */}
              <span className="text-2xl font-bold text-slate-800">
                {detail.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
