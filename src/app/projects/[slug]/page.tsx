import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Code2, Globe2 } from "lucide-react";
import { projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };
const Github = Code2;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: `${project.title} — Project`, description: project.description }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="detail-page">
      <div className="detail-wrap">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={16} /> Back to all projects
        </Link>
        <header className="detail-header">
          <span className="section-kicker">Personal project</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="detail-actions">
            {project.liveUrl ? (
              <a className="button button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                Live project <Globe2 size={16} />
              </a>
            ) : (
              <span className="detail-unavailable"><Globe2 size={16} /> Live project · Coming soon</span>
            )}
            {project.githubUrl ? (
              <a className="button button-outline" href={project.githubUrl} target="_blank" rel="noreferrer">
                <Github size={16} /> Repository <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="detail-unavailable"><Github size={16} /> Repository · Not provided</span>
            )}
          </div>
        </header>
        <div className="detail-preview project-detail-preview">
          <Image
            src={project.screenshot}
            alt={`${project.title} project screenshot`}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes="(max-width: 760px) 100vw, 850px"
          />
        </div>
        <div className="detail-content">
          <section>
            <span className="section-kicker">01 / Overview</span>
            <h2>About this project</h2>
            <p>{project.overview}</p>
          </section>
          <section>
            <span className="section-kicker">02 / Built with</span>
            <h2>Technology stack</h2>
            {project.technologies.length ? (
              <div className="detail-tags">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
            ) : (
              <p>Technology stack details are not confirmed yet.</p>
            )}
          </section>
          <section>
            <span className="section-kicker">03 / Highlights</span>
            <h2>Key features</h2>
            {project.features.length ? (
              <ul className="feature-list">
                {project.features.map((feature) => <li key={feature}><Check size={16} /> {feature}</li>)}
              </ul>
            ) : (
              <p>Feature details are not confirmed yet.</p>
            )}
          </section>
          <section>
            <span className="section-kicker">04 / Contribution</span>
            <h2>My role</h2>
            <p>{project.role}</p>
          </section>
          <section className="detail-two-col">
            <div>
              <span className="section-kicker">05 / The process</span>
              <h2>Challenge</h2>
              <p>{project.challenges}</p>
            </div>
            <div>
              <span className="section-kicker">06 / Approach</span>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </div>
          </section>
          <section>
            <span className="section-kicker">07 / Next steps</span>
            <h2>Future plans</h2>
            <p>{project.future}</p>
          </section>
        </div>
        <Link href="/#projects" className="back-link bottom-back">
          <ArrowLeft size={16} /> Back to all projects
        </Link>
      </div>
    </main>
  );
}