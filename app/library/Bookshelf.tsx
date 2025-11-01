"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CircleArrowLeft } from "lucide-react";

export default function Bookshelf() {
  const bookshelf = [
    {
      genre: "Fantasy",
      books: [
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/1.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/2.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/3.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/4.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/5.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/6.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/harry-potter/7.jpg",
      ],
    },
    {
      genre: "Science & Learning",
      books: [
        "https://d21r3yo3pas5u.cloudfront.net/books/everything.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/time.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/naval.jpg",
      ],
    },
    {
      genre: "Philosophy",
      books: [
        "https://d21r3yo3pas5u.cloudfront.net/books/ashtavakra.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/metamorphosis.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/crime.webp",
        "https://d21r3yo3pas5u.cloudfront.net/books/sophies-world.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/death.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/yogi.jpg",
      ],
    },
    {
      genre: "Fiction",
      books: [
        "https://d21r3yo3pas5u.cloudfront.net/books/garden.webp",
        "https://d21r3yo3pas5u.cloudfront.net/books/ghosts.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/umbrella.jpg",
        "https://d21r3yo3pas5u.cloudfront.net/books/stitches.jpg",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 space-y-32">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition"
        >
          <CircleArrowLeft size={16} /> Back to Home
        </Link>

        <h1 className="text-4xl sm:text-5xl font-bold mt-4">My Bookshelf</h1>
        <p className="text-base sm:text-lg leading-relaxed mt-3 opacity-85">
          A small collection of books — from philosophy to science and fiction.
        </p>
      </motion.section>

      {/* Books by Genre */}
      {bookshelf.map((section, index) => (
        <motion.section
          key={section.genre}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">{section.genre}</h2>

          <div className="flex flex-wrap items-end gap-5 sm:gap-6">
            {section.books.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -3 }}
                className="
        rounded-lg overflow-hidden
        border border-[hsl(var(--border))]/40
        bg-[hsl(var(--muted))]/15
        hover:bg-[hsl(var(--muted))]/25
        transition-all duration-300
        flex items-end
      "
              >
                <Image
                  src={src}
                  alt={src}
                  width={300}
                  height={400}
                  className="h-[160px] sm:h-[190px] w-auto object-contain"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
