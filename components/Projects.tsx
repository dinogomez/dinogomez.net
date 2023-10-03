"use client";
import { GitHubLogoIcon, Link2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React, { useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component
import { badgeVariants } from "./ui/badge";
import { useTypingEffect } from "@/hooks/TypeHook";
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Projects: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0); // Initialize count state

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  // Function to increment the count when the div is clicked
  const handleDivClick = () => {
    setCount(count + 1);
  };

  const str1 =
    '{\r\n  "name": "dinogomez.net",\r\n  "tech": [\r\n    "nextjs",\r\n    "tailwind",\r\n    "shadcn"\r\n  ],\r\n  "desc": "my personal website built with nextjs"\r\n}';
  const str2 =
    '{\r\n  "name": "cdatajs-highlighter",\r\n  "tech": [\r\n    "vscode",\r\n    "xml",\r\n    "javascript",\r\n    "cdata"\r\n  ],\r\n  "desc": "VSCode Extension for CDATA Syntax Highlighting"\r\n}';
  const dinogomeznet = useTypingEffect(str1, 75);
  const cdata = useTypingEffect(str2, 75);

  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group/parent text-md " onClick={handleDivClick}>
        <div
          className="flex justify-between items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div className="group-hover/parent:font-bold">
            [{count}] <span className=" text-rose-600">Projects</span>{" "}
          </div>{" "}
          {position && (
            <div className="p-2 text-gray-500">
              {" "}
              x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="group/dino relative">
            <div className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default ">
              <div className="group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1 ">
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">portfolio</span> {"}"} :
                  Website = {""}
                  <span className="text-purple-600">await </span> {""}
                  <span className="text-indigo-500">getProjects</span>
                  {"();"}
                </span>
                <SyntaxHighlighter
                  language="json"
                  style={stackoverflowLight}
                  wrapLongLines
                  className=" overflow-auto w-full max-h-48 md:max-h-72 lg:max-h-max border border-gray-200 rounded-md bg-slate-100"
                >
                  {dinogomeznet}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mt-2 mr-4">
              <span>["</span>
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <div className="underline text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </Link>
              <span>"]</span>
            </div>
            <div className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mt-2 mr-4">
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                links:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <div className="underline text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </Link>
              <span>"]</span>
            </div>
          </div>

          <div className="group/dino relative">
            <div className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default ">
              <div className="group flex flex-col space-y-4  leading-none p-4 pt-6 pb-1 ">
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">cdata-js</span> {"}"} :
                  Extension = {""}
                  <span className="text-purple-600">await </span> {""}
                  <span className="text-indigo-500">getProjects</span>
                  {"();"}
                </span>
                <SyntaxHighlighter
                  language="json"
                  style={stackoverflowLight}
                  wrapLongLines
                  className=" overflow-auto w-full max-h-48 md:max-h-72 lg:max-h-max border border-gray-200 rounded-md bg-slate-100"
                >
                  {cdata}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="absolute flex font-mono text-gray-500 items-center text-sm italic top-0 right-0 mt-2 mr-4">
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                links:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <div className="underline text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </Link>
              <span>","</span>
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <div className="underline text-gray-500 group-hover/dino:bg-blue-200  group-hover/dino:text-blue-700 group-hover/dino:font-bold">
                  <span>Visual Studio</span>
                </div>
              </Link>
              "<span>]</span>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;
