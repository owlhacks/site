import Link from "next/link";
import React from "react";

export type EndorserProps = {
  src: string;
  href: string;
  ariaLabel: string;
  altText: string;
  width: number;
  height: number;
  rounded?: boolean;
};

export default function Endorser(props: EndorserProps) {
  const rounded = props.rounded ?? false;

  return (
    <Link
      aria-label={props.ariaLabel}
      href={props.href}
      target="_blank"
      className="w-32 h-32 bg-skin-inverted rounded-2xl flex justify-center items-center hover:opacity-85 select-none duration-200 ease-in-out"
    >
      <img
        className={rounded ? "rounded-full" : ""}
        src={props.src}
        alt={props.altText}
        width={props.width}
        height={props.height}
        loading="lazy"
      />
    </Link>
  );
}
