"use client";
import {
  BorderDottedIcon,
  ChevronRightIcon,
  DragHandleDots2Icon,
  EnterFullScreenIcon,
  ExitFullScreenIcon,
  EyeClosedIcon,
  EyeOpenIcon,
  GitHubLogoIcon,
  Link2Icon,
  LinkNone2Icon,
  MinusCircledIcon,
  MinusIcon,
  PlusCircledIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
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
  const [hideAll, setHideAll] = useState(true); // State to toggle hide on all projects
  const [hideStates, setHideStates] = useState({
    A: true,
    B: true,
    C: true,
    D: true,
    E: true,
  });

  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  const setAllHideStatesToBool = (status: boolean) => {
    setHideStates((prevHideStates) => {
      const updatedHideStates = {} as {
        A: boolean;
        B: boolean;
        C: boolean;
        D: boolean;
        E: boolean;
      };
      for (const key in prevHideStates) {
        updatedHideStates[key] = status;
      }
      return updatedHideStates;
    });
  };

  const toggleHideAll = () => {
    setHideAll(!hideAll);
    setAllHideStatesToBool(!hideAll);
    console.log(hideAll);
    console.log(hideStates);
  };

  const toggleHide = (key) => {
    setHideStates((prevHideStates) => ({
      ...prevHideStates,
      [key]: !prevHideStates[key],
    }));

    console.log(hideStates);
  };
  // Function to increment the count when the div is clicked
  const handleDivClick = () => {
    setCount(count + 1);
  };

  const str1 =
    '{\r\n  "name": "dinogomez.net",\r\n  "tech": [\r\n    "nextjs",\r\n    "tailwind",\r\n    "shadcn"\r\n  ],\r\n  "desc": "My Personal Website built with NextJS and Tailwind"\r\n}';
  const str2 =
    '{\r\n  "name": "cdatajs-highlighter",\r\n  "tech": [\r\n    "vscode",\r\n    "xml",\r\n    "javascript",\r\n    "cdata"\r\n  ],\r\n  "desc": "VSCode Extension for Embedded JS Syntax Highlighting"\r\n}';
  const str3 =
    '{\r\n  "name": "SpaceCamp",\r\n  "tech": [\r\n    "vscode",\r\n    "theme"\r\n  ],\r\n  "desc": "VSCode Color Theme for the Final Frontier"\r\n}';
  const str4 =
    '{\r\n  "name": "Scholar",\r\n  "tech": [\r\n    "Python",\r\n    "NumPy"\r\n  ],\r\n  "desc": "Automated Binary Searching for Translation References"\r\n}';
  const str5 =
    '{\r\n  "name": "AutoSFA",\r\n  "tech": [\r\n    "Python",\r\n    "Playwright",\r\n    "BS4"\r\n  ],\r\n  "desc": "Task Monitoring Web Automation"\r\n}';

  const dinogomeznet = useTypingEffect(str1, 75);
  const cdata = useTypingEffect(str2, 75);
  const spacecamp = useTypingEffect(str3, 75);
  const scholar = useTypingEffect(str4, 75);
  const autosfa = useTypingEffect(str5, 75);

  return (
    <Draggable onDrag={handleDrag} bounds="body" cancel=".btn">
      <div className="group/parent text-md " onClick={handleDivClick}>
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div
            className="group-hover:font-bold flex items-center space-x-2 btn"
            onClick={toggleHideAll}
          >
            <span>
              <DragHandleDots2Icon />
            </span>
            <span> {hideAll ? <EyeClosedIcon /> : <EyeOpenIcon />}</span>{" "}
            <span className="flex space-x-1 items-center">
              <span className=" text-rose-600">Projects</span>
            </span>
          </div>
          {position && (
            <div className="p-2 text-gray-500 flex items-center">
              {" "}
              <span>
                {" "}
                x:[{position.x.toFixed(2)}],y:[{position.y.toFixed(2)}]
              </span>
              <span className="text-rose-600">[{count}]</span>
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="group/dino relative cursor-pointer">
            <div
              className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default "
              onClick={() => toggleHide("A")}
            >
              <div
                className={`${
                  hideStates["A"] ? "hidden" : ""
                } group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1`}
              >
                {hideStates["A"]}
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">Portfolio</span> {"}"} :
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
            {/* start */}
            <div
              className="flex md:hidden absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0 ml-4  mt-2 btn "
              onClick={() => toggleHide("A")}
            >
              {hideStates["A"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible">.</span>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-xs italic top-0 right-0 mt-2.5 mr-4">
              Portfolio["
              <Link
                className="btn"
                href="https://github.com/dinogomez/dinogomez.net"
              >
                <div className="underline bg-green-200  text-green-700 font-bold">
                  <span>GitHub</span>
                </div>
              </Link>
              <span>"]</span>
            </div>
            <div
              className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0  ml-4  mt-2 btn"
              onClick={() => toggleHide("A")}
            >
              {hideStates["A"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible ">Open</span>
            </div>
            <div className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mr-4  mt-2">
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                {hideAll || hideStates["A"] ? "Portfolio" : "link"}:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <Link href="https://github.com/dinogomez/dinogomez.net">
                <div className="underline btn text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </Link>
              <span>"]</span>
            </div>
            {/* end */}
          </div>

          <div className="group/dino relative cursor-pointer">
            <div
              className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default "
              onClick={() => toggleHide("B")}
            >
              <div
                className={` ${
                  hideStates["B"] ? "hidden" : ""
                } group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1`}
              >
                {" "}
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">CDATA-JS</span> {"}"} :
                  Extension = {""}
                  <span className="text-purple-600">await </span> {""}
                  <span className="text-indigo-500">getProjects</span>
                  {"();"}
                </span>
                <SyntaxHighlighter
                  language="json"
                  style={stackoverflowLight}
                  wrapLongLines
                  className="w-full max-h-48 md:max-h-72 lg:max-h-max border border-gray-200 rounded-md bg-slate-100"
                >
                  {cdata}
                </SyntaxHighlighter>
              </div>
            </div>
            {/* start */}
            <div
              className="btn flex md:hidden absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0 ml-4  mt-2 "
              onClick={() => toggleHide("B")}
            >
              {hideStates["B"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible">.</span>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-xs italic top-0 right-0 mt-2 mr-4">
              CDATA["
              <a
                className="btn"
                href="https://github.com/dinogomez/cdata-js-highlighting"
                target="_blank"
              >
                <div className="underline bg-green-200  text-green-700 font-bold">
                  <span>GitHub</span>
                </div>
              </a>
              <span>","</span>
              <a
                className="btn"
                href="https://marketplace.visualstudio.com/items?itemName=PaulGomez.cdata-js-highlighter"
                target="_blank"
              >
                <div className="underline bg-blue-200  text-blue-700 font-bold">
                  <span>Visual Studio</span>
                </div>
              </a>
              <span>"]</span>
            </div>
            <div
              className="btn hidden md:flex absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0  ml-4  mt-2 "
              onClick={() => toggleHide("B")}
            >
              {hideStates["B"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible ">Open</span>
            </div>

            <div
              className={` ${
                hideStates["B"] ? "mr-4" : "right-0 mr-4"
              } hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mt-2`}
            >
              {" "}
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                {hideAll || hideStates["B"] ? "CData" : "link"}:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <a
                className="btn"
                href="https://github.com/dinogomez/cdata-js-highlighting"
                target="_blank"
              >
                <div className="underline text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </a>
              <span>","</span>
              <a
                className="btn"
                href="https://marketplace.visualstudio.com/items?itemName=PaulGomez.cdata-js-highlighter"
                target="_blank"
              >
                <div className="underline text-gray-500 group-hover/dino:bg-blue-200  group-hover/dino:text-blue-700 group-hover/dino:font-bold">
                  <span>Visual Studio</span>
                </div>
              </a>
              "<span>]</span>
            </div>
          </div>

          <div className="group/dino relative cursor-pointer">
            <div
              className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default "
              onClick={() => toggleHide("C")}
            >
              <div
                className={` ${
                  hideStates["C"] ? "hidden" : ""
                } group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1`}
              >
                {" "}
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">SpaceCamp</span> {"}"} :
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
                  {spacecamp}
                </SyntaxHighlighter>
              </div>
            </div>
            {/* start */}
            <div
              className="btn flex md:hidden absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0 ml-4  mt-2 "
              onClick={() => toggleHide("C")}
            >
              {hideStates["B"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible">.</span>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-xs italic top-0 right-0 mt-2 mr-4">
              SpaceCamp["
              <a
                className="btn"
                href="https://github.com/dinogomez/SpaceCamp"
                target="_blank"
              >
                <div className="underline bg-green-200  text-green-700 font-bold">
                  <span>GitHub</span>
                </div>
              </a>
              <span>","</span>
              <a
                className="btn"
                href="https://marketplace.visualstudio.com/items?itemName=PaulGomez.spacecamp"
                target="_blank"
              >
                <div className="underline bg-blue-200  text-blue-700 font-bold">
                  <span>Visual Studio</span>
                </div>
              </a>
              <span>"]</span>
            </div>
            <div
              className="btn hidden md:flex absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0  ml-4  mt-2 "
              onClick={() => toggleHide("C")}
            >
              {hideStates["C"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible ">Open</span>
            </div>

            <div
              className={` ${
                hideStates["C"] ? "mr-4" : "right-0 mr-4"
              } hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mt-2`}
            >
              {" "}
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                {hideAll || hideStates["C"] ? "SpaceCamp" : "link"}:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <a
                className="btn"
                href="https://github.com/dinogomez/SpaceCamp"
                target="_blank"
              >
                <div className="underline text-gray-500 group-hover/dino:bg-green-200  group-hover/dino:text-green-700 group-hover/dino:font-bold">
                  <span>GitHub</span>
                </div>
              </a>
              <span>","</span>
              <a
                className="btn"
                href="https://marketplace.visualstudio.com/items?itemName=PaulGomez.spacecamp"
                target="_blank"
              >
                <div className="underline text-gray-500 group-hover/dino:bg-blue-200  group-hover/dino:text-blue-700 group-hover/dino:font-bold">
                  <span>Visual Studio</span>
                </div>
              </a>
              "<span>]</span>
            </div>
          </div>
          {/* start */}
          <div className="group/dino relative cursor-pointer">
            <div
              className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default "
              onClick={() => toggleHide("D")}
            >
              <div
                className={`${
                  hideStates["D"] ? "hidden" : ""
                } group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1`}
              >
                {hideStates["D"]}
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">Scholar</span> {"}"} :
                  Automation = {""}
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
                  {scholar}
                </SyntaxHighlighter>
              </div>
            </div>
            <div
              className="flex md:hidden absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0 ml-4  mt-2 btn "
              onClick={() => toggleHide("D")}
            >
              {hideStates["D"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible">.</span>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-xs italic top-0 right-0 mt-2.5 mr-4">
              Scholar["
              <a className="btn cursor-not-allowed">
                <div className="underline bg-red-200  text-red-700 font-bold">
                  <span>Proprietary</span>
                </div>
              </a>
              <span>"]</span>
            </div>
            <div
              className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0  ml-4  mt-2 btn"
              onClick={() => toggleHide("D")}
            >
              {hideStates["D"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible ">Open</span>
            </div>
            <div className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mr-4  mt-2">
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                {hideAll || hideStates["D"] ? "Scholar" : "link"}:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <a className="cursor-not-allowed">
                <div className="underline btn text-gray-500 group-hover/dino:bg-red-200  group-hover/dino:text-red-700 group-hover/dino:font-bold">
                  <span>Proprietary</span>
                </div>
              </a>
              <span>"]</span>
            </div>
          </div>
          {/* end */}
          {/* start */}
          <div className="group/dino relative cursor-pointer">
            <div
              className=" hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-default "
              onClick={() => toggleHide("E")}
            >
              <div
                className={`${
                  hideStates["E"] ? "hidden" : ""
                } group flex flex-col space-y-4 w-full  leading-none p-4 pt-6 pb-1`}
              >
                {hideStates["E"]}
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">AutoSFA</span> {"}"} :
                  Automation = {""}
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
                  {autosfa}
                </SyntaxHighlighter>
              </div>
            </div>
            <div
              className="flex md:hidden absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0 ml-4  mt-2 btn "
              onClick={() => toggleHide("E")}
            >
              {hideStates["E"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible">.</span>
            </div>
            <div className="flex md:hidden absolute  font-mono text-gray-500 items-center text-xs italic top-0 right-0 mt-2.5 mr-4">
              AutoSFA["
              <a className="btn cursor-not-allowed">
                <div className="underline bg-red-200  text-red-700 font-bold">
                  <span>Proprietary</span>
                </div>
              </a>
              <span>"]</span>
            </div>
            <div
              className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm space-x-1 top-0  ml-4  mt-2 btn"
              onClick={() => toggleHide("E")}
            >
              {hideStates["E"] ? <EnterFullScreenIcon /> : <BorderDottedIcon />}
              <span className="invisible ">Open</span>
            </div>
            <div className="hidden md:flex absolute  font-mono text-gray-500 items-center text-sm italic top-0 right-0 mr-4  mt-2">
              <span>
                <span className="group-hover/dino:hidden ">//</span>{" "}
                <span className="group-hover/dino:text-sky-500">const</span>{" "}
                {hideAll || hideStates["E"] ? "AutoSFA" : "link"}:{" "}
                <span className="group-hover/dino:text-orange-600">Links</span>{" "}
                = ["
              </span>
              <a className="cursor-not-allowed">
                <div className="underline btn text-gray-500 group-hover/dino:bg-red-200  group-hover/dino:text-red-700 group-hover/dino:font-bold">
                  <span>Proprietary</span>
                </div>
              </a>
              <span>"]</span>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;
