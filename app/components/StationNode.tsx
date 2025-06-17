"use client";

import { motion } from "framer-motion";
import { Station } from "../types/station";
import Link from "next/link";

interface StationNodeProps {
  station: Station;
  index: number;
}

export default function StationNode({ station, index }: StationNodeProps) {
  const getLineColor = (line: string) => {
    const colorMap: { [key: string]: string } = {
      "1": "#FF0000",
      "2": "#FF0000",
      "3": "#FF0000",
      "4": "#00943A",
      "5": "#00943A",
      A: "#0039A6",
      C: "#0039A6",
      N: "#FCCC0A",
      Q: "#FCCC0A",
      R: "#FCCC0A",
      W: "#FCCC0A",
      E: "#0039A6",
      J: "#996633",
      Z: "#996633",
      D: "#FF6319",
      F: "#FF6319",
      LIRR: "#0039A6",
    };
    return colorMap[line] || "#FFFFFF";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: index * 0.2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${station.position.x}%`,
        top: `${station.position.y}%`,
      }}
    >
      <Link href={station.link || ""}>
        <motion.div
          className="subway-station cursor-pointer group"
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            rotateX: 15,
          }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Station Circle */}
          <div className="relative">
            {/* Glow Effect */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-50"
              style={{
                background: `radial-gradient(circle, ${station.colors[0]}40, transparent)`,
              }}
            />

            {/* Main Station Circle */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full border-4 border-gray-800 shadow-2xl flex items-center justify-center glass-effect">
              {/* Line Indicators */}
              <div className="flex flex-wrap gap-1 justify-center">
                {station.lines.map((line, idx) => (
                  <div
                    key={idx}
                    className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    style={{ backgroundColor: getLineColor(line) }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            {/* Station Name */}
            <motion.div
              className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              <div className="bg-black bg-opacity-80 text-white px-3 py-1 rounded-lg text-sm font-medium backdrop-blur-sm border border-gray-600">
                {station.name}
              </div>
              <div className="text-gray-400 text-xs text-center mt-1">
                {station.borough}
              </div>
            </motion.div>

            {/* Hover Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 opacity-0 group-hover:opacity-100"
              style={{ borderColor: station.colors[0] }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
