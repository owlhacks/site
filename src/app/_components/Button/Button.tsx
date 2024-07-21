import React, { ReactNode } from "react";
import { motion, MotionProps } from "framer-motion";

type ButtonProps = {
  width?: number;
  height?: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
} & (
  | {
      ismotion: true;
      animate?: MotionProps["animate"];
      initial?: MotionProps["initial"];
      whileTap?: MotionProps["whileTap"];
      variants?: MotionProps["variants"];
    }
  | { ismotion?: false }
);

export default function Button(props: ButtonProps) {
  const { width, height, children, className, ismotion } = props;
  let motionProps = {};

  if (ismotion) {
    motionProps = {
      animate: props.animate,
      initial: props.initial,
      whileTap: props.whileTap,
      variants: props.variants,
    };
  }
  const ButtonComponent = ismotion ? motion.button : "button";

  return (
    <ButtonComponent
      style={{ width: `${width}px` ?? null, height: `${height}px` ?? null }}
      className={`select-none border-2 border-skin-inverted hover:bg-skin-btn-hover bg-transparent px-4 py-2 rounded-2xl ${className}`}
      {...motionProps}
    >
      {children}
    </ButtonComponent>
  );
}
