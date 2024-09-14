import React from "react";
import Image from "next/image";

import SectionHeading from "../Sections/SectionHeading";
import SectionContent from "../Sections/SectionContent";
import Text from "../Typography/Text";
import Button from "@/components/Button/Button";
import Link from "next/link";

type Props = {};

export default function Sponsors({}: Props) {
  return (
    <SectionContent sectionId="sponsors">
      <SectionHeading>Sponsors</SectionHeading>
      <Text
        className="font-bold text-center text-skin-base tracking-tight"
        size="large"
      >
        OwlHacks is made possible by its sponsors.
      </Text>

      <Image
        className="w-52 h-52"
        src="https://static.mlh.io/brand-assets/sponsors/stand-out-stickers/stand-out-stickers-logo.svg"
        alt="StandOut Stickers"
        width={100}
        height={100}
      />

      <Link href="mailto:owlhacks@temple.edu">
        <Button
          height={50}
          onClick={() => {}}
          ismotion
          variants={{ onclick: { scale: 1.1 } }}
          whileTap="onclick"
          className="font-semibold text-skin-base"
        >
          Become a Sponsor
        </Button>
      </Link>
    </SectionContent>
  );
}
