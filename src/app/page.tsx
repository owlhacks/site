"use client";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="space-y-10">
      <Hero></Hero>
      <About></About>
      <FAQ></FAQ>
    </main>
  );
}
