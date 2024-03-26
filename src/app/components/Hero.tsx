"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Navigation from "./Navigation";

type Props = {};

export default function Hero({}: Props) {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
      console.log(Math.random() * ref.current.clientHeight);
    }
  }, [setHeight]);
  return (
    <>
      <Navigation></Navigation>
      <section className="h-screen w-screen p-6 bg-skin-body">
        <div
          className="rounded-2xl bg-skin-sky h-full w-full"
          id="sky"
          ref={ref}
        >
          <motion.svg
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            initial={{ y: `${Math.random() * height}px`, x: "-100vw" }}
            animate={{ x: "100vw", transition: { duration: 50 } }}
          >
            <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z" />
          </motion.svg>
        </div>
      </section>
    </>
  );
}
