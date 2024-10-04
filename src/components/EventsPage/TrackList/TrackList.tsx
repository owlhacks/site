import React from "react";
import Heading from "@/components/Shared/Typography/Heading";
import Text from "@/components/Shared/Typography/Text";


const Tracks = [
  {
    title: "Smart Health",
    description: "Many parts of the world lack access to basic healthcare services. Technology can help bridge this gap by providing remote diagnostics, telemedicine, and affordable healthcare solutions. Develop innovative technology solutions to improve healthcare access and outcomes in regions worldwide!"
  },
  {
    title: "Urban Tech",
    description: "Urban towns and cities have a host of challenges, including traffic congestion, pollution, and resource scarcity. Technology can help these cities become more sustainable, efficient, and livable by optimizing transportation systems, improving energy efficiency, and promoting smart infrastructure. Design technology to create more sustainable and equitable urban environments around the globe!"
  },
  {
    title: "Inclusive Education",
    description: "Many students face barriers to accessing quality education, such as cultural, linguistic, and socioeconomic challenges. Technology can help create more inclusive and equitable learning environments. Develop technology solutions to address barriers to education and promote inclusive learning experiences for all students worldwide!"
  },
  {
    title: "Philly Special",
    description: "Philadelphia was highlighted as one of the top 10 cities to visit around the globe in the Lonely Planet’s “Best in Travel” 2024 awards because of its attractions, landmarks, and delicious food. Develop technology to further enhance Philadelphia's reputation as a global destination!"
  },
  {
    title: "Strategic Trading",
    description: "Businesses across the globe are increasingly incorporating machine learning to improve their financial operations and decision-making. This includes tasks such as fraud detection, risk assessment, personalized financial advice, and algorithmic trading. Businesses leverage machine learning to gain a competitive advantage, reduce costs, and enhance customer satisfaction. Take part in this all-new track and take advantage of machine learning to address global financial challenges!"
  }
]


type Props = {};

type TrackCardProps = {
  title: string;
  description: string;
};


function TrackCard(props: TrackCardProps) {

  return (
        <div className="relative p-10 rounded-2xl w-full my-4
            bg-gradient-to-tr from-[#202020] from-0% to-[#292929] to-100%
            ">
            <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-skin-primary left-4 -top-6">

                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
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
  <section className="mx-32 p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">

    {(new Date()) <= (new Date("2024-10-05")) &&
    <Heading variant="h3" className="font-bold" >
      To Be Announce !
    </Heading>
    }

    {(new Date()) >= (new Date("2024-10-05")) &&
    <div>
      <Heading variant="h3" className="font-bold text-center">
        Tracks
      </Heading>


      <div className="flex flex-col gap-y-10 items-center justify-center">
          {
            Tracks.map((track, index) => (
              <TrackCard
                key = {index}
                title = {track.title}
                description = {track.description}
              />
            ))
          }
      </div>
    </div>
    }

  </section>
  );
}
