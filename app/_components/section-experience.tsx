import { Config } from "@/lib/data";
import React, { Suspense } from "react";
import { polyfill } from "interweave-ssr";
import { Interweave } from "interweave";
import { Link } from "next-view-transitions";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

polyfill();

const Loading = () => (
  <div className="flex gap-4">
    <div className="flex grow-0 shrink-0 justify-between w-20">
      <p className="font-light text-xs dark:text-muted-foreground text-primary/80">
        <Skeleton className="h-4 w-[250px]" />
      </p>
      <p className="font-light text-xs dark:text-muted-foreground text-primary/80">
        —
      </p>
      <p className="font-light text-xs dark:text-muted-foreground text-primary/80 ">
        <Skeleton className="h-4 w-[250px]" />
      </p>
    </div>
    <div>
      <h4 className="leading-4 text-sm">
        {" "}
        <Skeleton className="h-4 w-[250px]" />
      </h4>
      <p className="flex items-center text-xs space-x-1 text-primary/80 dark:text-muted-foreground mt-1 mb-2 w-max">
        <span>
          {" "}
          <Skeleton className="h-4 w-[250px]" />
        </span>
      </p>
      <p className="text-sm font-light dark:text-muted-foreground text-primary/80">
        {" "}
        <Skeleton className="h-4 w-[250px]" />
      </p>
    </div>
  </div>
);

function Experience() {
  return (
    <Suspense fallback={<Loading />}>
      <section className="flex flex-col gap-4 text-primary pt-3">
        {" "}
        {Config.Experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 0.5,
              ease: "easeInOut",
              delay: index * 0.1,
            }}
          >
            <div className="flex gap-4">
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
                <h4 className="leading-4 text-sm">
                  {exp.role}{" "}
                  {exp.setup === "Remote" && (
                    <span className="border bg-primary text-white border-transparent dark:bg-transparent dark:border-green-500 dark:text-green-500 text-xs p-[0.10rem] px-1">
                      REMOTE
                    </span>
                  )}
                </h4>
                <p className="flex items-center text-xs space-x-1 text-primary/80 dark:text-muted-foreground mt-1 mb-2 w-max">
                  <span>{exp.name}</span>
                </p>
                <p className="text-sm font-light dark:text-muted-foreground text-primary/80">
                  <Interweave content={exp.desc} />
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </Suspense>
  );
}

export default Experience;
