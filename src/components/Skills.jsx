import React, { useState } from 'react';
import { 
  Code2, Sparkles, Server, Cloud, Database, 
  Network, Search, Award, Coffee, Terminal, 
  FileCode, Layout, Palette, Zap, Brain, 
  Link2, Activity, Compass, Cpu, MousePointer, 
  Layers, Globe, Box, GitBranch, Package, 
  Radio, ShieldCheck, Split, Binary, Braces,
  Boxes
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

// Map icon names to Lucide icon components
const skillIconMap = {
  'coffee': Coffee,
  'terminal': Terminal,
  'file-code': FileCode,
  'layout': Layout,
  'palette': Palette,
  'zap': Zap,
  'brain': Brain,
  'search': Search,
  'link-2': Link2,
  'activity': Activity,
  'compass': Compass,
  'cpu': Cpu,
  'mouse-pointer': MousePointer,
  'server': Server,
  'atom': Cpu,
  'layers': Layers,
  'globe': Globe,
  'cloud': Cloud,
  'box': Box,
  'git-branch': GitBranch,
  'package': Package,
  'database': Database,
  'radio': Radio,
  'shield-check': ShieldCheck,
  'split': Split,
  'binary': Binary,
  'braces': Braces,
  'network': Network,
};

const categoryIcons = {
  'Programming Languages': Code2,
  'AI & LLM': Sparkles,
  'Backend & Frameworks': Server,
  'Cloud & DevOps': Cloud,
  'Databases': Database,
  'Microservices & Messaging': Network,
  'Core Concepts': Cpu,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = skillCategories.map(cat => {
    if (selectedCategory !== 'All' && cat.title !== selectedCategory) {
      return null;
    }
    const matchingSkills = cat.skills.filter(s => 
      s.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchingSkills.length === 0) return null;
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-3">
            <Award className="w-3.5 h-3.5" />
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Technology Matrix
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A comprehensive inventory of programming languages, distributed infrastructure, databases, and AI tooling applied across production systems.
          </p>
        </div>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', ...skillCategories.map(c => c.title)].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {cat === 'All' ? 'All Skills' : cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka, RAG)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const CategoryIcon = categoryIcons[cat.title] || Code2;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 border-b border-slate-100 dark:border-slate-800 pb-4">
                    <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400">
                      <CategoryIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900 dark:text-white">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {cat.skills.length} skills listed
                      </p>
                    </div>
                  </div>

                  {/* Skills with Icons (No YOE) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/40 dark:hover:bg-blue-950/30 transition-all group"
                        >
                          <div className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-slate-200/70 dark:border-slate-700 group-hover:scale-110 transition-transform">
                            <SkillIcon className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 truncate">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No matching skills found for "{searchTerm}".
            </p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="mt-3 px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 underline"
            >
              Reset filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
