import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";
import { Reveal } from "./animations";

export function ServiceList({ full = false }: { full?: boolean }) {
  return (
    <div className={`service-list ${full ? "service-list-full" : ""}`}>
      {(full ? services : services.slice(0, 5)).map((service, i) => (
        <Reveal delay={Math.min(i * 35, 140)} key={service.id}>
          <article id={full ? service.id : undefined} className="service-row">
            <span className="service-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="service-title">
              <span className="eyebrow">{service.category}</span>
              <h3>
                <Link
                  href={
                    full
                      ? `/contact?care=${service.id}#enquiry`
                      : `/services#${service.id}`
                  }
                >
                  {service.title}
                  <span className="sr-only">
                    {" "}
                    — {full ? "enquire about this care" : "learn more"}
                  </span>
                </Link>
              </h3>
            </div>
            <div className="service-description">
              <p>{service.summary}</p>
              {full && <p className="service-detail">{service.detail}</p>}
            </div>
            <Link
              className="service-arrow"
              href={
                full
                  ? `/contact?care=${service.id}#enquiry`
                  : `/services#${service.id}`
              }
              aria-label={`${full ? "Enquire about" : "Learn about"} ${service.title}`}
            >
              <ArrowUpRight size={24} strokeWidth={1.3} />
            </Link>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
