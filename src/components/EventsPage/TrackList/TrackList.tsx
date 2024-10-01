import React from "react";
import Heading from "@/components/Shared/Typography/Heading";

type Props = {};

export default function TrackList({}: Props) {
  return (
  <section className="mx-auto p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">

    <Heading variant="h3" className="font-bold" >
      To Be Announce !
    </Heading>
    
  </section>
  );
}
