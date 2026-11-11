import React from 'react';
import { 
  GraduationCap, Calendar, MapPin, Globe2, 
  ShieldCheck, Languages, CheckCircle2 
} from 'lucide-react';
import { education, personalInfo } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal engineering foundations paired with verified linguistic and international work authorization qualifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Education Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-5 mb-5">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-600 text-white shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {education.institution}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {education.degree}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {education.period}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium px-2.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {education.location}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Curriculum & Specialization
                </h4>
                {education.details.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                Core Academic Foundations
              </span>
              <div className="flex flex-wrap gap-2">
                {['Data Structures', 'Algorithms', 'Distributed Systems', 'Computer Networks', 'Operating Systems', 'Database Architecture'].map(t => (
                  <span key={t} className="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Languages & Work Status Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Work Authorization Status */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:from-emerald-950/30 dark:to-teal-950/10 border border-emerald-200 dark:border-emerald-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Work Authorization
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
                    Permanent Resident (Canada)
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Legally authorized to work for any Canadian employer indefinitely. <strong className="text-slate-900 dark:text-white">No visa sponsorship required</strong>. Readily available for local Toronto positions or remote roles across Canada and North America.
              </p>
            </div>

            {/* Language Proficiencies */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-blue-600 text-white shadow-sm">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white">
                    Language Proficiencies
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Bilingual Professional Communication
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe2 className="w-4 h-4 text-blue-500" />
                      <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
                        {lang.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
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

