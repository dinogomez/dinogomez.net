"use client";

import Experience from "@/components/Experience";
import Name from "../components/Name";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ClockIcon,
  CodeIcon,
  CornerBottomLeftIcon,
  DesktopIcon,
  DragHandleDots2Icon,
  EnvelopeClosedIcon,
  EyeOpenIcon,
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
      className="bg-slate-100"
      lineColor="#fcfcfc"
      cellWidth={50}
      strokeWidth={2}
      cellWidth2={50}
    >
      <main className="flex space-y-10 min-h-screen flex-col items-center lg:p-20 lg:pt-10  p-9  ">
        <div className=" container font-mono text-sm text-gray-500">
          <Link href="https://github.com/dinogomez/dinogomez.net">
            <div className="flex md:hidden justify-start items-center space-x-2 hover-blue hover:text-blue-500 hover:underline">
              <Link2Icon />
              <span className="text-green-600">root@dinogomez</span>
            </div>
          </Link>
          <div className="md:mr-5 flex  justify-between items-center flex-col lg:flex-row  ">
            <div className="flex flex-col">
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <span className="hidden md:flex md:space-x-1 md:flex-row hover-blue hover:text-blue-500 hover:underline">
                  <span className="flex justify-start items-center space-x-2">
                    <Link2Icon />
                    <span className="text-green-600">root@dinogomez</span>
                  </span>
                  <span className="text-fuchsia-600">MINGW64</span>
                  <span className="text-amber-500">
                    ~github.com/dinogomez/dinogomez.net
                  </span>
                  <span className="text-sky-600">(main)</span>
                </span>
              </Link>
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between flex-col sm:flex-row">
                  <div className="flex items-center text-gray-500 space-x-2">
                    <PersonIcon />
                    <span className="text-gray-500" suppressHydrationWarning>
                      Dino Paulo Gomez
                    </span>
                  </div>{" "}
                </div>{" "}
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
                  <DesktopIcon />
                  <span className="text-gray-500" suppressHydrationWarning>
                    Software Engineer at Infor
                  </span>
                </div>
                <div className="flex items-center text-gray-500 space-x-2">
                  <EnvelopeClosedIcon />
                  <span className="text-gray-500" suppressHydrationWarning>
                    dinogomez.dev@gmail.com
                  </span>
                </div>
                <div className="flex items-center text-gray-500 space-x-2">
                  <ClockIcon />
                  <span className="text-gray-500" suppressHydrationWarning>
                    {currentTime} (GMT+8)
                  </span>{" "}
                </div>
                <div className="mt-2 flex items-center text-gray-500 space-x-2 ">
                  <CornerBottomLeftIcon className="" />
                  <span
                    className="flex items-center space-x-2 px-2 py-1 bg-gray-400 xl:border xl:bg-gray-100 xl:text-gray-500 xl:border-gray-500 text-gray-100  lg:border-dashed hover:bg-gray-400 hover:text-white hover:border-transparent active:bg-gray-500"
                    suppressHydrationWarning
                  >
                    <CodeIcon className="" /> <span>Toggle Code Mode</span>
                  </span>{" "}
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <Draggable bounds="body">
                <div className="animate-pulse flex items-center whitespace-nowrap	p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2">
                  <DragHandleDots2Icon />
                  <span className="">Containers are Draggable</span>
                </div>
              </Draggable>
              <Draggable bounds="body">
                <div className="animate-pulse flex items-center whitespace-nowrap	p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2">
                  <EyeOpenIcon />
                  <span className="">Containers can be toggled</span>
                </div>
              </Draggable>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row space-x-4 ">
          <div className="w-full flex flex-col space-y-4">
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
