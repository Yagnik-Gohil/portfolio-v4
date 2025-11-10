"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Award } from "lucide-react";
import Link from "next/link";

export default function About() {
  const projects = [
    {
      title: "Skribbl",
      year: "2024",
      type: "Website",
      desc: "A multiplayer drawing and guessing game built with real-time socket connections.",
      tags: ["Multiplayer", "Game", "Real-time"],
      links: {
        github: "https://github.com/Yagnik-Gohil/skribbl",
        live: "https://skribbl.yagnik.dev",
      },
    },
    {
      title: "Ambient Chaos",
      year: "2024",
      type: "Website",
      desc: "A web app that lets users create personalized ambient sound environments.",
      tags: ["Music", "Ambient", "Relaxation"],
      links: {
        github: "https://github.com/Yagnik-Gohil/Ambient-Chaos",
        live: "https://ambient-chaos.yagnik.dev",
      },
    },
    {
      title: "Pokedex CLI",
      year: "2024",
      type: "CLI Tool",
      desc: "A command-line Pokédex built in Go using PokéAPI with terminal-based UI.",
      tags: ["Go", "CLI", "PokéAPI", "Terminal UI"],
      links: {
        github: "https://github.com/Yagnik-Gohil/pokedex-cli",
      },
    },
  ];

  const certificates = {
    Go: [
      {
        name: "HTTP Clients in Go",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/65f5b3a8-f6fd-4174-be54-66e202fb3945",
      },
      {
        name: "Go",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/23beadaa-6536-4963-980e-71659f97e928",
      },
      {
        name: "Go (Basic)",
        issuer: "HackerRank",
        year: "2025",
        link: "https://www.hackerrank.com/certificates/cf829f0cffa9",
      },
    ],
    JavaScript: [
      {
        name: "JavaScript",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/aefd1d84-f6a5-4a6a-b679-c767b096a471",
      },
      {
        name: "Node.js Bootcamp",
        issuer: "Udemy",
        year: "2022",
        link: "https://www.udemy.com/certificate/UC-2d6a8543-a8b5-4662-b9de-5354679465d1/",
      },
    ],
    SQL: [
      {
        name: "SQL (Intermediate)",
        issuer: "HackerRank",
        year: "2025",
        link: "https://www.hackerrank.com/certificates/9a01f5833f1b",
      },
      {
        name: "SQL (Basic)",
        issuer: "HackerRank",
        year: "2025",
        link: "https://www.hackerrank.com/certificates/d3c71bb36bbe",
      },
      {
        name: "SQL",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/f806ca8a-a57c-4281-8413-4c8b8baaefc4",
      },
    ],
    Other: [
      {
        name: "Linux",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/fd10ca54-d5b2-48d8-978c-67e9ecd3ebeb",
      },
      {
        name: "Docker",
        issuer: "Boot.dev",
        year: "2025",
        link: "https://www.boot.dev/certificates/2b436cd9-1353-43b2-9aa7-54d9cd0e7dec",
      }
    ],
  };

  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 space-y-32">
      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl space-y-5"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About</h1>

        <p className="text-base sm:text-lg leading-relaxed">
          I like building things end to end — from clean UIs to solid backend
          systems.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Currently working at <span className="font-semibold">SolGuruz</span>{" "}
          (since 2022), where I design and build backend systems for platforms
          in real estate, e-commerce, inventory management, and social media —
          including a sports tracking app.
        </p>
        <p className="text-base sm:text-lg leading-relaxed">
          Previously at <span className="font-semibold">TatvaSoft</span>,
          building web apps and improving database performance.
        </p>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Fun Projects</h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative p-6 rounded-xl border border-[hsl(var(--border))]/40 bg-[hsl(var(--muted))]/20 hover:bg-[hsl(var(--muted))]/35 transition-colors duration-300"
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}{" "}
                    <span className="text-sm opacity-60">({project.year})</span>
                  </h3>
                  <p className="text-sm mt-1 opacity-70">{project.type}</p>
                  <p className="mt-3 text-base leading-relaxed opacity-90">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4 space-y-2">
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full border border-[hsl(var(--border))]/40 text-[hsl(var(--foreground))]/80"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4 text-sm opacity-80">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <Github size={14} /> GitHub
                      </Link>
                    )}
                    {project.links.live && (
                      <Link
                        href={project.links.live}
                        target="_blank"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <ArrowUpRight size={14} /> Live
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Portfolio Versions Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: projects.length * 0.1 }}
            className="group relative p-6 rounded-xl border border-[hsl(var(--border))]/40 bg-[linear-gradient(135deg,rgba(255,0,150,0.05)_0%,rgba(0,204,255,0.05)_100%)] hover:bg-[linear-gradient(135deg,rgba(255,0,150,0.1)_0%,rgba(0,204,255,0.1)_100%)] transition-all duration-500"
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  Portfolio Versions{" "}
                  <span className="text-sm opacity-60">(v1–v4)</span>
                </h3>
                <p className="text-sm mt-1 opacity-70">
                  A journey through design
                </p>
                <p className="mt-3 text-base leading-relaxed opacity-90">
                  I’ve built four versions of my portfolio. Each version
                  explores a new approach — from classic layouts to raw,
                  minimal, and modern designs.
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <ul className="flex flex-wrap gap-2">
                  {["UI Design", "Next.js", "Tailwind", "Vanilla JS"].map(
                    (tag) => (
                      <li
                        key={tag}
                        className="px-2 py-0.5 text-xs rounded-full border border-[hsl(var(--border))]/40 text-[hsl(var(--foreground))]/80"
                      >
                        {tag}
                      </li>
                    )
                  )}
                </ul>

                <div className="flex flex-col gap-2 text-sm opacity-85">
                  {[
                    {
                      v: "v1",
                      link: "https://v1.yagnik.dev",
                      github: "https://github.com/Yagnik-Gohil/Portfolio",
                      tech: "React + Bootstrap (2022)",
                    },
                    {
                      v: "v2",
                      link: "https://v2.yagnik.dev",
                      github: "https://github.com/Yagnik-Gohil/portfolio-v2",
                      tech: "React + Tailwind (2024)",
                    },
                    {
                      v: "v3",
                      link: "https://v3.yagnik.dev",
                      github: "https://github.com/Yagnik-Gohil/portfolio-v3",
                      tech: "HTML + CSS + JS (2025)",
                    },
                    {
                      v: "v4",
                      link: "/",
                      github: "https://github.com/Yagnik-Gohil/portfolio-v4",
                      tech: "Next.js + Motion (2025) • Current",
                    },
                  ].map(({ v, link, github, tech }) => (
                    <div key={v} className="flex flex-wrap gap-3 items-center">
                      <Link
                        href={link}
                        target="_blank"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <ArrowUpRight size={14} /> {v}
                      </Link>
                      <Link
                        href={github}
                        target="_blank"
                        className="flex items-center gap-1 hover:underline"
                      >
                        <Github size={14} /> GitHub
                      </Link>
                      <p className="opacity-60 text-xs ml-1">• {tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Certificates */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Certificates</h1>

        {Object.entries(certificates).map(([category, certs]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-xl font-medium">{category}</h3>

            <div className="flex flex-wrap gap-5">
              {certs.map((cert, i) => (
                <motion.a
                  key={cert.name}
                  href={cert.link}
                  target="_blank"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  whileHover={{ scale: 1.04, y: -3 }}
                  className="
              aspect-[3/2] w-[230px] 
              flex flex-col justify-between p-4
              rounded-xl border border-[hsl(var(--border))]/50
              bg-[hsl(var(--muted))]/20 hover:bg-[hsl(var(--muted))]/35
              hover:shadow-lg hover:border-[hsl(var(--border))]/80
              transition-all duration-300
            "
                >
                  <div className="flex items-center gap-2">
                    <Award size={18} className="opacity-70" />
                    <p className="font-medium text-base leading-tight">
                      {cert.name}
                    </p>
                  </div>
                  <p className="text-sm opacity-70 mt-2">
                    {cert.issuer} — {cert.year}
                  </p>
                </motion.a>
              ))}
            </div>
          </div>
        ))}
      </motion.section>
    </div>
  );
}
