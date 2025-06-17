'use client';

import { motion } from 'framer-motion';
import StationNode from './StationNode';
import { stations } from '../data/stations';

export default function SubwayMap() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900" />
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8 z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          NYC Subway
        </h1>
        <p className="text-xl text-gray-300">
         Created By Jiaming Kang 
        </p>
      </motion.div>

      {/* Decorative Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0039A6', stopOpacity: 0.3 }} />
            <stop offset="50%" style={{ stopColor: '#FF6319', stopOpacity: 0.3 }} />
            <stop offset="100%" style={{ stopColor: '#FCCC0A', stopOpacity: 0.3 }} />
          </linearGradient>
        </defs>
        
        {/* Curved decorative lines */}
        <path
          d="M 0,300 Q 400,100 800,200 T 1600,150"
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M 0,500 Q 600,300 1200,400 T 1600,350"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Station Nodes */}
      {stations.map((station, index) => (
        <StationNode key={station.id} station={station} index={index} />
      ))}

      
    </div>
  );
}
