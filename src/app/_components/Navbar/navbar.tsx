"use client";
import { scrollToSection } from "@/app/_utilities/scrolling";
import Link from "next/link";
import React from "react";

type NavLinkProps = {
  heading: string;
  href: string;
  border?: boolean;
};

function NavLink({ heading, href, border }: NavLinkProps) {
  return (
    <li>
      <div
        className={`cursor-pointer select-none inline-flex items-center justify-center p-2 rounded-lg hover:bg-skin-btn-hover font-semibold ${
          border
            ? "border-skin-inverted border-[1px] border-opacity-70 hover:border-opacity-100"
            : ""
        }`}
        onClick={() => scrollToSection(href)}
      >
        {heading}
      </div>
    </li>
  );
}

export default function Navigation() {
  return (
    <nav className="absolute w-32 md:w-fit h-20 flex bg-skin-body rounded-xl p-5 items-center justify-center pl-10 z-100">
      <div className="flex flex-row md:hidden items-center justify-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          viewBox="0 0 448 512"
        >
          <path
            className="text-skin-base"
            fill="currentColor"
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
        <div className="text-skin-base font-bold">Menu</div>
      </div>
      <ul className="md:flex flex-row hidden items-center justify-between h-full w-full capitalize gap-x-2">
        <NavLink heading="about" href="about" />
        <NavLink heading="sponsors" href="sponsors" />
        <NavLink heading="FAQ" href="faq" />
        <NavLink heading="team" href="team" />
        <NavLink heading="sign up" href="signup" border />
      </ul>
    </nav>
  );
}
