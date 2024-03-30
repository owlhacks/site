import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { organizers, OrganizerProps } from "./../../_lib/data";
import * as Avatar from "@radix-ui/react-avatar";

type CarouselProps = {
  direction: "left" | "right";
  reverse?: boolean;
};

export default function Carousel(props: CarouselProps) {
  const { direction, reverse } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const Organizer = (props: OrganizerProps) => {
    const { name, initials, image, ...content } = props;

    return (
      <Avatar.Root className="group">
        <Avatar.Image
          src={`/team/${image}`}
          alt={name}
          className="w-20 h-20 object-cover object-top rounded-full group-hover:scale-110 cursor-pointer group-hover:border-8 border-skin-hover ease-in-out duration-100"
        />
        <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
      </Avatar.Root>
    );
  };

  return (
    <Marquee
      className="max-w-content md:max-w-[30%] overflow-hidden gradient-mask-l-[transparent,rgba(255,255,255,1.0)_20%,rgba(255,255,255,1.0)_80%]"
      pauseOnHover
      speed={30}
      direction={direction}
    >
      <ul className="flex items-center flex-nowrap animate-scroll">
        {(reverse ? [...organizers].reverse() : organizers).map(
          (organizer, index) => (
            <li key={index} className="p-2 overflow-hidden">
              <Organizer
                name={organizer.name}
                initials={organizer.initials}
                image={organizer.image}
                role={organizer.role}
                description={organizer.description}
                links={organizer.links}
              />
            </li>
          )
        )}
      </ul>
    </Marquee>
  );
}
