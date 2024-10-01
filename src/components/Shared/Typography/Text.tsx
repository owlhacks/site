import React, { ReactNode } from "react";

type TextProps = {
  children: ReactNode;
  className?: string;
  size: "small" | "medium" | "large";
};

export default function Text(props: TextProps) {
  const { children, className, size } = props;
  let textSize = "";

  if (size === "small") {
    textSize = "0.75rem";
  } else if (size === "medium") {
    textSize = "1rem";
  } else {
    textSize = "1.25rem";
  }

  return (
    <p className={className} style={{ fontSize: textSize }}>
      {children}
    </p>
  );
}
