import React, { useState } from 'react';
import { 
  Code2, Sparkles, Server, Cloud, Database, 
  Network, Search, Coffee, Terminal, 
  FileCode, Layout, Palette, Zap, Brain, 
  Link2, Activity, Compass, Cpu, MousePointer, 
  Layers, Globe, Box, GitBranch, Package, 
  Radio, ShieldCheck, Split, Binary, Braces
} from 'lucide-react';
import { skillCategories } from '../data/resumeData';

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
    <section id="skills" className="relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div>
            <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
              Languages, distributed streaming platforms, cloud infra, and vector databases applied across production services.
            </p>
          </div>

          {/* Search */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs liquid-glass-subtle text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
            />
          </div>
        </div>

        {/* Apple Segmented Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-full liquid-glass-subtle w-fit mb-8 overflow-x-auto max-w-full">
          {['All', ...skillCategories.map(c => c.title)].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm'
                  : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Skills' : cat}
            </button>
          ))}
        </div>

        {/* Categories Liquid Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((cat) => {
            const CategoryIcon = categoryIcons[cat.title] || Code2;
            return (
              <div
                key={cat.title}
                className="liquid-glass rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                    <div className="p-2 rounded-xl liquid-glass-subtle text-neutral-800 dark:text-neutral-200">
                      <CategoryIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-neutral-950 dark:text-white tracking-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 dark:text-neutral-500">
                        {cat.skills.length} skills
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid: Clean Liquid Glass Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {cat.skills.map((skill) => {
                      const SkillIcon = skillIconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={skill.name}
                          className="liquid-glass-subtle rounded-2xl p-2.5 flex items-center gap-2 hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-150 group"
                        >
                          <div className="p-1 rounded-lg text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200 truncate">
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
          <div className="liquid-glass rounded-3xl p-10 text-center text-neutral-500 text-sm">
            No matching skills found for "{searchTerm}".
          </div>
        )}

      </div>
    </section>
  );
}
