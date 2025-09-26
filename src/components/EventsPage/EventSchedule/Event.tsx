import React from "react";

import { EventType } from "@/lib/schedule";

export default function Event(event: EventType) {

  return (
    <div className="flex gap-x-3 justify-end w-2/3">

      {/* Left Content */}
      <div className="flex flex-col w-20 text-start justify-between">
        <span className="text-md text-end text-skin-muted">{event.start_time} </span>
      </div>

      {/* Middle Line */}
      <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
        <div className="relative z-10 size-7 flex justify-center items-center">
          <div className="size-2 rounded-full bg-skin-primary"></div>
        </div>
      </div>

      {/* Right Content */}
      <div className="grow pb-8 flex flex-col flex-wrap gap-y-10 w-2/3">

        {
          event.content.map((content, ind) => (
          <div className="w-full" key={`${content.title}`}>
            <span className={`flex gap-x-1.5
            text-2xl
            font-semibold
            ${content.type == 'workshop' ? 'dark:text-skin-primary' : 'dark:text-white'}
            `}>
              {content.title}
            </span>

            {content.description && <p className="mt-1 text-sm text-skin-muted">
              {content.description}
            </p>
            }

            {content.room && <p className="mt-1 text-sm font-semibold text-white">
              📍 {content.room}
            </p>
            }

            { content.guest &&
            <a href={content.linkedin_url} target="_blank">
              <button type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <img className="shrink-0 object-cover size-8 rounded-full" src={content.photo_src} alt={content.guest}/>
                    <p className="mt-1 text-lg text-white">
                      {content.guest}
                    </p>
                </button>
            </a>
            }
          </div>
          ))
        }
      </div>

    </div>
  );
}
