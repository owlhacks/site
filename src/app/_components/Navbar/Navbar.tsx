"use client";

import { scrollToSection } from "@/app/_utilities/scrolling";
import Text from "../Typography/Text";

import { MouseEventHandler, ReactNode, useState } from "react";
import { AnimatePresence, easeIn, motion, transform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


type NavLinkProps = {
  heading: string;
  href: string;
  border?: boolean;
  isLink?: boolean;
  svgProps?: { viewBox: string; path: string; label: string };
  children?: ReactNode;
};

/*
  variants for motion components
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
end of variants
*/

function NavLink({ heading, href, border, isLink, svgProps, children }: NavLinkProps) {
  return (
    <li
      className={`text-skin-base h-[3rem] cursor-pointer inline-flex items-center justify-center rounded-lg hover:bg-skin-btn-hover px-3 ${
        border
          ? "border-skin-inverted border-[1px] border-opacity-70 hover:border-opacity-100"
          : ""
      }`}
    >
      {
        isLink ? (
          <Link href={href} target="_blank">
            <Text size="medium">{heading}</Text>
          </Link>
        ) :

        (
          <span
            className="select-none inline-flex items-center justify-center p-2 font-semibold"
            onClick={() => scrollToSection(href)}
          >
            <Text size="medium">{heading}</Text>
          </span>
          )
      }

      {/* svg for navlinks with icons */}
      {svgProps && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svgProps.viewBox}
          className="w-6 h-6"
        >
          <path fill="currentColor" d={svgProps.path} />
        </svg>
      )}
      {/* end of svg for navlinks with icons */}
    </li>
  );
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {/* mobile navbar */}
      <nav className="sm:hidden block z-40 fixed select-none">
        <motion.div
          className={`space-y-1 rounded-full px-4 py-5 fixed bottom-0 right-0 m-4 z-50 bg-skin-primary cursor-pointer ${
            !isOpen && "bg-skin-base"
          }`}
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
              className={`h-full bg-skin-base fixed opacity-95 ease-in-out ${
                isOpen ? "w-3/4" : "w-0 overflow-hidden"
              }`}
              variants={drawer}
              animate="open"
              exit="closed"
            >
              <ul className="flex flex-col h-full justify-center items-start space-y-5 mx-10">
                <div className="flex justify-center w-full">
                  <Image
                      src="/hero_content/logo.png"
                      alt="OwlHacks Logo"
                      width={250}
                      height={250}
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

      {/* desktop/tablet navbar */}
      <nav className="hidden md:block pt-5 px-5">
        <ul className="flex items-center space-x-8">
          <Image
            src="/hero_content/logo.png"
            alt="OwlHacks Logo"
            width={100}
            height={100}
          />
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
