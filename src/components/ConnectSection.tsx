import ContactActions from "@/components/ContactActions";
import QrDialog from "@/components/QrDialog";
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
            Follow her on Instagram and LinkedIn, or pass this card on.
          </p>
          <div className="mt-8">
            <ContactActions tone="red" />
          </div>
        </div>

        <QrDialog />

        <p className="text-[0.9375rem] text-paper/70 md:col-span-2">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
