"use client";

import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  Heart,
  Layers3,
  Mail,
  Menu,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { projects } from "@/data/projects";

const linkedinUrl = "https://linkedin.com/in/saeda-yeasmin-53b704367";

function ProjectPreview({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  const previewRef = useRef<HTMLDivElement>(null);
  const [isExploring, setIsExploring] = useState(false);

  function setPreviewDistance(image: HTMLImageElement) {
    const preview = previewRef.current;
    if (!preview) return;
    const distance = Math.max(
      0,
      image.getBoundingClientRect().height - preview.clientHeight,
    );
    preview.style.setProperty("--preview-distance", `${distance}px`);
    preview.style.setProperty(
      "--preview-duration",
      `${Math.max(4, distance / 110)}s`,
    );
  }

  return (
    <div
      ref={previewRef}
      className={`project-preview${isExploring ? " is-exploring" : ""}`}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsExploring(false);
      }}
    >
      <Image
        className="project-preview-image"
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
        onLoad={(event) => setPreviewDistance(event.currentTarget)}
      />
      <button
        className="preview-hint"
        type="button"
        aria-pressed={isExploring}
        onClick={() => setIsExploring((exploring) => !exploring)}
      >
        {isExploring ? "Reset preview" : "Hover or tap to explore"}
      </button>
    </div>
  );
}

const navigation = [
  "Home",
  "About",
  "Skills",
  "Education",
  "Experience",
  "Projects",
  "Contact",
];
const skillGroups = [
  {
    title: "Frontend frameworks",
    label: "Used in this project",
    icon: Code2,
    skills: ["React", "Next.js"],
  },
  {
    title: "Programming languages",
    label: "Used in this project",
    icon: Layers3,
    skills: ["TypeScript", "JavaScript"],
  },
  {
    title: "Styling & responsive design",
    label: "Used in this project",
    icon: Sparkles,
    skills: ["CSS", "Tailwind CSS", "Responsive layouts"],
  },
  {
    title: "Development tools",
    label: "Confirmed by project workflow",
    icon: BriefcaseBusiness,
    skills: ["Visual Studio Code", "Git", "GitHub", "npm"],
  },
];

const confettiPieces = Array.from({ length: 56 }, (_, index) => ({
  left: `${(index * 37) % 101}%`,
  top: `${-14 + ((index * 13) % 38)}vh`,
  drift: `${Math.sin(index * 2.4) * 125}px`,
  burst: `${Math.cos(index * 1.7) * 42}px`,
  fall: `${78 + ((index * 17) % 38)}vh`,
  rotate: `${(index % 2 ? 1 : -1) * (420 + (index % 7) * 110)}deg`,
  delay: `${(index % 8) * 0.025}s`,
  color: ["#d9b4e8", "#e9c878", "#91bda0", "#f2a88f", "#b5c8ec"][index % 5],
}));

