import * as Tooltip from "@radix-ui/react-tooltip";
import { ReactNode } from "react";
import Text from "../../Typography/Text";

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
