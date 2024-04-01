import React from "react";
import { Content, Close } from "@radix-ui/react-popover";
import type { TeamMemberProps } from "@/app/_lib/data";
import Text from "../../Typography/Text";
import TeamMember from "../TeamMember";
import { motion, AnimatePresence } from "framer-motion";

type TeamDialogContentProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: React.MouseEventHandler;
  TeamMemberProps: TeamMemberProps;
};

const CircleVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    scale: [0, 1],
    transition: {
      duration: 0.3,
    },
  },
};

export default function TeamDialogContent(props: TeamDialogContentProps) {
  const { open, setOpen, onClose, TeamMemberProps } = props;

  const MotionClose = motion(Close);

  return (
    <Content
      side="top"
      className="rounded-xl w-80 h-96 bg-skin-light border-8 border-skin-light bg-[linear-gradient(90deg,_hsla(303,_79%,_76%,_0.1)_0%,_hsla(360,_86%,_67%,_0.1)_100%)]"
      onPointerDownOutside={() => {
        setOpen(!open);
      }}
      onCloseAutoFocus={() => {
        setOpen(false);
      }}
    >
      <MotionClose
        onClick={onClose}
        className="float-right w-10 h-10 relative m-2"
        initial="initial"
        whileHover="hover"
      >
        <motion.div
          className="relative rounded-full bg-skin-lighter shadow-lg w-full h-full"
          variants={CircleVariants}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
          className="text-skin-base absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          height="1.2em"
        >
          <path
            fill="currentColor"
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </MotionClose>

      <div className="flex flex-col p-3 gap-y-2">
        <div className="flex items-center rounded-xl">
          <div className="border-4 border-skin-light flex rounded-full m-2">
            <TeamMember {...TeamMemberProps} />
          </div>
          <Text size="large" className="font-semibold">
            {TeamMemberProps.name}
          </Text>
        </div>
        <div className="rounded-xl p-2">
          <Text size="medium" className="font-bold uppercase">
            About Me
          </Text>
          <Text size="small">
            {TeamMemberProps.description ?? "Nothing to put here!"}
          </Text>
        </div>
        <div className="rounded-xl bg-skin-body p-2">
          <Text size="medium" className="font-bold uppercase">
            Role
          </Text>
          <Text size="small">{TeamMemberProps.role}</Text>
        </div>
        <div className="flex gap-x-3"></div>
      </div>

      <div className=""></div>
    </Content>
  );
}
