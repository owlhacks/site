import Link from "next/link";
import React from "react";

export type EndorserProps = {
  src: string;
  href: string;
  ariaLabel: string;
  altText: string;
  width: number;
  height: number;
};

export default function Endorser(props: EndorserProps) {
  return (
    <Link
      aria-label={props.ariaLabel}
      href={props.href}
      target="_blank"
      className="w-96 h-32 bg-skin-inverted rounded-2xl flex justify-center items-center hover:opacity-85 duration-200 ease-in-out"
    >
      <img
        className="rounded-full"
        src={props.src}
        alt={props.altText}
        width={props.width}
        height={props.height}
        loading="lazy"
      />
    </Link>
  );
}
