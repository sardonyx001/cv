import type { ComponentType } from "react";

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email?: string;
    social: ReadonlyArray<{
      name: string;
      url: string;
      icon: ComponentType<{ className?: string }>;
    }>;
  };
  education: ReadonlyArray<{
    school: string;
    link?: string;
    degree: string;
    start: string;
    end: string;
  }>;
  work: ReadonlyArray<{
    company: string;
    link: string;
    badges: ReadonlyArray<string>;
    title: string;
    start: string;
    end: string;
    description: string | ReadonlyArray<string>;
  }>;
  skills: ReadonlyArray<string>;
  projects: ReadonlyArray<{
    title: string;
    techStack: ReadonlyArray<string>;
    description: string;
    link?: { label: string; href: string };
  }>;
}

export interface ResumeLabels {
  about: string;
  workExperience: string;
  education: string;
  skills: string;
  projects: string;
}
