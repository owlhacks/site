import Image from "next/image";
import Link from "next/link";
import React from "react";

export type SponsorerProps = {
  src: string;
  altText: string;
  width: number;
  height: number;
  href?: string;
};

export default function Sponsorer(props: SponsorerProps) {
  const image = (
    <Image
      src={props.src}
      alt={props.altText}
      width={props.width}
      height={props.height}
    />
  );

  if (props.href) {
    return (
      <Link
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-opacity hover:opacity-85"
      >
        {image}
      </Link>
    );
  }

  return image;
}
