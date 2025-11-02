"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-16 sm:py-24 w-full overflow-x-hidden px-4">
      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-base sm:text-lg md:text-xl mb-1 text-[hsl(var(--foreground))]/80 text-center"
      >
        Hi, I’m
      </motion.p>

      {/* Hero Name */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative w-full max-w-4xl mt-6 sm:mt-4 mb-8 sm:mb-6 flex justify-center"
      >
        <svg
          viewBox="0 0 1000 300"
          className="w-full max-w-[95vw] h-auto"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(260, 80%, 75%)" />
              <stop offset="25%" stopColor="hsl(320, 70%, 80%)" />
              <stop offset="50%" stopColor="hsl(25, 90%, 70%)" />
              <stop offset="75%" stopColor="hsl(190, 70%, 75%)" />
              <stop offset="100%" stopColor="hsl(50, 90%, 75%)" />
            </linearGradient>
          </defs>

          {/* Animated pastel stroke outline */}
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            fontSize="clamp(60px, 20vw, 160px)"
            fontFamily="Poppins, sans-serif"
            fill="none"
            stroke="url(#snakeGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: "1800",
              strokeDashoffset: "1800",
              animation: "snakeFlow 10s ease-in-out forwards",
              letterSpacing: "clamp(1px, 0.4vw, 6px)",
            }}
          >
            YAGNIK
          </text>

          {/* Solid foreground text */}
          <text
            x="50%"
            y="65%"
            textAnchor="middle"
            fontSize="clamp(60px, 20vw, 160px)"
            fontFamily="Poppins, sans-serif"
            fill="hsl(var(--foreground))"
            style={{
              letterSpacing: "clamp(1px, 0.4vw, 6px)",
            }}
          >
            YAGNIK
          </text>
        </svg>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-base sm:text-lg md:text-xl mt-0 text-[hsl(var(--foreground))]/80 max-w-xs sm:max-w-2xl text-center"
      >
        Software Engineer — I code, sketch, and capture moments.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-sm sm:text-base w-full sm:w-auto px-2"
      >
        <Link
          href="/about"
          className="rounded-full border border-[hsl(var(--border))] 
            px-6 py-2 sm:px-8 sm:py-3 text-[hsl(var(--foreground))] 
            hover:bg-[hsl(var(--accent))]/30 
            hover:border-[hsl(var(--accent))] 
            transition-all duration-300 text-center"
        >
          Read more about me
        </Link>

        <Link
          href="/contact"
          className="rounded-full border border-[hsl(var(--accent))] 
            px-6 py-2 sm:px-8 sm:py-3 text-[hsl(var(--accent))] 
            hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] 
            transition-all duration-300 text-center"
        >
          Contact me
        </Link>
      </motion.div>
    </main>
  );
}
