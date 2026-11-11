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
    <div className="relative min-h-screen bg-neutral-100 text-neutral-900 dark:bg-[#0c0c0e] dark:text-neutral-100 selection:bg-blue-500 selection:text-white transition-colors duration-500 overflow-x-hidden font-sans">
      
      {/* Apple-grade Liquid Ambient Light Canvas */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Orb 1: Soft Cyan / Sky Glow */}
        <div className="absolute top-[-8vw] left-[15vw] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-sky-400/20 via-blue-500/15 to-transparent blur-[120px] dark:from-sky-500/15 dark:via-blue-600/10 animate-fluid-1" />
        
        {/* Orb 2: Elegant Indigo / Purple Glow */}
        <div className="absolute top-[35vh] right-[-5vw] w-[45vw] h-[45vw] max-w-[650px] max-h-[650px] rounded-full bg-gradient-to-bl from-indigo-400/15 via-purple-500/10 to-transparent blur-[140px] dark:from-indigo-600/15 dark:via-purple-700/10 animate-fluid-2" />
        
        {/* Orb 3: Bottom ambient glow */}
        <div className="absolute bottom-[-10vh] left-[20vw] w-[55vw] h-[45vw] max-w-[800px] rounded-full bg-gradient-to-r from-teal-400/10 via-cyan-500/10 to-transparent blur-[130px] dark:from-teal-600/10 dark:via-cyan-700/5" />
      </div>

      {/* Floating Apple Island Navigation */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
      />

      {/* Page Sections with Breathing Room & Liquid Glass Cards */}
      <main className="relative z-10 space-y-16 sm:space-y-24 pb-16">
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

      {/* Sheet Modals with Liquid Glass styling */}
      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
