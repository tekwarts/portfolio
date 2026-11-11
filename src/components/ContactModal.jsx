import React, { useState } from 'react';
import { 
  X, Mail, Phone, MapPin, Copy, Check, 
  Send, Clock, ShieldCheck, Sparkles 
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function ContactModal({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [subjectType, setSubjectType] = useState('Senior Software Engineer Opportunity');
  const [customNote, setCustomNote] = useState('');

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subjectType
  )}&body=${encodeURIComponent(
    `Hi Eddie,\n\nI came across your portfolio and wanted to connect regarding: ${subjectType}.\n\n${customNote}\n\nBest regards,\n[Your Name]\n[Your Company / Contact]`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg liquid-glass rounded-[32px] p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-full liquid-glass-subtle text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-1">
            Communication
          </div>
          <h3 className="text-2xl font-semibold text-neutral-950 dark:text-white tracking-tight">
            Connect with {personalInfo.name}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            Open for Senior Backend, Distributed Systems, and AI roles in Toronto or Remote.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-2.5 mb-6">
          {/* Email */}
          <div className="liquid-glass-subtle p-3 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl liquid-glass text-neutral-800 dark:text-neutral-200">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400">Email Address</div>
                <div className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white select-all">
                  {personalInfo.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1 rounded-full text-xs font-medium liquid-glass text-neutral-800 dark:text-neutral-200 hover:bg-white/80 dark:hover:bg-white/20 transition-all flex items-center gap-1.5"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone */}
          <div className="liquid-glass-subtle p-3 rounded-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl liquid-glass text-neutral-800 dark:text-neutral-200">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400">Phone (Mobile / WhatsApp)</div>
                <div className="text-xs sm:text-sm font-medium text-neutral-900 dark:text-white select-all">
                  {personalInfo.phone}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="px-3 py-1 rounded-full text-xs font-medium liquid-glass text-neutral-800 dark:text-neutral-200 hover:bg-white/80 dark:hover:bg-white/20 transition-all flex items-center gap-1.5"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Subject Topic selector */}
        <div className="space-y-3 mb-6">
          <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500">
            Select Topic
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Senior Software Engineer Opportunity',
              'Technical Interview',
              'Contract Project',
              'General Inquiry'
            ].map((topic) => (
              <button
                key={topic}
                onClick={() => setSubjectType(topic)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  subjectType === topic
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-xs'
                    : 'liquid-glass-subtle text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-black/[0.05] dark:border-white/[0.06]">
          <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Timezone: Toronto (EST)</span>
          </div>

          <a
            href={mailtoLink}
            className="px-5 py-2.5 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs font-medium hover:opacity-90 active:scale-95 transition-all shadow-md inline-flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Draft Email</span>
          </a>
        </div>

      </div>
    </div>
  );
}
