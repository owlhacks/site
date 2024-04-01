import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import Text from "../Typography/Text";
import { TeamMemberProps } from "@/app/_lib/data";
import { ReactNode } from "react";

type TooltipProps = {
  title: string;
  children: ReactNode;
};

function TeamMemberTooltip(props: TooltipProps) {
  const { title, children } = props;

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="">{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="px-2 mb-3 bg-skin-inverted text-skin-inverted rounded-md animate-slideUpAndFade ease-in-out"
            side="top"
          >
            <Text size="small" className="font-semibold">
              {title}
            </Text>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default function TeamMember(props: TeamMemberProps) {
  const { name, initials, image, className, ...content } = props;

  return (
    <TeamMemberTooltip title={name}>
      <Avatar.Root className="group">
        <Avatar.Image
          src={`/team/${image}`}
          alt={name}
          className={`w-20 h-20 object-cover object-top rounded-full ${className}`}
        />
        <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
      </Avatar.Root>
    </TeamMemberTooltip>
  );
}
