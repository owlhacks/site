import Text from "@/components/Shared/Typography/Text";
import React from "react";

type Event = {
  title: string;
  content: string;
  guest?: string;
  type: string;
  time: string;
  location: string;
};

export default function Event(event: Event) {
  return (
    <div className="flex items-center justify-between bg-skin-light rounded-md mx-10 my-5 p-4">
      <div className="relative">
        <Text size="large" className=" font-bold">
          {event.title}
        </Text>
        <Text size="medium" className="text-skin-muted font-semibold">
          {event.time}
        </Text>
      </div>
      <Text size="medium" className="font-semibold">
        {event.content}
      </Text>
      <div>
        <Text size="small" className="font-semibold">
          At:{" "}
        </Text>
        <Text size="medium" className="font-semibold">
          {event.location}
        </Text>
      </div>
    </div>
  );
}
