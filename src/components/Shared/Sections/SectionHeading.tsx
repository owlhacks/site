import React, { ReactNode } from "react";
import Heading from "@/components/Shared/Typography/Heading";

type SectionHeadingProps = {
  children: ReactNode;
  className?: string;
}

export default function SectionHeading(props: SectionHeadingProps) {

  let { children, className } = props;

  if (className == undefined){
    className = "text-center"
  }

  return (
    <Heading
      variant="h2"
      className={className + " font-black tracking-wider uppercase select-none text-skin-primary"}
    >
      {children}
    </Heading>
  );
}
