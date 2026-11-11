import React from 'react';
import { 
  GraduationCap, Calendar, MapPin, Globe2, 
  ShieldCheck, Languages, CheckCircle2 
} from 'lucide-react';
import { education, personalInfo } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Education & Status
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
            Academic qualifications, international residency authorization, and bilingual communication fluency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Degree Card */}
          <div className="md:col-span-7 liquid-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-2xl liquid-glass-subtle text-neutral-800 dark:text-neutral-200">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-950 dark:text-white tracking-tight">
                      {education.institution}
                    </h3>
                    <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300 mt-0.5">
                      {education.degree}
                    </p>
                  </div>
                </div>

                <div className="text-right text-xs text-neutral-500 dark:text-neutral-400 space-y-1">
                  <div>{education.period}</div>
                  <div>{education.location}</div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500">
                  Coursework & Honors
                </div>
                {education.details.map((detail, idx) => (
                  <p key={idx} className="text-sm text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                    {detail}
                  </p>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
              <div className="flex flex-wrap gap-1.5">
                {['Distributed Systems', 'Algorithms', 'Computer Networks', 'Operating Systems', 'Databases'].map((t) => (
                  <span
                    key={t}
                    className="liquid-glass-subtle px-3 py-1 rounded-full text-xs text-neutral-700 dark:text-neutral-300 font-normal"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Work Status & Languages */}
          <div className="md:col-span-5 space-y-5">
            
            {/* PR Status Card */}
            <div className="liquid-glass rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="font-semibold text-sm text-neutral-950 dark:text-white tracking-tight">
                  Canadian Permanent Resident
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                Legally eligible to work for any employer across Canada without sponsorship. Open to local Toronto and remote positions.
              </p>
            </div>

            {/* Languages Card */}
            <div className="liquid-glass rounded-3xl p-6">
              <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-4">
                Languages
              </div>
              <div className="space-y-2.5">
                {personalInfo.languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="liquid-glass-subtle p-3 rounded-2xl flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-neutral-800 dark:text-neutral-200">
                      <Globe2 className="w-4 h-4 text-neutral-400" />
                      <span>{lang.name}</span>
                    </div>
                    <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-300">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
