"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { Config } from "@/lib/data";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import { Suspense, useState } from "react";
import { CircleIcon, StarIcon } from "lucide-react";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import Loading from "../loading";

export const CardGrid = ({ className }: { className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { toast } = useToast();

  return (
    <Suspense fallback={<Loading />}>
      <motion.section
        id="list"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", duration: 0.5, ease: "easeInOut" }}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full",
          className
        )}
      >
        {Config.Projects.map((item, idx) => {
          const content = (
            <>
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
                whileHover={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: idx * 0.1,
                }}
                className="rounded-md gap-1 text-sm h-full w-full p-4 overflow-hidden shadow-lg bg-background  border border-transparent dark:border-white/[0.2]  relative z-20 flex flex-col flex-wrap"
              >
                <ArrowTopRightIcon className="absolute top-2 right-2 w-3 h-3" />{" "}
                {item.live ? (
                  <CircleIcon className="absolute top-2 right-5 animate-pulse mr-1 h-3 w-3 fill-green-500 text-green-500" />
                ) : (
                  <CircleIcon className="absolute top-2 right-5  mr-1 h-3 w-3 fill-muted-foreground text-muted-foreground dark:fill-zinc-800 dark:text-zinc-800 " />
                )}
                <h1 className="text-md font-medium font-mono">
                  {item.name}{" "}
                  {item.wip && (
                    <span className="text-xs border bg-blue-400 text-white border-transparent dark:bg-transparent dark:border-blue-400 px-2 dark:text-blue-400">
                      WIP
                    </span>
                  )}
                  {item.ms && (
                    <span className="text-xs border bg-green-400 text-white border-transparent dark:bg-transparent dark:border-green-400 px-2 dark:text-green-400">
                      Plugin
                    </span>
                  )}
                  {item.ppt && (
                    <span className="text-xs border bg-red-400 text-white border-transparent dark:bg-transparent dark:border-red-400 px-2 dark:text-red-400">
                      NDA
                    </span>
                  )}
                </h1>
                <p className="text-xs text-zinc-500 text-pretty font-light">
                  {item.desc}
                </p>
                <div className=" font-mono text-sm text-muted-foreground mt-auto flex">
                  <div className="mt-2 flex flex-wrap gap-1">
                    {item.tags.map((tag, index) => (
                      <Badge
                        className="badge-sm bg-primary/20 text-primary border-transparent hover:text-white dark:bg-transparent dark:border-muted-foreground dark:text-muted-foreground cursor-default rounded-sm p-0.5 px-1 dark:hover:bg-muted-foreground dark:hover:text-primary"
                        key={index}
                      >
                        {tag.toLowerCase()}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </>
          );

          return item.ppt ? (
            <div
              className="hover:pointer relative disabled group block p-1 h-48 w-full no-underline"
              onClick={() => {
                toast({
                  variant: "destructive",
                  title: "Unrestricted Access.",
                  description: "You do not have access to this repository.",
                });
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {content}
            </div>
          ) : (
            <Link
              href={item.url}
              key={item.url}
              target={item.url === "/" ? undefined : "_blank"}
              className="relative disabled group block p-1 h-48 w-full no-underline"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {content}
            </Link>
          );
        })}
      </motion.section>
    </Suspense>
  );
};
