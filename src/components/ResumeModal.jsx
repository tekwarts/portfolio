import React, { useState } from 'react';
import { X, Printer, Copy, Check, Download } from 'lucide-react';
import { personalInfo, experiences, skillCategories, education } from '../data/resumeData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
${personalInfo.name}
${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}
${personalInfo.status} | English(C1), French(C1), Chinese(Native)

EXPERIENCE
${experiences.map(e => `
${e.role}                                    ${e.period}
${e.company}                                           ${e.location}
${e.highlights.map(h => `• ${h.text}`).join('\n')}
`).join('\n')}

SKILLS
Languages: Java, Python, JavaScript, HTML, CSS
AI & LLM: FastAPI, LLM APIs, RAG, LangChain, LangSmith, pgvector, Pinecone, MCP, Cursor
Backend & Frameworks: Spring Boot, React.js
Cloud & DevOps: AWS, GCP, Kubernetes, Docker, CI/CD
Databases: PostgreSQL, MySQL, Redis, MongoDB, DynamoDB, Elasticsearch
Microservices & Messaging: Apache Kafka
Core Concepts: Data Structures, Algorithms, Distributed Systems

EDUCATION
${education.institution}                                   ${education.location}
${education.degree}                        ${education.period}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-md flex items-center justify-center p-3 sm:p-6">
      
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl liquid-glass rounded-[32px] shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Toolbar */}
        <div className="no-print flex items-center justify-between px-6 py-4 border-b border-black/[0.06] dark:border-white/[0.08] bg-white/40 dark:bg-black/30">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-900 dark:text-white text-sm">
              Standard Paper Resume View
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/[0.04] dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-300">
              ATS Standard 1-Page
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full liquid-glass text-neutral-700 dark:text-neutral-200 hover:bg-white/80 dark:hover:bg-white/20 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 shadow-sm active:scale-95 transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full liquid-glass text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Paper Resume Body */}
        <div className="overflow-y-auto p-6 sm:p-10 bg-white text-black font-sans text-xs sm:text-sm selection:bg-neutral-200 selection:text-black">
          
          {/* Header */}
          <div className="text-center border-b border-black pb-4 mb-5">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-normal uppercase">
              {personalInfo.name}
            </h1>
            <div className="mt-1 text-xs text-neutral-800 flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              <span className="underline">{personalInfo.email}</span>
              <span>|</span>
              <span>{personalInfo.phone}</span>
              <span>|</span>
              <span>{personalInfo.location}</span>
            </div>
            <div className="mt-1 text-xs font-semibold text-neutral-800">
              {personalInfo.status} | English(C1), French(C1), Chinese(Native)
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-3">
              Experience
            </h2>

            <div className="space-y-4">
              {/* Senior SWE */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Senior Software Engineer</span>
                  <span className="font-normal text-xs">Aug 2025 - July 2026</span>
                </div>
                <div className="flex justify-between items-baseline italic text-xs mb-1.5">
                  <span>Ruiting Tech</span>
                  <span>Shanghai, China</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-800 leading-relaxed">
                  <li>
                    Architected event-driven reservation and leasing workflows using <strong>Apache Kafka</strong>, implementing partitioned consumers, transactional outbox patterns, retry policies, and dead-letter queues to increase message-processing throughput by 40% while improving delivery reliability.
                  </li>
                  <li>
                    Designed distributed transaction workflows across reservation, inventory, and leasing microservices using <strong>Spring Transaction Management, MySQL, and PostgreSQL</strong> to maintain consistency.
                  </li>
                  <li>
                    Led modernization of Java backend infrastructure on <strong>AWS (EC2, EKS, RDS, ElastiCache, S3)</strong>, deploying containerized services with <strong>Docker and Kubernetes</strong> and implementing horizontal autoscaling and automated CI/CD pipelines.
                  </li>
                  <li>
                    Developed an AI-powered property summarization microservice using <strong>Python, FastAPI, and LLM APIs</strong>, implementing <strong>RAG with pgvector</strong> to retrieve relevant property information and generate summaries.
                  </li>
                </ul>
              </div>

              {/* SWE II */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Software Engineer II</span>
                  <span className="font-normal text-xs">Nov 2023 - July 2025</span>
                </div>
                <div className="flex justify-between items-baseline italic text-xs mb-1.5">
                  <span>Ruiting Tech</span>
                  <span>Shanghai, China</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-800 leading-relaxed">
                  <li>
                    Designed and developed scalable backend services using <strong>Java, Spring Boot, Spring Data JPA, and Hibernate</strong>, implementing RESTful APIs for property listing, search, leasing, and inventory management.
                  </li>
                  <li>
                    Built a flexible property metadata management service using <strong>Spring Data MongoDB and MongoDB</strong>, modeling heterogeneous property attributes and implementing document validation, compound indexes.
                  </li>
                  <li>
                    Optimized <strong>Elasticsearch</strong> index mappings, query execution, and filtering strategies for multi-dimensional property searches, reducing search latency by 35% while supporting high-volume search workloads.
                  </li>
                  <li>
                    Developed a leasing and contract management service using <strong>Java, Spring Boot, PostgreSQL, and Hibernate</strong>, implementing relational data models, transactional contract workflows, and optimized SQL queries.
                  </li>
                  <li>
                    Implemented asynchronous listing synchronization using <strong>Apache Kafka</strong>, integrating MongoDB-backed metadata services with Elasticsearch indexing workers through idempotent event consumers and retry mechanisms.
                  </li>
                  <li>
                    Improved backend response times and database efficiency through <strong>Redis caching</strong>, SQL query optimization, and composite indexing, reducing unnecessary database access and improving performance.
                  </li>
                </ul>
              </div>

              {/* SWE I */}
              <div>
                <div className="flex justify-between items-baseline font-bold">
                  <span>Software Engineer I</span>
                  <span className="font-normal text-xs">July 2021 - Oct 2023</span>
                </div>
                <div className="flex justify-between items-baseline italic text-xs mb-1.5">
                  <span>Ruiting Tech</span>
                  <span>Shanghai, China</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-neutral-800 leading-relaxed">
                  <li>
                    Developed RESTful backend APIs for property listing and reservation management using <strong>Java, Spring Boot, Spring MVC, and Spring Data JPA</strong>, supporting CRUD operations, pagination, filtering, and transaction.
                  </li>
                  <li>
                    Designed and maintained relational database schemas using <strong>MySQL</strong>, implementing entity relationships, SQL queries, database indexes, and transaction management to support core property management workflows.
                  </li>
                  <li>
                    Built responsive property management interfaces using <strong>React, JavaScript, and Tailwind CSS</strong>, developing reusable components for listing administration, property search, and reservation workflows.
                  </li>
                  <li>
                    Developed unit and integration tests using <strong>JUnit 5, Mockito</strong>, improving backend code quality.
                  </li>
                  <li>
                    Collaborated with senior engineers on application debugging, code reviews, and deployment workflows using <strong>Git, Maven, Docker, and CI/CD pipelines</strong>.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2.5">
              Skills
            </h2>
            <div className="text-xs space-y-1 text-neutral-900 leading-relaxed">
              <p><strong>Languages:</strong> Java, Python, JavaScript, HTML, CSS</p>
              <p><strong>AI & LLM:</strong> FastAPI, LLM APIs, RAG, LangChain, LangSmith, pgvector, Pinecone, MCP, Cursor</p>
              <p><strong>Backend & Frameworks:</strong> Spring Boot, React.js</p>
              <p><strong>Cloud & DevOps:</strong> AWS, GCP, Kubernetes, Docker, CI/CD</p>
              <p><strong>Databases:</strong> PostgreSQL, MySQL, Redis, MongoDB, DynamoDB, Elasticsearch</p>
              <p><strong>Microservices & Messaging:</strong> Apache Kafka</p>
              <p><strong>Core Concepts:</strong> Data Structures, Algorithms, Distributed Systems</p>
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-2.5">
              Education
            </h2>
            <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm">
              <span>Shanghai University</span>
              <span className="font-normal text-xs">Shanghai, China</span>
            </div>
            <div className="flex justify-between items-baseline italic text-xs">
              <span>Bachelor of Engineering in Information Engineering</span>
              <span>Sep 2017 - July 2021</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
