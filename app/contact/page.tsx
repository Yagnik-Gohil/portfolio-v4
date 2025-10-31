import Link from "next/link";
import {
  Mail,
  Linkedin,
  Github,
  Terminal,
  Laptop,
  Twitter,
  Camera,
  Crown,
  Dribbble,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24 space-y-20">
      {/* Header */}
      <section className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact</h1>
        <p className="text-lg opacity-85">
          Feel free to reach out or explore my profiles below.
        </p>
      </section>

      {/* All Contacts Combined */}
      <section className="space-y-8">
        <ul className="space-y-3 text-lg">
          <li>
            <Link
              href="mailto:gohilyagnik3@gmail.com"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Mail className="w-5 h-5" /> gohilyagnik3@gmail.com
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/yagnik-gohil-087601189"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Linkedin className="w-5 h-5" /> Yagnik Gohil
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/Yagnik-Gohil"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Github className="w-5 h-5" /> Yagnik-Gohil
            </Link>
          </li>

          {/* Divider */}
          <li className="pt-4 border-t border-[hsl(var(--border))]/30"></li>

          {/* Other Links */}
          <li>
            <Link
              href="https://x.com/yagnik_19"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Twitter className="w-5 h-5" /> @yagnik_19
            </Link>
          </li>
          <li>
            <Link
              href="https://www.boot.dev/u/yagnik"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Terminal className="w-5 h-5" /> Boot.dev
            </Link>
          </li>
          <li>
            <Link
              href="https://leetcode.com/u/yagnik-gohil"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Laptop className="w-5 h-5" /> LeetCode
            </Link>
          </li>
          <li>
            <Link
              href="https://www.chess.com/member/yagnik-gambit"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Crown className="w-5 h-5" /> Chess.com
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/wisdom.not.found/"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Camera className="w-5 h-5" /> Photography
            </Link>
          </li>
          <li>
            <Link
              href="https://dribbble.com/nik__art"
              target="_blank"
              className="flex items-center gap-3 hover:opacity-80 transition"
            >
              <Dribbble className="w-5 h-5" /> Dribbble
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
