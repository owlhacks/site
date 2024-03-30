import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import Carousel from "./carousel";
import SectionContent from "../Sections/SectionContent";

type Props = {};

export default function Team({}: Props) {
  return (
    <SectionContent sectionId="team">
      <SectionHeading>Our Team</SectionHeading>
      <Carousel direction="right" />
    </SectionContent>
  );
}
