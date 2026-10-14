"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { clinic, navigation, whatsAppUrl } from "@/config/clinic";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (open) element.showModal();
    else if (element.open) element.close();
    const oldOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
    };
  }, [open]);
  function close() {
    setOpen(false);
    toggle.current?.focus();
  }
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label={`${clinic.name} — home`}
        >
          <span>
            Nayyar<span className="wordmark-period">.</span>
          </span>
          <small>DENTAL ASSOCIATES</small>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-cta"
          href={whatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          <span className="sr-only">
            {" "}
            on WhatsApp; number pending verification
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label="Open navigation"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
        <dialog
          ref={dialog}
          id="mobile-navigation"
          className="mobile-dialog"
          onCancel={close}
          onClose={() => setOpen(false)}
          onKeyDown={(event) => {
            if (event.key !== "Tab") return;
            const controls = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                "button, a[href]",
              ),
            );
            const first = controls[0];
            const last = controls[controls.length - 1];
            if (event.shiftKey && document.activeElement === first) {
              event.preventDefault();
              last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
              event.preventDefault();
              first?.focus();
            }
          }}
          aria-label="Navigation"
        >
          <div className="mobile-dialog-top">
            <span className="eyebrow">Explore the practice</span>
            <button aria-label="Close navigation" onClick={close}>
              <X size={25} />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {navigation.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={close}
              >
                <small>0{i + 1}</small>
                {item.label}
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <a
            className="button"
            href={whatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
          >
            Enquire on WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <p className="fineprint">{clinic.contactNotice}</p>
          <p className="mobile-location">
            {clinic.area}, {clinic.city}
          </p>
        </dialog>
      </div>
    </header>
  );
}
