"use client";
import React, { useState } from "react";

import Navigation from "@/components/HomePage/Navigation/Navigation";
import Hero from "@/components/HomePage/Hero/Hero";
import About from "@/components/HomePage/About/About";
import FAQ from "@/components/HomePage/FAQ/FAQ";
import Team from "@/components/HomePage/Team/Team";
import Logistics from "@/components/HomePage/Logistics/Logistics";
import Sponsors from "@/components/HomePage/Sponsors/Sponsors";
import Footer from "@/components/HomePage/Footer/Footer";
import LoadingScreen from "@/components/Shared/LoadingScreen/LoadingScreen";
import Background from "@/components/Background/Background";

import MLHBadge from "@/assets/MLHBadge";


import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Endorsements from "@/components/HomePage/Endorsements/Endorsements";
import Countdown from "@/components/HomePage/Countdown/Countdown";

type Props = {};

export default function Page({}: Props) {
  // change this back to true to enable loading
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <AnimatePresence>

      {loading ? (
        <LoadingScreen
          onAnimationEnd={() => {
            setLoading(false);
          }}
        />
      ) : (
        <>
          <Background />
          <motion.main
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
          >
            <Link
              className="md:hidden z-10 absolute right-5 top-0"
              target="_blank"
              href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=black"
            >
              <MLHBadge />
            </Link>

            <div className="w-full">
              <Navigation />
              <Hero />
            </div>

            <About />

            {/* <Logistics /> */}
            <Sponsors />
            {/* <Endorsements /> */}
            <FAQ />
            <Team />
            <Footer />
          </motion.main>
        </>

      )}
    </AnimatePresence>
  );
}
