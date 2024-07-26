/*
  Implementation of a navbar.

  Dependencies:
  - The NavLink component
  - The Text component
*/

"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import NavLink from "./NavLink";
import Text from "@/components/Typography/Text";
import Link from "next/link";

import MLHBadge from "@/assets/MLHBadge";

/*
  Variants for motion components. Includes variants for:
  - Mobile hamburger bars transitioning to an X animation
  - Mobile drawer opening and closing
*/
const topLine = {
  open: {
    rotate: 135,
    y: 8,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
};

const middleLine = {
  open: {
    opacity: 0,
    x: -15,
    transition: {
      type: "spring",
      damping: 5,
      stiffness: 100,
      mass: 0.1,
      duration: 0.15,
    },
  },
  closed: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
};

const bottomLine = {
  open: {
    rotate: -135,
    y: -8,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
  closed: {
    rotate: 0,
    transition: {
      type: "tween",
      duration: 0.25,
    },
  },
};

const drawer = {
  open: {
    x: ["-100%", 0],
    transition: {
      duration: 0.25,
      type: "tween",
    },
  },
  closed: {
    x: "-100%",
    transition: {
      duration: 0.25,
      type: "tween",
    },
  },
};

/*
  End of variants.
*/

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    isOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [isOpen]);

  return (
    <>
      {/* mobile navbar */}
      <nav className="sm:hidden block z-40 fixed select-none">
        <motion.div
          className={`space-y-1 rounded-full px-4 py-5 fixed bottom-0 right-0 m-4 z-50 bg-skin-primary cursor-pointer}`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <motion.span
            className={`w-7 h-1 bg-skin-inverted block rounded-lg`}
            variants={topLine}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className={`w-7 h-1 bg-skin-inverted block rounded-lg`}
            variants={middleLine}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className={`w-7 h-1 bg-skin-inverted block rounded-lg`}
            variants={bottomLine}
            animate={isOpen ? "open" : "closed"}
          />
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`h-full bg-skin-base fixed opacity-100 ease-in-out rounded-tr-md rounded-br-md ${
                isOpen ? "w-1/2" : "w-0 overflow-hidden"
              }`}
              variants={drawer}
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col h-full justify-center items-start space-y-5 mx-10">
                <Link
                  className="absolute left-10 top-0"
                  href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
                >
                  <MLHBadge />
                </Link>
                <div className="flex justify-center w-full">
                  <Image
                    src="/hero_content/logo.png"
                    alt="OwlHacks Logo"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="p-2  rounded-2xl">
                  <Text size="medium" className="text-skin-base font-bold">
                    Menu
                  </Text>
                </div>
                <NavLink heading="About" href="about" />
                <NavLink heading="Sponsors" href="sponsors" />

                <NavLink heading="FAQ" href="FAQ" />

                <NavLink heading="Team" href="team" />
                <NavLink
                  heading="Register"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf1y4jARVJunWbfAOvl3Jm0VMauQC3cJFEJb2l9y2CT00gjTg/viewform?usp=sf_link"
                  isLink
                  border
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div id="overlay" className="relative">
        {isOpen && (
          <div className="w-screen h-screen opacity-30 bg-black absolute " />
        )}
      </div>

      {/* desktop/tablet navbar */}
      <nav className="hidden md:block pt-5 px-5 relative">
        <ul className="flex items-center space-x-2">
          <Image
            src="/hero_content/logo.png"
            alt="OwlHacks Logo"
            width={50}
            height={50}
          />
          <Link
            className="absolute right-10 top-0"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
          >
            <MLHBadge />
          </Link>
          <NavLink heading="About" href="about" />
          <NavLink heading="Sponsors" href="sponsors" />

          <NavLink heading="FAQ" href="FAQ" />
          <NavLink heading="Team" href="team" />
          <NavLink
            heading="Register"
            href="https://docs.google.com/forms/d/e/1FAIpQLSf1y4jARVJunWbfAOvl3Jm0VMauQC3cJFEJb2l9y2CT00gjTg/viewform?usp=sf_link"
            isLink
            border
          />
        </ul>
      </nav>
    </>
  );
}
