import React, { useState } from 'react';
import { 
  Calendar, MapPin, Search, ArrowUpRight, 
  Layers, CheckCircle2 
} from 'lucide-react';
import { experiences } from '../data/resumeData';

export default function Experience() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const filteredExperiences = experiences.filter((exp) => {
    const matchesRole = selectedRole === 'all' || exp.id === selectedRole;
    if (!matchesRole) return false;

    if (!searchTerm.trim()) return true;
    const query = searchTerm.toLowerCase();
    
    const inRole = exp.role.toLowerCase().includes(query);
    const inCompany = exp.company.toLowerCase().includes(query);
    const inSummary = exp.summary.toLowerCase().includes(query);
    const inTech = exp.technologies.some(t => t.toLowerCase().includes(query));
    const inHighlights = exp.highlights.some(h => 
      h.text.toLowerCase().includes(query) || h.metric.toLowerCase().includes(query)
    );

    return inRole || inCompany || inSummary || inTech || inHighlights;
  });

  return (
    <section id="experience" className="relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Career Trajectory
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              Experience
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
              5 years of continuous engineering evolution at Ruiting Tech, architecting high-throughput distributed systems and cloud backends.
            </p>
          </div>

          {/* Search bar in Liquid Glass */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Filter by technology or topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs liquid-glass-subtle text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 dark:focus:ring-neutral-600 transition-all"
            />
          </div>
        </div>

        {/* Apple-style Segmented Control */}
        <div className="flex items-center gap-1.5 p-1 rounded-full liquid-glass-subtle w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Roles (3)' },
            { id: 'sr-swe', label: 'Senior SWE' },
            { id: 'swe-2', label: 'SWE II' },
            { id: 'swe-1', label: 'SWE I' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedRole(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                selectedRole === tab.id
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience Cards Stack */}
        <div className="space-y-6">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="liquid-glass rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 mb-5 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-black/[0.05] dark:bg-white/[0.08] text-neutral-700 dark:text-neutral-300">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Summary Statement */}
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 font-normal leading-relaxed">
                {exp.summary}
              </p>

              {/* Technical Accomplishments */}
              <div className="space-y-3.5 mb-6">
                {exp.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-2 flex-shrink-0" />
                    <div>
                      {item.metric && (
                        <span className="font-semibold text-neutral-950 dark:text-white mr-2">
                          [{item.metric}]
                        </span>
                      )}
                      <span>{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technologies: Apple Glass Pills */}
              <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="liquid-glass-subtle px-3 py-1 rounded-full text-xs font-normal text-neutral-700 dark:text-neutral-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}

          {filteredExperiences.length === 0 && (
            <div className="liquid-glass rounded-3xl p-12 text-center text-neutral-500 text-sm">
              No matching records for "{searchTerm}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
