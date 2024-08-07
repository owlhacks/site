import React from "react";
import Image from "next/image";

import SectionHeading from "../Sections/SectionHeading";
import SectionContent from "../Sections/SectionContent";
import Text from "../Typography/Text";
import Button from "@/components/Button/Button";
import Link from "next/link";

type Props = {};

export default function Endorsements({}: Props) {
  return (
    <SectionContent sectionId="endorsements">
      <SectionHeading>Endorsements</SectionHeading>
      <Text
        className="font-bold text-center text-skin-secondary tracking-tight"
        size="large"
      >
        OwlHacks is made possible by its sponsors.
      </Text>

    </SectionContent>
  );
}
