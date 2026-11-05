import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// Tab icon: her initials in Newsreader, white on the red of her portrait.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const newsreader = readFileSync(
  join(process.cwd(), "src", "app", "og-fonts", "newsreader-500.woff"),
);

export default function Icon() {
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
          borderRadius: 12,
          color: "#ffffff",
          fontFamily: "Newsreader",
          fontSize: 38,
          letterSpacing: -2,
          paddingBottom: 4,
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
