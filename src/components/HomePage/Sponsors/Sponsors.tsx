import React from "react";
import Image from "next/image";

import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import SectionContent from "@/components/Shared/Sections/SectionContent";
import Sponsorer from "./Sponsorer";
import Text from "@/components/Shared/Typography/Text";
import Button from "@/components/Shared/Button/Button";
import Link from "next/link";

import { Sponsor } from "@/lib/sponsor";

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

      <div className="grid justify-items-center gap-20 items-center grid-cols-2">
        {Sponsor.map((sponsor) => (
          <Sponsorer
            src={sponsor.src}
            altText={sponsor.altText}
            width={sponsor.width}
            height={sponsor.height}
            key={sponsor.altText}
          ></Sponsorer>
        ))}
      </div>

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
