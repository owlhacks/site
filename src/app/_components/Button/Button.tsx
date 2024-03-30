import React, { ReactNode } from "react";

type ButtonProps = {
  width?: number;
  height?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
};

export default function Button(props: ButtonProps) {
  const { width, height, onClick, children, className } = props;

  return (
    <button
      style={{ width: `${width}px` ?? null, height: `${height}px` ?? null }}
      onClick={onClick}
      className={`border-2 border-skin-base hover:bg-skin-btn-hover bg-transparent px-4 py-2 rounded-2xl ${className}`}
    >
      {children}
    </button>
  );
}
