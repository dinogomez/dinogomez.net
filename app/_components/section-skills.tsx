"use client";
import { Badge } from "@/components/ui/badge";
import { Config } from "@/lib/data";
import React from "react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h3 className="text-sm">Skills</h3>
      <div className="flex flex-wrap gap-2 max-w-2xl">
        {Config.Skills.map((skill) => (
          <div>
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Badge
                className={`border cursor-default rounded-sm bg-muted-foreground text-white border-transparent dark:bg-transparent dark:border-muted-foreground dark:text-muted-foreground text-xs p-[0.25rem] px-1 dark:hover:bg-muted-foreground dark:hover:text-primary`}
              >
                {skill}
              </Badge>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
