import React from 'react';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Footer({ onOpenResume, onOpenContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 px-4 sm:px-6 pb-12 border-t border-black/[0.06] dark:border-white/[0.08]">
      <div className="max-w-5xl mx-auto pt-10">
        
        {/* Top line */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-black/[0.04] dark:border-white/[0.04]">
          <div>
            <div className="text-base font-semibold text-neutral-950 dark:text-white tracking-tight">
              {personalInfo.name}
            </div>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Senior Software Engineer • Distributed Systems, Kafka & AI Backend
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-600 dark:text-neutral-400">
            <button
              onClick={onOpenContact}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <span>•</span>
            <button
              onClick={onOpenResume}
              className="hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              Resume Sheet
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-neutral-950 dark:hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400 dark:text-neutral-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Designed with Apple Liquid Glass aesthetic.
          </div>
          <div>
            Canadian Permanent Resident • Toronto, ON
          </div>
        </div>

      </div>
    </footer>
  );
}
