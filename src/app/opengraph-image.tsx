import { ImageResponse } from "next/og";
import { clinic } from "@/config/clinic";
export const alt =
  "Nayyar Dental Associates — Islamabad dental website concept";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#F7F5EE",
        color: "#242824",
        width: "100%",
        height: "100%",
        padding: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 25, letterSpacing: 5 }}>
        NAYYAR DENTAL ASSOCIATES
      </div>
      <div
        style={{
          display: "flex",
          fontFamily: "serif",
          fontSize: 88,
          lineHeight: 1.1,
        }}
      >
        Thoughtful dental care.
        <br />
        Here in Islamabad.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "2px solid #344337",
          paddingTop: 22,
          fontSize: 20,
        }}
      >
        <span>
          {clinic.area}, {clinic.city}
        </span>
        <span>Concept · Details pending confirmation</span>
      </div>
    </div>,
    size,
  );
}
