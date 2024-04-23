"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Data } from "@/lib/data";
import { Spotlight } from "@/components/ui/spotlight";

const variants = {
  initial: {
    opacity: 0.5,
    scale: 0.5,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 50,
        restDelta: 0.001,
      },
    },
  },
  exit: {
    scale: 0.5,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1,
      // Add a slower decay to make the exit transition smoother
      decay: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
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
          <motion.div
            key={textIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold">
              {textArray[textIndex]}
            </h1>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default TextHeader;
