import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import ArchitectureShowcase from './components/ArchitectureShowcase';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">
      {/* Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeModalOpen(true)} 
          onOpenContact={() => setContactModalOpen(true)}
        />
        <Experience />
        <ArchitectureShowcase />
        <Skills />
        <Education />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeModalOpen(true)} 
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Full ATS / Printable Resume Modal */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      {/* Quick Connect & Message Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
