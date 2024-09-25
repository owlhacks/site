import React from "react";
import Link from "next/link";
import Image from "next/image";

import Heading from "../../Typography/Heading";
import Text from "../../Typography/Text";

export type CardProps = {
  name: string;
  initials?: string;
  image: string;
  role: string;
  description?: string;
  linkedinUrl: string;
  githubUrl?: string;
  websiteUrl?: string;
  className?: string;
};

export default function TeamCard(props: CardProps) {
  return (
    <div className="flex sm:flex-col sm:justify-center items-center sm:w-60 w-full sm:h-60 h-32 border border-skin-alpha bg-gradient-to-tr from-[#202020] from-0% to-[#292929] to-100% rounded-lg p-4 space-x-10 sm:space-y-5 sm:space-x-0">
      <Image
        className="w-24 h-24 rounded-full border-2 border-skin-light object-cover"
        src={`/team/${props.image}`}
        alt={props.name}
        width={150}
        height={150}
      />

      <div className="sm:flex sm:flex-col items-center">
        <Heading
          variant="h5"
          className="mb-1 text-xl font-bold text-skin-base dark:text-skin-muted text-left"
        >
          {props.name}
        </Heading>

        <span className="">
          <Text
            size="small"
            className="text-muted dark:text-skin-primary font-semibold flex items-end"
          >
            {props.role}
          </Text>
        </span>

        <div className="flex items-center space-x-3 mt-2">
          <Link href={props.linkedinUrl} target="_blank">
            <svg
              className="text-skin-muted hover:text-skin-primary"
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

          {props.githubUrl && (
            <Link href={props.githubUrl} target="_blank">
              <svg
                className="text-skin-muted hover:text-skin-primary"
                aria-hidden="true"
                focusable="false"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </Link>
          )}
          {props.websiteUrl && (
            <Link href={props.websiteUrl} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                aria-hidden="true"
                focusable="false"
                height="1.3em"
                role="img"
                className="text-skin-muted hover:text-skin-primary"
              >
                <path
                  fill="currentColor"
                  d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
