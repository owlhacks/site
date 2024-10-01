"use client";
import React, { useState } from "react";

import Navigation from "@/components/HomePage/Navigation/Navigation";
import Hero from "@/components/HomePage/Hero/Hero";
import About from "@/components/HomePage/About/About";
import FAQ from "@/components/HomePage/FAQ/FAQ";
import Team from "@/components/HomePage/Team/Team";
import Logistics from "@/components/HomePage/Logistics/Countdown";
import Sponsors from "@/components/HomePage/Sponsors/Sponsors";
import Footer from "@/components/HomePage/Footer/Footer";
import LoadingScreen from "@/components/Shared/LoadingScreen/LoadingScreen";

import { AnimatePresence, motion } from "framer-motion";
import Endorsements from "@/components/HomePage/Endorsements/Endorsements";
import Countdown from "@/components/HomePage/Countdown/Countdown";

type Props = {};

export default function Page({}: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <AnimatePresence>
      {loading ? (
        <LoadingScreen
          onAnimationEnd={() => {
            setLoading(false);
          }}
        />
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
        >
          <Navigation />
          <Hero />
          <About />
          <Countdown />
          <Logistics />
          <Sponsors />
          <Endorsements />
          <FAQ />
          <Team />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
