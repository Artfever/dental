export interface ClinicConfig {
  name: string;
  streetAddress: string;
  area: string;
  city: string;
  country: string;
  phoneDisplay: string;
  phoneTel: string;
  whatsAppDisplay: string;
  whatsAppDigits: string;
  mapsSearchUrl: string;
  social: { instagram: string; facebook: string; linkedin: string };
  hours: null;
  bookingDisclaimer: string;
  demoNotice: string;
  verificationRequired: boolean;
  contactNotice: string;
  history: { year: number; attribution: string };
}

export const clinic: ClinicConfig = {
  name: "Nayyar Dental Associates",
  streetAddress: "Office No. 3, First Floor, Ahmed Centre",
  area: "I-8 Markaz",
  city: "Islamabad",
  country: "Pakistan",
  phoneDisplay: "051-4938161",
  phoneTel: "+92514938161",
  whatsAppDisplay: "0302-5188884",
  whatsAppDigits: "923025188884",
  mapsSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=Nayyar+Dental+Associates+I-8+Markaz+Islamabad",
  social: {
    instagram: "https://www.instagram.com/nayyar_dental_associates/",
    facebook:
      "https://www.facebook.com/p/Nayyar-Dental-Associates-100054313879169/",
    linkedin: "https://pk.linkedin.com/company/nayyar-dental-associates",
  },
  hours: null,
  bookingDisclaimer:
    "Appointment enquiries are confirmed only after clinic staff replies.",
  demoNotice: "Concept website · Details pending clinic confirmation",
  verificationRequired: true,
  contactNotice:
    "Publicly listed contact numbers; awaiting clinic verification.",
  history: {
    year: 2005,
    attribution:
      "The practice’s public LinkedIn profile reports treating patients since",
  },
};

export const defaultMessage = `Hello, I would like to enquire about an appointment at ${clinic.name}.`;
export function whatsAppUrl(message: string = defaultMessage): string {
  return `https://wa.me/${clinic.whatsAppDigits}?text=${encodeURIComponent(message)}`;
}
export const fullAddress = `${clinic.streetAddress}, ${clinic.area}, ${clinic.city}, ${clinic.country}`;
export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Dental care" },
  { href: "/about", label: "The practice" },
  { href: "/contact", label: "Visit & contact" },
] as const;
