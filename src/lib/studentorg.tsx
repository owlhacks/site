import type { EndorserProps } from "@/components/HomePage/Endorsements/Endorser";
{
  /* <Link
          aria-label="Temple HCI Lab"
          href="https://www.instagram.com/templehci/"
          target="_blank"
        >
          <Image
            className="w-52 h-52"
            src="/endorsement_logo/temple_hci.webp"
            alt="Temple HCI Lab"
            width={300}
            height={300}
          />
        </Link>
        <Link
          aria-label="Temple Trading Technologies"
          href="https://www.instagram.com/templetradingtech/"
          target="_blank"
          className=""
        >
          <Image
            className="w-52 h-52"
            src="/endorsement_logo/temple_trading_tech.webp"
            alt="Temple Trading Technologies"
            width={300}
            height={300}
          />
        </Link>
        <Link
          aria-label="Temple Robotics"
          href="https://www.instagram.com/templerobotics/"
          target="_blank"
        >
          <Image
            className="w-96 h-52"
            src="/endorsement_logo/temple_robotics.webp"
            alt="Temple Robotics"
            width={300}
            height={200}
          />
        </Link>
        <Link
          aria-label="Temple University Math Club"
          href="https://www.instagram.com/templeuniversitymathclub/"
          target="_blank"
        >
          <Image
            className="w-52 h-52"
            src="/endorsement_logo/temple_math.webp"
            alt="Temple Robotics"
            width={200}
            height={200}
          />
        </Link> */
}

export const StudentOrg: EndorserProps[] = [
  {
    src: "/endorsement_logo/temple_hci.svg",
    href: "https://www.instagram.com/templehci/",
    ariaLabel: "Temple HCI Lab",
    altText: "Temple HCI Lab",
    width: 100,
    height: 100,
    rounded: true,
  },
  {
    src: "/endorsement_logo/temple_trading_tech.svg",
    href: "https://www.instagram.com/templetradingtech/",
    ariaLabel: "Temple Trading Tech",
    altText: "Temple Trading Tech",
    width: 100,
    height: 100,
    rounded: true,
  },
  {
    src: "/endorsement_logo/temple_robotics.svg",
    href: "https://www.instagram.com/templerobotics/",
    ariaLabel: "Temple Robotics",
    altText: "Temple Robotics",
    width: 200,
    height: 100,
    rounded: true,
  },
  {
    src: "/endorsement_logo/temple_math.svg",
    href: "https://www.instagram.com/templeuniversitymathclub/",
    ariaLabel: "Temple Math Club",
    altText: "Temple Math Club",
    width: 100,
    height: 100,
    rounded: true,
  },
];