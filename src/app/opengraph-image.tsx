import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/data/profile";

export const alt = profile.role ? `${profile.name} · ${profile.role}` : profile.name;
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

// Newsreader 500 (SIL Open Font License), bundled so the share image uses
// the same type as the page. Satori reads .woff but not .woff2.
const newsreader = readFileSync(
  join(process.cwd(), "src", "app", "og-fonts", "newsreader-500.woff"),
);

export default function OpengraphImage() {
  const photo = loadPhoto();
  const [first, ...rest] = profile.name.split(" ");

  // Same idea as the page: her name on the red of her portrait, with the
  // photo standing on the bottom edge.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(180deg, #d0374f 0%, #c92f47 55%, #b9283f 100%)",
          color: "#ffffff",
          fontFamily: "Newsreader",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 0 0 80px",
            width: 640,
          }}
        >
          <div style={{ fontSize: 132, lineHeight: 0.9, letterSpacing: -4 }}>
            {first}
          </div>
          <div style={{ fontSize: 132, lineHeight: 0.9, letterSpacing: -4 }}>
            {rest.join(" ")}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 28,
              lineHeight: 1.4,
              marginTop: 36,
              color: "rgba(255,255,255,0.9)",
            }}
          >
            <div>{`${profile.role}.`}</div>
            <div>Nigeria&apos;s Minister of Finance, 2015 to 2018.</div>
          </div>
        </div>
        {photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo}
            alt=""
            width={560}
            height={560}
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: 600,
              height: 600,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 22%, black 85%, transparent 100%)",
            }}
          />
        ) : null}
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: newsreader, weight: 500, style: "normal" }],
    },
  );
}
