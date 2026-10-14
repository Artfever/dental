import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedTooth, Reveal } from "@/components/animations";
import {
  ContactCTA,
  Eyebrow,
  Location,
  PageIntro,
  TextLink,
} from "@/components/ui";
import { clinic } from "@/config/clinic";

export const metadata: Metadata = {
  title: "The Practice",
  description:
    "Discover the public story of Nayyar Dental Associates in I-8 Markaz, Islamabad. Practice history is self-reported; team details await confirmation.",
};
export default function AboutPage() {
  return (
    <>
      <PageIntro
        index="02"
        label="The practice"
        title="A local practice."
        italic="A thoughtful beginning."
      >
        <p>
          Discover {clinic.name}, publicly listed in {clinic.area},{" "}
          {clinic.city}. A place to start a conversation about dental care.
        </p>
      </PageIntro>
      <section className="shell about-spread">
        <figure className="about-photo">
          <Image
            src="/images/dental-studio.jpg"
            alt="Generic dental treatment room used to illustrate the concept, not the actual clinic"
            fill
            sizes="(max-width: 760px) 90vw, 50vw"
            className="editorial-photo"
          />
          <figcaption>
            Illustrative photography · Not the Nayyar clinic
          </figcaption>
        </figure>
        <Reveal className="about-story">
          <Eyebrow>From the public record</Eyebrow>
          <h2>
            A story rooted
            <br />
            in <em>{clinic.city}.</em>
          </h2>
          <p>
            {clinic.history.attribution} {clinic.history.year}. It describes a
            range of care, from general dentistry and children’s dentistry to
            orthodontics and restorative care.
          </p>
          <p>
            That history is self-reported, rather than independently verified.
            This demo uses public sources to introduce the practice without
            making claims about outcomes, credentials, or the current team.
          </p>
          <TextLink href={clinic.social.linkedin} external>
            Read the public practice profile
          </TextLink>
        </Reveal>
      </section>
      <section className="approach-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <Eyebrow>A patient-focused concept</Eyebrow>
              <h2>
                Good care begins
                <br />
                with <em>understanding.</em>
              </h2>
            </div>
            <AnimatedTooth className="about-tooth" />
          </div>
          <div className="values-list">
            {[
              {
                title: "Room for your questions",
                text: "Ask what an assessment involves, what your options may be, and what to expect before agreeing to care.",
              },
              {
                title: "Clarity about your options",
                text: "Discuss suitability, alternatives, fees, and follow-up directly with the treating clinician. A service description is a starting point.",
              },
              {
                title: "A visit planned together",
                text: "Confirm the appointment, location, and any preparation with staff. Sending an enquiry does not reserve a visit.",
              },
            ].map((value, i) => (
              <Reveal key={value.title} className="value-row">
                <span className="service-number">0{i + 1}</span>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Reveal>
            ))}
          </div>
          <div className="team-note">
            <Eyebrow>The people behind your care</Eyebrow>
            <h3>Meet the team, through the clinic.</h3>
            <p>
              Current clinician identities, qualifications, and schedules await
              owner confirmation. Please contact the practice to ask who would
              assess your care. No stock portraits or invented biographies are
              used here.
            </p>
            <TextLink href="/contact">Ask the practice</TextLink>
          </div>
        </div>
      </section>
      <Location compact />
      <ContactCTA />
    </>
  );
}
