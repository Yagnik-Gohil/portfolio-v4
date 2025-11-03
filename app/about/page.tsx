import { USER_IMAGE } from "../data/constant";
import About from "./About";
import { makeMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return makeMetadata({
    title: "About | Yagnik Gohil",
    description:
      "Explore Yagnik Gohil’s journey — career highlights, fun GitHub projects, and professional certifications.",
    path: `/about`,
    image: USER_IMAGE,
  });
}

export default function AboutPage() {
  return <About />;
}
