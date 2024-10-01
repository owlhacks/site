import React from "react";

import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import SectionSubHeading from "@/components/Shared/Sections/SectionSubHeading";
import SectionContent from "@/components/Shared/Sections/SectionContent";
import Text from "@/components/Shared/Typography/Text";

import { StudentOrg } from "@/lib/studentorg";
import { NonProfit } from "@/lib/nonprofit";
import Endorser from "./Endorser";

type Props = {};

export default function Endorsements({}: Props) {
  return (
    <SectionContent sectionId="endorsements">
      <SectionHeading>Endorsements</SectionHeading>
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
