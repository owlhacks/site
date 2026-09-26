import React from "react";
import Heading from "@/components/Shared/Typography/Heading";
import Text from "@/components/Shared/Typography/Text";


type Track = {
  title: string;
  description: string;
  logo_src: string;
  special?: boolean;
};

const Tracks: Track[] = [
  {
    title: "Health and Wellness",
    description:
      "Build tech that actually helps people feel better. We are looking for smart designs and practical tools that tackle real-world health challenges, whether that is physical fitness, mental health, or community medical care. Bring your best ideas to improve human lives.",
    logo_src: "/track_logo/health.svg",
  },
  {
    title: "AI & Agents",
    description:
      "Some parts of the tech ocean are still filled with mysteries waiting to be explored, and AI & Agents might be the deepest trench of them all. Build agents or intelligent tools that can think and act on their own, and push the boundaries of what\u2019s possible.",
    logo_src: "/track_logo/ai.svg",
  },
  {
    title: "Sustainability",
    description:
      "Every tide tells a story about the health of our planet. Build solutions that support it, from clean energy to conservation and marine protection\u2014just make it count.",
    logo_src: "/track_logo/sustainability.svg",
  },
  {
    title: "Human-Computer Interaction (HCI)",
    description:
      "This track challenges you to build intuitive interfaces, accessible designs, or novel ways for humans to interact with digital systems. Whether you are rethinking everyday apps or building next-generation hardware interfaces, your goal is to make technology more accessible and seamless to use.",
    logo_src: "/track_logo/hci.svg",
  },
  {
    title: "Philly Special",
    description:
      "This wildcard track is for any idea that doesn\u2019t fit neatly into a single harbor\u2014maybe it\u2019s a water quality tracker for the Schuylkill\u2019s riverfront, maybe it\u2019s something nobody\u2019s thought of yet. However you steer it, make a splash.",
    logo_src: "/track_logo/bell.svg",
  },
];


type Props = {};

type TrackCardProps = {
  title: string;
  description: string;
  src: string;
  special?: boolean;
};


function TrackCard(props: TrackCardProps) {

  return (
        <div className={`relative p-10 rounded-2xl w-full my-4
            ${props.special 
              ? 'bg-gradient-to-tr from-[#142987] from-0% to-[#2d85eb] to-100% border-2 border-[#ffe66d]' 
              : 'bg-gradient-to-tr from-[#0f1c4d] from-0% to-[#142987] to-100%'
            }`}>
            <div className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6
                ${props.special ? 'bg-[#ffe66d]' : 'bg-skin-primary'}`}>

                <img
                  src={props.src}
                  alt="Track Logo"
                  width={30}
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-5">
              <Heading
                variant="h5"
                className="mb-1 font-bold text-left"
              >
                {props.title}
              </Heading>
              <Text
                size="medium"
                className="text-skin-muted font-semibold flex items-end leading-7"
              >
                {props.description}
              </Text>
            </div>
        </div>
  )
}


export default function TrackList({}: Props) {
  return (
  <section className="md:mx-32 p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">

    <Heading variant="h3" className="font-bold text-center">
      Tracks
    </Heading>

    <div className="flex flex-col gap-y-10 items-center justify-center">
        {
          Tracks.map((track, index) => (
            <TrackCard
              key={index}
              title={track.title}
              description={track.description}
              src={track.logo_src}
              special={track.special}
            />
          ))
        }
    </div>

  </section>
  );
}
