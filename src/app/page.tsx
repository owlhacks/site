"use client";
import React, { useState } from "react";

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import FAQ from "@/components/FAQ/FAQ";
import Team from "@/components/Team/Team";
import Sponsors from "@/components/Sponsors/Sponsors";
import Footer from "@/components/Footer/Footer";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

import { AnimatePresence, motion } from "framer-motion";
import Endorsements from "@/components/Endorsements/Endorsements";
import Countdown from "@/components/Countdown/Countdown";

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
          <Hero />
          <About />
          <Countdown />
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
