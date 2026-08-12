import type { Metadata } from "next";
import { getResumeData } from "@/data/resume-data";
import { ResumeLayout } from "@/components/resume-layout";

const data = getResumeData("en");

export const metadata: Metadata = {
  title: `${data.name} | ${data.about}`,
  description: data.summary,
  openGraph: {
    title: `${data.name} | ${data.about}`,
    description: data.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${data.name} | ${data.about}`,
    description: data.summary,
  },
};

export default function Page() {
  return (
    <ResumeLayout
      data={data}
      labels={{
        about: "About",
        workExperience: "Work Experience",
        education: "Education",
        skills: "Skills",
        languages: "Languages",
        projects: "Projects",
      }}
    />
  );
}
