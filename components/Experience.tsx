"use client";
import { useTypingEffect } from "@/hooks/TypeHook";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  EyeOpenIcon,
  EyeClosedIcon,
  DragHandleDots2Icon,
} from "@radix-ui/react-icons";

const Experience: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0); // Initialize count state
  const [hide, setHide] = useState(false); // Initialize count state
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };
  const toggleHide = () => {
    setHide(!hide);
  };

  // Function to increment the count when the div is clicked
  const handleDivClick = () => {
    console.log("2");

    setCount(count + 1);
  };
  const clog = "const str = JSON.stringify(Infor); \n\nconsole.log(obj);";
  const codeString =
    '{\r\n  "Infor": {\r\n    "role": "Software Engineer",\r\n    "years": 1.6,\r\n    "startDate": "May 2022",\r\n    "endDate": "present",\r\n    "responsibilities": "System Maintainance, Feature Development, Task Automation",\r\n    "techs": [\r\n      "C#",\r\n      "Javascript",\r\n      "Python"\r\n    ],\r\n    "works": [\r\n      {\r\n        "name": "Scholar",\r\n        "tech": [\r\n          "python",\r\n          "algo"\r\n        ],\r\n        "desc": "Automation tool to identify untranslated resources in a codebase."\r\n      },\r\n      {\r\n        "name": "AutoSFA",\r\n        "tech": [\r\n          "python",\r\n          "playwright",\r\n          "smptylib"\r\n        ],\r\n        "desc": "Python and Playwright-based web automation tool for task monitoring."\r\n      }\r\n    ]\r\n  }\r\n}';
  const code = useTypingEffect(codeString, 50);

  const codeString2 =
    '{\r\n  "Exist Software Labs": {\r\n    "role": "SE Intern",\r\n    "years": 0.8,\r\n    "startDate": "Aug 2021",\r\n    "endDate": "Mar 2022",\r\n    "responsibilities": "Fintech, System Maintainance",\r\n    "techs": [\r\n      "Java",\r\n      "Spring"\r\n    ]\r\n  }\r\n}';
  const clog2 =
    "const str = JSON.stringify(ExistSoftware); \n\nconsole.log(obj);";
  const code2 = useTypingEffect(codeString2, 50);
  const code3 = useTypingEffect(
    " 767 days (gzipped: 2.1 years of experience)",
    200
  );

  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group text-md  w-f  select-none" onClick={handleDivClick}>
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div
            className="group-hover:font-bold flex items-center space-x-2"
            onClick={toggleHide}
          >
            <span>
              <DragHandleDots2Icon />
            </span>
            <span> {hide ? <EyeClosedIcon /> : <EyeOpenIcon />}</span>{" "}
            <span className="flex">
              <span className=" text-rose-600">Experience</span>
            </span>
          </div>
          {position && (
            <div className="p-2 text-gray-500 flex items-center">
              {" "}
              <span>
                {" "}
                x:[{position.x.toFixed(2)}], y:[{position.y.toFixed(2)}]
              </span>
              <span className="text-rose-600">[{count}]</span>
            </div>
          )}
        </div>
        <div className="md:w-[54em] flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-move ">
          <div
            className={` ${
              hide ? "hidden" : ""
            } flex w-full flex-col space-y-2 leading-none p-4`}
          >
            {" "}
            <span className="w-full font-bold font-mono">
              <span className="text-purple-600">import </span>
              {"{"}
              <span className="text-yellow-600"> Experience </span>
              {"}"} <span className="text-purple-600">from </span>
              <span className="text-lime-600">"work"</span>;
              <span className="text-green-500 font-normal italic">
                {code3}{" "}
              </span>
              <br />
              <br />
              <div className="my-3">
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">Infor</span> {"}"} : Company
                  = {""}
                  <span className="text-purple-600">await </span> {""}
                  <span className="text-indigo-500">Experience</span>
                  {"();"}
                </span>
              </div>
              <ScrollArea className=" w-full border border-gray-200 rounded-md bg-slate-100 mt-3">
                <div className="w-full font-medium">
                  <SyntaxHighlighter
                    language="json"
                    style={stackoverflowLight}
                    wrapLongLines
                    className="w-full overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </ScrollArea>
              <div className="my-4">
                <span className=" font-bold font-mono">
                  <span className="text-purple-600">const</span>
                  {" { "}
                  <span className="text-yellow-600">
                    ExistSoftwareLabsInc.
                  </span>{" "}
                  {"}"} : Company = {""}
                  <span className="text-purple-600">await </span> {""}
                  <span className="text-indigo-500">Experience</span>
                  {"();"}
                </span>
              </div>
              <ScrollArea className=" border border-gray-200 rounded-md bg-slate-100 mt-3">
                <div className="my-6 font-medium">
                  <SyntaxHighlighter
                    language="json"
                    style={stackoverflowLight}
                    wrapLongLines
                    className="overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                  >
                    {code2}
                  </SyntaxHighlighter>
                </div>
              </ScrollArea>
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Experience;
