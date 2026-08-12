import type { Metadata } from "next";
import { getResumeData } from "@/data/resume-data";
import { ResumeLayout } from "@/components/resume-layout";

const data = getResumeData("jp");

export const metadata: Metadata = {
  title: `${data.name.split("\n")[0].trim()} | ${data.about}`,
  description: data.summary,
  openGraph: {
    title: `${data.name.split("\n")[0].trim()} | ${data.about}`,
    description: data.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${data.name.split("\n")[0].trim()} | ${data.about}`,
    description: data.summary,
  },
};

export default function Page() {
  return (
    <ResumeLayout
      data={data}
      labels={{
        about: "About",
        workExperience: "経験",
        education: "学歴",
        skills: "スキル",
        languages: "言語",
        projects: "プロジェクト",
      }}
    />
  );
}
