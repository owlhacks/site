import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import SectionContent from "../Sections/SectionContent";
import Text from "../Typography/Text";

type Props = {};

export default function About({}: Props) {
  return (
    <SectionContent sectionId="about">
      <SectionHeading>Our Mission</SectionHeading>
      <Text
        size="large"
        className="text-center font-bold text-lg md:w-2/3 text-skin-secondary tracking-tight"
      >
        OwlHacks is Temple University&apos;s annual, student-organized
        hackathon. First hosted in 2019, OwlHacks received outstanding projects,
        turnout, and support from our sponsors and university.
      </Text>
    </SectionContent>
  );
}
