import React, {useEffect, useState} from "react";
import * as Tabs from "@radix-ui/react-tabs";


import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import SectionContent from "@/components/Shared/Sections/SectionContent";
import TeamCard from "./TeamCard/TeamCard";
import { TeamMembers } from "@/lib/team";
import { CardProps } from "./TeamCard/TeamCard";

type Props = {};

export default function Team({}: Props) {

  const tabHeader: string[] = ["Director", "Web Development", "Logistics", "Operations",
    "Design", "Sponsorship", "Outreach", "DEI"];

  const [tabContent, setTabContent] = useState<Record<string, CardProps[]>>({})

  useEffect(() => {

    const sortedMember = [...TeamMembers].sort((a, b) => a.name.localeCompare(b.name));

    const groupedByRole : Record<string, CardProps[]> = sortedMember.reduce((acc, member) => {
      const key = member.role
      if (!acc[key]) acc[key] = [];
      acc[key].push(member);
      return acc;
    }, {} as Record<string, CardProps[]>)

    setTabContent(groupedByRole)
  }, [])


  return (
    <SectionContent sectionId="team">
      <SectionHeading>Meet Our Team</SectionHeading>
      <Tabs.Root
      defaultValue="Director">
        <Tabs.List
        className="flex flex-wrap shrink-0 gap-5 mb-8 pt-0 justify-center
        " >
          {tabHeader.map((header) => (
            <Tabs.Trigger
            key={`tab-${header}`}
            value={header}
            className="text-xl sm:text-lg font-semibold text-skin-muted

            data-[state=active]:font-extrabold data-[state=active]:text-white">
              {header}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        {Object.entries(tabContent).map(([role, users]) => (
            <Tabs.Content
            key={`tab-content-${role}`}
            value={role}
            className="flex flex-wrap gap-5 justify-center">
              {users.map(member => (
                <TeamCard
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedinUrl={member.linkedinUrl}
                  githubUrl={member.githubUrl}
                  websiteUrl={member.websiteUrl}
                />
              ))}
            </Tabs.Content>
          ))}
      </Tabs.Root>
    </SectionContent>
  );
}
