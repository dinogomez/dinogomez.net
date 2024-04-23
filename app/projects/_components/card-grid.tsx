"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Config } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { Suspense, useState } from "react";

const Loading = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full">
    <div className="relative group block p-1 h-48 w-full no-underline">
      <div className="rounded-md gap-1 text-sm h-full w-full p-4 overflow-hidden shadow-lg bg-background  border border-transparent dark:border-white/[0.2]  relative z-20 flex flex-col flex-wrap">
        <h1 className="text-md font-medium font-mono">
          {" "}
          <Skeleton className="h-4 w-[250px]" />
        </h1>
        <p className="text-xs text-zinc-400">
          {" "}
          <Skeleton className="h-4 w-[250px]" />
        </p>
      </div>
    </div>
  </div>
);

export const CardGrid = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Suspense fallback={<Loading />}>
      <motion.section
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full",
          className
        )}
      >
        {Config.Projects.map((item, idx) => (
          <Link
            href={item.url}
            key={item.url}
            target="_blank"
            className="relative group block p-1 h-48 w-full no-underline"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute rounded-md inset-0 h-full w-full bg-muted-foreground/60 dark:bg-secondary/80 block "
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <motion.div
              layoutId={`link-${idx}`}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                duration: 0.5,
                ease: "easeInOut",
                delay: idx * 0.1, // Add a delay to each link
              }}
              className="rounded-md gap-1 text-sm h-full w-full p-4 overflow-hidden shadow-lg bg-background  border border-transparent dark:border-white/[0.2]  relative z-20 flex flex-col flex-wrap"
            >
              <h1 className="text-md font-medium font-mono">{item.name}</h1>
              <p className="text-xs text-zinc-400">{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </motion.section>
    </Suspense>
  );
};
