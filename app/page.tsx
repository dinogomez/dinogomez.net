"use client";

import Experience from "@/components/Experience";
import Name from "../components/Name";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ClockIcon,
  CodeIcon,
  DesktopIcon,
  IdCardIcon,
  InfoCircledIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Projects from "../components/Projects";
import GridLines from "react-gridlines";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila" })
  );

  // Function to update the current time
  const updateCurrentTime = () => {
    const philippinesTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Manila",
    });
    setCurrentTime(philippinesTime);
  };

  useEffect(() => {
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <GridLines
      className="bg-slate-200"
      lineColor="#dedede"
      cellWidth={50}
      strokeWidth={2}
      cellWidth2={50}
    >
      <main className="flex space-y-10 min-h-screen flex-col items-center lg:p-20 p-9 ">
        <div className=" container font-mono text-sm">
          <div className="flex justify-between items-center flex-col text-gray-500 space-x-2">
            <div className="flex items-center space-x-2">
              <CodeIcon />
              <span className="hover-blue hover:text-blue-500 hover:underline">
                <span className="text-green-600"> root@dinogomez</span>{" "}
                <span className="text-fuchsia-600">MINGW64</span>{" "}
                <span className="text-yellow-500">
                  ~github.com/dinogomez/dinogomez.net
                </span>{" "}
                <span className="text-sky-600">(main)</span>
              </span>
            </div>

            <div className="animate-pulse flex items-center text-yellow-600 space-x-2">
              <InfoCircledIcon />
              <span className="">try dragging the containers.</span>
            </div>
          </div>

          <div className="flex justify-between flex-col sm:flex-row">
            <div className="flex items-center text-gray-500 space-x-2">
              <PersonIcon />
              <span className="text-gray-500" suppressHydrationWarning>
                Dino Paulo Gomez
              </span>
            </div>{" "}
          </div>
          <div className="flex flex-col">
            {" "}
            {/* <span className="text-gray-500">
              // @theme {""}
              <Link 
              root@dinogomez MINGW64 ~github.com/dinogomez/dinogomez.net (main)
                className="underline text-blue-400"
                href="https://github.com/dinogomez/SpaceCamp"
              >
                dinogomez/SpaceCamp
              </Link>
            </span> */}
            <div className="flex items-center text-gray-500 space-x-2">
              <IdCardIcon />
              <span className="text-gray-500" suppressHydrationWarning>
                Software Engineer at Infor
              </span>
            </div>
            <div className="flex items-center text-gray-500 space-x-2">
              <ClockIcon />
              <span className="text-gray-500" suppressHydrationWarning>
                {currentTime} (GMT+8)
              </span>{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row space-x-4 ">
          <div className="flex flex-col space-y-4">
            <Name />
            <Projects />
          </div>

          <div className="">
            <Experience />
          </div>
        </div>
      </main>
    </GridLines>
  );
}
