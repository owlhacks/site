import React from "react";
import Image from "next/image";

import SectionHeading from "../Sections/SectionHeading";
import SectionSubHeading from "../Sections/SectionSubHeading";
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

            <div className="flex flex-wrap gap-3 col-span-3 justify-center">
              <Image
                className="w-72 h-36"
                src="/endorsement_logo/blp_logo.webp"
                alt="Blackstone LaunchPad"
                width={300}
                height={300}
              />
            </div>

            <div className="inline-block w-0.5 items-center bg-neutral-100 dark:bg-white" />

            <div className="flex flex-wrap gap-3 col-span-3 justify-center">
              <Link
                aria-label="Temple HCI Lab"
                href="https://www.instagram.com/templehci/" target="_blank">
                <Image
                  className="w-36 h-36"
                  src="/endorsement_logo/temple_hci.webp"
                  alt="Temple HCI Lab"
                  width={300}
                  height={300}
                />
              </Link>
              <Link
                aria-label="Temple Trading Technologies"
                href="https://www.instagram.com/templetradingtech/" target="_blank">
                <Image
                  className="w-36 h-36"
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
                  className="w-72 h-36"
                  src="/endorsement_logo/temple_robotics.webp"
                  alt="Temple Robotics"
                  width={300}
                  height={300}
                />
              </Link>
              <Link
                aria-label="Temple University Math Club"
                href="https://www.instagram.com/templeuniversitymathclub/" target="_blank">
                <Image
                  className="w-36 h-36"
                  src="/endorsement_logo/temple_math.webp"
                  alt="Temple Robotics"
                  width={300}
                  height={300}
                />
              </Link>
            </div>

          </div>
        </div>
      </div>

    </SectionContent>
  );
}
