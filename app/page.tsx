"use client";
import { Config } from "@/lib/data";
import Hello from "./_component/section-hello";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";

import { ToggleTheme } from "@/components/ui/theme-toggle";
import { Badge } from "@/components/ui/badge";
import { Settings } from "@/components/ui/settings-dropdown";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LayoutGridIcon } from "lucide-react";
import AvatarSocials from "./_component/section-avatar-socials";
import About from "./_component/section-about";
import Experience from "./_component/section-experience";

export default function Home() {
  return (
    <div className="container md:max-w-2xl mx-auto max-w-none antialiased">
      <div className="md:p-14 p-8 pt-4 md:pt-0  space-y-5">
        <div className="text-center dark:text-muted-foreground text-primary p-5  py-20">
          <Hello />
        </div>
        <div className="flex flex-col gap-4">
          <AvatarSocials />
          <About />
          <Experience />
        </div>
      </div>
    </div>
  );
}
