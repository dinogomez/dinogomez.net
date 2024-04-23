import { Config } from "@/lib/data";
import React from "react";
import { polyfill } from "interweave-ssr";
import { Interweave } from "interweave";
import Link from "next/link";

polyfill();
function Experience() {
  return (
    <section className="flex flex-col gap-4 text-primary">
      <h3 className="text-sm">Experience</h3>
      {Config.Experience.map((exp, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex grow-0 shrink-0 justify-between w-20">
            <p className="font-light text-xs dark:text-muted-foreground text-primary/80">
              {exp.yearX}
            </p>
            <p className="font-light text-xs dark:text-muted-foreground text-primary/80">
              —
            </p>
            <p className="font-light text-xs dark:text-muted-foreground text-primary/80 ">
              {exp.yearY}
            </p>
          </div>
          <div>
            <h4 className="leading-4 text-sm">{exp.role}</h4>
            <p className="flex items-center text-xs space-x-1 text-primary/80 dark:text-muted-foreground mt-1 mb-2 w-max">
              <span>{exp.name}</span>
              {exp.setup === "Remote" && (
                <span className="border border-green-500 text-green-500 text-xs p-[0.10rem] px-1">
                  REMOTE
                </span>
              )}
            </p>
            <p className="text-sm font-light dark:text-muted-foreground text-primary/80">
              <Interweave content={exp.desc} />
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
