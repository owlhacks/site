import React from "react";

type Props = {};

export default function About({}: Props) {
  return (
    <section className="w-screen p-6">
      <div className=" space-y-3 text-skin-base flex flex-col items-center">
        <h1 className="text-center font-black text-8xl tracking-wider">
          WHAT IS OWLHACKS
        </h1>
        <p className="text-wrap font-bold text-xl w-2/3 text-skin-secondary tracking-tight">
          Welcome to OwlHacks, Temple University&apos;s annual,
          student-organized hackathon. First hosted in 2019, OwlHacks received
          outstanding projects, turnout, and support from our sponsors and
          university.
        </p>
        <p></p>
      </div>
    </section>
  );
}
