"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { clinic, whatsAppUrl } from "@/config/clinic";
import { services } from "@/data/services";

const topics = [
  { id: "appointment", label: "An appointment enquiry" },
  { id: "hours", label: "Opening hours & visiting" },
  { id: "fees", label: "Consultation fees" },
];

export function EnquiryComposer() {
  const [topic, setTopic] = useState("appointment");
  const query = useSearchParams();
  const [chosenCare, setCare] = useState<string | null>(null);
  const requested = query.get("care");
  const care =
    chosenCare ??
    (services.some((service) => service.id === requested) ? requested : "") ??
    "";
  const selectedService = services.find((service) => service.id === care);
  const subject =
    topic === "hours"
      ? "your current opening hours and location before visiting"
      : topic === "fees"
        ? "your current consultation fees"
        : "an appointment";
  const message = `Hello, I would like to enquire about ${subject} at ${clinic.name}.${topic === "appointment" && selectedService ? ` Could you confirm whether ${selectedService.title.toLowerCase()} is currently available?` : ""} Please let me know the next step. Thank you.`;
  return (
    <section id="enquiry" className="enquiry-composer">
      <span className="eyebrow">Your first message</span>
      <h2>Start simply.</h2>
      <p>
        Choose what you’d like to ask. We’ll prepare a message for you to review
        and send in WhatsApp.
      </p>
      <div className="field">
        <label htmlFor="topic">I’d like to ask about</label>
        <select
          id="topic"
          value={topic}
          onChange={(event) => setTopic(event.target.value)}
        >
          {topics.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>
      {topic === "appointment" && (
        <div className="field">
          <label htmlFor="care">
            Care category <span>(optional)</span>
          </label>
          <select
            id="care"
            value={care}
            onChange={(event) => setCare(event.target.value)}
          >
            <option value="">I’m not sure yet</option>
            {services.map((service) => (
              <option value={service.id} key={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>
      )}
      <div className="message-preview" aria-live="polite" aria-atomic="true">
        <span className="eyebrow">Message preview</span>
        <p>{message}</p>
      </div>
      <a
        className="button"
        href={whatsAppUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={17} aria-hidden="true" />
        Continue to WhatsApp
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
      <p className="fineprint">
        Nothing is sent by this website. You choose whether to send the message
        in WhatsApp. Please avoid sharing medical records or sensitive health
        information in an initial enquiry.
      </p>
      <p className="fineprint">
        {clinic.contactNotice} {clinic.bookingDisclaimer}
      </p>
    </section>
  );
}
