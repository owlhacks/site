"use client";
import React from "react";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Team from "@/components/Team/Team";
import Sponsors from "@/components/Sponsors/Sponsors";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";

type Props = {};

const DynamicSplashScreen = dynamic(
  () => import("@/components/SplashScreen/SplashScreen"),
  { ssr: false }
);

export default function page({}: Props) {
  return (
    <main className="">
      <DynamicSplashScreen />
      <Hero />
      <About />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </main>
  );
}
