import React, { ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import SectionHeading from "@/components/Sections/SectionHeading";
import SectionContent from "@/components/Sections/SectionContent";
import Text from "@/components/Typography/Text";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <SectionContent sectionId="FAQ">
      <SectionHeading>Frequently Asked Questions</SectionHeading>
      <Accordion.Root
        type="single"
        collapsible
        className="w-full md:w-2/3 md:grid md:grid-flow-col md:grid-cols-2 md:auto-rows-min"
      >
        <div className="space-y-3 last:mb-3">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is OwlHacks?</AccordionTrigger>
            <AccordionContent>
              OwlHacks is Temple University&apos;s annual hackathon where
              hackers from anywhere are invited to apply their skills and learn
              more about anything development related!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Don&apos;t have experience?</AccordionTrigger>
            <AccordionContent>
              That&apos;s completely fine! We encourage all to attend regardless
              of skill. Hackathons are a great way to develop skills alongside
              peers or individually. We will be hosting numerous workshops led
              by practiced developers and community leaders to help newcomers!
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
              project to win prizes. Most importantly, a computer with access to
              the internet is required. Don&apos;t forget to bring a sleeping
              bag, blanket, pajamas, and anything else to ensure maxiumum
              comfiness!
              <div className="mt-3">
                Food and snacks will be provided throughout the event, but feel
                free to also bring your own!
              </div>
            </AccordionContent>
          </AccordionItem>
        </div>
        <div className="space-y-3">
          <AccordionItem value="item-5">
            <AccordionTrigger>
              When does the hackathon take place?
            </AccordionTrigger>
            <AccordionContent>
              OwlHacks takes place from October 5th - 6th. Keep an eye on this
              page or our Discord for any updates.
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
              OwlHacks is directed toward university students who wish to learn
              and meet new people. While this is a Temple University affiliated
              hackathon, students from other institutions are also eligible for
              registration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Is OwlHacks in-person?</AccordionTrigger>
            <AccordionContent>
              The OwlHacks team is committed to providing the best possible
              experience, and we believe an in-person hackathon is the best way.
              While it is not mandatory to stay for the entire event, to be
              eligible for prizes{" "}
              <strong>
                you must attend registration and the award ceremony
              </strong>
              .
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion.Root>
    </SectionContent>
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
    <Accordion.Header className="flex">
      <Accordion.Trigger className="group flex h-12 flex-1 cursor-pointer items-center justify-between font-bold text-skin-base text-left text-base rounded-2xl md:hover:bg-skin-btn-hover md:px-5">
        <Text size="medium">{children}</Text>
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
      <Text size="medium" className="py-4 px-5 text-skin-muted font-semibold">
        {children}
      </Text>
    </Accordion.Content>
  );
};
