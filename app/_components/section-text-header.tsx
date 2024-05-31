"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Data } from "@/lib/data";
import { Spotlight } from "@/components/ui/spotlight";

const variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1.05, 
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5, 
      ease: "circOut", 
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5, 
      ease: "circIn", 
    },
  },
};

const TextHeader = () => {
  const pathname = usePathname();
  const [textArray, setTextArray] = useState<string[]>([]);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (pathname === "/projects") {
      setTextArray(Data.Projects);
    } else {
      setTextArray(Data.Hello);
    }
  }, [pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTextIndex((prevIndex) =>
        prevIndex === textArray.length - 1 ? 0 : prevIndex + 1
      );
      setIsVisible(true);
    }, 2000);
    return () => clearInterval(interval);
  }, [textArray]);

  return (
    <AnimatePresence>
      <div className="h-[3rem]">
        {isVisible && (
          <motion.h1
            key={textIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-5xl sm:text-6xl md:text-7xl font-bold"          >
              {textArray[textIndex]}
          </motion.h1>
        )}
      </div>
    </AnimatePresence>
  );
};

export default TextHeader;
