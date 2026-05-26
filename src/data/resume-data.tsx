import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Selfie } from "@/images";

export const RESUME_DATA = {
  name: "Jamel Eddine Lassoued",
  initials: "LJ",
  location: "Tokyo, Japan",
  locationLink: "https://www.google.com/maps/place/Tokyo,+Japan",
  about: "Full Stack Engineer. Currently working in Tokyo.",
  summary:
    "A Full Stack Engineer with 2+ years of experience building and maintaining backend services and web applications, currently working on production reliability for Rakuten Travel.",
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
      badges: ["On-site", "Java", "Spring Boot", "Golang", "Python", "TypeScript", "Kubernetes", "Jenkins"],
      title: "Application Engineer",
      start: "2025/4",
      end: "Present",
      description:
        "Spearheading the migration of 1,600+ cron jobs from VMs to Kubernetes with Apache Airflow, coordinating across several service teams. Driving Cloud (Kubernetes) migrations for Spring Boot services; authored developer tooling to aid in the investigation and documentation process.",
    },
    {
      company: "Sigma-i Co., Ltd",
      link: "https://www.sigmailab.com/",
      badges: ["Remote", "Python", "Flask", "MySQL", "Redis"],
      title: "Backend Developer",
      start: "2023/5",
      end: "2025/3",
      description:
        "I am working as a Backend Developer with Sigma-i, a startup based in Japan. I am responsible for building and maintaining the backend of one of the company's main products, a web application that helps users manage data entry and retrieval and generate reports.",
    },
    {
      company: "Yumemi Inc.",
      link: "https://www.yumemi.co.jp/",
      badges: ["Remote", "Golang", "DDD", "Echo", "PostgreSQL"],
      title: "Backend Developer",
      start: "2024/2",
      end: "2024/3",
      description:
        "Spent a two-week internship developing an API for a personal ordering system using the Golang Echo framework.",
    },
    {
      company: "MobileCreate",
      link: "https://www.mcinc.jp/",
      badges: ["Remote", "Typescript", "Next.js", "PostgreSQL"],
      title: "Full Stack Developer",
      start: "2023/11",
      end: "2024/3",
      description:
        "Developed a web application with route search functionality using real-time bus location data (GTFS-RT) and notification features via LINE through a 4-month internship. Primarily responsible for backend and infrastructure.",
    },
  ],
  skills: [
    "Python",
    "Java",
    "Golang",
    "JavaScript/TypeScript",
    "Flask",
    "FastAPI",
    "React/Next.js",
    "Node.js",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "Bash",
    "Perl",
    "C/C++",
  ],
  projects: [
    {
      title: "ul",
      techStack: ["Golang", "Self-hosted"],
      description: "Simple lightweight URL shortener",
      link: {
        label: "ul.jamell.dev",
        href: "https://ul.jamell.dev",
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
