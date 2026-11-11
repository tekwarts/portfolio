import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Menu, X, FileText, Mail, 
  MapPin, ShieldCheck, Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Navbar({ darkMode, setDarkMode, onOpenResume, onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Architecture', href: '#architecture', id: 'architecture' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Education', href: '#education', id: 'education' },
  ];

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 pointer-events-none">
      <div className="max-w-5xl mx-auto">
        <div className="pointer-events-auto liquid-glass rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
          
          {/* Brand Signature */}
          <a href="#overview" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-900 to-neutral-700 dark:from-white dark:to-neutral-300 text-white dark:text-neutral-950 font-bold text-xs flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              EL
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-neutral-900 dark:text-white leading-tight">
                {personalInfo.name}
              </span>
              <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-normal hidden sm:inline">
                Senior Engineer • Toronto
              </span>
            </div>
          </a>

          {/* Desktop Links (Apple Segmented Style with active indicator) */}
          <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] dark:bg-white/[0.04] p-1 rounded-full border border-black/[0.04] dark:border-white/[0.06]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-neutral-950 dark:bg-white/15 dark:text-white shadow-xs'
                      : 'text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            
            {/* Contact Pill */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90 active:scale-95 transition-all shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>

            {/* Resume Sheet Trigger */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-black/[0.04] dark:bg-white/[0.06] hover:bg-black/[0.08] dark:hover:bg-white/[0.12] text-neutral-700 dark:text-neutral-200 active:scale-95 transition-all"
              title="View full resume sheet"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Dark/Light Mode Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-1.5 rounded-full text-neutral-600 dark:text-neutral-300 hover:bg-black/[0.05] dark:hover:bg-white/[0.1] active:scale-90 transition-all"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-neutral-700" />}
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-full text-neutral-700 dark:text-neutral-200 hover:bg-black/[0.05] dark:hover:bg-white/[0.1]"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Island */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto md:hidden mt-2 liquid-glass rounded-2xl p-4 space-y-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3.5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:bg-white/60 dark:hover:bg-white/10 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-black/[0.06] dark:border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
                className="w-full py-2 text-xs font-semibold rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
