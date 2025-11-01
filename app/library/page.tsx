import { Metadata } from "next";
import Bookshelf from "./Bookshelf";

export const metadata: Metadata = {
  title: "Bookshelf | Yagnik Gohil",
  description:
    "A curated collection of books that have inspired my growth as a developer and thinker — covering technology, creativity, and productivity.",
};

export default function BookshelfPage() {
  return <Bookshelf />;
}
