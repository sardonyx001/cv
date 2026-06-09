import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { ResumeLayout } from "@/components/resume-layout";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
    description: RESUME_DATA.summary,
  },
};

export default function Page() {
  return (
    <ResumeLayout
      data={RESUME_DATA}
      labels={{
        about: "About",
        workExperience: "Work Experience",
        education: "Education",
        skills: "Skills",
        projects: "Projects",
      }}
    />
  );
}
