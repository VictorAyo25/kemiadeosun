"use client";

import { useRef } from "react";
import { profile } from "@/data/profile";

const QR = "/qr/kemi-adeosun-qr.svg";

/** The footer QR. Tapping it opens the code full screen, for showing to
 *  someone across a table. */
export default function QrDialog() {
  const dialog = useRef<HTMLDialogElement>(null);

  return (
    <>
      <figure className="w-40 sm:w-44">
        <button
          type="button"
          onClick={() => dialog.current?.showModal()}
          className="qr-thumb block w-full bg-paper p-3"
          aria-label="Show the QR code full screen"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={QR} alt="" className="block aspect-square w-full" />
        </button>
        <figcaption className="mt-3 text-[0.9375rem] leading-snug text-paper/85">
          Tap to show it full screen.
        </figcaption>
      </figure>

      <dialog
        ref={dialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
        className="qr-dialog m-auto w-[min(88vw,30rem)] bg-paper p-0 text-wine"
        aria-label={`QR code for ${profile.name}'s card`}
      >
        <div className="p-6 sm:p-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={QR}
            alt={`QR code that opens ${profile.name}'s card`}
            className="block aspect-square w-full"
          />
          <div className="mt-6 flex items-baseline justify-between gap-4">
            <p className="text-[1.0625rem]">Scan with a phone camera.</p>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="lnk font-medium text-red-deep"
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
