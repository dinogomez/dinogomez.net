"use client";

import Experience from "@/components/Experience";
import Name from "../components/Name";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  BorderDottedIcon,
  ClockIcon,
  CodeIcon,
  CornerBottomLeftIcon,
  DesktopIcon,
  DragHandleDots2Icon,
  EnterFullScreenIcon,
  EnvelopeClosedIcon,
  ExitFullScreenIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  IdCardIcon,
  InfoCircledIcon,
  Link2Icon,
  PersonIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import Projects from "../components/Projects";
import GridLines from "react-gridlines";
import Draggable from "react-draggable";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Manila" })
  );

  const [dragClick, setDragClick] = useState(false);
  const [toggleClick, setToggleClick] = useState(false);
  const [showClick, setShowClick] = useState(false);
  const [textMode, setTextMode] = useState(false);

  // Function to update the current time
  const updateCurrentTime = () => {
    const philippinesTime = new Date().toLocaleTimeString("en-US", {
      timeZone: "Asia/Manila",
    });
    setCurrentTime(philippinesTime);
  };
  const handleTextMode = () => {
    setTextMode(!textMode);
  };
  const handleToggle = () => {
    setToggleClick(!toggleClick);
  };

  const handleShow = () => {
    setShowClick(!showClick);
  };
  const handleDrag = () => {
    setDragClick(true);
  };

  const handleDragStop = () => {
    setDragClick(false);
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
                <div className="mt-2 flex md:items-center  flex-col md:flex-row text-gray-500 space-x-2 ">
                  <div className="flex">
                    <CornerBottomLeftIcon className="" />
                    <button
                      className={`${
                        textMode
                          ? "bg-blue-600 xl:border   xl:border-blue-400 hover:bg-blue-700 active:bg-blue-800"
                          : "bg-red-600 xl:border   xl:border-red-400 hover:bg-red-700 active:bg-red-800"
                      } flex items-center shadow-lg space-x-2 px-2 py-1  text-gray-100  lg:border-dashed   hover:border-transparent 0 select-none`}
                      suppressHydrationWarning
                      onClick={handleTextMode}
                    >
                      {textMode ? (
                        <div className="flex space-x-1 items-center">
                          <TextIcon className="" /> <span>Text Mode</span>
                        </div>
                      ) : (
                        <div className="flex space-x-1 items-center">
                          <CodeIcon className="" /> <span>Code Mode</span>
                        </div>
                      )}
                    </button>{" "}
                  </div>

                  <span className="font-mono text-gray-400 text-sm">
                    // 👷 work in progress
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-3 md:mt-0 flex flex-col space-y-2 hover:cursor-pointer">
              <Draggable
                bounds="body"
                onDrag={handleDrag}
                onStop={handleDragStop}
              >
                <div className="relative">
                  <div className="animate-pulse flex items-center whitespace-nowrap p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2">
                    <DragHandleDots2Icon />
                    <span className="">Draggable Containers</span>
                  </div>
                  <span className="absolute text-sm font-mono text-gray-500">
                    {dragClick ? " // I'm being dragged" : ""}
                  </span>
                </div>
              </Draggable>
              <Draggable bounds="body" cancel=".btn">
                <div
                  onClick={handleToggle}
                  className=" animate-pulse flex items-center whitespace-nowrap	p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2"
                >
                  <span className="btn">
                    {toggleClick ? <EyeClosedIcon /> : <EyeOpenIcon />}
                  </span>
                  <span className="">Toggleable Containers</span>
                </div>
              </Draggable>
              <Draggable bounds="body" cancel=".btn">
                <div
                  onClick={handleShow}
                  className="animate-pulse flex items-center whitespace-nowrap	p-1 md:p-2 border border-dashed border-pink-600 text-pink-700 space-x-2"
                >
                  <span className="btn">
                    {showClick ? <ExitFullScreenIcon /> : <BorderDottedIcon />}
                  </span>
                  <span className="">Hide/Show Containers</span>
                </div>
              </Draggable>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:space-x-4 ">
          <div className="w-full flex flex-col space-y-4">
            <Name />
            <Projects />
          </div>

          <div className="w-full">
            <Experience />
          </div>
        </div>
      </main>
    </GridLines>
  );
}
