"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // 🌗 Initialize theme safely
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const currentTheme = savedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    queueMicrotask(() => setTheme(currentTheme));
  }, []);

  // 🌓 Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // 🎢 Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#articles", label: "Articles" },
    { href: "/leetcode", label: "DSA Journal" },
    { href: "/library", label: "Bookshelf" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <AnimatePresence>
      {!hidden && (
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed left-1/2 top-6 z-50 -translate-x-1/2 transform"
        >
          <motion.div
            className="flex items-center justify-center gap-6 rounded-full 
            border border-[hsl(var(--border))]/50 
            bg-[hsl(var(--muted))]/60 backdrop-blur-xl 
            px-8 py-3 transition-colors"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* 🌗 Theme toggle button */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              whileHover={{ scale: 1.1 }}
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="ml-4 rounded-full p-2 border border-[hsl(var(--border))]/60 bg-[hsl(var(--muted))]/50 hover:bg-[hsl(var(--accent))]/40 transition-colors"
            >
              {theme && (
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === "dark" ? (
                    <Sun size={18} className="text-[hsl(var(--foreground))]" />
                  ) : (
                    <Moon size={18} className="text-[hsl(var(--foreground))]" />
                  )}
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
