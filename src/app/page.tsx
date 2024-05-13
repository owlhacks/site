"use client";
import React from "react";
import Hero from "./_components/Hero/Hero";
import About from "./_components/About/About";
import FAQ from "./_components/FAQ/FAQ";
import Team from "./_components/Team/Team";
import Sponsors from "./_components/Sponsors/Sponsors";
import SplashScreen from "./_components/SplashScreen/SplashScreen";
import Footer from "./_components/Footer/Footer";
import dynamic from "next/dynamic";

type Props = {};

const DynamicSplashScreen = dynamic(
  () => import("./_components/SplashScreen/SplashScreen"),
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
