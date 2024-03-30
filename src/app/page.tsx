"use client";
import React from "react";
import Hero from "./_components/Hero/hero";
import About from "./_components/About/about";
import FAQ from "./_components/FAQ/FAQ";
import Team from "./_components/Team/team";
import Sponsors from "./_components/Sponsors/sponsors";
import Footer from "./_components/Footer/footer";

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
