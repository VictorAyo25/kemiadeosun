import { profile, SITE_URL } from "@/data/profile";

/**
 * Serves a vCard (.vcf) so visitors can add Kemi to their phone contacts
 * with one tap. iOS and Android both recognise the text/vcard MIME type.
 */
export function GET() {
  const { vcard, name, socials } = profile;

  const esc = (v: string) => v.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");

  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${esc(vcard.lastName)};${esc(vcard.firstName)};;;`,
    `FN:${esc(name)}`,
    `ORG:${esc(vcard.organization)}`,
    `TITLE:${esc(vcard.title)}`,
    `URL;TYPE=Card:${SITE_URL}`,
  ];

  // Optional contact points, only present if added to profile.vcard
  const email = (vcard as { email?: string }).email;
  const phone = (vcard as { phone?: string }).phone;
  if (email) lines.push(`EMAIL;TYPE=INTERNET:${esc(email)}`);
  if (phone) lines.push(`TEL;TYPE=CELL:${esc(phone)}`);

  // Social profiles
  for (const s of socials) {
    lines.push(
      `X-SOCIALPROFILE;TYPE=${s.icon}:${s.href}`,
      `item${socials.indexOf(s) + 1}.URL:${s.href}`,
      `item${socials.indexOf(s) + 1}.X-ABLabel:${esc(s.label)}`,
    );
  }

  lines.push(
    `NOTE:${esc(profile.role)}. ${esc(profile.tagline)}`,
    "END:VCARD",
  );

  const body = lines.join("\r\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/vcard; charset=utf-8",
      "Content-Disposition": 'attachment; filename="kemi-adeosun.vcf"',
      "Cache-Control": "public, max-age=3600",
    },
  });
}
