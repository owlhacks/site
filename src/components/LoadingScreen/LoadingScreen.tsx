import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/LoadingScreen.module.css";

import Heading from "@/components/Typography/Heading";
import Text from "@/components/Typography/Text";

import { AnimatePresence, motion } from "framer-motion";

type loadingProps = {
  onAnimationEnd: () => void;
};

const facts = [
  "Owls can rotate their necks 270 degrees.",
  "A group of owls is called a parliament.",
  "Hoot hoot!",
  "There are over 200 species of owl.",
  "Temple's live mascot, Stella, is a great horned owl.",
  "OwlHacks is primarily student run, with a team of over 30 people!",
  "Code Your Own Adventure!",
];

export default function LoadingScreen(props: loadingProps) {
  const handleAnimationEnd: React.AnimationEventHandler<
    HTMLHeadingElement
  > = () => {
    console.log("over");
    props.onAnimationEnd();
  };

  const [randomFact, setRandomFact] = useState<string>("");
  const init = useRef(false);

  const generateRandomFact = () => {
    if (init.current) return;
    setRandomFact(facts[Math.floor(Math.random() * facts.length)]);
    init.current = true;
  };

  useEffect(() => {
    if (init.current) return;
    generateRandomFact();
  }, []);

  return (
    <motion.div
      key="loading"
      className="flex flex-col justify-center items-center h-screen overflow-hidden bg-skin-base"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ width: 0, opacity: 0 }}
    >
      <Heading
        variant="h1"
        className={`relative font-bold text-skin-muted ${styles.loadingText}`}
        onAnimationEnd={handleAnimationEnd}
      >
        OwlHacks
      </Heading>
      <Text
        size="medium"
        className="font-semibold text-skin-muted text-center mx-4"
      >
        {randomFact}
      </Text>
    </motion.div>
  );
}
