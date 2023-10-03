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
  Link2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Projects from "../components/Projects";
import GridLines from "react-gridlines";
import Draggable from "react-draggable";

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
      lineColor="#dedcdc"
      cellWidth={50}
      strokeWidth={2}
      cellWidth2={50}
    >
      <main className="flex space-y-10 min-h-screen flex-col items-center lg:p-20 p-9 ">
        <div className=" container font-mono text-sm text-gray-500">
          <div className="flex md:hidden justify-start items-center space-x-2 hover-blue hover:text-blue-500 hover:underline">
            <Link2Icon />
            <span className="text-green-600">root@dinogomez</span>
          </div>
          <div className="md:mr-5 flex justify-between items-center flex-col lg:flex-row  ">
            <span className="hidden md:flex  md:flex-row hover-blue hover:text-blue-500 hover:underline">
              <div className="flex justify-start items-center space-x-2">
                <Link2Icon />
                <span className="text-green-600">root@dinogomez</span>
              </div>
              <div className="ml-2 space-x-2">
                <span className="text-fuchsia-600">MINGW64</span>
                <span className="text-yellow-500">
                  ~github.com/dinogomez/dinogomez.net
                </span>
                <span className="text-sky-600">(main)</span>
              </div>
            </span>
            <Draggable bounds="body">
              <div className="animate-pulse flex items-center whitespace-nowrap	p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2">
                <InfoCircledIcon />
                <span className="">try dragging the containers.</span>
              </div>
            </Draggable>
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
