"use client";
import { useTypingEffect } from "@/hooks/TypeHook";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable"; // Import the draggable component
import {
  EyeOpenIcon,
  EyeClosedIcon,
  DragHandleDots2Icon,
} from "@radix-ui/react-icons";
const Name: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0); // Initialize count state
  const [hide, setHide] = useState(false); // Initialize count state
  const birthdate = new Date("2000-03-17"); // Replace with your actual birthdate

  const [ageInMilliseconds, setAgeInMilliseconds] = useState(
    calculateAgeInMilliseconds()
  );

  function calculateAgeInMilliseconds() {
    const currentDate = new Date();
    return ((currentDate - birthdate) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(
      9
    );
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setAgeInMilliseconds(calculateAgeInMilliseconds());
    }, 1); // Update every millisecond

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  const handleDrag = (e: any, ui: any) => {
    const { x, y } = ui;
    setPosition({ x, y });
  };

  // Function to increment the count when the div is clicked
  const handleDivClick = () => {
    setCount(count + 1);
  };

  const toggleHide = () => {
    setHide(!hide);
  };

  const code = "// working as a Full-Stack & Automation Engineer";
  const age = useTypingEffect("// currently 23 Years Old", 75);
  const loc = useTypingEffect("// From Cebu and Manila,Philippines", 75);

  return (
    <Draggable onDrag={handleDrag} bounds="body">
      <div className="group text-md select-none" onClick={handleDivClick}>
        <div
          className="flex justify-between items-center font-mono cursor-pointer"
          // Call the function on click
        >
          <div
            className="group-hover:font-bold flex items-center space-x-2"
            onClick={toggleHide}
          >
            <span>
              <DragHandleDots2Icon />
            </span>
            <span> {hide ? <EyeClosedIcon /> : <EyeOpenIcon />}</span>

            <span className="flex">
              <span className=" text-rose-600">Info</span>
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
        <div className="hover:z-100 flex items-center justify-between py-4 border-2 border-dashed border-gray-300 hover:border-2 bg-white hover:border-blue-600 shadow-lg hover:cursor-move ">
          <div
            className={` ${
              hide ? "hidden" : ""
            } flex flex-col space-y-2 leading-none p-4`}
          >
            <span className=" font-bold font-mono">
              <span className="text-purple-600">const</span>{" "}
              <span className="text-yellow-600">name</span> : string ={" "}
              <span className="text-lime-600">"dinogomez"</span>;
            </span>
            <span className="text-gray-500 font-normal font-italic">
              {" "}
              {code}
            </span>
            {/* <span className=" font-bold font-mono">
              <span className="text-purple-600">const</span>{" "}
              <span className="text-yellow-600">location</span> : string ={" "}
              <span className="text-lime-600">"Manila"</span>;
            </span>
            <span className="text-gray-500 font-normal font-italic">
              {" "}
              {loc}
            </span> */}
            <span className=" font-bold font-mono">
              <span className="text-purple-600">const</span>{" "}
              <span className="text-yellow-600">birthday</span> : Date ={" "}
              <span className="text-indigo-500">newDate</span>(
              <span className="text-lime-600">'2000-03-17'</span>);{" "}
            </span>
            <span
              className="text-gray-500 font-normal font-italic"
              suppressHydrationWarning
            >
              // I am currently{" "}
              <span className="min-w-[7rem] inline-block">
                {ageInMilliseconds}
              </span>
              <span className="ml-1">years-old.</span>
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default Name;
