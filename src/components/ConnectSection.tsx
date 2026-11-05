import ContactActions from "@/components/ContactActions";
import { profile } from "@/data/profile";

/** Closing red band: the page ends where it began, on her colour. */
export default function ConnectSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-red text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-10 pt-16 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:pt-20 lg:px-12">
        <div>
          <h2 className="font-medium leading-[0.95] tracking-[-0.03em] [font-size:clamp(2.75rem,9vw,4.5rem)] [font-variation-settings:'opsz'_72]">
            Keep in touch
          </h2>
          <p className="mt-5 max-w-[28rem] text-paper/85">
            Follow her on Instagram and LinkedIn, or show the code to share
            this card.
          </p>
          <div className="mt-8">
            <ContactActions tone="red" />
          </div>
        </div>

        <figure className="w-40 sm:w-44">
          <div className="bg-paper p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/qr/kemi-adeosun-qr.svg"
              alt={`QR code that opens ${profile.name}'s card`}
              className="block aspect-square w-full"
            />
          </div>
          <figcaption className="mt-3 text-[0.9375rem] leading-snug text-paper/85">
            Scan to open this card.
          </figcaption>
        </figure>

        <p className="text-[0.9375rem] text-paper/70 md:col-span-2">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
