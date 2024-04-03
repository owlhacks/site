import React, { useState, useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { TeamMembers } from "../../_lib/data";
import { motion } from "framer-motion";
import TeamDialog from "./TeamDialog/TeamDialog";
import Member from "./TeamMember/Member";

type CarouselProps = {
  direction: "left" | "right";
  reverse?: boolean;
};

export default function Carousel(props: CarouselProps) {
  const { direction, reverse } = props;

  const [open, setOpen] = useState<boolean>(false);

  return (
    <Marquee
      className="max-w-content md:max-w-[30%] overflow-hidden gradient-mask-l-[transparent,rgba(255,255,255,1.0)_20%,rgba(255,255,255,1.0)_80%]"
      pauseOnHover
      speed={55}
      direction={direction}
      play={!open}
    >
      <ul className="animate-scroll relative">
        {(reverse ? [...TeamMembers].reverse() : TeamMembers).map(
          (member, index) => (
            <motion.li
              key={index}
              className="p-2 overflow-hidden cursor-pointer inline-block group"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setOpen(true);
              }}
            >
              <TeamDialog
                onClose={() => {
                  setOpen(!open);
                }}
                TeamMemberProps={member}
                open={open}
                setOpen={setOpen}
              >
                <Member
                  name={member.name}
                  initials={member.initials}
                  image={member.image}
                  role={member.role}
                  description={member.description}
                  links={member.links}
                  className="group-hover:border-8 border-skin-light ease-in-out duration-100"
                />
              </TeamDialog>
            </motion.li>
          )
        )}
      </ul>
    </Marquee>
  );
}
