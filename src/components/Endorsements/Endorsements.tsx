import React from "react";
import Image from "next/image";

import SectionHeading from "../Sections/SectionHeading";
import SectionSubHeading from "../Sections/SectionSubHeading";
import SectionContent from "../Sections/SectionContent";
import Text from "../Typography/Text";
import Button from "@/components/Button/Button";
import Link from "next/link";

import { StudentOrg } from "@/lib/studentorg";
import { NonProfit } from "@/lib/nonprofit";
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

      <div className="md:flex mx-auto space-y-10 md:space-y-0">
        <div className="md:flex flex-col  md:mr-10">
          <SectionSubHeading>Non Profits</SectionSubHeading>
          <div className="grid justify-items-center grid-cols-2 gap-4">
            {NonProfit.map((org) => (
              <Endorser
                src={org.src}
                href={org.href}
                ariaLabel={org.ariaLabel}
                altText={org.altText}
                width={org.width}
                height={org.height}
                rounded={org.rounded}
                key={org.ariaLabel}
              ></Endorser>
            ))}
          </div>
        </div>

        <div className="hidden md:inline-block w-[1px] items-center bg-skin-lighter" />
        <div className="md:flex flex-col md:ml-10">
          <SectionSubHeading>Student Orgs</SectionSubHeading>
          <div className="grid justify-items-center grid-cols-2 gap-4">
            {StudentOrg.map((org) => (
              <Endorser
                src={org.src}
                href={org.href}
                ariaLabel={org.ariaLabel}
                altText={org.altText}
                width={org.width}
                height={org.height}
                rounded={org.rounded}
                key={org.ariaLabel}
              ></Endorser>
            ))}
          </div>
        </div>
      </div>
    </SectionContent>
  );
}
