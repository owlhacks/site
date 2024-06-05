"use client";

import { scrollToSection } from "@/app/_utilities/scrolling";
import Text from "../Typography/Text";

import { MouseEventHandler, ReactNode, useState } from "react";
import { AnimatePresence, easeIn, motion, transform } from "framer-motion";

type NavLinkProps = {
  heading: string;
  href: string;
  border?: boolean;
  svgProps?: { viewBox: string; path: string; label: string };
  children?: ReactNode;
};

/*
  variants for motion components
*/
const topLine = {
  open: {
    rotate: 45,
    y: 6,
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
    x: -25,
    transition: {
      duration: 0.25,
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
    rotate: -45,
    y: -6,
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

function NavLink({ heading, href, border, svgProps, children }: NavLinkProps) {
  return (
    <li
      className={`cursor-pointer inline-flex items-center justify-center rounded-lg hover:bg-skin-btn-hover px-3 ${
        border
          ? "border-skin-inverted border-[1px] border-opacity-70 hover:border-opacity-100"
          : ""
      }`}
    >
      {/* navlink text */}
      <span
        className="select-none inline-flex items-center justify-center p-2 font-semibold"
        onClick={() => scrollToSection(href)}
      >
        <Text size="medium">{heading}</Text>
      </span>
      {/* end of navlink text */}

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
      <nav className="sm:hidden block z-40 fixed">
        <motion.div
          className={`space-y-1 rounded-br-lg p-7 absolute z-50 ${
            !isOpen && "bg-skin-base"
          }`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <motion.span
            className={`w-7 h-0.5 bg-skin-inverted block rounded-lg`}
            variants={topLine}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className={`w-7 h-0.5 bg-skin-inverted block rounded-lg`}
            variants={middleLine}
            animate={isOpen ? "open" : "closed"}
          />
          <motion.span
            className={`w-7 h-0.5 bg-skin-inverted block rounded-lg`}
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
                <NavLink heading="About" href="about" />
                <NavLink heading="Sponsors" href="sponsors" />

                <NavLink heading="FAQ" href="FAQ" />

                <NavLink heading="Team" href="team" />
                <NavLink
                  heading="Sign up with"
                  svgProps={{
                    viewBox: "0 0 640 512",
                    path: "M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z",
                    label: "Discord",
                  }}
                  href="/login"
                  border
                />
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* desktop/tablet navbar */}
      <nav className="hidden md:block pt-5 px-5">
        <ul className="space-x-8">
          <NavLink heading="About" href="about" />
          <NavLink heading="Sponsors" href="sponsors" />

          <NavLink heading="FAQ" href="FAQ" />

          <NavLink heading="Team" href="team" />
          <NavLink
            heading="Sign up with"
            svgProps={{
              viewBox: "0 0 640 512",
              path: "M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z",
              label: "Discord",
            }}
            href="/login"
            border
          />
        </ul>
      </nav>
    </>
  );
}
