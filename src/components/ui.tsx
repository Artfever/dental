import Link from "next/link";
import { ArrowUpRight, MessageCircle, MapPin, Phone } from "lucide-react";
import { clinic, whatsAppUrl } from "@/config/clinic";
import { AnimatedTooth, Reveal, SmileLine } from "./animations";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  index,
}: {
  children: ReactNode;
  index?: string;
}) {
  return (
    <p className="eyebrow">
      {index && <span className="section-index">{index} /</span>}
      {children}
    </p>
  );
}
export function WhatsAppButton({
  label = "Enquire on WhatsApp",
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""}`}
      href={whatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={17} aria-hidden="true" />
      {label}
      <ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}
export function TextLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      {children}
      <ArrowUpRight size={18} aria-hidden="true" />
    </>
  );
  return external ? (
    <a
      className="text-link"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  ) : (
    <Link className="text-link" href={href}>
      {content}
    </Link>
  );
}
export function PageIntro({
  index,
  label,
  title,
  italic,
  children,
}: {
  index: string;
  label: string;
  title: string;
  italic: string;
  children: ReactNode;
}) {
  return (
    <section className="shell page-intro">
      <Eyebrow index={index}>{label}</Eyebrow>
      <div className="intro-grid">
        <h1>
          {title}
          <br />
          <em>{italic}</em>
        </h1>
        <div className="intro-copy">{children}</div>
      </div>
    </section>
  );
}
export function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="shell cta-inner">
        <Reveal>
          <Eyebrow>A conversation is a good beginning</Eyebrow>
          <h2>
            Let’s talk about
            <br />
            <em>your dental care.</em>
          </h2>
          <SmileLine />
        </Reveal>
        <div className="cta-actions">
          <WhatsAppButton />
          <p className="fineprint">
            {clinic.bookingDisclaimer}
            <br />
            {clinic.contactNotice}
          </p>
          <a className="text-link" href={`tel:${clinic.phoneTel}`}>
            Or call {clinic.phoneDisplay}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <AnimatedTooth className="cta-tooth" />
      </div>
    </section>
  );
}
export function Location({ compact = false }: { compact?: boolean }) {
  return (
    <section
      className={`location-section ${compact ? "location-compact" : ""}`}
    >
      <div className="shell location-grid">
        <div>
          <Eyebrow index="05">Find your way here</Eyebrow>
          <h2>
            In the heart
            <br />
            of <em>{clinic.area}.</em>
          </h2>
          <p className="body-copy">
            A familiar part of {clinic.city}. Before visiting, contact the
            clinic to confirm your appointment, opening hours, and the exact
            location.
          </p>
          <TextLink href={clinic.mapsSearchUrl} external>
            Find on Google Maps
          </TextLink>
        </div>
        <div className="location-sheet">
          <div className="location-sheet-top">
            <MapPin size={25} strokeWidth={1.3} aria-hidden="true" />
            <span className="eyebrow">ISLAMABAD, PAKISTAN</span>
          </div>
          <h3>{clinic.name}</h3>
          <address>
            {clinic.streetAddress}
            <br />
            {clinic.area}, {clinic.city}
          </address>
          <div className="location-details">
            <span>
              <Phone size={15} aria-hidden="true" />{" "}
              <a href={`tel:${clinic.phoneTel}`}>{clinic.phoneDisplay}</a>
            </span>
            <span>Hours: please confirm with the clinic</span>
          </div>
          <p className="fineprint">
            {clinic.contactNotice} Maps opens a search, not a verified place
            pin.
          </p>
        </div>
      </div>
    </section>
  );
}
