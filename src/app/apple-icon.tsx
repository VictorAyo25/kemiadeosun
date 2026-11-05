import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Home-screen icon (iOS rounds the corners itself): her initials in Newsreader, white on the red of her portrait.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const newsreader = readFileSync(
  join(process.cwd(), "src", "app", "og-fonts", "newsreader-500.woff"),
);

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ca3048",
          borderRadius: 0,
          color: "#ffffff",
          fontFamily: "Newsreader",
          fontSize: 104,
          letterSpacing: -5,
          paddingBottom: 10,
        }}
      >
        KA
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Newsreader", data: newsreader, weight: 500, style: "normal" }],
    },
  );
}
