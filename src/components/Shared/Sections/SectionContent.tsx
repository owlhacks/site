import React, { ReactNode } from "react";

type SectionProps = {
  sectionId: string;
  children: ReactNode;
};

export default function SectionContent(props: SectionProps) {
  const { sectionId, children } = props;

  return (
    <section
      className="mx-auto p-4 gap-y-8 flex flex-col items-center mb-10"
      id={sectionId}
    >
      {children}
    </section>
  );
}
