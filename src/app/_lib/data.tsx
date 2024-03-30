export const organizers: OrganizerProps[] = [
  {
    name: "Chiku Nwenyi",
    initials: "CN",
    image: "chikunwenyi.webp",
    role: "",
    description: "",
  },
  {
    name: "Seth Bernstein",
    initials: "SB",
    image: "sethbernstein.webp",
    role: "",
    description: "",
  },
  {
    name: "Andrew Tran",
    initials: "AT",
    image: "andrewtran.webp",
    role: "",
    description: "",
  },
  {
    name: "Noel Chacko",
    initials: "NC",
    image: "noelchacko.webp",
    role: "",
    description: "",
  },
  {
    name: "Egi Rama",
    initials: "ER",
    image: "egirama.webp",
    role: "",
    description: "",
  },
  {
    name: "Meng Phuykong",
    initials: "MP",
    image: "mengphuykong.webp",
    role: "",
    description: "",
  },
];

export type OrganizerProps = {
  name: string;
  initials?: string;
  image: string;
  role: string;
  description?: string;
  links?: [{ string: string }];
};
