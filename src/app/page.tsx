"use client";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQ from "./components/FAQ";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="">
      <Hero></Hero>
      <About></About>
      <FAQ></FAQ>
    </main>
  );
}
