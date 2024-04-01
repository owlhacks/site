"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "../Navbar/Navbar";
import SectionContent from "../Sections/SectionContent";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <Navigation></Navigation>
      <SectionContent sectionId="hero">
        <div
          className="rounded-2xl bg-skin-sky h-screen w-full block"
          id="sky"
        ></div>
      </SectionContent>
    </>
  );
}
