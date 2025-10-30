"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
        flex min-h-screen flex-col items-center justify-center 
        bg-[hsl(var(--background))] text-[hsl(var(--foreground))] 
        text-center px-6 overflow-hidden transition-colors duration-500
      "
    >
      <main className="flex flex-col items-center justify-center py-20 sm:py-24">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg sm:text-xl mb-1 text-[hsl(var(--foreground))]/80"
        >
          Hi, I’m
        </motion.p>

        {/* Hero Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative w-[85vw] max-w-5xl overflow-visible leading-none -mt-1 -mb-6"
        >
          <svg
            viewBox="0 0 1000 300"
            className="w-full h-auto overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="snakeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
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
              fontSize="180"
              fontFamily="Anton, sans-serif"
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: "1800",
                strokeDashoffset: "1800",
                animation: "snakeFlow 10s ease-in-out forwards",
              }}
              opacity="1"
            >
              YAGNIK
            </text>

            {/* Solid foreground text */}
            <text
              x="50%"
              y="65%"
              textAnchor="middle"
              fontSize="180"
              fontFamily="Anton, sans-serif"
              fill="hsl(var(--foreground))"
              opacity="1"
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
          className="text-lg sm:text-xl mt-0 text-[hsl(var(--foreground))]/80"
        >
          Software Engineer — I code, sketch, and capture moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-8 flex flex-wrap gap-4 justify-center text-sm sm:text-base"
        >
          <Link
            href="/about"
            className="rounded-full border border-[hsl(var(--border))] 
        px-6 py-2 text-[hsl(var(--foreground))] 
        hover:bg-[hsl(var(--accent))]/30 
        hover:border-[hsl(var(--accent))] 
        transition-all duration-300"
          >
            Read more about me
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-[hsl(var(--accent))] 
        px-6 py-2 text-[hsl(var(--accent))] 
        hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--foreground))] 
        transition-all duration-300"
          >
            Contact me
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
