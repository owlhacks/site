import React, { ReactNode, useEffect, useRef } from "react";
import { Root, Trigger, Portal } from "@radix-ui/react-popover";
import TeamDialogContent from "./TeamDialogContent";
import type { MemberProps } from "../TeamMember/Member";

type TeamDialogProps = {
  children: ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: React.MouseEventHandler;
  TeamMemberProps: TeamMemberProps;
};

export default function TeamDialog(props: TeamDialogProps) {
  const { children, open, setOpen, onClose, TeamMemberProps } = props;

  return (
    <Root>
      <Trigger>{children}</Trigger>
      <Portal>
        <TeamDialogContent
          open={open}
          setOpen={setOpen}
          onClose={onClose}
          TeamMemberProps={TeamMemberProps}
        />
      </Portal>
    </Root>
  );
}
