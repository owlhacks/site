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

      <div className="flex flex-wrap justify-center w-2/3">

        <div className="w-full mb-5">
          <div className="grid grid-cols-7">
            <div className="col-span-3">
              <SectionSubHeading>Non Profits</SectionSubHeading>
            </div>
            <div></div>
            <div className="col-span-3">
              <SectionSubHeading>Student Orgs</SectionSubHeading>
            </div>
          </div>
        </div>

        <div>
          <div className="grid justify-items-center grid-cols-7">

            <div className="flex flex-wrap gap-3 col-span-3 justify-center content-start ">
              {NonProfit.map((org) => (
                <Endorser
                  src={org.src}
                  href={org.href}
                  ariaLabel={org.ariaLabel}
                  altText={org.altText}
                  width={org.width}
                  height={org.height}
                  key={org.ariaLabel}
                ></Endorser>
              ))}
            </div>

            <div className="inline-block w-0.5 items-center bg-neutral-100 dark:bg-white" />

            <div className="flex flex-wrap gap-3 col-span-3 justify-center content-start">
              {StudentOrg.map((org) => (
                <Endorser
                  src={org.src}
                  href={org.href}
                  ariaLabel={org.ariaLabel}
                  altText={org.altText}
                  width={org.width}
                  height={org.height}
                  key={org.ariaLabel}
                ></Endorser>
              ))}
            </div>

          </div>
        </div>
      </div>
    </SectionContent>
  );
}
