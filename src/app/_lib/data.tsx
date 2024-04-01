export const TeamMembers: TeamMemberProps[] = [
  {
    name: "Chiku Nwenyi",
    initials: "CN",
    image: "chikunwenyi.webp",
    role: "",
  },
  {
    name: "Seth Bernstein",
    initials: "SB",
    image: "sethbernstein.webp",
    role: "",
  },
  {
    name: "Andrew Tran",
    initials: "AT",
    image: "andrewtran.webp",
    role: "",
  },
  {
    name: "Noel Chacko",
    initials: "NC",
    image: "noelchacko.webp",
    role: "",
  },
  {
    name: "Egi Rama",
    initials: "ER",
    image: "egirama.webp",
    role: "",
  },
  {
    name: "Meng Phuykong",
    initials: "MP",
    image: "mengphuykong.webp",
    role: "",
  },
];

export type TeamMemberProps = {
  name: string;
  initials?: string;
  image: string;
  role: string;
  description?: string;
  links?: [{ string: string }];
  className?: string;
};
