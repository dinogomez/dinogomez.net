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
import Link from "next/link";

function AvatarSocials() {
  const { theme } = useTheme();

  return (
    <section className="flex justify-between items-center border rounded-md space-x-3  p-2 sm:p-4 mb-4 ">
      <div className="inline-flex items-center">
        <Logo />
        <span className="flex-grow flex flex-col pl-4 gap-1">
          <span className="text-sm md:text-md font-extrabold">
            {Config.Name}
          </span>
          <span className="text-muted-foreground text-xs ">{Config.Role}</span>
        </span>
      </div>
      <div className="md:hidden">
        <Settings />
      </div>
      <div className="hidden md:flex items-center justify-center gap-2">
        <Link href={Config.Links.Mail} target="_blank">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="icon"
          >
            <EnvelopeClosedIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <Link href={Config.Links.Github} target="_blank">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="icon"
          >
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <Link href={Config.Links.LinkedIn} target="_blank">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="icon"
          >
            <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <Link href={Config.Links.Microsoft} target="_blank">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            size="icon"
          >
            <LayoutGridIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          </Button>
        </Link>
        <ToggleTheme />
      </div>
    </section>
  );
}

export default AvatarSocials;
