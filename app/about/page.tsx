import { Metadata } from "next";
import About from "./About";

export const metadata: Metadata = {
  title: "About | Yagnik Gohil",
  description:
    "Explore Yagnik Gohil’s journey — career highlights, fun GitHub projects, and professional certifications.",
};

export default function AboutPage() {
  return <About />;
}
