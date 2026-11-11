import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, ShieldCheck, Languages, 
  Copy, Check, ArrowRight, Download, Sparkles, 
  Activity, ArrowUpRight, CheckCircle2 
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
    <section id="overview" className="relative pt-12 sm:pt-20 pb-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Status Bar: Apple Badge Pill */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Canadian Permanent Resident • No sponsorship required</span>
          </div>

          <div className="liquid-glass-subtle rounded-full px-3.5 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
            <Languages className="w-3.5 h-3.5 text-neutral-500" />
            <span>Bilingual (English C1 • French C1)</span>
          </div>
        </div>

        {/* Headline & Statement */}
        <div className="max-w-3xl mb-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.035em] text-neutral-950 dark:text-white leading-[1.08]">
            Eddie Li
          </h1>
          <p className="mt-4 text-xl sm:text-2xl font-medium tracking-tight text-neutral-700 dark:text-neutral-300">
            Senior Software Engineer building resilient distributed systems, Kafka event streaming pipelines, and AI backend microservices.
          </p>
          <p className="mt-4 text-base sm:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-2xl font-normal">
            Based in Toronto, Canada. Over 5 years scaling high-concurrency cloud backends at Ruiting Tech, with verified performance improvements in message throughput (+40%) and search query latency (-35%).
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-16">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100 text-sm font-medium transition-all shadow-md active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={handleCopyEmail}
            className="liquid-glass inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-white/80 dark:hover:bg-white/10 transition-all active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400">Email Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-neutral-500" />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="liquid-glass-subtle inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-white/80 dark:hover:bg-white/10 transition-all active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Resume PDF</span>
          </button>
        </div>

        {/* Liquid Glass Metric Banners (Apple Keynote Style) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          
          <div className="liquid-glass rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:translate-y-[-2px]">
            <div className="text-xs uppercase font-medium tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Kafka Throughput
            </div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              +40%
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              Partitioned Outbox pattern
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:translate-y-[-2px]">
            <div className="text-xs uppercase font-medium tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Search Latency
            </div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              -35%
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              Elasticsearch & Redis cache
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:translate-y-[-2px]">
            <div className="text-xs uppercase font-medium tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              Engineering Tenure
            </div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              5+ Yrs
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              Continuous backend impact
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:translate-y-[-2px]">
            <div className="text-xs uppercase font-medium tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
              AI Microservice
            </div>
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
              RAG
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 font-normal">
              FastAPI & pgvector
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
