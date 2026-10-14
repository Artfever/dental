import { clinic, fullAddress } from "@/config/clinic";

export const faqs = [
  { question: "How do I enquire about an appointment?", answer: "Use the WhatsApp enquiry link or call the publicly listed clinic number. Ask staff to confirm current availability and an appointment time before visiting. The contact numbers await clinic verification." },
  { question: "Is my appointment confirmed after messaging?", answer: `${clinic.bookingDisclaimer} Opening WhatsApp or sending an enquiry does not reserve an appointment.` },
  { question: "Where is the practice located?", answer: `Public listings place the practice at ${fullAddress}. The directions link opens a Google Maps search; confirm the exact location and access arrangements with the clinic.` },
  { question: "Can I ask about a particular treatment?", answer: "Yes. You can select a care category in the enquiry composer. Staff can confirm current services and arrange an assessment. Treatment recommendations and costs require a discussion with the clinic." },
  { question: "What are the opening hours and consultation fees?", answer: "Public information about hours is inconsistent, and current fees are unverified. Please ask the clinic to confirm both before making travel plans. No free consultation offer is confirmed on this demo." },
];
