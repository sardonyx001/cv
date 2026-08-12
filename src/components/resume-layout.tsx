import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import Image from "next/image";
import type { ResumeData, ResumeLabels } from "@/lib/types";

interface Props {
  data: ResumeData;
  labels: ResumeLabels;
}

export function ResumeLayout({ data, labels }: Props) {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:bg-white print:space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 space-y-1.5">
            <h1 className="whitespace-pre-wrap text-2xl font-bold">
              {data.name}
            </h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {data.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={data.locationLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeIcon className="size-3" />
                {data.location}
              </a>
            </p>
            {/* Icon buttons — screen only */}
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {data.contact.email ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`mailto:${data.contact.email}`} aria-label="Send email">
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.phone ? (
                <Button className="size-8" variant="outline" size="icon" asChild>
                  <a href={`tel:${data.contact.phone.replace(/[^+\d]/g, "")}`} aria-label="Call phone">
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {data.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            {/* Print-only contact line */}
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {data.contact.email ? (
                <a href={`mailto:${data.contact.email}`}>
                  <span className="underline">{data.contact.email}</span>
                </a>
              ) : null}
              {data.contact.phone ? <span>{data.contact.phone}</span> : null}
            </div>
          </div>
          <Image
            src={data.avatarUrl}
            width={112}
            height={112}
            alt={data.name}
            priority
            className="size-28 rounded-full object-cover"
          />
        </div>

        {/* About */}
        <Section>
          <h2 className="text-xl font-bold">{labels.about}</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {data.summary}
          </p>
        </Section>

        {/* Work Experience */}
        <Section>
          <h2 className="text-xl font-bold">{labels.workExperience}</h2>
          {data.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-start justify-between gap-x-2 text-base">
                  <div className="flex flex-col gap-y-1">
                    <h3 className="font-semibold leading-none">
                      <a
                        className="hover:underline"
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.company}
                      </a>
                    </h3>
                    <span className="flex flex-wrap gap-1">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </div>
                  <div className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {work.start} - {work.end}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                <ul className="ml-4 list-outside list-disc space-y-1">
                  {work.description.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </Section>

        {/* Education */}
        <Section>
          <h2 className="text-xl font-bold">{labels.education}</h2>
          {data.education.map((edu) => (
            <Card key={edu.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {edu.link ? (
                      <a
                        className="hover:underline"
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {edu.school}
                      </a>
                    ) : (
                      edu.school
                    )}
                  </h3>
                  <div className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {edu.start} - {edu.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2 whitespace-pre-wrap text-sm">
                {edu.degree}
              </CardContent>
            </Card>
          ))}
        </Section>

        {/* Skills */}
        <Section>
          <h2 className="text-xl font-bold">{labels.skills}</h2>
          <div className="flex flex-wrap gap-1">
            {data.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>

        {/* Languages */}
        <Section>
          <h2 className="text-xl font-bold">{labels.languages}</h2>
          <div className="flex flex-wrap gap-1">
            {data.languages.map((lang) => (
              <Badge key={lang.name} variant="secondary">
                {lang.name} — {lang.level}
              </Badge>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">{labels.projects}</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {data.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={project.link?.href}
              />
            ))}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          { url: data.personalWebsiteUrl, title: "Personal Website" },
          ...data.contact.social.map((s) => ({ url: s.url, title: s.name })),
          ...data.projects
            .filter((p) => p.link)
            .map((p) => ({ url: p.link!.href, title: p.title })),
        ]}
      />
    </main>
  );
}
