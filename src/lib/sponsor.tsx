import type { SponsorerProps } from "@/components/HomePage/Sponsors/Sponsorer";

const Sponsor: SponsorerProps[] = [
  // {
  //   src: "/sponsor_logo/Infrasource.png",
  //   altText: "Infrasource",
  //   width: 280,
  //   height: 0,
  // },
  // {
  //   src: "/sponsor_logo/PML.png",
  //   altText: "Penn Mutual Life Insurance",
  //   width: 280,
  //   height: 0,
  // },
  {
    src: "/sponsor_logo/SAP.png",
    altText: "SAP",
    width: 200,
    height: 200,
  },
  // {
  //   src: "https://static.mlh.io/brand-assets/sponsors/stand-out-stickers/stand-out-stickers-logo.svg",
  //   altText: "StandOut Stickers",
  //   width: 220,
  //   height: 200,
  // },
  {
    src: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-white.svg",
    altText: "Major League Hacking",
    width: 220,
    height: 200,
  },
  {
    src: "/sponsor_logo/HCI.png",
    altText: "Temple Human-Computer Interaction Lab",
    width: 150,
    height: 150,
  },
  {
    src: "/sponsor_logo/ez_cater.png",
    altText: "EZ Cater",
    width: 220,
    height: 200,
  },
  {
    src: "/sponsor_logo/blackstone.png",
    altText: "Blackstone launchpad",
    width: 160,
    height: 100,
  }
];

const Donator: SponsorerProps[] = [
  {
      src: "/sponsor_logo/Wawa.png",
      altText: "Wawa",
      width:180,
      height: 0,
  },
  {
    src: "/sponsor_logo/Celcius.png",
    altText: "Celcius Energy Drink",
    width: 180,
    height: 0,
  },
  {
    src: "/sponsor_logo/RedBull.png",
    altText: "Red Bull",
    width: 180,
    height: 0,
  }
];

export {
  Sponsor,
  Donator
};