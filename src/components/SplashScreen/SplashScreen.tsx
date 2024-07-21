"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useScrollBlock } from "@/utilities/useScrollBlock";

type Props = {};

export default function SplashScreen({}: Props) {
  const [blockScroll, allowScroll] = useScrollBlock();

  // Animation
  const blackBox = {
    initial: {
      height: "100vh",
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      },
    },
  };

  const text = {
    initial: {
      y: 40,
    },
    animate: {
      y: 80,
      transition: {
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <motion.div
      className="fixed z-50 w-full bg-skin-base"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => {
        blockScroll();
      }}
      onAnimationComplete={() => {
        allowScroll();
      }}
    >
      <motion.svg
        variants={textContainer}
        className="absolute text-center left-0 right-0 w-full h-full z-50"
      >
        <motion.text
          className="text-4xl font-bold fill-white"
          textAnchor="middle"
          x="50%"
          y="50%"
        >
          OwlHacks
        </motion.text>
      </motion.svg>
    </motion.div>
  );
}
