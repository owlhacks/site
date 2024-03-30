import React, { ReactNode } from "react";

type HeadingProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: ReactNode;
  className: string;
};

export default function Heading(props: HeadingProps) {
  const { variant, children, className } = props;
  const HeadingVariant = variant;

  return <HeadingVariant className={className}>{children}</HeadingVariant>;
}
