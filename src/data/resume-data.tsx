import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Selfie } from "@/images";

export const RESUME_DATA = {
  name: "Jamel Eddine Lassoued",
  initials: "LJ",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo,+Japan",
  about: "Full Stack Engineer. Currently working in Tokyo.",
  summary:
    "A Full Stack Engineer with 3+ years of experience building and maintaining backend services and web applications, currently working on production reliability and infrastructure modernization for Rakuten Travel, Japan's #1 online travel agency and part of Rakuten Group, one of Japan's largest technology companies.",
  avatarUrl: Selfie.src,
  personalWebsiteUrl: "https://sardonyx001.github.io/",
  contact: {
    email: "hey@jamell.dev",
    tel: "+8107091962885",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sardonyx001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamel-eddine-lassoued-5a8768360/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/whyamihere001",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Oita University",
      link: "https://www.oita-u.ac.jp/",
      degree: "Bachelor's Degree in Computer Science and Intelligent Systems\n",
      start: "2023",
      end: "2025",
    },
    {
      school: "National Institute of Technology, Sasebo College",
      link: "https://www.sasebo.ac.jp/",
      degree: "Associate's Degree in Control systems engineering",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Rakuten Group Inc.",
      link: "https://corp.rakuten.co.jp/",
      badges: ["On-site", "Java", "Spring Boot", "Golang", "Python", "Ruby", "TypeScript", "React.js", "Kubernetes", "Jenkins", "Oracle", "MongoDB", "Elasticsearch"],
      title: "Application Engineer",
      start: "2025/4",
      end: "Present",
      description: [
        "Led Spring Boot upgrades to 3.x across multiple legacy production services, resolving breaking dependency changes, migrating deprecated APIs, improving test coverage to >85% from 10%, and conducting performance tests",
        "Spearheading the migration of 1,600+ cron jobs from bare-metal VMs to Kubernetes using Apache Airflow + KubernetesPodOperator, coordinating across several service teams; built a multi-cluster POC with custom logging, error propagation, and a CI/CD DAG generation pipeline",
        "Proactively identified and resolved production performance bottlenecks across high-traffic services through Jennifer APM profiling and SQL analysis; implemented OpenTelemetry and performance testing tooling across several applications",
        "Built an MCP server giving the team live access to Jennifer APM across 51 production servers, reducing incident investigation time from hours to minutes",
        "Driving containerization and Cloud (Kubernetes) migrations for 100+ legacy Spring Boot services; built Claude Code AI skills and a custom code search plugin bridging Bitbucket, Confluence, and Jira to automate dependency investigation, scaled to 30+ users across multiple teams",
        "Developed internal React.js tooling that integrates Bitbucket, Confluence, and Jira to automate frontend bug investigation and documentation workflows",
      ],
    },
    {
      company: "Sigma-i Co., Ltd",
      link: "https://www.sigmailab.com/",
      badges: ["Remote", "Python", "Ruby", "Flask", "React.js", "MySQL", "Redis"],
      title: "Backend Developer",
      start: "2023/5",
      end: "2025/3",
      description: [
        "Built and maintained the backend of one of the company's main products — a web application for data entry, retrieval, and report generation",
        "Worked as part of a startup team from early stage",
      ],
    },
    {
      company: "Yumemi Inc.",
      link: "https://www.yumemi.co.jp/",
      badges: ["Remote", "Golang", "DDD", "Echo", "PostgreSQL"],
      title: "Backend Developer",
      start: "2024/2",
      end: "2024/3",
      description: [
        "Developed an API for a personal ordering system applying Domain-Driven Design (DDD) principles",
      ],
    },
    {
      company: "MobileCreate",
      link: "https://www.mcinc.jp/",
      badges: ["Remote", "Typescript", "React.js", "Next.js", "PostgreSQL"],
      title: "Full Stack Developer",
      start: "2023/11",
      end: "2024/3",
      description: [
        "Developed a web application with route search functionality using real-time bus location data (GTFS-RT) and notification features via LINE",
        "Primarily responsible for backend and infrastructure throughout the 4-month internship",
      ],
    },
  ],
  skills: [
    "Java",
    "Python",
    "Golang",
    "TypeScript",
    "Node.js",
    "Spring Boot",
    "React/Next.js",
    "Kubernetes",
    "Docker",
    "AWS S3",
    "Oracle",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Elasticsearch",
  ],
  projects: [
    {
      title: "Marsa",
      techStack: ["Golang", "SvelteKit", "SQLite", "Docker", "Caddy"],
      description:
        "Minimal self-hosted PaaS replacing Coolify; deploys Docker Compose apps to a VPS with automatic TLS, GitHub push-to-deploy, SSO via Zitadel (OIDC), and a goroutine-based async deploy worker pool",
      link: {
        label: "marsa.jamell.dev",
        href: "https://marsa.jamell.dev",
      },
    },
    {
      title: "Whats this kanji?",
      techStack: ["Kotlin", "Android"],
      description:
        "Japanese text processing and kanji lookup with offline KANJIDIC2 dictionary",
      link: {
        label: "github.com/Sardonyx001/whats-this-kanji",
        href: "https://github.com/Sardonyx001/whats-this-kanji",
      },
    },
  ],
} as const;
