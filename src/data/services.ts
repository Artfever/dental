export interface Service {
  id: string;
  title: string;
  category: string;
  summary: string;
  detail: string;
}

export const services: Service[] = [
  { id: "general-dentistry", title: "General dentistry", category: "Everyday care", summary: "A starting point for understanding your teeth, gums, and everyday oral care.", detail: "A dental assessment can help identify concerns and guide a discussion about suitable care. Ask the clinic about check-ups and the next step for you." },
  { id: "scaling-polishing", title: "Scaling & polishing", category: "Preventive care", summary: "Professional cleaning to address plaque and tartar, alongside your daily routine.", detail: "Scaling removes deposits that routine brushing may not reach. Your clinician can explain whether cleaning is appropriate and how to care for your gums afterwards." },
  { id: "restorative-dentistry", title: "Restorative dentistry", category: "Repair & restore", summary: "Explore options for teeth affected by decay, wear, or damage.", detail: "Restorative care may include fillings and other ways to repair tooth structure. The choice depends on an examination, the extent of damage, and your individual needs." },
  { id: "endodontics", title: "Root canal care", category: "Endodontics", summary: "Assessment and treatment of problems involving the inside of a tooth.", detail: "Root canal treatment addresses affected tissue within a tooth. A clinician must assess whether it is suitable and explain the procedure, alternatives, and follow-up." },
  { id: "orthodontics", title: "Orthodontics", category: "Alignment", summary: "Discuss tooth alignment and bite concerns with a dental professional.", detail: "Orthodontic options depend on age, oral health, and the way teeth meet. Ask about assessment, available appliances, and the expected course of care; specific options are unconfirmed." },
  { id: "prosthodontics", title: "Prosthodontics", category: "Replacement options", summary: "A conversation about restoring or replacing missing and damaged teeth.", detail: "Replacement options may include crowns, bridges, or dentures, depending on your assessment. Ask the clinic which treatments are currently available and suitable for you." },
  { id: "pediatric-dentistry", title: "Children’s dentistry", category: "Growing smiles", summary: "Dental care discussions for children at different stages of development.", detail: "Children’s dental needs change as they grow. Ask about age-appropriate check-ups, prevention, and how to prepare your child for an appointment." },
  { id: "wisdom-teeth", title: "Wisdom tooth assessment", category: "Oral surgery", summary: "Understand whether a wisdom tooth needs monitoring or further treatment.", detail: "Not every wisdom tooth requires removal. Examination and, when appropriate, imaging help a clinician discuss observation, extraction, risks, and recovery." },
  { id: "dental-implants", title: "Dental implants", category: "Missing teeth", summary: "Explore whether implant treatment may be an option for a missing tooth.", detail: "Implants are referenced in the clinic’s public Facebook content. Suitability depends on factors such as oral health and bone support; current availability and the treating clinician need confirmation." },
];

export const serviceNotice = "These care categories are mentioned in the practice’s public profiles. Current availability, treating clinicians, fees, and suitability must be confirmed directly with the clinic.";
