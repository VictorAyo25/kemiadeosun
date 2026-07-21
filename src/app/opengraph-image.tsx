import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Embed the portrait as a data URI so the card renders at build time
// without needing the site to be live. Falls back to a monogram if missing.
function loadPhoto(): string | null {
  try {
    const file = profile.photo.replace(/^\//, "");
    const buf = readFileSync(join(process.cwd(), "public", file));
    const ext = file.split(".").pop()?.toLowerCase();
    const mime =
      ext === "png" ? "image/png" : ext === "webp" ? "image/webp" : "image/jpeg";
    return `data:${mime};base64,${buf.toString("base64")}`;
  } catch {
    return null;
  }
}

export default function OpengraphImage() {
  const photo = loadPhoto();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 56,
          padding: 70,
          background:
            "linear-gradient(135deg, #163e2f 0%, #0e2a20 55%, #12352a 100%)",
          color: "#f6f1e6",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* gold frame */}
        <div
          style={{
            position: "absolute",
            inset: 28,
            border: "1px solid rgba(199,162,75,0.5)",
            borderRadius: 20,
          }}
        />

        {/* Portrait */}
        <div
          style={{
            display: "flex",
            width: 340,
            height: 340,
            borderRadius: 340,
            flexShrink: 0,
            background: "linear-gradient(135deg, #e3c877, #a9822d)",
            padding: 6,
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          }}
        >
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt=""
              width={328}
              height={328}
              style={{
                width: 328,
                height: 328,
                borderRadius: 328,
                objectFit: "cover",
                border: "4px solid #12352a",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 328,
                height: 328,
                borderRadius: 328,
                background: "#12352a",
                color: "#c7a24b",
                fontSize: 130,
                fontWeight: 700,
              }}
            >
              KA
            </div>
          )}
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 40, height: 2, background: "#c7a24b" }} />
            <div
              style={{
                fontSize: 19,
                letterSpacing: 9,
                color: "#c7a24b",
                textTransform: "uppercase",
                fontFamily: "system-ui, sans-serif",
                fontWeight: 600,
              }}
            >
              Digital Card
            </div>
          </div>

          <div
            style={{
              fontSize: 82,
              fontWeight: 700,
              lineHeight: 1.02,
              marginTop: 18,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              fontSize: 27,
              color: "#e8dfca",
              fontFamily: "system-ui, sans-serif",
              marginTop: 14,
            }}
          >
            {profile.role}
          </div>
          <div
            style={{
              fontSize: 25,
              color: "#c7a24b",
              fontStyle: "italic",
              marginTop: 10,
            }}
          >
            {profile.tagline}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 21,
              fontFamily: "system-ui, sans-serif",
              color: "#e8dfca",
              marginTop: 34,
            }}
          >
            <span style={{ fontWeight: 700 }}>DashMe Foundation</span>
            <span
              style={{
                width: 7,
                height: 7,
                background: "#c7a24b",
                borderRadius: 7,
                transform: "rotate(45deg)",
              }}
            />
            <span style={{ fontWeight: 700 }}>Nidacity</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
