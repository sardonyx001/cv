import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data-jp";
import { ResumeLayout } from "@/components/resume-layout";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name.split("\n")[0]} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  openGraph: {
    title: `${RESUME_DATA.name.split("\n")[0]} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name.split("\n")[0]} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  },
};

export default function Page() {
  return (
    <ResumeLayout
      data={RESUME_DATA}
      labels={{
        about: "About",
        workExperience: "経験",
        education: "学歴",
        skills: "スキル",
        projects: "プロジェクト",
      }}
    />
  );
}
