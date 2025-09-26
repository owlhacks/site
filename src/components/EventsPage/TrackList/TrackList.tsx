import React from "react";
import Heading from "@/components/Shared/Typography/Heading";
import Text from "@/components/Shared/Typography/Text";


const Tracks = [
  {
    title: "🌌 Spotlight Challenge: Galactic Market Challenge",
    teaserTitle: "🌌 The Big Idea",
    description: "No Code. Big Ideas. Not every hacker needs to code. This challenge is for students in business, finance, marketing, or design who want to pitch the next big venture—from Earth to orbit. Create a business plan, pitch deck, or market strategy. Propose a product or service that could exist 10+ years from now. Optional visuals (mockups, branding, demos—no code required).",
    logo_src: "/track_logo/finance.svg",
    special: true,
  },
  {
    title: "Future Mobility",
    teaserTitle: "Getting Around",
    description: "From travel solutions to smarter infrastructure, how can we reshape our cities, countries, — or even planets? Focus on innovation in transportation, sustainability, and logistics. Develop technology solutions that revolutionize how we move people and goods across the globe!",
    logo_src: "/track_logo/urban.svg",
  },
  {
    title: "Next Frontier Health (ML Track)",
    teaserTitle: "Feeling Better",
    description: "As tech pushes into new frontiers, so should healthcare. Build tools that pivot from the traditional data sets to machine learning/AI solutions to support physical or mental wellness. Develop next-gen health tech where it's needed most. Create innovative solutions that leverage AI and ML to transform healthcare delivery worldwide!",
    logo_src: "/track_logo/health.svg",
  },
  {
    title: "Equity by Design",
    teaserTitle: "For Everyone",
    description: "The future needs to work for everyone. This track is designed to make tech inclusive, and accessible. From education to public services. How do we build a better world for everyone? Develop technology solutions that break down barriers and create equitable access to opportunities for all communities worldwide!",
    logo_src: "/track_logo/education.svg",
  },
  {
    title: "Philly Special",
    teaserTitle: "Local Flavor",
    description: "The wildcard track is set for takeoff. Whether it is an intergalactic AR tour of Philly history, or a hyper-local app to provide nearby help. Anything goes. Be bold, be creative, and shoot for the stars! Develop innovative technology solutions that showcase Philadelphia's unique character and creativity!",
    logo_src: "/track_logo/bell.svg",
  }
]


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
              ? 'bg-gradient-to-tr from-[#4A0F73] from-0% to-[#81188A] to-100% border-2 border-[#F5AB4E]' 
              : 'bg-gradient-to-tr from-[#202020] from-0% to-[#292929] to-100%'
            }`}>
            <div className={`text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl left-4 -top-6
                ${props.special ? 'bg-[#F5AB4E]' : 'bg-skin-primary'}`}>

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
  // Set the reveal date - change this to when you want tracks to be visible
  const revealDate = new Date("2025-09-27T08:00:00"); // For example, January 15, 2025 at midnight
  const currentDate = new Date();
  const shouldShowTracks = currentDate >= revealDate;

  return (
  <section className="mx-32 p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">

    <Heading variant="h3" className="font-bold text-center">
      Tracks
    </Heading>

    <div className="flex flex-col gap-y-10 items-center justify-center">
        {
          Tracks.map((track, index) => (
            <TrackCard
              key = {index}
              title = {shouldShowTracks ? track.title : track.teaserTitle}
              description = {shouldShowTracks ? track.description : "Coming Soon..."}
              src = {track.logo_src}
              special = {track.special}
            />
          ))
        }
    </div>

  </section>
  );
}
