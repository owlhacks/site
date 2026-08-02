"use client";
import { useState } from "react";

import Background from "@/components/Background/Background";
import About from "@/components/HomePage/About/About";
import FAQ from "@/components/HomePage/FAQ/FAQ";
import Footer from "@/components/HomePage/Footer/Footer";
import Hero from "@/components/HomePage/Hero/Hero";
import Logistics from "@/components/HomePage/Logistics/Logistics";
import Navigation from "@/components/HomePage/Navigation/Navigation";
import Sponsors from "@/components/HomePage/Sponsors/Sponsors";
import Team from "@/components/HomePage/Team/Team";
import LoadingScreen from "@/components/Shared/LoadingScreen/LoadingScreen";

import MLHBadge from "@/assets/MLHBadge";


import Endorsements from "@/components/HomePage/Endorsements/Endorsements";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

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
              rel="noopener noreferrer"
              href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            >
              <MLHBadge />
            </Link>

            <div className="w-full">
              <Navigation />
              <Hero />
            </div>

            <About />

            <Logistics />
            <Sponsors />
            <Endorsements />
            <FAQ />
            <Team />
            <Footer />
          </motion.main>
        </>

      )}
    </AnimatePresence>
  );
}
