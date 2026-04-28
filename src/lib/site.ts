export const siteConfig = {
  name: "Gökhan Mert Güneş",
  title:
    "Full-Stack Software Engineer | Backend-Focused Product Developer | Security Enthusiast",
  description:
    "Engineering scalable digital products through clean architecture, modern interfaces, and secure systems.",
  location: "Ankara, Türkiye",
  url: "https://gokhanmertgunes.com",
  links: {
    email: "mailto:gokhanmertgunes@gmail.com",
    github: "https://github.com/gokhanmertgunes",
    linkedin: "https://linkedin.com/in/gokhanmertgunes",
  },
  nav: [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#about", label: "About" },
    { href: "#writing", label: "Writing" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

