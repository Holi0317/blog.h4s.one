import type { CollectionEntry } from "astro:content";

export function urlForBlog(blog: CollectionEntry<"blog">) {
  const year = blog.data.pubDate.toISOString().slice(0, 4);
  return `/blog/${year}/${blog.slug}`;
}
