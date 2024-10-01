import Image from "next/image";
import React from "react";

export type SponsorerProps = {
  src: string;
  altText: string;
  width: number;
  height: number ;
};

export default function Sponsorer(props: SponsorerProps) {

  return (
    <Image
        src={props.src}
        alt={props.altText}
        width={props.width}
        height={props.height}
    />
  );
}
