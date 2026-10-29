import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return <main className="not-found"><span className="section-kicker">404 / Not found</span><h1>This page wandered<br /><em>off the path.</em></h1><p>The page you’re looking for doesn’t exist or may have moved.</p><Link className="button button-primary" href="/#home"><ArrowLeft size={16} /> Back to home</Link></main>;
}
