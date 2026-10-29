# Saeda Yeasmin — Portfolio

A responsive personal portfolio built with Next.js App Router, React, TypeScript, CSS, and Lucide React. The profile photo and full-page project screenshots are existing assets in `public/`. Verified personal facts are shown directly; project stacks and contribution details that have not been supplied remain clearly marked.

## Local development

Requires Node.js 20.9 or newer.




Open http://localhost:3000. Use `npm run lint` and `npm run build` to check the project.

## Personalize before sharing

- **Profile photo:** `public/image.jpeg` is displayed in the hero. Replace that file if you want to update the photo.
- **Project screenshots:** `public/bazardor.png`, `public/fitlog.png`, and `public/devstack.png` are mapped to BazarDor, FitLog, and Dev Conf in `src/data/projects.ts`. Hover, keyboard focus, or tap the preview hint to explore the full page screenshot.
- **Resume:** The portfolio's Resume buttons open `/resume`, which renders a responsive HTML resume using verified project and education information. No PDF is present. If you have a final PDF, place it at `public/Saeda-Yeasmin-Resume.pdf`; the HTML resume page can then be updated with a PDF preview and download link. No placeholder PDF is included.
- **Projects:** Project technology badges are based on the public source repositories: BazarDor uses Next.js, React, TypeScript, Tailwind CSS, Better Auth, and MongoDB; FitLog uses Next.js, React, JavaScript, and Tailwind CSS; Dev Conf uses HTML5 and CSS3. The Dev Conf live link currently displays DevStack branding, so confirm whether that is the intended deployment. Edit `src/data/projects.ts` to update stacks or other project details.
- **Education:** The portfolio lists a Mathematics bachelor's degree in progress at National University, Bangladesh, and HSC completed in 2022. No unprovided dates, college names, or grades are included.
- **Contact and social profiles:** GitHub is linked at `https://github.com/saedamim`, LinkedIn at `https://linkedin.com/in/saeda-yeasmin-53b704367`, and the provided email is shown. The contact form validates all fields and opens a prefilled `mailto:` message to the supplied email address. Visitors must press Send in their email app; the website does not send or claim to deliver messages automatically. No service credentials or backend setup are required.
- **Tools shown:** The tools cards are limited to technologies confirmed in this repository and its workflow: React, Next.js, TypeScript, JavaScript, CSS, Tailwind CSS, Visual Studio Code, Git, GitHub, and npm. Other tools remain omitted until confirmed.
- **Site URL:** Set `NEXT_PUBLIC_SITE_URL` to the canonical deployed origin (for example `https://saedamim.vercel.app`) so metadata, sitemap, and robots use the right host. The Vercel subdomain is only the expected default, not a deployed site.

## Routes and structure

- `/` — portfolio sections and contact form
- `/resume` — formatted HTML resume
- `/projects/bazardor`, `/projects/fitlog`, `/projects/dev-conf` — generated from shared project data
- `/sitemap.xml`, `/robots.txt`, `/icon.svg` — metadata routes and favicon
- `src/data/projects.ts` — typed project content
- `src/components/portfolio.tsx` — reusable portfolio UI and client-side navigation/form behavior

## Deploy to Vercel

1. Push the project to a Git provider and import the repository in Vercel, or use the Vercel CLI.
2. Keep the framework preset as Next.js and use the standard build command `npm run build`.
3. Configure `NEXT_PUBLIC_SITE_URL` with the final HTTPS origin in project settings and redeploy.
4. Verify the home page, all three project details, `/sitemap.xml`, `/robots.txt`, the PDF after adding it, and the contact form's mailto handoff.

The expected Vercel URL format is `https://<project-name>.vercel.app` (suggested: `https://saedamim.vercel.app`). This project has not been deployed or verified online.
