import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { AnimatedTooth } from "@/components/animations";
export default function NotFound() {
  return <section className="shell not-found"><AnimatedTooth /><p className="eyebrow">404 / A small detour</p><h1>Let’s get you<br /><em>back on track.</em></h1><p>We couldn’t find that page. Your next step is still close by.</p><Link href="/" className="button">Back to home<ArrowUpRight size={18} aria-hidden="true" /></Link></section>;
}
