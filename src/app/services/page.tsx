import type { Metadata } from "next";
import { ContactCTA, PageIntro } from "@/components/ui";
import { ServiceList } from "@/components/service-list";
import { serviceNotice } from "@/data/services";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "Dental Care",
  description:
    "An accessible guide to publicly described dental care categories. Current availability and treatment suitability require clinic confirmation.",
};
export default function ServicesPage() {
  return (
    <>
      <PageIntro
        index="01"
        label="The care index"
        title="Understand your options."
        italic="Begin with a question."
      >
        <p>
          Everyday care, growing smiles, repair, and replacement. Explore the
          categories described in {clinic.name}’ public profiles.
        </p>
        <p className="fineprint">{serviceNotice}</p>
      </PageIntro>
      <section
        className="shell full-services"
        aria-label="Dental care categories"
      >
        <ServiceList full />
        <div className="care-note">
          <h3>A guide, before a recommendation.</h3>
          <p>
            These summaries offer general information. They are not a diagnosis
            or personal treatment advice. An in-person clinical assessment is
            needed to discuss risks, alternatives, and an appropriate plan.
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
