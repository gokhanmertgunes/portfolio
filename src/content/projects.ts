export type Project = {
  slug: string;
  title: string;
  description: string;
  descriptionTr?: string;
  tags: readonly string[];
  timeframe: string;
  metrics?: readonly { label: string; value: string; note?: string }[];
  metricsTr?: readonly { label: string; value: string; note?: string }[];
  decisions?: readonly { title: string; detail: string }[];
  decisionsTr?: readonly { title: string; detail: string }[];
  architecture?: readonly { title: string; detail: string }[];
  architectureTr?: readonly { title: string; detail: string }[];
  links?: {
    live?: string;
    source?: string;
  };
  highlights?: readonly string[];
  highlightsTr?: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "inbest-backend",
    title: "Inbest Backend Platform",
    description:
      "Contributed to a scalable investment-oriented backend platform focused on modular architecture, data-driven workflows and production-grade API engineering.",
    descriptionTr:
      "Modüler mimari, veri odaklı akışlar ve production seviyesinde API mühendisliği odağıyla ölçeklenebilir, yatırım odaklı bir backend platformuna katkı sağladım.",
    timeframe: "2025",
    tags: ["Java Spring Boot", "PostgreSQL", "REST APIs", "Clean Architecture", "Backend Engineering"],
    metrics: [
      { label: "API Performance", value: "<200ms", note: "Optimized average response time on core endpoints" },
      { label: "Architecture", value: "Modular", note: "Layered service boundaries and reusable abstractions" },
      { label: "Scalability", value: "High", note: "Designed with extensibility and growth in mind" },
    ],
    metricsTr: [
      { label: "API Performansı", value: "<200ms", note: "Kritik endpoint’lerde optimize edilmiş ortalama yanıt süresi" },
      { label: "Mimari", value: "Modüler", note: "Katmanlı servis sınırları ve yeniden kullanılabilir soyutlamalar" },
      { label: "Ölçeklenebilirlik", value: "Yüksek", note: "Genişletilebilirlik ve büyüme düşünülerek tasarlandı" },
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
    decisionsTr: [
      {
        title: "Sürdürülebilirlik için katmanlı mimari",
        detail:
          "Sistemin sürdürülebilir ve evrilebilir kalması için sıkı bağlı servis mantığı yerine katmanlı mimari tercih edildi.",
      },
      {
        title: "Kısa vadeli hız yerine temiz soyutlamalar",
        detail:
          "İlk geliştirme süresini artırsa bile sınırları net ve temiz soyutlamalar tercih edildi.",
      },
      {
        title: "Tutarlılık için ilişkisel modelleme",
        detail:
          "İş akışlarında doğruluk ve tutarlılığı korumak için denormalizasyon yerine ilişkisel modelleme tercih edildi.",
      }
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
    architectureTr: [
      {
        title: "Service + Repository mimarisi",
        detail: "Uygulama servisleri ile persistence katmanı arasında net ayrım.",
      },
      {
        title: "Domain-driven entity modelleme",
        detail: "Yatırım iş akışlarını destekleyecek şekilde domain varlıklarının modellenmesi.",
      },
      {
        title: "PostgreSQL ilişkisel persistence",
        detail: "Production odaklı veri iş akışlarını destekleyen ilişkisel persistence katmanı.",
      }
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
    highlightsTr: [
      "Modüler servis ve domain katmanı geliştirmelerine katkı",
      "Yatırım iş akışlarını destekleyen backend API’lerin tasarımı ve genişletilmesi",
      "Ölçeklenebilir veri modelleme ve sürdürülebilir mimari kalıpların uygulanması",
      "Temiz soyutlamalar ve production odaklı backend mühendisliği",
    ],
  },
  {
    slug: "etrade-ms",
    title: "ETradeMS",
    description:
      "Developed an e-commerce management system exploring distributed architecture, service decomposition and scalable commerce workflows.",
    descriptionTr:
      "Dağıtık mimari, servis ayrıştırma ve ölçeklenebilir e‑ticaret iş akışlarını keşfeden bir e‑ticaret yönetim sistemi geliştirdim.",
    timeframe: "2025",
    tags: [".NET", "Microservices", "Distributed Systems", "E-Commerce", "Backend"],
    metrics: [
      { label: "Services", value: "Multi-Service", note: "Modular decomposition across domains" },
      { label: "Domain Coverage", value: "Full Commerce Flow", note: "Product, order and management logic" },
      { label: "Architecture", value: "Distributed", note: "Microservice-oriented design exploration" },
    ],
    metricsTr: [
      { label: "Servisler", value: "Çoklu Servis", note: "Domain’ler arası modüler ayrıştırma" },
      { label: "Domain Kapsamı", value: "Tam Ticaret Akışı", note: "Ürün, sipariş ve yönetim mantığı" },
      { label: "Mimari", value: "Dağıtık", note: "Microservice odaklı tasarım deneyi" },
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
    decisionsTr: [
      {
        title: "Monolitik basitlik yerine microservice sınırları",
        detail:
          "İlk etapta monolit daha basit olsa da microservice sınırları önceliklendirildi.",
      },
      {
        title: "Uzun vadeli ölçek için domain izolasyonu",
        detail:
          "Domain’lerin bağımsız evrilebilmesi için sıkı bağlı ortak modüller yerine servis ayrımı tercih edildi.",
      }
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
    architectureTr: [
      {
        title: "Dağıtık servis ayrıştırma",
        detail: "Servis sınırları temel ticaret domain’leri etrafında belirlendi.",
      },
      {
        title: "API iletişim desenleri",
        detail: "Servisler arası API iletişimi ve entegrasyon konuları çalışıldı.",
      }
    ],
    links: { source: "https://github.com/gokhanmertgunes/ETradeMS-dotnet" },
    highlights: [
      "Modeled product, order and commerce workflows",
      "Explored service-oriented architecture patterns",
      "Built modular backend components around distributed system principles",
      "Focused on scalable service boundaries and backend decomposition",
    ],
    highlightsTr: [
      "Ürün, sipariş ve ticaret iş akışlarının modellenmesi",
      "Servis odaklı mimari desenlerinin incelenmesi",
      "Dağıtık sistem prensipleriyle modüler backend bileşenleri geliştirme",
      "Ölçeklenebilir servis sınırları ve backend ayrıştırma odağı",
    ],
  },
  {
    slug: "tg-rent-a-car",
    title: "TG Rent A Car",
    description:
      "Designed and developed a rental management system centered around reservation workflows, business rules and practical domain modeling.",
    descriptionTr:
      "Rezervasyon iş akışları, iş kuralları ve pratik domain modelleme odağında bir araç kiralama yönetim sistemi tasarlayıp geliştirdim.",
    timeframe: "2024",
    tags: ["Flask", "SQL Alchemy", "PostgreSQL", "Docker", "Backend", "System Design", "Rental Platform"],
    metrics: [
      { label: "Workflow Coverage", value: "End-to-End", note: "Booking through rental completion" },
      { label: "Domain Model", value: "Multi-Entity", note: "Vehicles, reservations, users" },
      { label: "Backend Design", value: "Modular", note: "Structured service-layer implementation" },
    ],
    metricsTr: [
      { label: "Akış Kapsamı", value: "Uçtan Uca", note: "Rezervasyondan kiralama tamamlamaya kadar" },
      { label: "Domain Modeli", value: "Çok Varlıklı", note: "Araçlar, rezervasyonlar, kullanıcılar" },
      { label: "Backend Tasarımı", value: "Modüler", note: "Yapılandırılmış service-layer implementasyonu" },
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
    decisionsTr: [
      {
        title: "Düz yapılar yerine ilişkisel modelleme",
        detail:
          "İş kuralları ve ilişkileri doğru temsil etmek için daha basit düz yapılar yerine ilişkisel modelleme tercih edildi.",
      },
      {
        title: "Minimal CRUD yerine domain kuralları",
        detail:
          "Sadece CRUD ile sınırlı kalmak yerine rezervasyon yaşam döngüsü ve domain kuralları önceliklendirildi.",
      }
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
    architectureTr: [
      {
        title: "Domain modelleme",
        detail: "Sistem tasarımında domain-driven düşünce ve varlık ilişkileri uygulandı.",
      },
      {
        title: "Service-layer backend yapısı",
        detail: "İş mantığını düzenli ve test edilebilir tutmak için modüler service-layer.",
      }
    ],
    links: { source: "https://github.com/gokhanmertgunes/TGRentACar" },
    highlights: [
      "Designed reservation and rental lifecycle logic",
      "Implemented backend services for booking workflows",
      "Applied domain-driven thinking to practical system design",
      "Built multi-entity relational data structures",
    ],
    highlightsTr: [
      "Rezervasyon ve kiralama yaşam döngüsü mantığının tasarımı",
      "Rezervasyon iş akışları için backend servislerinin geliştirilmesi",
      "Pratik sistem tasarımında domain‑driven yaklaşımın uygulanması",
      "Çok varlıklı ilişkisel veri yapılarının kurulması",
    ],
  },
  {
    slug: "security-research-labs",
    title: "Security Research Labs",
    description:
      "Hands-on offensive security practice focused on web vulnerabilities, attack surfaces and secure engineering principles.",
    descriptionTr:
      "Web zafiyetleri, saldırı yüzeyi analizi ve güvenli yazılım prensiplerine odaklanan uygulamalı offensive security çalışmaları.",
    timeframe: "2025–Present",
    tags: ["Web Security", "OWASP", "Burp Suite", "PortSwigger", "Security Research"],
    metrics: [
      { label: "Labs Completed", value: "50+", note: "Broad vulnerability coverage" },
      { label: "Focus Areas", value: "Multiple Classes", note: "Auth, access control, injection and more" },
      { label: "Security Practice", value: "Hands-On", note: "Real exploitation workflows" },
    ],
    metricsTr: [
      { label: "Tamamlanan Lab", value: "50+", note: "Geniş zafiyet kapsamı" },
      { label: "Odak Alanları", value: "Birden çok sınıf", note: "Auth, access control, injection vb." },
      { label: "Pratik", value: "Uygulamalı", note: "Gerçek exploit iş akışları" },
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
    decisionsTr: [
      {
        title: "Teori yerine lab odaklı öğrenme",
        detail: "Aktarılabilir beceri ve sezgi geliştirmek için pratik exploit akışlarına odaklandım.",
      },
      {
        title: "Defansif düşünceyi güçlendirmek için offensive metodoloji",
        detail: "Saldırgan bakış açısıyla zayıf noktaları görüp daha güvenli sistemler tasarlamayı hedefledim.",
      }
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
    architectureTr: [
      {
        title: "Tehdit odaklı test metodolojisi",
        detail: "Zafiyetleri keşfetmek ve mitigasyonları doğrulamak için sistematik yaklaşım.",
      },
      {
        title: "Web saldırı yüzeyi analizi",
        detail: "Input’lar, trust boundary’ler, auth akışları ve riskli noktaların haritalanması.",
      }
    ],
    highlights: [
      "Practical vulnerability research through hands-on labs",
      "Authentication and access control testing",
      "Applied offensive thinking to secure development",
    ],
    highlightsTr: [
      "Uygulamalı lab’ler ile pratik zafiyet araştırması",
      "Kimlik doğrulama ve erişim kontrolü testleri",
      "Güvenli geliştirme için offensive bakış açısının uygulanması",
    ],
  },
  {
    slug: "ctis-times",
    title: "The CTIS Times",
    description:
      "Developed a full-stack news/content platform with structured content management and user interaction flows.",
    descriptionTr:
      "Yapılandırılmış içerik yönetimi ve kullanıcı etkileşim akışlarıyla full‑stack bir haber/içerik platformu geliştirdim.",
    timeframe: "2024",
    tags: ["Kotlin", "Gradle", "SQL Lite", "Android Studio", "Mobile Development", "Full-Stack", "Retrofit", "Lifecycle Components", "Database"],
    links: { source: "https://github.com/gokhanmertgunes/The-CTIS-Times" },
    highlights: [
      "Full-stack content platform development",
      "News publishing and management workflows",
      "Database-backed structured content system",
    ],
    highlightsTr: [
      "Full‑stack içerik platformu geliştirme",
      "Haber yayınlama ve yönetim iş akışları",
      "Veritabanı destekli yapılandırılmış içerik sistemi",
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
    descriptionTr:
      "OOP prensipleri ve backend iş mantığı tasarımına odaklanan yapılandırılmış bir kütüphane yönetim sistemi geliştirdim.",
    timeframe: "2024",
    tags: ["Python", "PostgreSQL", "FastAPI", "Docker", "Celery", "Redis", "OOP", "Database", "System Design"],
    links: { source: "https://github.com/gokhanmertgunes/Library-Management-System" },
    highlights: [
      "Library domain entity modeling",
      "Book borrowing/return workflows",
      "Object-oriented system design",
    ],
    highlightsTr: [
      "Kütüphane domain varlık modellemesi",
      "Kitap ödünç alma/teslim iş akışları",
      "Nesne yönelimli sistem tasarımı",
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
    descriptionTr:
      "Harici hava durumu API’lerini temiz servis soyutlamasıyla entegre eden bir backend servis geliştirdim.",
    timeframe: "2024",
    tags: ["Java", "Spring Boot", "H2 Database", "RabbitMQ", "REST API", "Backend", "Service Integration"],
    links: { source: "https://github.com/gokhanmertgunes/weatherConditionService" },
    highlights: [
      "External API integration (weather data)",
      "Service abstraction layer design",
      "Real-time data fetching and processing",
    ],
    highlightsTr: [
      "Harici API entegrasyonu (hava durumu verisi)",
      "Servis soyutlama katmanı tasarımı",
      "Gerçek zamanlı veri çekme ve işleme",
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
    descriptionTr:
      "İş mantığı ve müşteri iş akışlarına odaklanan transactional bir sipariş yönetim sistemi geliştirdim.",
    timeframe: "2024",
    tags: ["Java", "Spring Boot", "H2 Database", "RabbitMQ", "REST API", "Backend", "Service Integration"],
    links: { source: "https://github.com/gokhanmertgunes/CustomerBookOrderApp" },
    highlights: [
      "Customer and order domain modeling",
      "Transaction-based workflow design",
      "Business logic implementation",
    ],
    highlightsTr: [
      "Müşteri ve sipariş domain modellemesi",
      "Transaction tabanlı iş akışı tasarımı",
      "İş mantığı implementasyonu",
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


