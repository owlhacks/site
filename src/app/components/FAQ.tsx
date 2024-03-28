import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <section className="h-screen w-screen p-6">
      <div className=" space-y-3 text-skin-base flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-black uppercase text-center">
          Frequently Asked Questions
        </h1>
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full md:w-2/3 md:grid md:grid-flow-col md:grid-cols-2 md:auto-rows-min"
        >
          <div>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is OwlHacks?</AccordionTrigger>
              <AccordionContent>
                OwlHacks is Temple University&apos;s annual hackathon where
                hackers from anywhere are invited to apply their skills and
                learn more about anything development related!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Don&apos;t have experience?</AccordionTrigger>
              <AccordionContent>
                That&apos;s completely fine! We encourage all to attend
                regardless of skill. Hackathons are a great way to develop
                skills alongside peers or individually. We will be hosting
                numerous workshops led by practiced developers and community
                leaders to help newcomers!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How many people can be on a team?
              </AccordionTrigger>
              <AccordionContent>
                Hackers may work individually or in a team of up to five people.
                Team up with your friends or find teammates in the{" "}
                <Link
                  className="bg-skin-discord rounded-sm p-[1px] text-skin-base"
                  href="https://discord.com/channels/1054450475505827972/1057487642180206682"
                >
                  #looking-for-team
                </Link>{" "}
                channel in our Discord!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What do I need?</AccordionTrigger>
              <AccordionContent>
                You will need to make a Devpost account in order to submit your
                project to win prizes. Most importantly, a computer with access
                to the internet is required. Don&apos;t forget to bring a
                sleeping bag, blanket, pajamas, and anything else to ensure
                maxiumum comfiness!
                <div className="mt-3">
                  Food and snacks will be provided throughout the event, but
                  feel free to also bring your own!
                </div>
              </AccordionContent>
            </AccordionItem>
          </div>
          <div>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                When does the hackathon take place?
              </AccordionTrigger>
              <AccordionContent>
                OwlHacks takes place between WIP - WIP. Keep an eye on this page
                or our Discord for any updates.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Will there be workshops?</AccordionTrigger>
              <AccordionContent>
                Yes! Previously, we have hosted workshops on web development,
                health technology, and accessibility, along with talks from
                successful people in the industry.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Who can participate?</AccordionTrigger>
              <AccordionContent>
                OwlHacks is directed toward university students who wish to
                learn and meet new people. While this is a Temple University
                affiliated hackathon, students from other institutions are also
                eligible for registration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>Is OwlHacks in-person?</AccordionTrigger>
              <AccordionContent>
                The OwlHacks team is committed to providing the best possible
                experience, and we believe an in-person hackathon is the best
                way. While it is not mandatory to stay for the entire event, to
                be eligible for prizes{" "}
                <strong>
                  you must attend registration and the award ceremony
                </strong>
                .
              </AccordionContent>
            </AccordionItem>
          </div>
        </Accordion.Root>
      </div>
    </section>
  );
}

const AccordionItem = ({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) => {
  return (
    <Accordion.Item
      className="overflow-hidden first:mt-0 focus-within:relative focus-within:z-10"
      value={value}
    >
      {children}
    </Accordion.Item>
  );
};

const AccordionTrigger = ({ children }: { children: ReactNode }) => {
  return (
    <Accordion.Header className="flex mt-3">
      <Accordion.Trigger className="group flex h-12 flex-1 cursor-pointer items-center justify-between px-5 font-bold text-skin-base hover:bg-skin-light rounded-xl text-left">
        {children}
        <ChevronDownIcon
          aria-hidden
          className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        />
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

const AccordionContent = ({ children }: { children: ReactNode }) => {
  return (
    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden pl-4">
      <div className="py-4 px-5 text-skin-muted text-sm">{children}</div>
    </Accordion.Content>
  );
};
