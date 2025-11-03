import Bookshelf from "./Bookshelf";
import { makeMetadata } from "@/lib/seo";
import { USER_IMAGE } from "../data/constant";

export async function generateMetadata() {
  return makeMetadata({
    title: "Bookshelf | Yagnik Gohil",
    description:
      "A curated collection of books that have inspired my growth as a developer and thinker — covering technology, creativity, and productivity.",
    path: `/library`,
    image: USER_IMAGE,
  });
}

export default function BookshelfPage() {
  return <Bookshelf />;
}
