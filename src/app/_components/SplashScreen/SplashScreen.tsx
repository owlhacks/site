"use client"

import React from 'react'
import {motion } from 'framer-motion'

type Props = {}

export default function SplashScreen({} : Props) {

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
        duration: 0.1,
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
      className="absolute z-50 w-full bg-black"
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
      <motion.svg variants={textContainer}
        className="absolute text-center left-0 right-0 w-full h-full z-50">

          <text
            className="text-4xl font-bold fill-white"
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            OwlHack
          </text>
      </motion.svg>
    </motion.div>
    )
}

