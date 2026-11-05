import ContactActions from "@/components/ContactActions";
import { profile } from "@/data/profile";

/**
 * Phones: name on red, the portrait under it, then the short bio and
 * social links on white.
 * From lg up: name, bio and actions on the left, portrait on the right,
 * standing on the bottom edge of the red field.
 */
export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <header className="hero-field text-paper">
      <div className="mx-auto grid max-w-6xl lg:min-h-[min(88svh,50rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:grid-rows-[1fr_auto] xl:grid-cols-[minmax(0,1fr)_minmax(0,36rem)]">
        <h1 className="px-5 pt-14 font-medium leading-[0.88] tracking-[-0.035em] [font-size:clamp(4.25rem,22vw,9rem)] lg:[font-size:clamp(4.5rem,10.5vw,7.5rem)] [font-variation-settings:'opsz'_72] sm:px-8 lg:self-end lg:px-12 lg:pt-24">
          <span className="name-line">
            <span>{first}</span>
          </span>
          <span className="name-line">
            <span>{rest.join(" ")}</span>
          </span>
        </h1>

        <div className="sm:ml-auto sm:w-[34rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:w-auto lg:self-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profile.photo}
            alt={profile.photoAlt}
            width={1440}
            height={1440}
            className="hero-photo photo-in -mt-6 block aspect-[6/5] w-full object-cover object-[50%_15%] sm:aspect-square lg:mt-0"
          />
        </div>

        <div className="bg-paper px-5 pb-12 pt-8 text-wine sm:px-8 lg:col-start-1 lg:row-start-2 lg:bg-transparent lg:px-12 lg:pb-20 lg:pt-8 lg:text-paper">
          <div className="after-name">
            <p className="max-w-[31rem] text-[1.1875rem] leading-[1.5]">
              {profile.bio}
            </p>
            <div className="mt-8">
              <ContactActions tone="heroSwitch" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
