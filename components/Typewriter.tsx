import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const Typewriter = ({ text, delay = 0, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration,
      delay,
      ease: "linear",
    });
    return controls.stop;
  }, [text, duration, delay, count]);

  return <motion.span>{displayText}</motion.span>;
};

export default Typewriter;
