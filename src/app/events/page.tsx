import Schedule from "@/components/EventsPage/EventSchedule/Schedule";
import Navigation from "@/components/EventsPage/Navigation/Navigation";
import SelectionMenu from "@/components/EventsPage/SelectionMenu/SelectionMenu";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <Navigation />
      <SelectionMenu />
    </div>
  );
}
