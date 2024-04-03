import * as Avatar from "@radix-ui/react-avatar";
import MemberTooltip from "./MemberTooltip";

export type MemberProps = {
  name: string;
  initials?: string;
  image: string;
  role: string;
  description?: string;
  links?: [{ string: string }];
  className?: string;
};

export default function Member(props: MemberProps) {
  const { name, initials, image, className, ...content } = props;

  return (
    <Avatar.Root className="group">
      <Avatar.Image
        src={`/team/${image}`}
        alt={name}
        className={`w-20 h-20 object-cover object-top rounded-full ${className}`}
      />
      <Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
    </Avatar.Root>
  );
}
