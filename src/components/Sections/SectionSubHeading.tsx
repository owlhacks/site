import React, { ReactNode } from "react";
import Heading from "@/components/Typography/Heading";

export default function SectionSubHeading({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Heading
      variant="h4"
      className="text-center font-black tracking-wider uppercase select-none text-skin-primary"
    >
      {children}
    </Heading>
  );
}
