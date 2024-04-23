"use client";
import { Badge } from "@/components/ui/badge";
import { Config } from "@/lib/data";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function Skills() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h3 className="text-sm">Skills</h3>
      <div className="flex flex-wrap gap-2 w-full">
        <AnimatePresence>
          {Config.Skills.map((skill, index) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              transition={{
                type: "spring",
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <Badge
                className={`border cursor-default rounded-sm bg-primary/20 text-primary hover:text-white border-transparent dark:bg-transparent dark:border-muted-foreground dark:text-muted-foreground text-xs p-[0.25rem] px-1 dark:hover:bg-muted-foreground dark:hover:text-primary`}
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Skills;
