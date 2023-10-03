"use client";
import React, { useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component

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

  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group text-md " onClick={handleDivClick}>
        <div
          className="flex justify-between items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div className="group-hover:font-bold">
            [{count}] <span className=" text-rose-600">Projects</span>
          </div>{" "}
          {position && (
            <div className="p-2 text-gray-500">
              {" "}
              x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}
            </div>
          )}
        </div>
        <div className="flex flex-col space-y-3">
          <div className="hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-green-600 shadow-lg hover:cursor-move ">
            <div className="flex flex-col space-y-1  leading-none p-4 ">
              <span className=" font-bold font-mono">
                <span className="text-purple-600">var</span>{" "}
                <span className="text-yellow-600">portfolio</span> : Project ={" "}
                {"{"}
              </span>
              <div className="py-2 flex flex-col space-y-2">
                <span className="ml-4 font-mono text-gray-500">
                  <span className="text-sky-700">name</span> :{" "}
                  <span className="text-lime-700"> "dinogomez.net"</span>,
                </span>
                <span className="ml-4 font-mono text-gray-500">
                  <span className="text-sky-700">tech</span> :
                  <span className="text-lime-700">
                    {" "}
                    <span className="text-gray-500">[</span>"NextJs"
                  </span>
                  ,<span className="text-lime-700"> "shadcn/ui"</span>,{" "}
                  <span className="text-lime-700"> "tailwind"</span>],
                </span>
                <span className="ml-4 font-mono text-gray-500">
                  <span className="text-sky-700">desc</span> :
                  <span className="text-lime-700">
                    {" "}
                    "My personal website built with NextJS"
                  </span>
                  ,
                </span>
              </div>
              <span className="font-bold font-mono">{"}"}</span>
            </div>
          </div>
          <div className="hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-green-600 shadow-lg hover:cursor-move ">
            <div className="flex flex-col space-y-1  leading-none p-4">
              <span className=" font-bold font-mono">
                <span className="text-purple-600">Projects</span>{" "}
                <span className="text-yellow-600">name</span> : string ={" "}
                <span className="text-green-600">"dinogomez"</span>;
              </span>
              <span className="text-gray-500">
                // software engineer & automation engineer
              </span>
            </div>
          </div>
          <div className="hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-green-600 shadow-lg hover:cursor-move ">
            <div className="flex flex-col space-y-1  leading-none p-4">
              <span className=" font-bold font-mono">
                <span className="text-purple-600">Projects</span>{" "}
                <span className="text-yellow-600">name</span> : string ={" "}
                <span className="text-green-600">"dinogomez"</span>;
              </span>
              <span className="text-gray-500">
                // software engineer & automation engineer
              </span>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Projects;
