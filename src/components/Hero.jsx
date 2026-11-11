import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ShieldCheck, Languages, 
  Copy, Check, ArrowRight, Download, Sparkles, 
  Server, Cpu, Activity, ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/resumeData';

export default function Hero({ onOpenResume, onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-teal-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Canadian Permanent Resident • No sponsorship required
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                <Languages className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                English (C1) & French (C1)
              </span>
            </div>

            {/* Title & Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">{personalInfo.name}</span>
              </h1>
              <p className="mt-2 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-200">
                {personalInfo.title}
              </p>
              <p className="text-base sm:text-lg text-blue-600 dark:text-blue-400 font-medium">
                Distributed Systems • Event-Driven Microservices • AI & Cloud Infrastructure
              </p>
            </div>

            {/* Concise Bio */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Backend specialist with 5+ years of engineering experience architecting fault-tolerant, high-concurrency systems. Experienced in scaling <strong className="text-slate-900 dark:text-white font-semibold">Apache Kafka</strong> event pipelines, <strong className="text-slate-900 dark:text-white font-semibold">Spring Boot</strong> microservices, and <strong className="text-slate-900 dark:text-white font-semibold">AWS/Kubernetes</strong> cloud workloads, alongside developing low-latency <strong className="text-slate-900 dark:text-white font-semibold">AI RAG microservices</strong>.
            </p>

            {/* Contact quick links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300 pt-1">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                {personalInfo.email}
              </a>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <a 
                href={`tel:${personalInfo.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-emerald-500" />
                {personalInfo.phone}
              </a>
              <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-slate-500 dark:text-slate-400 font-medium">
                <MapPin className="w-4 h-4 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all group"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100/60 font-medium transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Resume / Print</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics & Architecture Preview Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50/80 dark:from-slate-900 dark:to-slate-900/60 p-6 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">Engineering Impact</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Verified System Benchmarks</p>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  Active
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">+40%</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Kafka Throughput</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Partitioned consumers & Outbox</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">-35%</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Search Latency</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Elasticsearch query tuning</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">5+ Yrs</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">Hands-on Experience</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">Ruiting Tech (2021 – 2026)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                  <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">Sub-sec</div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">AI Summarization</div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400">FastAPI & pgvector RAG</div>
                </div>
              </div>

              {/* Core Competencies Quick Tags */}
              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                  Core Technical Focus
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Apache Kafka', 'Spring Boot', 'AWS EKS', 'Kubernetes', 'Docker', 'Elasticsearch', 'PostgreSQL', 'Redis', 'Python / FastAPI', 'RAG / LLMs'].map((t) => (
                    <span 
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium shadow-2xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

