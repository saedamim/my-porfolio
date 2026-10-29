import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Code2, Mail } from "lucide-react";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Saeda Yeasmin, an aspiring frontend developer and Mathematics student at National University, Bangladesh.",
};

const skillGroups = [
  { title: "Frontend development", items: ["React", "Next.js"] },
  { title: "Programming languages", items: ["TypeScript", "JavaScript"] },
  { title: "Styling & responsive design", items: ["CSS", "Responsive layouts"] },
];

export default function ResumePage() {
  return (
    <main className="resume-page">
      <div className="resume-wrap">
        <div className="resume-toolbar">
          <Link className="back-link" href="/#home">
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
          <span className="resume-format">HTML resume</span>
        </div>

        <article className="resume-document" aria-labelledby="resume-title">
          <header className="resume-header">
            <span className="section-kicker">Resume</span>
            <h1 id="resume-title">Saeda Yeasmin</h1>
            <p className="resume-role">Aspiring Frontend Developer</p>
            <p className="resume-summary">
              An aspiring frontend developer learning through hands-on projects
              and building practical web development skills. Currently studying
              Mathematics at National University, Bangladesh.
            </p>
            <div className="resume-contact" aria-label="Contact and profiles">
              <a href="mailto:saedayeasmin2003@gmail.com">
                <Mail size={15} /> saedayeasmin2003@gmail.com
              </a>
              <a href="https://github.com/saedamim" target="_blank" rel="noreferrer">
                <Code2 size={15} /> GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href="https://linkedin.com/in/saeda-yeasmin-53b704367"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </header>

          <section className="resume-section" aria-labelledby="resume-education">
            <span className="section-kicker">01 / Education</span>
            <h2 id="resume-education">Education</h2>
            <div className="resume-entry">
              <div className="resume-entry-heading">
                <h3>Mathematics student</h3>
                <span>Currently studying</span>
              </div>
              <p>National University, Bangladesh</p>
            </div>
            <div className="resume-entry">
              <div className="resume-entry-heading">
                <h3>Higher Secondary Certificate (HSC)</h3>
                <span>Completed 2022</span>
              </div>
            </div>
          </section>

          <section className="resume-section" aria-labelledby="resume-skills">
            <span className="section-kicker">02 / Technical skills</span>
            <h2 id="resume-skills">Technical skills</h2>
            <p className="resume-note">
              Technologies represented in this portfolio’s codebase.
            </p>
            <div className="resume-skills">
              {skillGroups.map((group) => (
                <div className="resume-skill-row" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="detail-tags">
                    {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="resume-section" aria-labelledby="resume-projects">
            <span className="section-kicker">03 / Selected projects</span>
            <h2 id="resume-projects">Projects</h2>
            <div className="resume-projects">
              {projects.map((project) => (
                <article className="resume-entry" key={project.slug}>
                  <div className="resume-entry-heading">
                    <h3>{project.title}</h3>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live project <ArrowUpRight size={13} />
                      </a>
                    ) : (
                      <span>Link not provided</span>
                    )}
                  </div>
                  <p>{project.description}</p>
                  {project.technologies.length > 0 && (
                    <div className="detail-tags resume-project-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          <footer className="resume-footer">
            <Link href="/#home" className="inline-link">
              <ArrowLeft size={15} /> Back to Portfolio
            </Link>
          </footer>
        </article>
        <p className="resume-pdf-note">
          A PDF version is not available yet. This page presents the resume as
          HTML; add a final PDF at <strong>public/Saeda-Yeasmin-Resume.pdf</strong>
          when ready.
        </p>
      </div>
    </main>
  );
}