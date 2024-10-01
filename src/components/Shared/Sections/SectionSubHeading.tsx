import React, { ReactNode } from "react";
import Heading from "@/components/Shared/Typography/Heading";

export default function SectionSubHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Heading
      variant="h4"
      className="text-center font-bold tracking-wider uppercase select-none text-skin-primary"
    >
      {children}
    </Heading>
  );
}
