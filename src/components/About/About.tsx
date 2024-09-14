import React from "react";

import SectionHeading from "@/components/Sections/SectionHeading";
import SectionContent from "@/components/Sections/SectionContent";
import Text from "@/components/Typography/Text";

type Props = {};

export default function About({}: Props) {
  return (
    <SectionContent sectionId="about">
      <SectionHeading>Our Mission</SectionHeading>
      <Text
        size="large"
        className="text-center font-bold text-lg md:w-2/3 text-skin-base tracking-tight"
      >
        OwlHacks is Temple University&apos;s annual, student-organized
        hackathon. First hosted in 2019, OwlHacks received outstanding projects,
        turnout, and support from our sponsors and university.
      </Text>
    </SectionContent>
  );
}
