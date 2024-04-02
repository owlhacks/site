import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import Carousel from "./Carousel";
import SectionContent from "../Sections/SectionContent";

type Props = {};

export default function Team({}: Props) {
  return (
    <SectionContent sectionId="team">
      <SectionHeading>Meet Our Team</SectionHeading>
      <Carousel direction="right" />
    </SectionContent>
  );
}
