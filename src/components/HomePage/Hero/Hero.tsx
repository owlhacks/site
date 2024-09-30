"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      <Navigation></Navigation>
      <SectionContent sectionId="home">
        <div className="rounded-2xl block w-full overflow-hidden">
          {isMobile ? (
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
          )}
        </div>
      </SectionContent>
    </>
  );
}
