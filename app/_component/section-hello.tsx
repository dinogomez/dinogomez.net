"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Data } from "@/lib/data";

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
        damping: 10, // Adjust the damping
        stiffness: 50, // Adjust the stiffness
        restDelta: 0.001,
      },
    },
  },

  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      type: "spring",
      duration: 0.5,
      ease: "easeInOut",
      delay: 0.1, // Add a 0.1 second delay
    },
  },
};

const Hello = () => {
  const [helloIndex, setHelloIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setHelloIndex((prevIndex) =>
        prevIndex === Data.Hello.length - 1 ? 0 : prevIndex + 1
      );
      setIsVisible(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <div className="h-[3rem]">
        {isVisible && (
          <motion.div
            key={helloIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h1 className="text-7xl font-bold">{Data.Hello[helloIndex]}</h1>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default Hello;
