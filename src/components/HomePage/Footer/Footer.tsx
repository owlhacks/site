import Link from "next/link";
import React from "react";

import Text from "@/components/Shared/Typography/Text";
import { motion } from "framer-motion";
import { scrollToSection } from "@/utilities/scrolling";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="mx-auto h-40 overflow-hidden">
      <div className="h-px bg-skin-light" />
      <div className="flex flex-col items-center pt-2 justify-center px-10 py-4 h-full gap-y-3">
        <div className="flex flex-col text-center md:flex-row text-skin-base">
          <Text className="font-semibold text-skin-muted" size="medium">
            OwlHacks © 2025 &nbsp;&#x2022;&nbsp;
          </Text>

          <Text
            className="font-semibold text-skin-muted md:block"
            size="medium"
          >
            <Link
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
              className="underline"
            >
              Code of Conduct
            </Link>
          </Text>
          <Text
            className="font-semibold text-skin-muted hidden md:block"
            size="medium"
          >
            &nbsp;&#x2022;&nbsp;
          </Text>
          <Text size="medium" className="font-semibold text-skin-muted">
            Made with 💖 by&nbsp;
            <Link href="https://github.com/owlhacks" className="underline">
              the OwlHacks Team
            </Link>
          </Text>
        </div>
        <div className="flex gap-x-3">
          <Link
            href="https://www.linkedin.com/company/templeowlhacks/"
            target="_blank"
          >
            <svg
              className="min-w-8 text-skin-muted hover:text-skin-base"
              aria-hidden="true"
              focusable="false"
              height="1.3em"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
              />
            </svg>
          </Link>

          <Link href="https://discord.gg/haUbmXeXHA" target="_blank">
            <svg
              className="min-w-[2rem] text-skin-muted hover:text-skin-base"
              aria-hidden="true"
              focusable="false"
              height="1.3em"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
              />
            </svg>
          </Link>
          <Link href="mailto:tuowlhacks@gmail.com">
            <svg
              className="min-w-[2rem] text-skin-muted hover:text-skin-base"
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              />
            </svg>
          </Link>
          <Link href="https://instagram.com/owlhacks">
            <svg
              className="min-w-[2rem] text-skin-muted hover:text-skin-base"
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </Link>
        </div>
        <div
          className="flex gap-3 items-center cursor-pointer hover:scale-110 ease-in-out duration-100"
          onClick={() => scrollToSection("home")}
        >
          <Text className="font-semibold text-skin-muted" size="medium">
            Back to Top
          </Text>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-3 h-3  text-skin-muted"
            animate={{
              y: [0, 3, 0],
              transition: { ease: "linear", repeat: Infinity, duration: 1 },
            }}
          >
            <path
              fill="currentColor"
              d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            />
          </motion.svg>
        </div>
      </div>
    </footer>
  );
}
