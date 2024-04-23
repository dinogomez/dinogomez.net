import React from "react";

function About() {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="text-sm">About</h3>{" "}
      <p className="font-light text-sm dark:text-zinc-400 text-primary/80 text-justify">
        Hello, I'm Paul, an experienced{" "}
        <span className="dark:text-white  text-primary font-medium">
          Full Stack Engineer
        </span>{" "}
        immersed in software and web development. My passion lies in crafting
        open-source applications, solutions and tools, while collaborating with
        different developers around the world.
      </p>
      <p className="font-light text-sm dark:text-zinc-400  text-primary/80  text-justify">
        I'm currently working remote here in the{" "}
        <span className="dark:text-white  text-primary font-medium">
          Philippines
        </span>
        , deeply engaged in projects involving TypeScript, Next.js, React, C#,
        and Python. With over 3 years of experience, I've worked closely with
        companies locally and remotely with different teams worldwide.
      </p>
    </section>
  );
}

export default About;
