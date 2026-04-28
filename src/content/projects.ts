export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: readonly string[];
  timeframe: string;
  metrics?: readonly { label: string; value: string; note?: string }[];
  gallery?: readonly { title: string; description?: string; src?: string; alt?: string }[];
  decisions?: readonly { title: string; detail: string }[];
  architecture?: readonly { title: string; detail: string }[];
  links?: {
    live?: string;
    source?: string;
  };
  highlights?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "inbest-backend",
    title: "Inbest Backend Platform",
    description:
      "Contributed to a scalable investment-oriented backend platform focused on modular architecture, data-driven workflows and production-grade API engineering.",
    timeframe: "2025",
    tags: ["Java Spring Boot", "PostgreSQL", "REST APIs", "Clean Architecture", "Backend Engineering"],
    metrics: [
      { label: "API Performance", value: "<200ms", note: "Optimized average response time on core endpoints" },
      { label: "Architecture", value: "Modular", note: "Layered service boundaries and reusable abstractions" },
      { label: "Scalability", value: "High", note: "Designed with extensibility and growth in mind" },
    ],
    gallery: [
      {
        title: "Investment Dashboard",
        description: "Core application interface",
        src: "/projects/inbest-dashboard.png",
        alt: "Investment dashboard",
      },
      {
        title: "Backend Architecture",
        description: "Service and data flow overview",
        src: "/projects/inbest-api-flow.png",
        alt: "Backend architecture overview",
      },
      {
        title: "Analytics Module",
        description: "Data-centric workflow visualization",
        src: "/projects/inbest-analytics.png",
        alt: "Analytics module visualization",
      },
    ],
    decisions: [
      {
        title: "Layered architecture for maintainability",
        detail:
          "Layered architecture chosen over tightly coupled service logic to keep the system maintainable and evolvable.",
      },
      {
        title: "Clean abstractions over short-term speed",
        detail:
          "Preferred clean abstractions and boundaries even when it increased upfront implementation time.",
      },
      {
        title: "Relational modeling for consistency",
        detail:
          "Relational modeling chosen over denormalization to preserve consistency and correctness across workflows.",
      },
    ],
    architecture: [
      {
        title: "Service + Repository architecture",
        detail: "Clear separation between application services and persistence concerns.",
      },
      {
        title: "Domain-driven entity modeling",
        detail: "Domain entities modeled to support investment-related workflows.",
      },
      {
        title: "PostgreSQL relational persistence",
        detail: "Relational persistence layer supporting production-grade data workflows.",
      },
    ],
    links: {
      source: "https://github.com/Inbest-Inc/inbest-backend",
    },
    highlights: [
      "Contributed to modular service and domain-layer development",
      "Designed and extended backend APIs supporting investment-related workflows",
      "Applied scalable data modeling and maintainable architectural patterns",
      "Focused on clean abstractions and production-oriented backend engineering",
    ],
  },
  {
    slug: "etrade-ms",
    title: "ETradeMS",
    description:
      "Developed an e-commerce management system exploring distributed architecture, service decomposition and scalable commerce workflows.",
    timeframe: "2025",
    tags: [".NET", "Microservices", "Distributed Systems", "E-Commerce", "Backend"],
    metrics: [
      { label: "Services", value: "Multi-Service", note: "Modular decomposition across domains" },
      { label: "Domain Coverage", value: "Full Commerce Flow", note: "Product, order and management logic" },
      { label: "Architecture", value: "Distributed", note: "Microservice-oriented design exploration" },
    ],
    gallery: [
      {
        title: "Commerce Dashboard",
        description: "Administrative interface",
        src: "/projects/etrade-admin.png",
        alt: "Commerce dashboard",
      },
      {
        title: "Service Architecture",
        description: "Distributed architecture overview",
        src: "/projects/etrade-services.png",
        alt: "Service architecture overview",
      },
      {
        title: "Order Flow",
        description: "Commerce lifecycle visualization",
        src: "/projects/etrade-orders.png",
        alt: "Order flow visualization",
      },
    ],
    decisions: [
      {
        title: "Microservice boundaries over monolithic simplicity",
        detail:
          "Prioritized microservice boundaries even when a monolith would be simpler to implement initially.",
      },
      {
        title: "Domain isolation for long-term scalability",
        detail:
          "Separation of services favored over shared tightly-coupled modules to keep domains independently evolvable.",
      },
    ],
    architecture: [
      {
        title: "Distributed service decomposition",
        detail:
          "Service boundaries defined around core commerce domains.",
      },
      {
        title: "API communication patterns",
        detail:
          "Explored inter-service API communication and integration concerns.",
      },
    ],
    links: { source: "https://github.com/gokhanmertgunes/ETradeMS-dotnet" },
    highlights: [
      "Modeled product, order and commerce workflows",
      "Explored service-oriented architecture patterns",
      "Built modular backend components around distributed system principles",
      "Focused on scalable service boundaries and backend decomposition",
    ],
  },
  {
    slug: "tg-rent-a-car",
    title: "TG Rent A Car",
    description:
      "Designed and developed a rental management system centered around reservation workflows, business rules and practical domain modeling.",
    timeframe: "2024",
    tags: ["Flask", "SQL Alchemy", "PostgreSQL", "Docker", "Backend", "System Design", "Rental Platform"],
    metrics: [
      { label: "Workflow Coverage", value: "End-to-End", note: "Booking through rental completion" },
      { label: "Domain Model", value: "Multi-Entity", note: "Vehicles, reservations, users" },
      { label: "Backend Design", value: "Modular", note: "Structured service-layer implementation" },
    ],
    gallery: [
      {
        title: "Rental Dashboard",
        src: "/projects/rent-dashboard.png",
        alt: "Rental dashboard",
      },
      {
        title: "Reservation Flow",
        src: "/projects/rent-booking.png",
        alt: "Reservation flow",
      },
      {
        title: "Domain Model",
        src: "/projects/rent-domain.png",
        alt: "Domain model",
      },
    ],
    decisions: [
      {
        title: "Relational modeling over flat structures",
        detail:
          "Relational modeling chosen over simpler flat structures to represent business rules and relationships accurately.",
      },
      {
        title: "Domain rules over minimal CRUD",
        detail:
          "Prioritized domain rules and reservation lifecycle logic instead of stopping at basic CRUD operations.",
      },
    ],
    architecture: [
      {
        title: "Domain modeling",
        detail:
          "Applied domain-driven thinking to system design and entity relationships.",
      },
      {
        title: "Service-layer backend structure",
        detail:
          "Modular service layer to keep business logic organized and testable.",
      },
    ],
    links: { source: "https://github.com/gokhanmertgunes/TGRentACar" },
    highlights: [
      "Designed reservation and rental lifecycle logic",
      "Implemented backend services for booking workflows",
      "Applied domain-driven thinking to practical system design",
      "Built multi-entity relational data structures",
    ],
  },
  {
    slug: "security-research-labs",
    title: "Security Research Labs",
    description:
      "Hands-on offensive security practice focused on web vulnerabilities, attack surfaces and secure engineering principles.",
    timeframe: "2025–Present",
    tags: ["Web Security", "OWASP", "Burp Suite", "PortSwigger", "Security Research"],
    metrics: [
      { label: "Labs Completed", value: "50+", note: "Broad vulnerability coverage" },
      { label: "Focus Areas", value: "Multiple Classes", note: "Auth, access control, injection and more" },
      { label: "Security Practice", value: "Hands-On", note: "Real exploitation workflows" },
    ],
    gallery: [
      { title: "Security Labs", src: "/projects/security-labs.png", alt: "Security labs" },
      { title: "Testing Workflow", src: "/projects/burp-testing.png", alt: "Testing workflow" },
      { title: "Research Notes", src: "/projects/owasp-notes.png", alt: "Research notes" },
    ],
    decisions: [
      {
        title: "Lab-driven learning over theory-heavy study",
        detail: "Focused on practical exploitation workflows to build intuition and transferable skills.",
      },
      {
        title: "Offensive methodology to improve defensive thinking",
        detail: "Used attacker mindset to identify weak points and design safer systems.",
      },
    ],
    architecture: [
      {
        title: "Threat-oriented testing methodology",
        detail: "Systematic approach to uncover vulnerabilities and validate mitigations.",
      },
      {
        title: "Web application attack surface analysis",
        detail: "Mapping inputs, trust boundaries, auth flows and risky sinks.",
      },
    ],
    highlights: [
      "Practical vulnerability research through hands-on labs",
      "Authentication and access control testing",
      "Applied offensive thinking to secure development",
    ],
  },
  {
    slug: "ctis-times",
    title: "The CTIS Times",
    description:
      "Developed a full-stack news/content platform with structured content management and user interaction flows.",
    timeframe: "2024",
    tags: ["Kotlin", "Gradle", "SQL Lite", "Android Studio", "Mobile Development", "Full-Stack", "Retrofit", "Lifecycle Components", "Database"],
    links: { source: "https://github.com/gokhanmertgunes/The-CTIS-Times" },
    highlights: [
      "Full-stack content platform development",
      "News publishing and management workflows",
      "Database-backed structured content system",
    ],
    architecture: [
      { title: "MVC architecture", detail: "Clear separation between UI, logic, and data access." },
      { title: "Database-driven design", detail: "Structured content modeled relationally." },
      { title: "Layered application structure", detail: "Organized modules and responsibilities." },
    ],
  },
  {
    slug: "library-management-system",
    title: "Library Management System",
    description:
      "Built a structured library management system focusing on OOP principles and backend logic design.",
    timeframe: "2024",
    tags: ["Python", "PostgreSQL", "FastAPI", "Docker", "Celery", "Redis", "OOP", "Database", "System Design"],
    links: { source: "https://github.com/gokhanmertgunes/Library-Management-System" },
    highlights: [
      "Library domain entity modeling",
      "Book borrowing/return workflows",
      "Object-oriented system design",
    ],
    architecture: [
      { title: "Object-oriented architecture", detail: "Entities and behaviors modeled with OOP principles." },
      { title: "Entity-based design", detail: "Clear relationships between books, users, and transactions." },
      { title: "Database integration layer", detail: "Persistence separated from business logic." },
    ],
  },
  {
    slug: "weather-condition-service",
    title: "Weather Condition Service",
    description:
      "Built a backend service integrating external weather APIs with clean service abstraction.",
    timeframe: "2024",
    tags: ["Java", "Spring Boot", "H2 Database", "RabbitMQ", "REST API", "Backend", "Service Integration"],
    links: { source: "https://github.com/gokhanmertgunes/weatherConditionService" },
    highlights: [
      "External API integration (weather data)",
      "Service abstraction layer design",
      "Real-time data fetching and processing",
    ],
    architecture: [
      { title: "Service-oriented design", detail: "Clean boundaries for external integrations." },
      { title: "External API integration layer", detail: "Adapters for third-party API variability." },
      { title: "Stateless backend structure", detail: "Predictable scaling and deployability." },
    ],
  },
  {
    slug: "customer-book-order-app",
    title: "Customer Book Order App",
    description:
      "Developed a transactional order management system focusing on business logic and customer workflows.",
    timeframe: "2024",
    tags: ["Java", "Spring Boot", "H2 Database", "RabbitMQ", "REST API", "Backend", "Service Integration"],
    links: { source: "https://github.com/gokhanmertgunes/CustomerBookOrderApp" },
    highlights: [
      "Customer and order domain modeling",
      "Transaction-based workflow design",
      "Business logic implementation",
    ],
    architecture: [
      { title: "Layered backend design", detail: "Separation between API/service/data access." },
      { title: "Domain modeling", detail: "Entities and rules built around orders and customers." },
      { title: "Relational data handling", detail: "Data consistency prioritized via relational modeling." },
    ],
  },
] as const;

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string) {
  return projects.findIndex((p) => p.slug === slug);
}


