export const personalInfo = {
  name: "Eddie Li",
  title: "AI Full Stack Engineer",
  tagline: "AI Engineering & Full Stack Development Specialist",
  summary: "AI Full Stack Engineer with 5+ years of experience building production AI systems, agentic workflows, RAG pipelines, and scalable backend services. Proven track record designing LangGraph-based agentic AI workflows, optimizing Elasticsearch search latency by 35%, and deploying containerized AI services on Google Cloud.",
  email: "eddie.li.cs@gmail.com",
  phone: "+1 4378899598",
  location: "Toronto, Canada",
  status: "Canadian Permanent Resident – No sponsorship required",
  languages: [
    { name: "English", level: "C1 (Fluent / Professional)" },
    { name: "French", level: "C1 (Fluent / Professional)" },
    { name: "Chinese (Mandarin)", level: "Native / Bilingual" },
  ],
  stats: [
    { label: "Years of Experience", value: "5+" },
    { label: "AI & LLM Systems", value: "RAG" },
    { label: "Search Latency Cut", value: "-35%" },
    { label: "Relocation Status", value: "Toronto, CA (PR)" },
  ],
  socials: {
    github: "https://github.com/tekwarts",
    linkedin: "https://linkedin.com",
    email: "mailto:eddie.li.cs@gmail.com",
  }
};

