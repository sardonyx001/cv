import type { ComponentType } from "react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Selfie } from "@/images";
import type { Locale, ResumeData } from "@/lib/types";

/** A value available in both locales */
type L<T = string> = { en: T; jp: T };

interface LocalizedData {
  name: L;
  initials: string;
  location: L;
  locationLink: string;
  about: L;
  summary: L;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email?: string;
    phone?: string;
    social: Array<{
      name: string;
      url: string;
      icon: ComponentType<{ className?: string }>;
    }>;
  };
  education: Array<{
    school: L;
    link?: string;
    degree: L;
    start: string;
    end: string;
  }>;
  work: Array<{
    company: L;
    link: string;
    badges: L<string[]>;
    title: L;
    start: string;
    end: L;
    description: L<string[]>;
  }>;
  skills: string[];
  languages: Array<{ name: L; level: L }>;
  projects: Array<{
    title: string;
    techStack: string[];
    description: L;
    link?: { label: string; href: string };
  }>;
}

const DATA: LocalizedData = {
  name: {
    en: "Jamel Eddine Lassoued",
    jp: "LASSOUED Jamel Eddine \nラスエド・ジャメル・エディン",
  },
  initials: "LJ",
  location: { en: "Tokyo, Japan", jp: "東京都" },
  locationLink: "https://www.google.com/maps/place/Tokyo,+Japan",
  about: {
    en: "Full Stack Engineer. Currently working in Tokyo.",
    jp: "都内在住のフルスタックエンジニア。",
  },
  summary: {
    en: "A Full Stack Engineer with 3+ years of experience building and maintaining backend services and web applications, currently working on production reliability and infrastructure modernization for Rakuten Travel, Japan's #1 online travel agency and part of Rakuten Group, one of Japan's largest technology companies.",
    jp: "バックエンドサービスおよびWebアプリケーションの構築・保守に3年以上の経験を持つフルスタックエンジニア。現在は日本最大手のオンライン旅行代理店・楽天トラベル（楽天グループ）にて、プロダクション信頼性向上とインフラモダナイゼーションに取り組んでいます。",
  },
  avatarUrl: Selfie.src,
  personalWebsiteUrl: "https://sardonyx001.github.io/",
  contact: {
    email: "hey@jamell.dev",
    phone: "+81 070-9196-2885",
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
    ],
  },
  education: [
    {
      school: { en: "Oita University", jp: "大分大学" },
      link: "https://www.oita-u.ac.jp/",
      degree: {
        en: "Bachelor's Degree in Computer Science and Intelligent Systems",
        jp: "理工学科知能情報システムコース",
      },
      start: "2023",
      end: "2025",
    },
    {
      school: {
        en: "National Institute of Technology, Sasebo College",
        jp: "佐世保工業高等専門学校",
      },
      link: "https://www.sasebo.ac.jp/",
      degree: {
        en: "Associate's Degree in Control Systems Engineering",
        jp: "電子制御工学科",
      },
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: { en: "Rakuten Group Inc.", jp: "楽天グループ株式会社" },
      link: "https://corp.rakuten.co.jp/",
      badges: {
        en: ["On-site", "Java", "Spring Boot", "Golang", "Python", "Ruby", "TypeScript", "React.js", "Kubernetes", "Jenkins", "Oracle", "MongoDB", "Elasticsearch"],
        jp: ["On-site", "Java", "Spring Boot", "Golang", "Python", "Ruby", "TypeScript", "React.js", "Kubernetes", "Jenkins", "Oracle", "MongoDB", "Elasticsearch"],
      },
      title: { en: "Application Engineer", jp: "Application Engineer" },
      start: "2025/4",
      end: { en: "Present", jp: "現在" },
      description: {
        en: [
          "Led Spring Boot upgrades to 3.x across multiple legacy production services, resolving breaking dependency changes, migrating deprecated APIs, improving test coverage to >85% from 10%, and conducting performance tests",
          "Spearheading the migration of 1,600+ cron jobs from bare-metal VMs to Kubernetes using Apache Airflow + KubernetesPodOperator, coordinating across several service teams; built a multi-cluster POC with custom logging, error propagation, and a CI/CD DAG generation pipeline",
          "Proactively identified and resolved production performance bottlenecks across high-traffic services through Jennifer APM profiling and SQL analysis; implemented OpenTelemetry and performance testing tooling across several applications",
          "Built an MCP server giving the team live access to Jennifer APM across 51 production servers, reducing incident investigation time from hours to minutes",
          "Driving containerization and Cloud (Kubernetes) migrations for 100+ legacy Spring Boot services; built Claude Code AI skills and a custom code search plugin bridging Bitbucket, Confluence, and Jira to automate dependency investigation, scaled to 30+ users across multiple teams",
          "Developed internal React.js tooling that integrates Bitbucket, Confluence, and Jira to automate frontend bug investigation and documentation workflows",
        ],
        jp: [
          "複数のレガシー本番サービスのSpring Boot 3.x系へのアップグレードを主導し、破壊的変更の解消・非推奨APIの移行・テストカバレッジ10%から85%超への改善・パフォーマンステストを実施",
          "Apache Airflow + KubernetesPodOperatorを用いてVMから1,600件超のcronジョブをKubernetesへ移行するプロジェクトを牽引し、マルチクラスターPOCのカスタムロギング・エラー伝播・CI/CD DAG生成パイプラインを構築",
          "Jennifer APMとSQL分析によりパフォーマンスのボトルネックを能動的に特定・解消し、OpenTelemetryとパフォーマンステストツールを複数アプリに導入",
          "51台の本番サーバーへのライブアクセスを提供するMCPサーバーを構築し、インシデント調査時間を大幅短縮、複数チームの30名超に普及",
          "100件超のレガシーSpring Bootサービスのコンテナ化・Cloud（Kubernetes）移行を推進し、Bitbucket・Confluence・Jiraを横断するコード検索プラグインとClaude Code AIスキルを構築して依存関係調査を自動化",
          "Bitbucket・Confluence・Jiraを統合した社内React.jsツールを開発し、フロントエンドのバグ調査・ドキュメント化ワークフローを自動化",
        ],
      },
    },
    {
      company: { en: "Sigma-i Co., Ltd", jp: "Sigma-i株式会社" },
      link: "https://www.sigmailab.com/",
      badges: {
        en: ["Remote", "Python", "Ruby", "Flask", "React.js", "MySQL", "Redis"],
        jp: ["リモート", "Python", "Ruby", "Flask/FastAPI", "React.js", "MySQL", "Redis"],
      },
      title: { en: "Backend Developer", jp: "バックエンド開発" },
      start: "2023/5",
      end: { en: "2025/3", jp: "2025/3" },
      description: {
        en: [
          "Built and maintained the backend of one of the company's main products — a web application for data entry, retrieval, and report generation",
          "Worked as part of a startup team from early stage",
        ],
        jp: [
          "主力プロダクト（データ入力・取得・レポート生成Webアプリ）のバックエンドを構築・保守",
          "スタートアップの初期段階からチームの一員として参画",
        ],
      },
    },
    {
      company: { en: "Yumemi Inc.", jp: "ゆめみ株式会社" },
      link: "https://www.yumemi.co.jp/",
      badges: {
        en: ["Remote", "Golang", "DDD", "Echo", "PostgreSQL"],
        jp: ["リモート", "Golang", "DDD", "Echo", "PostgreSQL"],
      },
      title: { en: "Backend Developer Intern", jp: "バックエンド開発インターン" },
      start: "2024/2",
      end: { en: "2024/3", jp: "2024/3" },
      description: {
        en: [
          "Developed an API for a personal ordering system applying Domain-Driven Design (DDD) principles",
        ],
        jp: ["ドメイン駆動設計（DDD）を適用した個人注文システムのAPIを開発"],
      },
    },
    {
      company: { en: "MobileCreate", jp: "MobileCreate株式会社" },
      link: "https://www.mcinc.jp/",
      badges: {
        en: ["Remote", "TypeScript", "React.js", "Next.js", "PostgreSQL"],
        jp: ["リモート", "TypeScript", "React.js", "Next.js", "PostgreSQL"],
      },
      title: { en: "Full Stack Developer Intern", jp: "フルスタック開発インターン" },
      start: "2023/11",
      end: { en: "2024/3", jp: "2024/3" },
      description: {
        en: [
          "Developed a web application with route search functionality using real-time bus location data (GTFS-RT) and notification features via LINE",
          "Primarily responsible for backend and infrastructure throughout the 4-month internship",
        ],
        jp: [
          "バスのリアルタイム位置データ（GTFS-RT）を利用するルート検索・LINEを介する通知機能を持つWebアプリを開発",
          "4ヶ月間のインターンを通じて主にバックエンドとインフラを担当",
        ],
      },
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
  languages: [
    { name: { en: "English", jp: "英語" }, level: { en: "Fluent", jp: "流暢" } },
    { name: { en: "French", jp: "フランス語" }, level: { en: "Fluent", jp: "流暢" } },
    { name: { en: "Arabic", jp: "アラビア語" }, level: { en: "Native", jp: "ネイティブ" } },
    { name: { en: "Japanese", jp: "日本語" }, level: { en: "Fluent", jp: "流暢" } },
  ],
  projects: [
    {
      title: "Marsa",
      techStack: ["Golang", "SvelteKit", "SQLite", "Docker", "Caddy", "WAF", "Rate Limiting"],
      description: {
        en: "Minimal self-hosted PaaS replacing Coolify; deploys Docker Compose apps to a VPS with automatic TLS, GitHub push-to-deploy, SSO via Zitadel (OIDC), JWT-protected APIs, and a goroutine-based async deploy worker pool",
        jp: "Coolifyの代替となるミニマルなセルフホストPaaS。自動TLS・GitHubプッシュデプロイ・Zitadel（OIDC）によるSSO・JWT保護されたAPI・goroutineベースの非同期デプロイワーカープールを備える",
      },
      link: { label: "marsa.jamell.dev", href: "https://marsa.jamell.dev" },
    },
    {
      title: "Whats this kanji?",
      techStack: ["Kotlin", "Android"],
      description: {
        en: "Japanese text processing and kanji lookup with offline KANJIDIC2 dictionary",
        jp: "オフラインKANJIDIC2辞書を使った日本語テキスト処理・漢字ルックアップAndroidアプリ",
      },
      link: {
        label: "github.com/Sardonyx001/whats-this-kanji",
        href: "https://github.com/Sardonyx001/whats-this-kanji",
      },
    },
  ],
};

/** Returns a fully resolved, locale-specific ResumeData object. */
export function getResumeData(locale: Locale): ResumeData {
  const l = <T>(field: L<T>): T => field[locale];

  return {
    name: l(DATA.name),
    initials: DATA.initials,
    location: l(DATA.location),
    locationLink: DATA.locationLink,
    about: l(DATA.about),
    summary: l(DATA.summary),
    avatarUrl: DATA.avatarUrl,
    personalWebsiteUrl: DATA.personalWebsiteUrl,
    contact: DATA.contact,
    education: DATA.education.map((e) => ({
      school: l(e.school),
      link: e.link,
      degree: l(e.degree),
      start: e.start,
      end: e.end,
    })),
    work: DATA.work.map((w) => ({
      company: l(w.company),
      link: w.link,
      badges: l(w.badges),
      title: l(w.title),
      start: w.start,
      end: l(w.end),
      description: l(w.description),
    })),
    skills: DATA.skills,
    languages: DATA.languages.map((lang) => ({
      name: l(lang.name),
      level: l(lang.level),
    })),
    projects: DATA.projects.map((p) => ({
      title: p.title,
      techStack: p.techStack,
      description: l(p.description),
      link: p.link,
    })),
  };
}
