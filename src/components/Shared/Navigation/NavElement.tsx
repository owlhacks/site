/*
 *   The links contained inside the navigation bar, designed to be customizable for future use.
 *
 *   Dependencies:
 *   - scrollToSection function for smooth scrolling.
 *   - The Text component.
 */

import React, { ReactNode } from "react";
import Link from "next/link";

import Text from "../Typography/Text";
import { scrollToSection } from "@/utilities/scrolling";

/*
 * Props for NavElement
 * @typedef {Object} NavElementProps
 * @property {string} heading - The heading of the navigation link
 * @property {string} href - The URL the link points to
 * @property {boolean} border - Optional flag to indicate if the link should have a border
 * @property {boolean} [isLink] - Optional flag to indicate if the element should be a link
 * @property {Object} [svgProps] - Optional SVG properties for an icon
 * @property {string} svgProps.viewBox - The viewBox attribute for the SVG
 * @property {string} svgProps.path - The path attribute for the SVG
 * @property {string} svgProps.label - The label for accessibility purposes
 * @property {ReactNode} [children] - Optional child elements to be rendered within the link
 *
 * @example
 * const NavElementProps: NavElementProps = {
 *   heading: "Home",
 *   href: "/home",
 *   border: true,
 *   isLink: true,
 *   svgProps: {
 *     viewBox: "0 0 24 24",
 *     path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
 *     label: "Home"
 *   },
 * };
 */
export type NavElementProps = {
  heading: string;
  href: string;
  border?: boolean;
  isLink?: boolean;
  svgProps?: { viewBox: string; path: string; label?: string };
  children?: ReactNode;
};

export default function NavElement({
  heading,
  href,
  border,
  isLink,
  svgProps,
  children,
}: NavElementProps) {
  return (
    <li
      className={`text-skin-base h-[3rem] cursor-pointer inline-flex items-center justify-center rounded-lg hover:bg-skin-btn-hover px-3 ${
        border
          ? "border-skin-inverted border-[1px] border-opacity-70 hover:border-opacity-100"
          : ""
      }`}
    >
      {isLink ? (
        <Link href={href} target="_blank" className="select-none font-semibold">
          <Text size="medium">{heading}</Text>
        </Link>
      ) : (
        <span
          className="select-none inline-flex items-center justify-center p-2 font-semibold"
          onClick={() => scrollToSection(href)}
        >
          <Text size="medium">{heading}</Text>
        </span>
      )}

      {/* svg for NavElements with icons */}
      {svgProps && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={svgProps.viewBox}
          className="w-6 h-6"
        >
          <path fill="currentColor" d={svgProps.path} />
        </svg>
      )}
      {/* end of svg for NavElements with icons */}
    </li>
  );
}
