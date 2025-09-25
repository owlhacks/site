import React from "react";

import Heading from "@/components/Shared/Typography/Heading";

import Event from "./Event";

import { SaturdayEvents, SundayEvents } from "@/lib/schedule";

type Props = {};

export default function Schedule({}: Props) {
  return (
    <section className="mx-auto p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">
      <Heading
        variant="h5"
        className="mb-1 font-bold text-skin-base dark:text-skin-muted text-left"
      >
        Saturday, September 27th
      </Heading>

      {SaturdayEvents.map((event, idx) => (
        <Event
          key={idx}
          start_time={event.start_time}
          content={event.content}
        />
      ))}

      <Heading
        variant="h5"
        className="mb-1 font-bold text-skin-base dark:text-skin-muted text-left"
      >
        Sunday, September 28th
      </Heading>

      {SundayEvents.map((event, idx) => (
        <Event
          key={idx}
          start_time={event.start_time}
          content={event.content}
        />
      ))}
    </section>
  );
}
