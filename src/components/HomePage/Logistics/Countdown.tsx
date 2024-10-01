import React, { useEffect, useState } from "react";

import Text from "@/components/Shared/Typography/Text";
import SectionHeading from "@/components/Shared/Sections/SectionHeading";
import SectionContent from "@/components/Shared/Sections/SectionContent";
import Button from "@/components/Shared/Button/Button";
import Link from "next/link";

export default function Logistics() {

  return (
    <SectionContent sectionId="logistics">
      <SectionHeading>Logistics</SectionHeading>

      <Text
        className="font-bold text-center text-skin-base tracking-tight"
        size="large"
      >
        Tracks and Schedule information is available below.
      </Text>

      <Link href="/events">
        <Button
          height={50}
          onClick={() => {}}
          ismotion
          variants={{ onclick: { scale: 1.1 } }}
          whileTap="onclick"
          className="font-semibold text-skin-base"
        >
          Schedule and Tracks Information!
        </Button>
      </Link>


    </SectionContent>
  );
}
