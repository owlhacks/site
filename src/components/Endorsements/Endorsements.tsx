import React from "react";
import Image from "next/image";

import SectionHeading from "../Sections/SectionHeading";
import SectionSubHeading from "../Sections/SectionSubHeading";
import SectionContent from "../Sections/SectionContent";
import Text from "../Typography/Text";
import Button from "@/components/Button/Button";
import Link from "next/link";

import { Endorsers } from "@/lib/endorsers";
import Endorser from "./Endorser";

type Props = {};

export default function Endorsements({}: Props) {
  return (
    <SectionContent sectionId="endorsements">
      <SectionHeading>Endorsements</SectionHeading>
      <Text
        className="font-bold text-center text-skin-base tracking-tight"
        size="large"
      >
        OwlHacks is brought to life by its endorsers.
      </Text>
      <div className="gap-5 flex w-1/2">
        {Endorsers.map((endorser) => (
          <Endorser
            src={endorser.src}
            href={endorser.href}
            ariaLabel={endorser.ariaLabel}
            altText={endorser.altText}
            width={endorser.width}
            height={endorser.height}
            key={endorser.ariaLabel}
          ></Endorser>
        ))}
      </div>
    </SectionContent>
  );
}
