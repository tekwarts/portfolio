import React from 'react';
import { Mail, Phone, MapPin, ArrowUp, Github, Linkedin, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-900">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg text-slate-900 dark:text-white">
                {personalInfo.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 font-semibold">
                Senior Software Engineer
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 max-w-md">
              Specialized in Distributed Systems, Apache Kafka Event Pipelines, Spring Boot Microservices, and AI RAG Architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-blue-500" />
              {personalInfo.email}
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <a
              href={`tel:${personalInfo.phone}`}
              className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              {personalInfo.phone}
            </a>
            <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              {personalInfo.location}
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              Canadian Permanent Resident
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              Printable Resume
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

