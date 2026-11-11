import React, { useState } from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle2, 
  Search, Filter, Sparkles, ChevronRight, Layers,
  Cpu, Database, Cloud
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
    <section id="experience" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Professional Career
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            5+ years of progressive growth at <strong className="text-slate-900 dark:text-white">Ruiting Tech</strong>, evolving from core REST microservices to distributed system architect and AI microservice engineering.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Quick role filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setSelectedRole('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedRole === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              All Roles (3)
            </button>
            <button
              onClick={() => setSelectedRole('sr-swe')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedRole === 'sr-swe'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Senior SWE
            </button>
            <button
              onClick={() => setSelectedRole('swe-2')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedRole === 'swe-2'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Software Engineer II
            </button>
            <button
              onClick={() => setSelectedRole('swe-1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedRole === 'swe-1'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              Software Engineer I
            </button>
          </div>

          {/* Search input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tech, Kafka, AWS, RAG..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-7 before:w-0.5 before:bg-gradient-to-b before:from-blue-600 before:via-indigo-500 before:to-slate-300 dark:before:to-slate-700">
          {filteredExperiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-10 sm:pl-16 group">
              {/* Timeline marker */}
              <div className="absolute left-2 sm:left-5 top-1.5 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-600 shadow-md group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-5 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{exp.summary}"
                </p>

                {/* Detailed Key Accomplishments */}
                <div className="space-y-4 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      </div>
                      <div>
                        {highlight.metric && (
                          <span className="inline-block px-2 py-0.5 mr-2 text-xs font-semibold rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                            {highlight.metric}
                          </span>
                        )}
                        <span>{highlight.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies Stack Tags */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-2">
                    Technologies & Architecture Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}

          {filteredExperiences.length === 0 && (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                No matching experience found for "{searchTerm}".
              </p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedRole('all'); }}
                className="mt-3 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 underline"
              >
                Clear filter
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

