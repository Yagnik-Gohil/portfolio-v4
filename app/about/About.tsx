"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function About() {
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
      },
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

      {/* Certificates */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Skills</h1>

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