export const experiences = [
  {
    id: "ai-fse",
    role: "AI Full Stack Engineer (Contract)",
    company: "TaskUp",
    location: "Toronto, Canada",
    period: "Sep 2026 – Nov 2026",
    badge: "Current",
    type: "Contract",
    category: "ai",
    summary: "Built an AI-powered task planning platform and stateful agentic workflows with LangGraph, integrating RAG with Pinecone and deploying containerized AI services on Google Cloud.",
    highlights: [
      {
        metric: "AI Task Platform",
        text: "Developed an AI-powered task planning platform using Python, FastAPI, LangChain, and LLM APIs, automating task decomposition, personalized scheduling, and productivity analysis based on historical activity."
      },
      {
        metric: "Agentic Workflows",
        text: "Designed stateful LangGraph-based agentic workflows using Groq LLM APIs, tool calling, and Pydantic structured outputs, implementing output validation, and AI guardrails to improve workflow reliability."
      },
      {
        metric: "RAG & Observability",
        text: "Implemented Retrieval-Augmented Generation (RAG) using Pinecone, Cohere embeddings, and PostgreSQL, integrating LangSmith for LLM evaluation, execution tracing, latency monitoring, and token usage analysis and deployed containerized AI services using Google Cloud."
      }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "Groq LLM APIs",
      "Pydantic",
      "Pinecone",
      "Cohere Embeddings",
      "LangSmith",
      "PostgreSQL",
      "Google Cloud"
    ]
  },
  {
    id: "ai-eng",
    role: "AI Engineer",
    company: "Ruiting Tech",
    location: "Shanghai, China",
    period: "Aug 2024 – Aug 2026",
    type: "Full-time",
    category: "ai",
    summary: "Developed production-oriented AI-powered property intelligence services with RAG, agentic AI workflows using LangGraph, and comprehensive automated testing.",
    highlights: [
      {
        metric: "AI Property Intelligence",
        text: "Developed a production-oriented AI-powered property intelligence service using Python, FastAPI, LangChain, and LLM APIs, generating property descriptions and structured summaries, with prompt optimization and token usage management."
      },
      {
        metric: "RAG with pgvector",
        text: "Implemented Retrieval-Augmented Generation (RAG) using PostgreSQL, pgvector, and vector embeddings, optimizing semantic retrieval, evaluating retrieval relevance and response groundedness, and mitigating LLM hallucinations."
      },
      {
        metric: "Agentic AI Workflows",
        text: "Designed and orchestrated agentic AI workflows using LangGraph, implementing stateful agents, tool calling, conditional routing, error handling, and automated testing using Pytest to ensure reliable multi-step property management operations."
      }
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "LangGraph",
      "LLM APIs",
      "pgvector",
      "PostgreSQL",
      "Pydantic",
      "Pytest",
      "RAG"
    ]
  },
  {
    id: "swe-2",
    role: "Software Engineer II",
    company: "Ruiting Tech",
    location: "Shanghai, China",
    period: "Nov 2023 – July 2024",
    type: "Full-time",
    category: "backend",
    summary: "Engineered scalable property management microservices, optimized Elasticsearch search performance, and built event-driven data synchronization pipelines.",
    highlights: [
      {
        metric: "Scalable Microservices",
        text: "Developed scalable property management microservices using Java, Spring Boot, Spring Data JPA, and Hibernate, implementing RESTful APIs for property listings, reservations, leasing, and inventory management."
      },
      {
        metric: "-35% Search Latency",
        text: "Optimized Elasticsearch index mappings, query execution, and filtering strategies for multi-dimensional property searches, reducing search latency by 35% under high-volume workloads."
      },
      {
        metric: "Event-Driven Pipelines",
        text: "Built event-driven data synchronization pipelines using Apache Kafka, integrating MongoDB property metadata with Elasticsearch through idempotent consumers, retries, and asynchronous indexing."
      },
      {
        metric: "Distributed Concurrency",
        text: "Implemented distributed concurrency control using Redis, MySQL, PostgreSQL, and optimistic locking, maintaining reservation consistency under concurrent requests."
      }
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "Elasticsearch",
      "Apache Kafka",
      "MongoDB",
      "Redis",
      "MySQL",
      "PostgreSQL"
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
    summary: "Built internal property management website, designed RESTful APIs, and developed responsive administrative dashboards.",
    highlights: [
      {
        metric: "Internal Property Platform",
        text: "Developed an internal property management website using Node.js, Express.js, React, and TypeScript, enabling operations teams to manage property listings, reservations, and leasing workflows."
      },
      {
        metric: "RESTful APIs",
        text: "Designed and implemented RESTful APIs using Node.js and Express.js, integrating MySQL and MongoDB for property records, user accounts, and reservation management."
      },
      {
        metric: "React & Tailwind UI",
        text: "Built responsive administrative dashboards using React, TypeScript, and Tailwind CSS, implementing reusable UI components, dynamic property search filters, and interactive management interfaces."
      }
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "MySQL",
      "MongoDB"
    ]
  }
];

export const skillCategories = [
  {
    title: "Languages",
    icon: "code",
    color: "blue",
    skills: [
      { name: "Python", icon: "terminal" },
      { name: "Java", icon: "coffee" },
      { name: "JavaScript", icon: "file-code" },
      { name: "TypeScript", icon: "file-code" },
      { name: "SQL", icon: "database" },
      { name: "HTML", icon: "layout" },
      { name: "CSS", icon: "palette" }
    ]
  },
  {
    title: "AI & LLM",
    icon: "sparkles",
    color: "purple",
    skills: [
      { name: "LLM APIs", icon: "brain" },
      { name: "RAG", icon: "search" },
      { name: "LangChain", icon: "link-2" },
      { name: "LangGraph", icon: "network" },
      { name: "LangSmith", icon: "activity" },
      { name: "AI Agents", icon: "cpu" },
      { name: "MCP", icon: "cpu" }
    ]
  },
  {
    title: "LLMOps",
    icon: "cpu",
    color: "indigo",
    skills: [
      { name: "LLM Evaluation", icon: "search" },
      { name: "Observability", icon: "activity" },
      { name: "Prompt Engineering", icon: "brain" },
      { name: "Token Optimization", icon: "zap" }
    ]
  },
  {
    title: "Backend & Frontend",
    icon: "server",
    color: "emerald",
    skills: [
      { name: "FastAPI", icon: "zap" },
      { name: "Pydantic", icon: "shield-check" },
      { name: "Spring Boot", icon: "server" },
      { name: "Spring Data JPA", icon: "database" },
      { name: "Node.js", icon: "server" },
      { name: "Express.js", icon: "globe" },
      { name: "React.js", icon: "layers" }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    color: "amber",
    skills: [
      { name: "AWS", icon: "cloud" },
      { name: "Google Cloud (GCP)", icon: "globe" },
      { name: "Azure", icon: "cloud" },
      { name: "Kubernetes", icon: "box" },
      { name: "Docker", icon: "box" },
      { name: "CI/CD", icon: "git-branch" }
    ]
  },
  {
    title: "Databases & Retrieval",
    icon: "database",
    color: "rose",
    skills: [
      { name: "PostgreSQL", icon: "database" },
      { name: "pgvector", icon: "database" },
      { name: "Pinecone", icon: "compass" },
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
      { name: "Apache Kafka", icon: "radio" }
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
    title: "Saga Pattern & Transactional Outbox",
    impact: "Reliable Distributed Transaction Management",
    badge: "Saga & Transactional Outbox",
    description: "Distributed transaction management across Java Spring Boot microservices using the Saga pattern and transactional outbox. Each service commits its own local transaction, publishes events reliably, and uses compensating actions to recover from downstream failures.",
    features: [
      "Saga steps coordinate local service transactions with compensating actions when a later step fails",
      "Business state and outbox events commit together in PostgreSQL, avoiding a database-and-message dual write",
      "An outbox relay publishes committed events to Kafka and retries failed deliveries",
      "Idempotent consumers deduplicate event IDs within their local transaction to handle at-least-once delivery"
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Kafka", "Saga Pattern", "Transactional Outbox"],
    flow: [
      { title: "1. Commit State & Event", label: "Local Transaction", description: "Each service updates its business state and inserts an outbox event in the same PostgreSQL transaction. Both changes commit or roll back together." },
      { title: "2. Relay & Process", label: "Kafka", description: "The relay publishes committed outbox events. Consumers deduplicate event IDs and atomically commit their local changes and the next saga event." },
      { title: "3. Complete or Compensate", label: "Saga", description: "Successful steps advance the saga. A failure triggers compensating actions for completed steps, with retries and persisted progress until recovery completes." }
    ],
    codeSnippet: {
      lang: "java",
      filename: "SagaOutboxPattern.java",
      code: `// Illustrative Spring service methods; helpers omitted.
@Transactional
public void reserveProperty(ReserveCommand command) {
    bookingService.reserve(command.propertyId());
    outbox.save(event("PropertyReserved", command.sagaId()));
} // Business state and event commit together.

@Transactional
public void onSagaFailure(SagaFailure event) {
    // Unique event ID is recorded in this transaction.
    if (!inbox.recordIfNew(event.id())) return;

    // Compensation reverses this saga's reservation.
    bookingService.releaseReservation(event.sagaId());
    outbox.save(event("ReservationReleased", event.sagaId()));
}

// Relay: publish committed outbox rows, then mark sent.
// A crash between those steps can cause redelivery.
// Consumers deduplicate in the same local transaction.
// Compensation is retried until it succeeds.`
    }
  },
  {
    title: "Double-Booking Prevention Engine",
    impact: "Double-Booking Prevention Under High Concurrency",
    badge: "Redis & PostgreSQL",
    description: "Implemented a Java Spring Boot booking backend with three states: available, reserved, and confirmed. Redis distributed locking coordinates concurrent requests for the same property, while PostgreSQL optimistic locking prevents conflicting state updates.",
    features: [
      "Redis distributed locks coordinate requests across Spring Boot instances to reduce contention for the same property",
      "PostgreSQL optimistic locking uses a version field to detect stale writes and prevent conflicting updates",
      "Explicit state transitions move a property from available to reserved, then from reserved to confirmed",
      "Combined distributed and optimistic locking prevents double booking while handling high concurrency"
    ],
    tech: ["Java", "Spring Boot", "Redis", "Distributed Locking", "PostgreSQL", "Optimistic Locking"],
    flow: [
      { title: "1. Acquire Property Lock", label: "Redis", description: "The Spring Boot backend acquires a distributed lock keyed by property ID to coordinate competing requests across application instances." },
      { title: "2. Validate & Update State", label: "PostgreSQL", description: "Inside a transaction, validate the current state and apply the transition: available → reserved → confirmed. A version check rejects stale concurrent updates." },
      { title: "3. Commit & Release Lock", label: "Spring Boot", description: "Commit the state change before releasing the Redis lock. Reject conflicting requests so concurrent callers cannot reserve the same available property twice." }
    ],
    codeSnippet: {
      lang: "java",
      filename: "BookingConcurrencyPattern.java",
      code: `// Illustrative coordination pattern; helper methods omitted.
// Property entity uses a PostgreSQL-backed @Version field.
@Version
private Long version;

// Acquire a property-scoped Redis lock before the transaction.
var lock = propertyLocks.acquire(propertyId);
try {
    return transactions.execute(tx -> {
        var property = repository.findById(propertyId)
            .orElseThrow();

        if (property.getStatus() != AVAILABLE) {
            throw new BookingConflictException();
        }

        property.setStatus(RESERVED);
        // Version-checked UPDATE rejects a stale write.
        repository.saveAndFlush(property);
        return property;
    }); // Transaction commits before the lock is released.
} finally {
    lock.releaseIfOwned();
}

// Confirmation follows the same locking pattern:
// validate RESERVED, then transition to CONFIRMED.`
    }
  },
  {
    title: "AI-Powered Task Planning with LangGraph Agents",
    impact: "Stateful Agentic Workflows with AI Guardrails",
    badge: "LangGraph & Groq LLM APIs",
    description: "Designed a stateful AI task planning platform leveraging LangGraph for multi-step agentic workflows with tool calling, conditional routing, and Pydantic structured outputs for reliable task decomposition and scheduling.",
    features: [
      "LangGraph stateful agents with tool calling and conditional routing for complex task decomposition",
      "Groq LLM APIs with Pydantic structured outputs ensuring validated, type-safe AI responses",
      "AI guardrails and output validation preventing hallucinated or malformed task plans",
      "FastAPI async endpoints for low-latency task planning and productivity analysis"
    ],
    tech: ["LangGraph", "Groq LLM APIs", "Python", "FastAPI", "Pydantic"],
    codeSnippet: {
      lang: "python",
      filename: "task_planning_agent.py",
      code: `from langgraph.graph import StateGraph, END
from pydantic import BaseModel
from langchain_groq import ChatGroq

class TaskPlan(BaseModel):
    tasks: list[str]
    priorities: list[int]
    schedule: dict[str, str]

llm = ChatGroq(model="llama-3.3-70b-versatile")
structured_llm = llm.with_structured_output(TaskPlan)

def decompose_task(state):
    """Decompose user goal into structured task plan."""
    result = structured_llm.invoke(
        f"Break down this goal into actionable tasks: {state['goal']}"
    )
    return {"plan": result, "step": "validate"}

def validate_plan(state):
    """Validate and apply AI guardrails to the generated plan."""
    plan = state["plan"]
    if len(plan.tasks) == 0:
        return {"step": "decompose"}  # retry
    return {"step": "finalize", "validated_plan": plan}

graph = StateGraph()
graph.add_node("decompose", decompose_task)
graph.add_node("validate", validate_plan)
graph.add_conditional_edges("validate", lambda s: s["step"])`
    }
  },
  {
    title: "RAG Pipeline with Pinecone & LangSmith Observability",
    impact: "Grounded AI Responses with Full Tracing",
    badge: "Pinecone & LangSmith",
    description: "Built a production RAG pipeline using Pinecone for vector retrieval and Cohere embeddings, with LangSmith integration for end-to-end LLM evaluation, execution tracing, latency monitoring, and token usage analysis.",
    features: [
      "Pinecone vector index with Cohere embeddings for high-precision semantic retrieval",
      "LangSmith execution tracing for every LLM call with latency and token cost tracking",
      "LLM evaluation pipeline measuring retrieval relevance and response groundedness",
      "Containerized deployment on Google Cloud with PostgreSQL metadata storage"
    ],
    tech: ["Pinecone", "Cohere", "LangSmith", "PostgreSQL", "Google Cloud"],
    codeSnippet: {
      lang: "python",
      filename: "rag_pipeline.py",
      code: `from langsmith import traceable
from pinecone import Pinecone
import cohere

pc = Pinecone(api_key=PINECONE_KEY)
index = pc.Index("property-docs")
co = cohere.Client(COHERE_KEY)

@traceable(name="rag-retrieve-and-generate")
async def rag_query(query: str, top_k: int = 5):
    # 1. Generate query embedding with Cohere
    embedding = co.embed(
        texts=[query], model="embed-english-v3.0",
        input_type="search_query"
    ).embeddings[0]
    
    # 2. Retrieve relevant chunks from Pinecone
    results = index.query(
        vector=embedding, top_k=top_k,
        include_metadata=True
    )
    context = "\\n".join([m.metadata["text"] for m in results.matches])
    
    # 3. Grounded LLM completion (traced by LangSmith)
    response = await llm.ainvoke(
        f"Context:\\n{context}\\n\\nQuestion: {query}"
    )
    return {"answer": response, "sources": results.matches}`
    }
  },
  {
    title: "AI Property Intelligence with pgvector RAG",
    impact: "Sub-second Property Insights with Vector Search",
    badge: "Python, FastAPI & pgvector",
    description: "Created a production AI-powered property intelligence service using pgvector for semantic retrieval, with LangGraph agentic workflows for multi-step property management operations and automated Pytest testing.",
    features: [
      "pgvector similarity indexing for semantic retrieval of property clauses and amenities",
      "LangGraph agentic workflows with stateful agents and conditional routing for property operations",
      "Prompt optimization evaluating retrieval relevance and mitigating LLM hallucinations",
      "Automated testing with Pytest ensuring reliable multi-step property management workflows"
    ],
    tech: ["Python", "FastAPI", "pgvector", "PostgreSQL", "LangGraph", "Pytest"],
    codeSnippet: {
      lang: "python",
      filename: "property_rag_service.py",
      code: `@router.post("/properties/{property_id}/summarize")
async def summarize_property(property_id: str, query: SummarizeRequest, db: AsyncSession = Depends(get_db)):
    # 1. Compute embedding vector for input query context
    query_embedding = await get_embedding(query.prompt or "Highlight key terms, pricing, and amenities")
    
    # 2. Vector search via pgvector cosine distance index (<=>)
    stmt = select(PropertyChunk.content)\\
        .where(PropertyChunk.property_id == property_id)\\
        .order_by(PropertyChunk.embedding.cosine_distance(query_embedding))\\
        .limit(5)
    chunks = (await db.execute(stmt)).scalars().all()
    
    # 3. Grounded LLM completion with system prompt guardrails
    summary = await call_llm(context="\\n".join(chunks), prompt=query.prompt)
    return {"property_id": property_id, "summary": summary}`
    }
  }
];
