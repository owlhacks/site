"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import Countdown from "@/components/HomePage/Countdown/Countdown";
import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import Text from "@/components/Shared/Typography/Text";

import Navigation from "@/components/HomePage/Navigation/Navigation";
import SectionContent from "@/components/Shared/Sections/SectionContent";


type Props = {};

export default function Hero({}: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex flex-grow justify-center items-center min-h-screen w-full overflow-hidden">
          <div className="text-center">
            <SectionHeading >OwlHacks </SectionHeading>
            <Text size="medium" className="mb-5">
                September 27 - 28, 2025 | In Person | Temple University | 1925 N. 12th St., Philadelphia, Pa 19122
            </Text>
            <Countdown />
          </div>

          {/* {isMobile ? (
            <Image
              src="/hero_content/oh-hero-banner-mobile.svg"
              alt="Hero Banner"
              className="inset-0 object-cover"
              layout="responsive"
              width={320}
              height={640}
            />
          ) : (
            <Image
              src="/hero_content/oh-hero-banner-desktop.svg"
              alt="Hero Banner"
              layout="responsive"
              className="inset-0 object-cover"
              width={1920}
              height={960}
            />
          )} */}
        </div>
    </>
  );
}
