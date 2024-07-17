import React from "react";
import SectionHeading from "../Sections/SectionHeading";
import Carousel from "./Carousel";
import SectionContent from "../Sections/SectionContent";
import TeamCard from "./TeamCard/TeamCard";

import { TeamMembers } from "@/app/_lib/data";

type Props = {};




export default function Team({}: Props) {
  return (
    <SectionContent sectionId="team">
      <SectionHeading>Meet Our Team</SectionHeading>

        <div className="flex flex-wrap gap-5 justify-center">
          { TeamMembers.map((member) => (
            <TeamCard
              key={member.name}
              name={member.name}
              role={member.role}
              image={member.image}
              linkedinUrl={member.linkedinUrl}
              githubUrl={member.githubUrl}
            />
              ))
            }
        </div>


      {/* <Carousel direction="right" /> */}
    </SectionContent>
  );
}
