"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

import * as Tooltip from "@radix-ui/react-tooltip";

type Props = {};

type NavLinkProps = {
  heading: string;
  href: string;
  border?: boolean;
};

function NavLink({ heading, href, border }: NavLinkProps) {
  return (
    <li>
      <Link
        className={`select-none inline-flex items-center justify-center p-2 rounded-lg hover:bg-skin-btn-hover font-semibold ${
          border
            ? "border-skin-base border-[1px] border-opacity-70 hover:border-opacity-100"
            : ""
        }`}
        href={href}
      >
        {heading}
      </Link>
    </li>
  );
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div
            className="border-[1px] border-skin-base rounded-lg p-2 hover:bg-skin-btn-hover cursor-pointer"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className="text-skin-base"
                  fill="currentColor"
                  d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  className="text-skin-base"
                  fill="currentColor"
                  d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
                />
              </svg>
            )}
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="bottom"
            className="bg-skin-light rounded-xl p-2 mt-2 select-none shadow-md text-skin-base"
          >
            {theme === "light" ? "Lights off" : "Lights on"}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default function Navigation({}: Props) {
  return (
    <nav className="absolute w-32 md:w-96 h-20 flex bg-skin-body rounded-xl p-5 items-center justify-center md:ml-32 z-100">
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
        <div className="text-skin-base">Menu</div>
      </div>
      <ul className="md:flex flex-row hidden items-center justify-between h-full w-full capitalize">
        <NavLink heading="about" href="#about" />
        <NavLink heading="sponsors" href="#sponsors" />
        <NavLink heading="FAQ" href="#faq" />
        <NavLink heading="sign up" href="#signup" border />
      </ul>
    </nav>
  );
}
