import React from 'react'
import Link from "next/link";
import { MemberProps } from "../TeamMember/Member";

export default function TeamCard(props : MemberProps) {

  return (
      <div className="w-[15rem] border border-skin-lighter bg-skin-light rounded-lg">
        <div className="flex flex-col h-full justify-between  items-center p-10">
            <img className="w-24 h-24 mb-3 rounded-full object-cover"
            src={`/team/${props.image}`} alt={props.name}/>

            <h5 className="flex flex-wrap text-center mb-1 text-xl font-medium text-skin-primary dark:text-skin-primary">
              {props.name}
            </h5>

            <span className="text-sm text-white dark:text-white">
            {props.role}
            </span>

            <div className="flex items-center mt-4 md:mt-6">

            <Link
            href={props.linkedinUrl}
            target="_blank">
                <svg
                className="min-w-[2rem] text-skin-muted hover:text-skin-base"
                aria-hidden="true"
                focusable="false"
                height="1.3em"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 448 512">
                <path
                fill="#39A78E"
                d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
            </Link>

            {props.githubUrl &&
              <Link
              href={props.githubUrl}
              target="_blank">
                  <svg
                  className="min-w-[2rem] text-skin-muted hover:text-skin-base"
                  aria-hidden="true"
                  focusable="false"
                  height="1.3em"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 16 16">
                  <path fill="#39A78E" fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </Link>

            }

            </div>
          </div>
      </div>
  )
}