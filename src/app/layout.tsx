import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://saedamim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Saeda Yeasmin — Aspiring Frontend Developer",
    template: "%s | Saeda Yeasmin",
  },
  description: "Saeda Yeasmin is an aspiring frontend developer learning to build thoughtful, responsive experiences for the web.",
  openGraph: {
    type: "website",
    title: "Saeda Yeasmin — Aspiring Frontend Developer",
    description: "Thoughtful beginnings in frontend development.",
    siteName: "Saeda Yeasmin Portfolio",
    url: siteUrl,
  },
  twitter: {
    card: "summary",
    title: "Saeda Yeasmin — Aspiring Frontend Developer",
    description: "Thoughtful beginnings in frontend development.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
