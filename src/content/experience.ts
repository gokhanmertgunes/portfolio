export type ExperienceItem = {
  company: string;
  logoSrc?: string;
  role: string;
  roleTr?: string;
  location: string;
  locationTr?: string;
  period: string;
  bullets: readonly string[];
  bulletsTr?: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    company: "Sensgreen",
    logoSrc:
      "https://sensgreen.com/wp-content/uploads/2023/05/cropped-5b729c31a9dfc511569637-kopya.png",
    role: "Software Developer",
    roleTr: "Yazılım Geliştirici",
    period: "September 2023 – July 2024",
    location: "Ankara, Turkey",
    locationTr: "Ankara, Türkiye",
    bullets: [
      "Developed backend API features using Python FastAPI to improve processing of large sensor data volumes",
      "Built a scalable notification module using Trello API and Apache Kafka for real-time alerts via email, SMS, and in-app channels",
      "Integrated 24 new sensor types into the backend module to expand monitoring capabilities",
      "Fixed 16 frontend bugs and improved 8 UI/UX features to enhance user experience",
      "Made 446 GitHub contributions through code reviews, feature development, and bug fixes",
      "Implemented security improvements (SQL Injection, IDOR, CSRF etc.) to the API including better authentication and input validation",
      "Created 9 (6 backend, 1 frontend, 2 database) proper technical documentation with code examples to help new team members",
    ],
    bulletsTr: [
      "Python FastAPI kullanarak büyük sensör veri hacimlerinin işlenmesini iyileştiren backend API geliştirmeleri yaptım",
      "Trello API ve Apache Kafka ile e‑posta, SMS ve uygulama içi kanallar üzerinden gerçek zamanlı uyarılar üreten ölçeklenebilir bildirim modülü geliştirdim",
      "İzleme kabiliyetlerini genişletmek için backend modülüne 24 yeni sensör tipi entegre ettim",
      "Kullanıcı deneyimini iyileştirmek için 16 frontend bug’ı çözdüm ve 8 UI/UX geliştirmesi yaptım",
      "Code review, feature geliştirme ve bug fix süreçleriyle 446 GitHub katkısı yaptım",
      "API tarafında güvenlik iyileştirmeleri (SQL Injection, IDOR, CSRF vb.) uygulayarak kimlik doğrulama ve input validation’ı güçlendirdim",
      "Yeni ekip üyelerine yardımcı olmak için kod örnekleri içeren 9 teknik dokümantasyon (6 backend, 1 frontend, 2 database) hazırladım",
    ],
  },
  {
    company: "ING Turkey",
    logoSrc:
      "https://www.ing.com.tr/F/Documents/Images/kurumsal_logo_genel_mudurluk/ING_Logo_BeyazBG_Big.png",
    role: "Platform Applications Intern",
    roleTr: "Platform Uygulamaları Stajyeri",
    period: "August 2023",
    location: "Istanbul, Turkey",
    locationTr: "İstanbul, Türkiye",
    bullets: [
      "Integrated 3 endpoints into the internal communication system by using Java Spring",
      "Applied e2e, integration and unit tests for endpoints that I created under supervision",
      "Gained experience with Agile methodologies in a corporate banking environment",
    ],
    bulletsTr: [
      "Java Spring kullanarak kurum içi iletişim sistemine 3 endpoint entegre ettim",
      "Geliştirdiğim endpoint’ler için gözetim altında e2e, integration ve unit testler uyguladım",
      "Kurumsal bankacılık ortamında Agile metodolojilerle çalışma deneyimi edindim",
    ],
  },
  {
    company: "Mobile Action",
    logoSrc: "https://www.mobileaction.co/wp-content/uploads/mobileaction_logo.svg",
    role: "Software Engineering Intern",
    roleTr: "Yazılım Mühendisliği Stajyeri",
    period: "July 2023",
    location: "Ankara, Turkey",
    locationTr: "Ankara, Türkiye",
    bullets: [
      "Built a Spring Boot application with basic REST APIs and implemented H2 database to the project",
      "Contributed to solve 3 bugs in the user interface using Vue.js",
    ],
    bulletsTr: [
      "Temel REST API’lere sahip bir Spring Boot uygulaması geliştirdim ve projeye H2 veritabanını entegre ettim",
      "Vue.js kullanarak kullanıcı arayüzündeki 3 hatanın çözümüne katkı sağladım",
    ],
  },
  {
    company: "Bilkent University",
    logoSrc: "https://w3.bilkent.edu.tr/logo/ING-amblem-yazi.png",
    role: "Teaching Assistant Tutor",
    roleTr: "Öğretim Asistanı / Tutor",
    period: "September 2022 – June 2023",
    location: "Ankara, Turkey",
    locationTr: "Ankara, Türkiye",
    bullets: [
      "Supported 50 students during lab sessions for programming and algorithms courses",
      "Provided guidance on programming concepts and helped with debugging",
    ],
    bulletsTr: [
      "Programlama ve algoritmalar derslerinde laboratuvar oturumlarında 50 öğrenciye destek oldum",
      "Programlama kavramlarında rehberlik ederek debugging süreçlerinde yardımcı oldum",
    ],
  },
  {
    company: "Bilkent University",
    logoSrc: "https://w3.bilkent.edu.tr/logo/ING-amblem-yazi.png",
    role: "Student Representative (Faculty of Applied Sciences)",
    roleTr: "Öğrenci Temsilcisi (Uygulamalı Bilimler Fakültesi)",
    period: "September 2023 – June 2025",
    location: "Ankara, Turkey",
    locationTr: "Ankara, Türkiye",
    bullets: [
      "Represented Faculty of Applied Sciences and CTIS Dep. as an elected student representative",
      "Worked as Chair of the Student Council Supervisory Board with ensuring transparency",
    ],
    bulletsTr: [
      "Seçilmiş öğrenci temsilcisi olarak Uygulamalı Bilimler Fakültesi ve CTIS bölümünü temsil ettim",
      "Şeffaflığı sağlamak amacıyla Öğrenci Konseyi Denetim Kurulu Başkanı olarak görev aldım",
    ],
  },
] as const;