type ContactToast = { kind: "success" | "error"; message: string };

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");
  const [formState, setFormState] = useState("");
  const [contactToast, setContactToast] = useState<ContactToast | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const mailtoInitiatedRef = useRef(false);
  const yearRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (yearRef.current) yearRef.current.textContent = String(new Date().getFullYear());
    const sections = navigation
      .map((item) => document.getElementById(item.toLowerCase()))
      .filter((item): item is HTMLElement => Boolean(item));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible)
          setActiveSection(
            visible.target.id[0].toUpperCase() + visible.target.id.slice(1),
          );
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (mailtoInitiatedRef.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const subject = String(data.get("subject") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const missingField = !name
      ? "name"
      : !email
        ? "email"
        : !subject
          ? "subject"
          : !message
            ? "message"
            : null;
    if (missingField) {
      setFormState(`Please enter your ${missingField}.`);
      setContactToast({ kind: "error", message: `Please enter your ${missingField}.` });
      form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${missingField}"]`)?.focus();
      return;
    }
    const emailInput = form.querySelector<HTMLInputElement>('input[name="email"]');
    if (!emailInput || !emailInput.validity.valid) {
      setFormState("Please enter a valid email address.");
      setContactToast({ kind: "error", message: "Please enter a valid email address." });
      emailInput?.focus();
      return;
    }

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoUrl = `mailto:saedayeasmin2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      mailtoInitiatedRef.current = true;
      window.location.href = mailtoUrl;
      const notice = "Your email app is opening. Please send the message to complete submission.";
      setFormState(notice);
      setContactToast({ kind: "success", message: notice });
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShowConfetti(true);
      }
    } catch {
      mailtoInitiatedRef.current = false;
      const notice = "Could not open your email app. Please email saedayeasmin2003@gmail.com directly.";
      setFormState(notice);
      setContactToast({ kind: "error", message: notice });
    }
  }

  useEffect(() => {
    if (!contactToast) return;
    const timeout = window.setTimeout(() => setContactToast(null), 2000);
    return () => window.clearTimeout(timeout);
  }, [contactToast]);

  useEffect(() => {
    if (!showConfetti) return;
    const timeout = window.setTimeout(() => setShowConfetti(false), 2600);
    return () => window.clearTimeout(timeout);
  }, [showConfetti]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a
            className="wordmark"
            href="#home"
            onClick={closeMenu}
            aria-label="Saeda Yeasmin, home"
          >
            saeda<span>.</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div
            className={`nav-content ${menuOpen ? "is-open" : ""}`}
            id="main-menu"
          >
            <div className="nav-links">
              {navigation.map((item) => (
                <a
                  key={item}
                  className={
                    activeSection === item ? "nav-link active" : "nav-link"
                  }
                  href={`#${item.toLowerCase()}`}
                  onClick={closeMenu}
                >
                  {item}
                </a>
              ))}
            </div>
            <Link className="button button-small button-outline nav-resume" href="/resume">
              Resume
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section
          className="hero section-wrap"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="hero-name">Saeda Yeasmin</p>
            <div className="eyebrow">
              <span className="eyebrow-dot" /> Aspiring Frontend Developer
            </div>
            <h1 id="hero-title">
              Building beautiful
              <br />
              experiences <em>for the web.</em>
            </h1>
            <p className="hero-intro">
              Hello, I’m Saeda Yeasmin, an aspiring frontend developer studying
              Mathematics at National University, Bangladesh. I’m learning by
              building web projects and strengthening my practical skills.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/resume">
                Resume <ArrowUpRight size={16} />
              </Link>
              <a className="button button-text" href="#projects">
                View my projects <ArrowDownRight size={17} />
              </a>
            </div>
            <div className="hero-socials">
              <span>Find me on</span>
              <a
                href="https://github.com/saedamim"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Code2 size={17} /> GitHub <ArrowUpRight size={13} />
              </a>
              <span className="social-divider" />
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <span className="linkedin-mark" aria-hidden="true">in</span> LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Profile photo">
            <div className="photo-frame">
              <Image
                className="profile-image"
                src="/image.jpeg"
                alt="Saeda Yeasmin"
                width={1349}
                height={1166}
                sizes="(max-width: 760px) 75vw, 350px"
                priority
              />
              <div className="photo-caption">
                <span className="caption-dot" /> Saeda Yeasmin
              </div>
            </div>
            <div className="hero-sticker sticker-top">
              <Sparkles size={16} />
              <span>Curious by nature</span>
            </div>
            <div className="hero-sticker sticker-bottom">
              little steps, <strong>real progress</strong>{" "}
              <ArrowDown size={14} />
            </div>
            <span className="hero-orbit orbit-one" />
            <span className="hero-orbit orbit-two" />
          </div>
          <a className="scroll-hint" href="#about">
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </a>
        </section>

        <section
          className="section section-about"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-wrap about-grid">
            <div className="section-heading">
              <span className="section-kicker">01 / A little about me</span>
              <h2 id="about-title">
                Learning to make
                <br />
                <em>the web feel human.</em>
              </h2>
            </div>
            <div className="about-copy">
              <p className="lead">
                I’m an aspiring frontend developer learning how the web works
                and building projects to strengthen my practical skills.
              </p>
              <p>
                Frontend development brings together the things I enjoy: visual
                thinking, careful problem-solving, and the satisfaction of
                making an idea interactive. I’m especially interested in
                responsive, accessible interfaces that feel considered on every
                screen.
              </p>
              <p>
                I enjoy making interfaces responsive and easy to use. When I
                meet a challenge, I break it into smaller questions, test ideas,
                and learn from the result.
              </p>
              <a className="inline-link" href="#contact">
                Let’s connect <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section
          className="section section-skills"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-wrap">
            <div className="section-heading centered">
              <span className="section-kicker">02 / Technical skills</span>
              <h2 id="skills-title">
                Tools I’ve <em>used.</em>
              </h2>
              <p>
                Tools and technologies shown here are confirmed by this project and its workflow.
              </p>
            </div>
            <div className="skills-grid">
              {skillGroups.map(({ title, label, icon: Icon, skills }) => (
                <article className="skill-card" key={title}>
                  <div className="skill-card-head">
                    <span className="skill-icon">
                      <Icon size={19} />
                    </span>
                    <span className="skill-label">{label}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-tags">
                    {skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section section-education"
          id="education"
          aria-labelledby="education-title"
        >
          <div className="section-wrap education-grid">
            <div className="section-heading">
              <span className="section-kicker">03 / Education</span>
              <h2 id="education-title">
                The roots of
                <br />
                <em>what’s next.</em>
              </h2>
            </div>
            <div className="timeline">
              <article className="timeline-card">
                <span className="timeline-marker">
                  <GraduationCap size={18} />
                </span>
                <div className="timeline-content">
                  <span className="timeline-date">In progress</span>
                  <h3>Bachelor’s Degree in Mathematics</h3>
                  <p className="timeline-place">National University, Bangladesh</p>
                  <p>Currently studying Mathematics.</p>
                </div>
              </article>
              <article className="timeline-card">
                <span className="timeline-marker muted">
                  <GraduationCap size={18} />
                </span>
                <div className="timeline-content">
                  <span className="timeline-date">Completed 2022</span>
                  <h3>Higher Secondary Certificate (HSC)</h3>
                  <p className="timeline-place">Completed in 2022</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section
          className="section section-experience"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="section-wrap experience-grid">
            <div className="section-heading">
              <span className="section-kicker">04 / Experience</span>
              <h2 id="experience-title">
                Making progress,
                <br />
                <em>one project at a time.</em>
              </h2>
            </div>
            <article className="experience-card">
              <span className="experience-icon">
                <BriefcaseBusiness size={19} />
              </span>
              <div>
                <span className="timeline-date">Personal projects</span>
                <h3>Project-based frontend practice</h3>
                <p className="experience-description">
                  I’m learning frontend development by building and refining
                  personal web projects. This section reflects project practice,
                  not professional employment.
                </p>
                <div className="experience-tags">
                  <span>Personal projects</span>
                  <span>Ongoing learning</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section
          className="section section-projects"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-wrap">
            <div className="projects-intro">
              <div className="section-heading">
                <span className="section-kicker">05 / Selected work</span>
                <h2 id="projects-title">
                  A few things I’m
                  <br />
                  <em>building and learning.</em>
                </h2>
              </div>
              <p>Three live projects, presented with their supplied screenshots.</p>
            </div>
            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.slug}>
                  <ProjectPreview
                    src={project.screenshot}
                    alt={`${project.title} project screenshot`}
                    width={project.imageWidth}
                    height={project.imageHeight}
                  />
                  <div className="project-info">
                    <div className="project-meta">
                      <span>Personal project</span>
                      <span className="project-status">
                        <i /> Live
                      </span>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-tech" aria-label="Technology stack">
                      {project.technologies.length > 0 ? (
                        project.technologies.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))
                      ) : (
                        <span>Technology stack not confirmed</span>
                      )}
                    </div>
                    <div className="project-links">
                      <Link
                        className="inline-link"
                        href={`/projects/${project.slug}`}
                      >
                        View details <ArrowRight size={15} />
                      </Link>
                      {project.liveUrl ? (
                        <a
                          className="inline-link"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo <ArrowUpRight size={14} />
                        </a>
                      ) : (
                        <span className="coming-soon">Live demo · coming soon</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="projects-footnote">
              Technology stacks and repository links are omitted until confirmed from each project’s source code.
            </p>
          </div>
        </section>

        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-wrap contact-grid">
            <div className="contact-copy">
              <span className="section-kicker light-kicker">
                06 / Say hello
              </span>
              <h2 id="contact-title">
                Have a kind
                <br />
                word or an idea?
              </h2>
              <p>
                I’d love to hear from you. Send a note using the form and it
                will open a prefilled message in your default email app. You
                will need to send it there to complete submission.
              </p>
              <div className="contact-details">
                <a href="mailto:saedayeasmin2003@gmail.com">
                  <Mail size={17} />
                  <span>Email</span>
                  <strong>saedayeasmin2003@gmail.com</strong>
                </a>
                <a
                  href="https://github.com/saedamim"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Code2 size={17} />
                  <span>GitHub</span>
                  <strong>
                    github.com/saedamim <ArrowUpRight size={13} />
                  </strong>
                </a>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="linkedin-mark" aria-hidden="true">in</span>
                  <span>LinkedIn</span>
                  <strong>
                    linkedin.com/in/saeda-yeasmin-53b704367 <ArrowUpRight size={13} />
                  </strong>
                </a>
              </div>
              <div className="contact-social-note">
                Phone and WhatsApp details can be added when available.
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={submitContact}
              noValidate
            >
              <div className="form-title">
                <h3>Write me a note</h3>
                <span>All fields required</span>
              </div>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  Email address
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
              </div>
              <label>
                Subject
                <input
                  name="subject"
                  type="text"
                  placeholder="What would you like to talk about?"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={4}
                  required
                />
              </label>
              <button
                className="button button-primary form-submit"
                type="submit"
              >
                Submit
                <Send size={15} aria-hidden="true" />
              </button>
              <p className="form-feedback" aria-live="polite" aria-atomic="true">
                {formState || "Your email app will open with a prefilled message; send it there to complete submission."}
              </p>
            </form>
          </div>
        </section>
      </main>

      {contactToast && (
        <div
          className={`contact-toast ${contactToast.kind}`}
          role={contactToast.kind === "error" ? "alert" : "status"}
          aria-live={contactToast.kind === "error" ? "assertive" : "polite"}
        >
          {contactToast.message}
        </div>
      )}
      {showConfetti && (
        <div className="confetti-burst" aria-hidden="true">
          {confettiPieces.map((piece, index) => (
            <span
              className="confetti-piece"
              key={index}
              style={{
                "--confetti-left": piece.left,
                "--confetti-top": piece.top,
                "--confetti-drift": piece.drift,
                "--confetti-burst": piece.burst,
                "--confetti-fall": piece.fall,
                "--confetti-rotate": piece.rotate,
                "--confetti-delay": piece.delay,
                "--confetti-color": piece.color,
              } as CSSProperties}
            />
          ))}
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-wrap">
          <a className="wordmark footer-mark" href="#home">
            saeda<span>.</span>
          </a>
          <p>
            Saeda Yeasmin <span>·</span> Aspiring Frontend Developer
          </p>
          <div className="footer-social">
            <a
              href="https://github.com/saedamim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Code2 size={17} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <span className="linkedin-mark" aria-hidden="true">in</span>
            </a>
          </div>
          <a href="#home" className="back-top">
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © <span ref={yearRef} /> Saeda Yeasmin. Made with care.
          </span>
          <span>
            Designed for thoughtful beginnings <Heart size={12} />
          </span>
        </div>
      </footer>
    </>
  );
}
