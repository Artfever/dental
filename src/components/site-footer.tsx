import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { clinic, navigation } from "@/config/clinic";

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell"><div className="footer-main"><div><Link href="/" className="wordmark footer-wordmark"><span>Nayyar<span className="wordmark-period">.</span></span><small>DENTAL ASSOCIATES</small></Link><p>Dental care. A thoughtful beginning.<br />{clinic.area}, {clinic.city}.</p></div><nav aria-label="Footer navigation">{navigation.slice(1).map(item => <Link href={item.href} key={item.href}>{item.label}</Link>)}<Link href="/privacy">Privacy & demo notice</Link></nav><div className="footer-contact"><span className="eyebrow">Keep in touch</span><a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a><div className="social-links">{Object.entries(clinic.social).map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight size={13} aria-hidden="true" /></a>)}</div><small>Contact details await clinic verification.</small></div></div><div className="footer-bottom"><span>{clinic.demoNotice}</span><span>Proposed identity · Generic illustrative imagery</span></div></div></footer>;
}
