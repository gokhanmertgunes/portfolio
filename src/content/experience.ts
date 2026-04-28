export type ExperienceItem = {
  company: string;
  logoSrc?: string;
  role: string;
  location: string;
  period: string;
  bullets: readonly string[];
};

export const experience: readonly ExperienceItem[] = [
  {
    company: "Sensgreen",
    logoSrc:
      "https://sensgreen.com/wp-content/uploads/2023/05/cropped-5b729c31a9dfc511569637-kopya.png",
    role: "Software Developer",
    period: "September 2023 – July 2024",
    location: "Ankara, Turkey",
    bullets: [
      "Developed backend API features using Python FastAPI to improve processing of large sensor data volumes",
      "Built a scalable notification module using Trello API and Apache Kafka for real-time alerts via email, SMS, and in-app channels",
      "Integrated 24 new sensor types into the backend module to expand monitoring capabilities",
      "Fixed 16 frontend bugs and improved 8 UI/UX features to enhance user experience",
      "Made 446 GitHub contributions through code reviews, feature development, and bug fixes",
      "Implemented security improvements (SQL Injection, IDOR, CSRF etc.) to the API including better authentication and input validation",
      "Created 9 (6 backend, 1 frontend, 2 database) proper technical documentation with code examples to help new team members",
    ],
  },
  {
    company: "ING Turkey",
    logoSrc:
      "https://www.ing.com.tr/F/Documents/Images/kurumsal_logo_genel_mudurluk/ING_Logo_BeyazBG_Big.png",
    role: "Platform Applications Intern",
    period: "August 2023",
    location: "Istanbul, Turkey",
    bullets: [
      "Integrated 3 endpoints into the internal communication system by using Java Spring",
      "Applied e2e, integration and unit tests for endpoints that I created under supervision",
      "Gained experience with Agile methodologies in a corporate banking environment",
    ],
  },
  {
    company: "Mobile Action",
    logoSrc: "https://www.mobileaction.co/wp-content/uploads/mobileaction_logo.svg",
    role: "Software Engineering Intern",
    period: "July 2023",
    location: "Ankara, Turkey",
    bullets: [
      "Built a Spring Boot application with basic REST APIs and implemented H2 database to the project",
      "Contributed to solve 3 bugs in the user interface using Vue.js",
    ],
  },
  {
    company: "Bilkent University",
    logoSrc: "https://w3.bilkent.edu.tr/logo/ING-amblem-yazi.png",
    role: "Teaching Assistant Tutor",
    period: "September 2022 – June 2023",
    location: "Ankara, Turkey",
    bullets: [
      "Supported 50 students during lab sessions for programming and algorithms courses",
      "Provided guidance on programming concepts and helped with debugging",
    ],
  },
  {
    company: "Bilkent University",
    logoSrc: "https://w3.bilkent.edu.tr/logo/ING-amblem-yazi.png",
    role: "Student Representative (Faculty of Applied Sciences)",
    period: "September 2023 – June 2025",
    location: "Ankara, Turkey",
    bullets: [
      "Represented Faculty of Applied Sciences and CTIS Dep. as an elected student representative",
      "Worked as Chair of the Student Council Supervisory Board with ensuring transparency",
    ],
  },
] as const;

