export const personalInfo = {
  name: "Eddie Li",
  title: "Senior Software Engineer",
  tagline: "Distributed Systems & Cloud Backend Specialist",
  summary: "Senior Software Engineer with 5+ years of experience designing and scaling resilient, high-throughput backend services, event-driven distributed architectures, and AI microservices. Proven track record boosting messaging throughput by 40% with Apache Kafka, optimizing Elasticsearch search latency by 35%, and orchestrating cloud-native workloads on AWS and Kubernetes.",
  email: "eddie.li.cs@gmail.com",
  phone: "+1 4378899598",
  location: "Toronto, Canada",
  status: "Canadian Permanent Resident – No sponsorship required",
  languages: [
    { name: "English", level: "C1 (Fluent / Professional)" },
    { name: "French", level: "C1 (Fluent / Professional)" },
  ],
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "Kafka Throughput Gain", value: "+40%" },
    { label: "Search Latency Cut", value: "-35%" },
    { label: "Relocation Status", value: "Toronto, CA (PR)" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "mailto:eddie.li.cs@gmail.com",
  }
};

export const experiences = [
  {
    id: "sr-swe",
    role: "Senior Software Engineer",
    company: "Ruiting Tech",
    location: "Shanghai, China",
    period: "Aug 2025 – July 2026",
    badge: "Recent",
    type: "Full-time",
    category: "distributed",
    summary: "Led architectural modernization and distributed event-driven microservices across property reservation, leasing, and inventory ecosystems.",
    highlights: [
      {
        metric: "+40% Throughput",
        text: "Architected event-driven reservation and leasing workflows using Apache Kafka, implementing partitioned consumers, transactional outbox patterns, retry policies, and dead-letter queues to increase message-processing throughput by 40% while improving delivery reliability."
      },
      {
        metric: "Distributed Consistency",
        text: "Designed distributed transaction workflows across reservation, inventory, and leasing microservices using Spring Transaction Management, MySQL, and PostgreSQL to maintain consistency."
      },
      {
        metric: "Cloud & K8s Modernization",
        text: "Led modernization of Java backend infrastructure on AWS (EC2, EKS, RDS, ElastiCache, S3), deploying containerized services with Docker and Kubernetes and implementing horizontal autoscaling and automated CI/CD pipelines."
      },
      {
        metric: "AI Microservice & RAG",
        text: "Developed an AI-powered property summarization microservice using Python, FastAPI, and LLM APIs, implementing RAG with pgvector to retrieve relevant property information and generate summaries."
      }
    ],
    technologies: [
      "Apache Kafka",
      "Transactional Outbox",
      "Spring Boot",
      "FastAPI",
      "Python",
      "pgvector",
      "RAG / LLMs",
      "AWS (EKS, RDS, S3)",
      "Kubernetes",
      "Docker",
      "MySQL",
      "PostgreSQL"
    ]
  },
  {
    id: "swe-2",
    role: "Software Engineer II",
    company: "Ruiting Tech",
    location: "Shanghai, China",
    period: "Nov 2023 – July 2025",
    type: "Full-time",
    category: "backend",
    summary: "Engineered scalable backend microservices, high-performance database schema architectures, and asynchronous data sync pipelines.",
    highlights: [
      {
        metric: "Scalable REST Core",
        text: "Designed and developed scalable backend services using Java, Spring Boot, Spring Data JPA, and Hibernate, implementing RESTful APIs for property listing, search, leasing, and inventory management."
      },
      {
        metric: "Document Schema Design",
        text: "Built a flexible property metadata management service using Spring Data MongoDB and MongoDB, modeling heterogeneous property attributes and implementing document validation, compound indexes."
      },
      {
        metric: "-35% Search Latency",
        text: "Optimized Elasticsearch index mappings, query execution, and filtering strategies for multi-dimensional property searches, reducing search latency by 35% while supporting high-volume search workloads."
      },
      {
        metric: "Transactional Workflows",
        text: "Developed a leasing and contract management service using Java, Spring Boot, PostgreSQL, and Hibernate, implementing relational data models, transactional contract workflows, and optimized SQL queries."
      },
      {
        metric: "Asynchronous Pipeline",
        text: "Implemented asynchronous listing synchronization using Apache Kafka, integrating MongoDB-backed metadata services with Elasticsearch indexing workers through idempotent event consumers and retry mechanisms."
      },
      {
        metric: "Caching & DB Tuning",
        text: "Improved backend response times and database efficiency through Redis caching, SQL query optimization, and composite indexing, reducing unnecessary database access and improving performance."
      }
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Elasticsearch",
      "MongoDB",
      "PostgreSQL",
      "Apache Kafka",
      "Redis",
      "SQL Optimization"
    ]
  },
  {
    id: "swe-1",
    role: "Software Engineer I",
    company: "Ruiting Tech",
    location: "Shanghai, China",
    period: "July 2021 – Oct 2023",
    type: "Full-time",
    category: "fullstack",
    summary: "Built core REST APIs, relational database schemas, and modern responsive property management frontend interfaces.",
    highlights: [
      {
        metric: "Core APIs & CRUD",
        text: "Developed RESTful backend APIs for property listing and reservation management using Java, Spring Boot, Spring MVC, and Spring Data JPA, supporting CRUD operations, pagination, filtering, and transaction."
      },
      {
        metric: "Relational Schemas",
        text: "Designed and maintained relational database schemas using MySQL, implementing entity relationships, SQL queries, database indexes, and transaction management to support core property management workflows."
      },
      {
        metric: "React & Tailwind UI",
        text: "Built responsive property management interfaces using React, JavaScript, and Tailwind CSS, developing reusable components for listing administration, property search, and reservation workflows."
      },
      {
        metric: "Robust Test Coverage",
        text: "Developed unit and integration tests using JUnit 5, Mockito, improving backend code quality."
      },
      {
        metric: "CI/CD & Collaboration",
        text: "Collaborated with senior engineers on application debugging, code reviews, and deployment workflows using Git, Maven, Docker, and CI/CD pipelines."
      }
    ],
    technologies: [
      "Java",
      "Spring MVC",
      "Spring Data JPA",
      "MySQL",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "JUnit 5",
      "Mockito",
      "Docker",
      "Git"
    ]
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "code",
    color: "blue",
    skills: [
      { name: "Java", icon: "coffee" },
      { name: "Python", icon: "terminal" },
      { name: "JavaScript", icon: "file-code" },
      { name: "HTML", icon: "layout" },
      { name: "CSS", icon: "palette" }
    ]
  },
  {
    title: "AI & LLM",
    icon: "sparkles",
    color: "purple",
    skills: [
      { name: "FastAPI", icon: "zap" },
      { name: "LLM APIs", icon: "brain" },
      { name: "RAG", icon: "search" },
      { name: "LangChain", icon: "link-2" },
      { name: "LangSmith", icon: "activity" },
      { name: "pgvector", icon: "database" },
      { name: "Pinecone", icon: "compass" },
      { name: "MCP", icon: "cpu" },
      { name: "Cursor", icon: "mouse-pointer" }
    ]
  },
  {
    title: "Backend & Frameworks",
    icon: "server",
    color: "emerald",
    skills: [
      { name: "Spring Boot", icon: "server" },
      { name: "React.js", icon: "atom" },
      { name: "Spring MVC", icon: "layers" },
      { name: "Spring Data JPA", icon: "database" },
      { name: "Hibernate", icon: "layers" },
      { name: "RESTful APIs", icon: "globe" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "amber",
    skills: [
      { name: "AWS", icon: "cloud" },
      { name: "GCP", icon: "globe" },
      { name: "Kubernetes", icon: "box" },
      { name: "Docker", icon: "box" },
      { name: "CI/CD", icon: "git-branch" },
      { name: "Git", icon: "git-branch" },
      { name: "Maven", icon: "package" }
    ]
  },
  {
    title: "Databases",
    icon: "database",
    color: "rose",
    skills: [
      { name: "PostgreSQL", icon: "database" },
      { name: "MySQL", icon: "database" },
      { name: "Redis", icon: "zap" },
      { name: "MongoDB", icon: "database" },
      { name: "DynamoDB", icon: "database" },
      { name: "Elasticsearch", icon: "search" }
    ]
  },
  {
    title: "Microservices & Messaging",
    icon: "network",
    color: "cyan",
    skills: [
      { name: "Apache Kafka", icon: "radio" },
      { name: "Transactional Outbox Pattern", icon: "shield-check" },
      { name: "Partitioned Consumers & DLQ", icon: "split" },
      { name: "Distributed Transactions", icon: "network" }
    ]
  },
  {
    title: "Core Concepts",
    icon: "cpu",
    color: "indigo",
    skills: [
      { name: "Data Structures", icon: "binary" },
      { name: "Algorithms", icon: "braces" },
      { name: "Distributed Systems", icon: "network" }
    ]
  }
];

export const education = {
  institution: "Shanghai University",
  degree: "Bachelor of Engineering in Information Engineering",
  location: "Shanghai, China",
  period: "Sep 2017 – July 2021",
  details: [
    "Core curriculum: Distributed Computing, Computer Networks, Object-Oriented Programming, Database Systems, Operating Systems, Algorithm Design.",
    "Graduated with honors in technical coursework."
  ]
};

export const architectureShowcases = [
  {
    title: "Event-Driven Reservation & Leasing Engine",
    impact: "+40% Throughput Boost & Zero Message Loss",
    badge: "Apache Kafka & Microservices",
    description: "Designed resilient asynchronous event streaming with transactional outbox pattern to decouple reservation, leasing, and payment services, guaranteeing exactly-once semantics and high availability.",
    features: [
      "Transactional Outbox pattern with Debezium/Kafka Connect to ensure atomic database writes and message emission",
      "Partitioned consumer groups for parallelized horizontal throughput scaling",
      "Exponential backoff retry mechanisms with automated Dead-Letter Queue (DLQ) routing",
      "Spring Transaction Management across distributed service boundaries"
    ],
    tech: ["Apache Kafka", "Spring Boot", "PostgreSQL", "Docker", "AWS EKS"],
    codeSnippet: {
      lang: "java",
      filename: "ReservationOutboxPublisher.java",
      code: `@Transactional\npublic ReservationResponse createReservation(ReservationRequest req) {\n    // 1. Persist business entity in primary database\n    Reservation reservation = reservationRepository.save(new Reservation(req));\n\n    // 2. Persist event into transactional outbox table in SAME local transaction\n    OutboxEvent event = OutboxEvent.builder()\n        .aggregateType("RESERVATION")\n        .aggregateId(reservation.getId().toString())\n        .eventType("RESERVATION_CREATED")\n        .payload(objectMapper.writeValueAsString(reservation))\n        .createdAt(Instant.now())\n        .build();\n    outboxRepository.save(event);\n\n    // 3. Kafka Debezium connector streams outbox table to Kafka topic with partition key = aggregateId\n    return ReservationResponse.from(reservation);\n}`
    }
  },
  {
    title: "High-Volume Multi-Dimensional Property Search",
    impact: "-35% Query Latency & Real-time Sync",
    badge: "Elasticsearch & MongoDB & Kafka",
    description: "Engineered a dual-database architecture: flexible property attribute storage in MongoDB combined with real-time indexing into Elasticsearch for sub-second multi-dimensional property discovery.",
    features: [
      "Custom Elasticsearch index analyzers, composite filter caches, and nested document mapping",
      "Asynchronous Kafka stream workers syncing MongoDB document mutations to Elasticsearch",
      "Idempotent consumer handlers with duplicate transaction suppression",
      "Multi-level Redis cache layer reducing direct database load by over 60%"
    ],
    tech: ["Elasticsearch", "MongoDB", "Redis", "Apache Kafka", "Java / Spring"],
    codeSnippet: {
      lang: "java",
      filename: "ListingSyncKafkaConsumer.java",
      code: `@KafkaListener(topics = "property.listing.mutations", groupId = "es-indexing-group")\npublic void syncListingToElasticsearch(@Payload ListingEvent event, Acknowledgment ack) {\n    String idempotencyKey = "sync:property:" + event.getPropertyId() + ":" + event.getVersion();\n    Boolean isNew = redisTemplate.opsForValue()\n        .setIfAbsent(idempotencyKey, "PROCESSED", Duration.ofHours(24));\n\n    if (Boolean.TRUE.equals(isNew)) {\n        // Index document with nested geo-points and multi-dimensional filters\n        esPropertyRepository.save(propertyMapper.toIndexDocument(event.getPayload()));\n        redisTemplate.delete("cache:search:hot-queries"); // Invalidate hot query cache\n    }\n    ack.acknowledge();\n}`
    }
  },
  {
    title: "AI Property Summarization & RAG Microservice",
    impact: "Sub-second Property Insights with Vector Search",
    badge: "Python, FastAPI & pgvector",
    description: "Created an autonomous property intelligence service that digests extensive property specifications and leasing contracts to generate instant, context-aware summaries.",
    features: [
      "FastAPI asynchronous endpoints delivering low-latency LLM completions",
      "pgvector similarity indexing to retrieve relevant property clauses and amenities",
      "Prompt optimization and contextual window chunking for cost and token efficiency",
      "Automated evaluation and monitoring pipeline"
    ],
    tech: ["Python", "FastAPI", "pgvector", "PostgreSQL", "LLM APIs", "Docker"],
    codeSnippet: {
      lang: "python",
      filename: "rag_summarizer_service.py",
      code: `@router.post("/properties/{property_id}/summarize")\nasync def summarize_property(property_id: str, query: SummarizeRequest, db: AsyncSession = Depends(get_db)):\n    # 1. Compute embedding vector for input query context\n    query_embedding = await get_embedding(query.prompt or "Highlight key terms, pricing, and amenities")\n    \n    # 2. Vector search via pgvector cosine distance index (<=>)\n    stmt = select(PropertyChunk.content)\\\n        .where(PropertyChunk.property_id == property_id)\\\n        .order_by(PropertyChunk.embedding.cosine_distance(query_embedding))\\\n        .limit(5)\n    chunks = (await db.execute(stmt)).scalars().all()\n    \n    # 3. Grounded LLM completion with system prompt guardrails\n    summary = await call_llm(context="\\n".join(chunks), prompt=query.prompt)\n    return {"property_id": property_id, "summary": summary}`
    }
  }
];

