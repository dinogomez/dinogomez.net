"use client";
import { useTypingEffect } from "@/hooks/TypeHook";
import React, { useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component

const Name: React.FC = () => {
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

  const code = useTypingEffect(
    "// software engineer & automation engineer",
    75
  );
  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group text-md select-none" onClick={handleDivClick}>
        <div
          className="flex justify-between items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div className="group-hover:font-bold">
            [{count}] <span className=" text-rose-600">Name</span>
          </div>
          {position && (
            <div className="p-2 text-gray-500">
              {" "}
              x: {position.x.toFixed(2)}, y: {position.y.toFixed(2)}
            </div>
          )}
        </div>
        <div className="hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-move ">
          <div className="flex flex-col space-y-1  leading-none p-4">
            <span className=" font-bold font-mono">
              <span className="text-purple-600">var</span>{" "}
              <span className="text-yellow-600">name</span> : string ={" "}
              <span className="text-green-600">"dinogomez"</span>;
            </span>
            <span className="text-gray-500">
              {code} <span className="text-gray-500 caret-animation">|</span>
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Name;
