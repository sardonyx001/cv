import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Selfie } from "@/images";

export const RESUME_DATA = {
  name: "LASSOUED Jamel Eddine \nラスエド・ジャメル・エディン",
  initials: "LJ",
  location: "東京都",
  locationLink: "https://www.google.com/maps/place/Tokyo,+Japan",
  about: "都内在住のフルスタックエンジニア。",
  summary:
    "バックエンドサービスおよびWebアプリケーションの構築・保守に2年以上の経験を持つフルスタックエンジニア。現在は楽天トラベルのプロダクション信頼性向上に取り組んでいます。",
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
      school: "大分大学",
      link: "https://www.oita-u.ac.jp/",
      degree: "理工学科知能情報システムコース\n",
      start: "2023",
      end: "2025",
    },
    {
      school: "佐世保工業高等専門学校",
      link: "https://www.sasebo.ac.jp/",
      degree: "電子制御工学科",
      start: "2020",
      end: "2023",
    },
  ],
  work: [
    {
      company: "楽天グループ株式会社",
      link: "https://corp.rakuten.co.jp/",
      badges: ["On-site", "Java", "Spring Boot", "Golang", "Python", "TypeScript", "Kubernetes", "Jenkins"],
      title: "Application Engineer",
      start: "2025/4",
      end: "現在",
      description:
        "1,600件以上のcronジョブをVMからKubernetes+Apache Airflowへ移行するプロジェクトを主導し、複数のサービスチームと連携。Spring BootサービスのCloud（Kubernetes）移行も推進しており、調査・ドキュメント化を支援する開発ツールを作成。",
    },
    {
      company: "Sigma-i株式会社",
      link: "https://www.sigmailab.com/",
      badges: ["リモート", "Python", "Flask/FastAPI", "MySQL", "Redis"],
      title: "バックエンド開発",
      start: "2023/5",
      end: "2025/3",
      description:
        "主にFlask Webアプリのバックエンド開発＋ Jsのフロントエンド開発。Github ActionsによるCI/CDの構築。生成AIデモの開発とデプロイ。",
    },
    {
      company: "ゆめみ株式会社",
      link: "https://www.yumemi.co.jp/",
      badges: ["リモート", "Golang", "DDD", "Echo", "PostgreSQL"],
      title: "バックエンド開発",
      start: "2024/2",
      end: "2024/3",
      description:
        "2週間のインターンに通じてGolangのEchoフレームワークを利用した個人注文システムのAPIを開発。",
    },
    {
      company: "MobileCreate株式会社",
      link: "https://www.mcinc.jp/",
      badges: ["リモート", "Typescript", "Next.js", "PostgreSQL"],
      title: "フルスタック開発",
      start: "2023/11",
      end: "2024/3",
      description:
        "4ヶ月間のインターンを通じてバスのリアルタイム位置データ（GTFS-RT）を利用するルート検索・LINEを介する通知機能を持つWebアプリの開発。主にバックエンドとインフラを担当。",
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
      description: "小さいURL短縮サービス",
      link: {
        label: "ul.jamell.dev",
        href: "https://ul.jamell.dev",
      },
    },
    {
      title: "Whats this kanji?",
      techStack: ["Kotlin", "Android"],
      description: "Xや他の所から漢字を解説してくれるAndroidアプリ",
      link: {
        label: "github.com/Sardonyx001/whats-this-kanji",
        href: "https://github.com/Sardonyx001/whats-this-kanji",
      },
    },
  ],
} as const;
