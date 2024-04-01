"use client";
import React from "react";
import Hero from "./_components/Hero/Hero";
import About from "./_components/About/About";
import FAQ from "./_components/FAQ/FAQ";
import Team from "./_components/Team/Team";
import Sponsors from "./_components/Sponsors/Sponsors";
import Footer from "./_components/Footer/Footer";

type Props = {};

export default function page({}: Props) {
  return (
    <main className="">
      <Hero />
      <About />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
}
