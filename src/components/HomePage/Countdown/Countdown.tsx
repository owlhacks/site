"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Heading from "@/components/Shared/Typography/Heading";
import Text from "@/components/Shared/Typography/Text";

const TARGET = new Date("2026-09-26T08:00:00");

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  finished: boolean;
};

function getTimeLeft(now = Date.now()): TimeLeft {
  const difference = TARGET.getTime() - now;

  if (difference <= 0) {
    return {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
      finished: true,
    };
  }

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const s = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days: d.toString().padStart(2, "0"),
    hours: h.toString().padStart(2, "0"),
    minutes: m.toString().padStart(2, "0"),
    seconds: s.toString().padStart(2, "0"),
    finished: false,
  };
}

export default function Countdown() {
  // null until client mount — avoids SSR/hydration flash of "00"
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    const tick = () => setTime(getTimeLeft());
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return (
      <Heading
        variant="h3"
        className="font-black space-x-3 flex justify-center items-end text-skin-base mx-5 invisible"
        aria-hidden
      >
        <div className="md:w-[4.5rem] w-8">00</div>
        <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
          DAYS
        </Text>
        <div className="md:w-[4.5rem] w-8">00</div>
        <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
          HOURS
        </Text>
        <div className="md:w-[4.5rem] w-8">00</div>
        <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
          MINUTES
        </Text>
        <div className="md:w-[4.5rem] w-8">00</div>
        <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
          SECONDS
        </Text>
      </Heading>
    );
  }

  if (time.finished) {
    return (
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
    );
  }

  return (
    <Heading
      variant="h3"
      className="font-black space-x-3 flex justify-center items-end text-skin-base mx-5"
      aria-live="polite"
    >
      <div className="md:w-[4.5rem] w-8">{time.days}</div>
      <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
        DAYS
      </Text>
      <div className="md:w-[4.5rem] w-8">{time.hours}</div>
      <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
        HOURS
      </Text>
      <div className="md:w-[4.5rem] w-8">{time.minutes}</div>
      <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
        MINUTES
      </Text>
      <div className="md:w-[4.5rem] w-8">{time.seconds}</div>
      <Text size="small" className="mb-2 md:mb-6 text-skin-secondary">
        SECONDS
      </Text>
    </Heading>
  );
}
