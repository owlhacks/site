import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import Text from "../Typography/Text";
import Heading from "../Typography/Heading";
import SectionHeading from "../Sections/SectionHeading";

export default function Countdown() {
  const [isFinished, setIsFinished] = useState(false);

  // countdown states
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const target = new Date("2024-10-05T08:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      //calculating days until event
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d.toString().padStart(2, "0"));

      //calculating hours until event
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h.toString().padStart(2, "0"));

      //calculating minutes until event
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m.toString().padStart(2, "0"));

      //calculating seconds until event
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s.toString().padStart(2, "0"));

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setIsFinished(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <SectionHeading>Your Adventure Begins In</SectionHeading>
      {isFinished ? (
        <>
          <Heading
            variant="h3"
            className="font-black flex space-x-3 justify-center items-end text-skin-base"
          >
            <div>0</div>
            <Text size="small" className="mb-6">
              DAYS
            </Text>
            <div>0</div>
            <Text size="small" className="mb-6">
              HOURS
            </Text>
            <div>0</div>
            <Text size="small" className="mb-6">
              MINUTES
            </Text>
            <div>0</div>
            <Text size="small" className="mb-6">
              SECONDS
            </Text>
          </Heading>
          <Text
            size="large"
            className="font-black flex space-x-3 justify-center items-end text-skin-base"
          >
            &#40;
            <motion.span
              whileInView={{
                rotate: [0, 3, -3, 0],
                transition: {
                  duration: 0.5,
                  repeatDelay: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="text-skin-primary"
            >
              Psst...
            </motion.span>{" "}
            OwlHacks is happening now&#41;
          </Text>
        </>
      ) : (
        <Heading
          variant="h3"
          className="font-black space-x-3 flex justify-center items-end text-skin-base"
        >
          <div className="w-[4.5rem]">{days}</div>
          <Text size="small" className="mb-6 text-skin-secondary">
            DAYS
          </Text>
          <div className="w-[4.5rem]">{hours}</div>
          <Text size="small" className="mb-6 text-skin-secondary">
            HOURS
          </Text>
          <div className="w-[4.5rem]">{minutes}</div>
          <Text size="small" className="mb-6 text-skin-secondary">
            MINUTES
          </Text>
          <div className="w-[4.5rem]">{seconds}</div>
          <Text size="small" className="mb-6 text-skin-secondary">
            SECONDS
          </Text>
        </Heading>
      )}
    </>
  );
}
