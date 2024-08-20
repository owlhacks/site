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
        OwlHacks is brought to life by its endorsers.
      </Text>

      <div className="flex flex-wrap gap-4">
        <Link
          aria-label="Temple Trading Technologies"
          href="https://www.instagram.com/templetradingtech/" target="_blank">
          <Image
            className="w-52 h-52"
            src="/endorsement_logo/temple_trading_tech.webp"
            alt="Temple Trading Technologies"
            width={300}
            height={300}
          />
        </Link>
        <Link
          aria-label="Temple Robotics"
          href="https://www.instagram.com/templerobotics/" target="_blank">
          <Image
            className="w-96 h-52"
            src="/endorsement_logo/temple_robotics.webp"
            alt="Temple Robotics"
            width={300}
            height={200}
          />
        </Link>
      </div>



    </SectionContent>
  );
}
