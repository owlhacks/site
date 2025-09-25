import React, { useState } from "react";
import { motion } from "framer-motion";

import Text from "@/components/Shared/Typography/Text";
import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import SectionContent from "@/components/Shared/Sections/SectionContent";
import TrackList from "@/components/EventsPage/TrackList/TrackList";
import Schedule from "@/components/EventsPage/EventSchedule/Schedule";

export default function Logistics() {
  const routes = [
    { title: "event schedule", state: "eventsTab" },
    { title: "tracks", state: "tracksTab" },
  ];

  const [hovered, setHovered] = useState<string | undefined>();
  const [selected, setSelected] = useState<string>("eventsTab");

  return (
    <SectionContent sectionId="logistics">
      <SectionHeading>Logistics</SectionHeading>

      <div className="flex gap-10 justify-center mt-10">
        {routes.map((item) => (
          <div
            key={item.state}
            onMouseEnter={() => setHovered(item.state)}
            onClick={() => setSelected(item.state)}
            className="cursor-pointer relative"
          >
            <motion.span
              className={`font-bold capitalize text-skin-base ${
                selected === item.state &&
                "text-skin-primary ease-in-out duration-300"
              }`}
            >
              {item.title}
            </motion.span>
            {hovered === item.state && (
              <motion.div
                className="rounded accent bg-skin-inverted absolute h-1 w-full"
                layoutId="accent"
                animate={{
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    duration: 0.01,
                  },
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {selected === "eventsTab" ? <Schedule /> : null}
      {selected === "tracksTab" ? <TrackList /> : null}
    </SectionContent>
  );
}
