import React, { useState } from 'react';
import { 
  Network, Cpu, Database, Zap, ArrowRight, 
  Layers, RefreshCw, CheckCircle, ShieldAlert, Sparkles,
  Code2, Copy, Check
} from 'lucide-react';
import { architectureShowcases } from '../data/resumeData';

export default function ArchitectureShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const [viewMode, setViewMode] = useState('flow'); // 'flow' or 'code'
  const [copied, setCopied] = useState(false);

  const current = architectureShowcases[activeTab];

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="architecture" className="relative px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 pb-6 border-b border-black/[0.06] dark:border-white/[0.08]">
          <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500 mb-2">
            System Design
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Architecture Implementations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-neutral-500 dark:text-neutral-400 max-w-xl">
            Key distributed systems and microservices designed for transaction consistency, high throughput, and sub-second latency.
          </p>
        </div>

        {/* Apple Segmented Control System Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 mb-6">
          {architectureShowcases.map((system, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={system.title}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 ${
                  isActive
                    ? 'liquid-glass shadow-md ring-1 ring-black/5 dark:ring-white/10'
                    : 'liquid-glass-subtle opacity-70 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    System 0{idx + 1}
                  </span>
                  <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {system.badge.split('&')[0]}
                  </span>
                </div>
                <div className="text-sm font-semibold text-neutral-900 dark:text-white tracking-tight">
                  {system.title}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {system.impact}
                </div>
              </button>
            );
          })}
        </div>

        {/* Liquid Glass Main Stage */}
        <div className="liquid-glass rounded-3xl p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Architectural Intent */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-black/[0.04] dark:bg-white/[0.08] text-neutral-800 dark:text-neutral-200 mb-3">
                  {current.impact}
                </span>
                <h3 className="text-2xl font-semibold text-neutral-950 dark:text-white tracking-tight">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Engineering Pillars */}
              <div className="space-y-2.5">
                <div className="text-xs uppercase font-semibold tracking-wider text-neutral-400 dark:text-neutral-500">
                  Engineering Solutions
                </div>
                {current.features.map((feat, fIdx) => (
                  <div key={fIdx} className="liquid-glass-subtle p-3 rounded-2xl flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-500 dark:bg-neutral-400 mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 font-normal leading-relaxed">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/[0.04] dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Apple-styled Dataflow / Code Inspector */}
            <div className="lg:col-span-6 liquid-glass-subtle rounded-2xl p-5 border border-black/[0.06] dark:border-white/[0.08]">
              
              {/* Segmented Switcher Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-black/[0.05] dark:border-white/[0.06]">
                <div className="flex items-center gap-1 bg-black/[0.04] dark:bg-white/[0.06] p-0.5 rounded-full">
                  <button
                    onClick={() => setViewMode('flow')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      viewMode === 'flow'
                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                        : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Dataflow
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      viewMode === 'code'
                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                        : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    Code Pattern
                  </button>
                </div>

                {viewMode === 'code' && current.codeSnippet && (
                  <button
                    onClick={() => handleCopyCode(current.codeSnippet.code)}
                    className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>

              {/* Dataflow View */}
              {viewMode === 'flow' && (
                <div className="space-y-3">
                  {activeTab === 0 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>1. Reservation & Leasing Service</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Spring Boot</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Atomic transaction writing reservation record and Outbox event table simultaneously in PostgreSQL.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>2. Kafka Event Cluster</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Partitioned Stream</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Keyed partitioning by property ID preserves event ordering. Exponential backoff & DLQ prevent cluster head-of-line blocking.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>3. Idempotent Consumer Workers</span>
                          <span className="text-[10px] text-neutral-400 font-mono">+40% Throughput</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Parallel consumer pools handle inventory reservation, notifications, and suppress duplicate deliveries with Redis idempotency tokens.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>1. MongoDB Listing Repository</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Polymorphic Docs</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Handles diverse property attributes and rental terms with compound indexing and document schema validation.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>2. Kafka Asynchronous Sync</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Stream Producer</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Captures property updates asynchronously, shielding primary write endpoints from indexing latency.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>3. Elasticsearch & Redis Hot Cache</span>
                          <span className="text-[10px] text-neutral-400 font-mono">-35% Latency</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Multi-dimensional query mapping, composite geo-filters, and hot-query caching reducing database hits by 60%.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-2.5 text-xs">
                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>1. FastAPI Non-Blocking API</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Python Async</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Receives property summarization queries and fetches user context with async endpoints.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>2. pgvector Cosine Index</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Vector Search</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Computes query embeddings and performs similarity lookups against chunked lease documents in PostgreSQL.
                        </p>
                      </div>

                      <div className="flex justify-center text-neutral-400 dark:text-neutral-600">
                        <ArrowRight className="w-3.5 h-3.5 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl liquid-glass">
                        <div className="font-semibold text-neutral-900 dark:text-white flex items-center justify-between">
                          <span>3. LLM Completion Guard</span>
                          <span className="text-[10px] text-neutral-400 font-mono">Sub-Second RAG</span>
                        </div>
                        <p className="text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          Assembles grounded prompt with retrieved chunks, calling LLM API to return instant, accurate property summaries.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Code Pattern View (macOS Terminal Look) */}
              {viewMode === 'code' && current.codeSnippet && (
                <div className="rounded-xl overflow-hidden bg-neutral-950 text-neutral-200 border border-neutral-800 shadow-xl font-mono text-xs">
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-neutral-900/90 border-b border-neutral-800">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 text-neutral-400 text-[11px] font-sans">
                        {current.codeSnippet.filename}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">
                      {current.codeSnippet.lang}
                    </span>
                  </div>
                  <pre className="p-4 leading-relaxed overflow-x-auto text-[11px] text-neutral-300">
                    <code>{current.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
