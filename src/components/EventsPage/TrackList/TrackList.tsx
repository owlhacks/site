import React from "react";
import Heading from "@/components/Shared/Typography/Heading";
import Text from "@/components/Shared/Typography/Text";


const Tracks = [
  {
    title: "Smart Health",
    description: "Many parts of the world lack access to basic healthcare services. Technology can help bridge this gap by providing remote diagnostics, telemedicine, and affordable healthcare solutions. Develop innovative technology solutions to improve healthcare access and outcomes in regions worldwide!",
    logo_src: "/track_logo/health.svg",
  },
  {
    title: "Urban Tech",
    description: "Urban towns and cities have a host of challenges, including traffic congestion, pollution, and resource scarcity. Technology can help these cities become more sustainable, efficient, and livable by optimizing transportation systems, improving energy efficiency, and promoting smart infrastructure. Design technology to create more sustainable and equitable urban environments around the globe!",
    logo_src: "/track_logo/urban.svg",
  },
  {
    title: "Inclusive Education",
    description: "Many students face barriers to accessing quality education, such as cultural, linguistic, and socioeconomic challenges. Technology can help create more inclusive and equitable learning environments. Develop technology solutions to address barriers to education and promote inclusive learning experiences for all students worldwide!",
    logo_src: "/track_logo/education.svg",
  },
  {
    title: "Philly Special",
    description: "Philadelphia was highlighted as one of the top 10 cities to visit around the globe in the Lonely Planet’s “Best in Travel” 2024 awards because of its attractions, landmarks, and delicious food. Develop technology to further enhance Philadelphia's reputation as a global destination!",
    logo_src: "/track_logo/bell.svg",
  },
  {
    title: "Strategic Trading",
    description: "Algorithmic trading has transformed global financial markets, with over 70% of trades now executed by automated systems using quantitative models and technical indicators like Moving Averages, RSI, and MACD. This track draws inspiration from the increasing demand for innovative trading strategies that can navigate dynamic market conditions. Participants will leverage Python to develop and backtest strategies that integrate these indicators while managing risk. The challenge invites creative problem-solving and technical expertise, combining finance, data science, and programming to design trading models that excel in real-world markets.",
    logo_src: "/track_logo/finance.svg",
  }
]


type Props = {};

type TrackCardProps = {
  title: string;
  description: string;
  src: string;
};


function TrackCard(props: TrackCardProps) {

  return (
        <div className="relative p-10 rounded-2xl w-full my-4
            bg-gradient-to-tr from-[#202020] from-0% to-[#292929] to-100%
            ">
            <div className="text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-skin-primary left-4 -top-6">

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
  <section className="mx-32 p-4 gap-y-5 flex flex-col items-center mb-10 mt-5">

    <Heading variant="h3" className="font-bold text-center" >
      Tracks Will Be Announced Soon!
    </Heading>

    <Text
      size="large"
      className="text-skin-muted text-center mt-4"
    >
      Stay tuned for exciting track announcements coming soon.
    </Text>

  </section>
  );
}
