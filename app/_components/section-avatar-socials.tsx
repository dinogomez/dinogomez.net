"use client";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ToggleTheme } from "@/components/ui/theme-toggle";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { LayoutGridIcon } from "lucide-react";
import React from "react";
import { Config } from "@/lib/data";
import { useTheme } from "next-themes";
import { Settings } from "@/components/ui/settings-dropdown";
import { Link } from "next-view-transitions";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

function AvatarSocials() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      {Config.openForWork ? ( <Link
        href={`mailto:dinogomez.dev@gmail.com?subject=Job%20Opportunity%20or%20Project%20Collaboration&body=Dear%20Dino,%0D%0A`}
      >
        <motion.img
          initial={{ scale: 0.6, y: 0 }}
          whileHover={{ scale: 0.8, y: -5 }}
          transition={{ duration: 0.2 }}
          className={`antialiased absolute right-[-5.5em] top-[0.3em]  sm:top-[2.3em] -translate-y-[-2.9em]`}
          src="sticky-note.png"
          alt="Sticky Note Open For Work"  
          style={{ imageRendering: "crisp-edges" }}
        />
      </Link>) : <Image width={100} height={100}  className="antialiased absolute right-[-3.5em]   sm:top-[2.3em] -translate-y-[-2em]" src="/sticky-note-closed.png" alt="Sticky Note Closed For Work"/>}
     

      <section className="flex justify-between items-center border rounded-md space-x-3  p-2 sm:p-4 mb-4 ">
        <div className="inline-flex items-center">
          <Logo />
          <span className="flex-grow flex flex-col pl-4 gap-1">
            <span className="text-sm md:text-md font-semibold">
              {Config.Name}
            </span>
            <span className="text-muted-foreground text-xs ">
              {Config.Role}
            </span>
          </span>
        </div>
        <div className="sm:hidden">
          <Settings />
        </div>
        <div className="hidden sm:flex items-center justify-center gap-2">
          {Config.Links.map((link, index) => (
            <div key={`links${index}`}>
              <motion.div
                whileHover={{ scale: 1.19 }}
                transition={{ duration: 0.2 }}
              >
                <Link key={index} href={Object.values(link)[0]} target="_blank">
                  <TooltipProvider delayDuration={75}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          className="shadow-md"
                          variant={"outline"}
                          size="icon"
                        >
                          {React.createElement(Object.values(link)[1], {
                            className:
                              "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
                          })}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{link.tt}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </motion.div>
            </div>
          ))}
          <ToggleTheme />
        </div>
      </section>
    </div>
  );
}

export default AvatarSocials;
