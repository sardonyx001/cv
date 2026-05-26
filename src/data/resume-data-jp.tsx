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
      badges: ["On-site", "Java", "Spring Boot", "Golang", "Python", "Ruby", "TypeScript", "React.js", "Kubernetes", "Jenkins", "Oracle", "MongoDB", "Elasticsearch"],
      title: "Application Engineer",
      start: "2025/4",
      end: "現在",
      description:
        "複数のレガシー本番サービスのSpring Boot 3.x系へのアップグレードを主導し、破壊的変更の解消・非推奨APIの移行・テストカバレッジ85%超への改善・パフォーマンステストを実施。Apache Airflow + KubernetesPodOperatorを用いたVMから1,600件超のcronジョブをKubernetesへ移行するプロジェクトを牽引。Jennifer APMとSQL分析によりパフォーマンスのボトルネックを特定・解消し、51台の本番サーバーにライブアクセスできるMCPサーバーを構築してインシデント調査時間を大幅短縮し、複数チームの30名超に普及。",
    },
    {
      company: "Sigma-i株式会社",
      link: "https://www.sigmailab.com/",
      badges: ["リモート", "Python", "Ruby", "Flask/FastAPI", "React.js", "MySQL", "Redis"],
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
      badges: ["リモート", "Typescript", "React.js", "Next.js", "PostgreSQL"],
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
