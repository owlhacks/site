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
      className="mb-1 font-bold text-skin-base dark:text-skin-muted text-left">
        Saturday, October 5th
    </Heading>

    {SaturdayEvents.map((event) => (
      <Event
      start_time={event.start_time}
      content={event.content} />
    ))}

    <Heading
      variant="h5"
      className="mb-1 font-bold text-skin-base dark:text-skin-muted text-left">
        Sunday, October 6th
    </Heading>

    {SundayEvents.map((event) => (
      <Event
      start_time={event.start_time}
      content={event.content} />
    ))}

  </section>
  );
}
