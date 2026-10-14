import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { Eyebrow, TextLink } from "./ui";

export function FAQ() {
  return <section className="shell faq-section"><div><Eyebrow index="04">A little clarity</Eyebrow><h2>Before<br /><em>you ask.</em></h2><p className="body-copy">A few useful answers to help you take the next step.</p><TextLink href="/contact">Have another question?</TextLink></div><div className="faq-list">{faqs.map((faq, i) => <details key={faq.question}><summary><span className="faq-number">0{i + 1}</span><span>{faq.question}</span><Plus size={20} strokeWidth={1.3} aria-hidden="true" /></summary><div className="faq-answer"><p>{faq.answer}</p></div></details>)}</div></section>;
}
