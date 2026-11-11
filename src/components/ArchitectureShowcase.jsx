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
    <section id="architecture" className="py-16 md:py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-3">
            <Network className="w-3.5 h-3.5" />
            System Design & Engineering Depth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Architectural Implementations
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            A deeper look into the distributed event pipelines, dual-datastore sync mechanisms, and AI microservices engineered during tenure at Ruiting Tech.
          </p>
        </div>

        {/* System Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {architectureShowcases.map((system, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={system.title}
                onClick={() => setActiveTab(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-blue-50/70 dark:bg-blue-950/40 border-blue-500/80 shadow-md ring-1 ring-blue-500/30'
                    : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold uppercase tracking-wider ${isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'}`}>
                    Architecture #{idx + 1}
                  </span>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-mono ${isActive ? 'bg-blue-200/60 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : 'bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                    {system.badge.split('&')[0]}
                  </span>
                </div>
                <h4 className={`text-base font-bold ${isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'}`}>
                  {system.title}
                </h4>
                <p className="mt-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {system.impact}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Architecture Detailed Breakdown */}
        <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-50 via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/20 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Description & Technical Pillars */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-3">
                  {current.impact}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {current.title}
                </h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Key Implementation Features */}
              <div className="space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Engineering Solutions & Design Patterns
                </h5>
                <div className="space-y-2.5">
                  {current.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/60 shadow-2xs">
                      <div className="p-1 rounded-md bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
                        {feat}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                  Integrated Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {current.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Flow / Code Implementation Interactive Panel */}
            <div className="lg:col-span-6 p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-inner">
              
              {/* Header with Switcher Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800 mb-4">
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                  <button
                    onClick={() => setViewMode('flow')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                      viewMode === 'flow'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>Dataflow</span>
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-all flex items-center gap-1.5 ${
                      viewMode === 'code'
                        ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-2xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Implementation Code</span>
                  </button>
                </div>

                {viewMode === 'code' && current.codeSnippet && (
                  <button
                    onClick={() => handleCopyCode(current.codeSnippet.code)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                )}
              </div>

              {/* View 1: Dataflow Diagram */}
              {viewMode === 'flow' && (
                <div className="space-y-3">
                  {activeTab === 0 && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>1. Reservation & Leasing Producer</span>
                          <span className="text-[10px] bg-blue-200 dark:bg-blue-800 px-1.5 py-0.5 rounded">Spring Boot</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Writes reservation business entity to MySQL/Postgres and logs event to Outbox table atomically within one local database transaction.
                        </p>
                      </div>

                      <div className="flex justify-center text-blue-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 text-indigo-900 dark:text-indigo-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>2. Event Bus (Kafka Cluster)</span>
                          <span className="text-[10px] bg-indigo-200 dark:bg-indigo-800 px-1.5 py-0.5 rounded">Partitioned</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Partition key by property ID ensures strict order of state transitions. Exponential retry and DLQ prevent cluster stalls.
                        </p>
                      </div>

                      <div className="flex justify-center text-indigo-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>3. Idempotent Consumer Workers</span>
                          <span className="text-[10px] bg-emerald-200 dark:bg-emerald-800 px-1.5 py-0.5 rounded">+40% Throughput</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Parallelized consumer groups update inventory records, notify payment services, and verify idempotency keys via Redis.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>1. MongoDB Document Repository</span>
                          <span className="text-[10px] bg-emerald-200 dark:bg-emerald-800 px-1.5 py-0.5 rounded">Dynamic Schema</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Handles polymorphic rental listings, pricing rules, and multi-tenant metadata with compound indexes and schema validation.
                        </p>
                      </div>

                      <div className="flex justify-center text-emerald-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900 text-blue-900 dark:text-blue-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>2. Kafka Async Stream Sync</span>
                          <span className="text-[10px] bg-blue-200 dark:bg-blue-800 px-1.5 py-0.5 rounded">Decoupled Sync</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Stream listener captures mutations asynchronously without introducing write latencies to the primary API.
                        </p>
                      </div>

                      <div className="flex justify-center text-blue-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 text-amber-900 dark:text-amber-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>3. Elasticsearch & Redis Hot Cache</span>
                          <span className="text-[10px] bg-amber-200 dark:bg-amber-800 px-1.5 py-0.5 rounded">-35% Latency</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Multi-dimensional query mapping, composite filter caching, and hot query Redis storage reducing database load by over 60%.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="space-y-3 text-xs font-mono">
                      <div className="p-3.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-900 text-purple-900 dark:text-purple-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>1. FastAPI Asynchronous API</span>
                          <span className="text-[10px] bg-purple-200 dark:bg-purple-800 px-1.5 py-0.5 rounded">Async Python</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          High-concurrency async endpoints handle requests for instant property amenity and lease agreement summaries.
                        </p>
                      </div>

                      <div className="flex justify-center text-purple-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-900 text-indigo-900 dark:text-indigo-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>2. pgvector Semantic Search</span>
                          <span className="text-[10px] bg-indigo-200 dark:bg-indigo-800 px-1.5 py-0.5 rounded">Cosine Distance</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Generates embeddings and performs cosine vector similarity lookups to retrieve relevant property clauses from PostgreSQL.
                        </p>
                      </div>

                      <div className="flex justify-center text-indigo-500">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>

                      <div className="p-3.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 border border-cyan-200 dark:border-cyan-900 text-cyan-900 dark:text-cyan-200">
                        <div className="font-bold flex items-center justify-between">
                          <span>3. Contextual LLM Synthesis</span>
                          <span className="text-[10px] bg-cyan-200 dark:bg-cyan-800 px-1.5 py-0.5 rounded">Grounded RAG</span>
                        </div>
                        <p className="text-xs mt-1.5 text-slate-600 dark:text-slate-300 font-sans">
                          Injects retrieved chunks into guarded prompts to generate accurate, hallucination-free summaries in sub-second response times.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* View 2: Code Snippet */}
              {viewMode === 'code' && current.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-200">
                  <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                      <span className="ml-2 text-slate-300 font-semibold">{current.codeSnippet.filename}</span>
                    </span>
                    <span className="uppercase text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {current.codeSnippet.lang}
                    </span>
                  </div>
                  <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto text-slate-200 selection:bg-blue-600 selection:text-white">
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
