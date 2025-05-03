// components/Snowfall.jsx
import React from "react";
import { motion } from "framer-motion";

const snowflakes = Array.from({ length: 50 });

const Snowfall = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((_, i) => {
        const size = Math.random() * 8 + 4;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 10;
        const left = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{ y: -20 }}
            animate={{ y: "110vh" }}
            transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
            style={{
              position: "absolute",
              left: `${left}%`,
              width: size,
              height: size,
              backgroundColor: "white",
              borderRadius: "50%",
              opacity: 0.8,
              boxShadow: "0 0 10px white",
            }}
          />
        );
      })}
    </div>
  );
};

export default Snowfall;
