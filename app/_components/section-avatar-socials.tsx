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

function AvatarSocials() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <Link
        href={`mailto:dinogomez.dev@gmail.com?subject=Job%20Opportunity%20or%20Project%20Collaboration&body=Dear%20Dino,%0D%0A`}
      >
        <motion.img
          initial={{ scale: 0.5, y: 0 }}
          whileHover={{ scale: 0.6, y: -5 }}
          transition={{ duration: 0.2 }}
          className={`absolute right-[-8.4em] top-[-1.4em] -translate-y-[-2.6em]`}
          src="sticky-note.webp"
          alt="Sticky Note Light"
        />
      </Link>

      <section className="flex justify-between items-center border rounded-md space-x-3  p-2 sm:p-4 mb-4 ">
        <div className="inline-flex items-center">
          <Logo />
          <span className="flex-grow flex flex-col pl-4 gap-1">
            <span className="text-sm md:text-md font-extrabold">
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
            <div>
              <motion.div
                key={`links${index}`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Link key={index} href={Object.values(link)[0]} target="_blank">
                  <TooltipProvider delayDuration={75}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={theme === "light" ? "default" : "outline"}
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
