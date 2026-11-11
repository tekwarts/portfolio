import React, { useState } from 'react';
import { 
  X, Mail, Phone, MapPin, Copy, Check, 
  Send, Clock, ShieldCheck, Sparkles, MessageSquare 
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Connect
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            Get in Touch with {personalInfo.name}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Open to Senior Backend, Distributed Systems, and AI Microservice roles in Toronto or Remote.
          </p>
        </div>

        {/* Quick Contact Badges */}
        <div className="space-y-3 mb-6">
          {/* Email */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Direct Email</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white select-all">
                  {personalInfo.email}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Phone (Mobile / WhatsApp)</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white select-all">
                  {personalInfo.phone}
                </div>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-1.5"
            >
              {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Quick Message Template Builder */}
        <div className="space-y-4 mb-6 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
              Inquiry Topic
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Senior Software Engineer Opportunity',
                'Technical Interview Invitation',
                'Contract / Advisory Project',
                'General Networking'
              ].map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSubjectType(topic)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    subjectType === topic
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
              Quick Message / Notes (Optional)
            </label>
            <textarea
              rows="3"
              placeholder="e.g. We loved your Kafka & distributed systems background and would love to chat!"
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full p-3 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>Timezone: Toronto, Canada (EST/EDT)</span>
          </div>

          <a
            href={mailtoLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
          >
            <Send className="w-4 h-4" />
            <span>Launch Email App</span>
          </a>
        </div>

      </div>
    </div>
  );
}
