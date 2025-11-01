"use client";

import { motion } from "framer-motion";

interface BlogHeaderProps {
  title: string;
  date: string;
}

export default function BlogHeader({ title, date }: BlogHeaderProps) {
  return (
    <motion.header
      className="mb-10 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-sm opacity-70">{date}</p>
      <h1 className="text-4xl sm:text-5xl font-bold mt-2">{title}</h1>
    </motion.header>
  );
}
