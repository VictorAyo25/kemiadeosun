/**
 * Generates a branded QR code that points to the live card.
 *
 *   npm run qr                       → uses NEXT_PUBLIC_SITE_URL or the default
 *   npm run qr -- https://my.domain  → override the URL
 *
 * Outputs:  public/qr/kemi-adeosun-qr.png   (2000px, for print/screen)
 *           public/qr/kemi-adeosun-qr.svg   (vector, scales infinitely)
 */
import QRCode from "qrcode";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(__dirname, "../public/qr");

const url =
  process.argv[2] ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://kemiadeosun.vercel.app";

const options = {
  errorCorrectionLevel: "H", // survives a small logo / print smudges
  margin: 2,
  color: {
    dark: "#12352a", // forest green
    light: "#00000000", // transparent, sits on any background
  },
};

await mkdir(outDir, { recursive: true });

const png = await QRCode.toBuffer(url, { ...options, type: "png", width: 2000 });
await writeFile(resolve(outDir, "kemi-adeosun-qr.png"), png);

const svg = await QRCode.toString(url, { ...options, type: "svg" });
await writeFile(resolve(outDir, "kemi-adeosun-qr.svg"), svg);

console.log(`✓ QR codes generated for: ${url}`);
console.log(`  → public/qr/kemi-adeosun-qr.png`);
console.log(`  → public/qr/kemi-adeosun-qr.svg`);
