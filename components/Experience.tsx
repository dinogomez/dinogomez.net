"use client";
import { useTypingEffect } from "@/hooks/TypeHook";
import React, { useEffect, useRef, useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component
import SyntaxHighlighter from "react-syntax-highlighter";
import { stackoverflowLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Experience: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0); // Initialize count state
  const mainRef = useRef(null);
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  // Function to increment the count when the div is clicked
  const handleDivClick = () => {
    console.log("2");

    setCount(count + 1);
  };
  const clog = "const obj = JSON.parse(Infor); \n\nconsole.log(obj);";
  const codeString =
    '{\r\n  "Infor": {\r\n    "role": "Software Engineer",\r\n    "years": 1.6,\r\n    "startDate": "May 2022",\r\n    "endDate": "present",\r\n    "responsibilities": "System Maintainance, Feature Development, Task Automation",\r\n    "techs": [\r\n      "C#",\r\n      "Javascript",\r\n      "Python"\r\n    ],\r\n    "works": [\r\n      {\r\n        "name": "Scholar",\r\n        "tech": [\r\n          "python",\r\n          "algo"\r\n        ],\r\n        "desc": "Automation tool to identify untranslated resources in a codebase."\r\n      },\r\n      {\r\n        "name": "AutoSFA",\r\n        "tech": [\r\n          "python",\r\n          "playwright",\r\n          "smptylib"\r\n        ],\r\n        "desc": "Python and Playwright-based web automation tool for task monitoring."\r\n      }\r\n    ]\r\n  }\r\n}';
  const code = useTypingEffect(codeString, 25);

  const codeString2 =
    '{\r\n  "Exist Software Labs": {\r\n    "role": "SE Intern",\r\n    "years": 0.8,\r\n    "startDate": "Aug 2021",\r\n    "endDate": "Mar 2022",\r\n    "responsibilities": "Fintech, System Maintainance",\r\n    "techs": [\r\n      "Java",\r\n      "Spring"\r\n    ]\r\n  }\r\n}';
  const clog2 = "const obj = JSON.parse(ExistSoftware); \n\nconsole.log(obj);";
  const code2 = useTypingEffect(codeString2, 25);

  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group text-md  w-f  select-none" onClick={handleDivClick}>
        <div className="flex justify-between items-center font-mono cursor-pointer">
          <div className="group-hover:font-bold">
            [{count}] <span className=" text-rose-600">Projects</span>
          </div>{" "}
          {position && (
            <div className="p-2 text-gray-500">
              x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}
            </div>
          )}
        </div>
        <div className="flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-move ">
          <div className="flex flex-col space-y-1 leading-none p-4">
            <span className="font-bold font-mono">
              <span className="text-purple-600">import </span>
              {"{"}
              <span className="text-yellow-600"> Experience </span>
              {"}"} <span className="text-purple-600">from </span>
              <span className="text-green-600">"work"</span>;
              <span className="text-emerald-500 font-normal italic">
                {" "}
                767 days (gzipped: 2.1 years of experience)
              </span>
              <br />
              <br />
              <span className="text-purple-600">const </span> {"{"}
              <span className="text-yellow-600"> Infor </span> ,{" "}
              <span className="text-yellow-600"> ExistSoftware </span>
              {"} ="} <span className="text-purple-600">await </span> {""}
              <span className="text-indigo-500">Experience</span>
              {"();"}
              <div className="my-6 font-medium">
                <SyntaxHighlighter
                  language="javascript"
                  style={stackoverflowLight}
                  wrapLongLines
                  className="overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                >
                  {clog}
                </SyntaxHighlighter>
                <SyntaxHighlighter
                  language="json"
                  style={stackoverflowLight}
                  wrapLongLines
                  className="overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                >
                  {code}
                </SyntaxHighlighter>
              </div>
              <div className="my-6 font-medium">
                <SyntaxHighlighter
                  language="javascript"
                  style={stackoverflowLight}
                  wrapLongLines
                  className="overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                >
                  {clog2}
                </SyntaxHighlighter>
                <SyntaxHighlighter
                  language="json"
                  style={stackoverflowLight}
                  wrapLongLines
                  className="overflow-auto max-h-48 md:max-h-72 lg:max-h-max"
                >
                  {code2}
                </SyntaxHighlighter>
              </div>
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Experience;
