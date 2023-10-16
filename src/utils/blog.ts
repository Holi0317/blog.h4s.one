import { DateTime } from "luxon";
import type { CollectionEntry } from "astro:content";

export function blogPubDate(blog: CollectionEntry<"blog">) {
  return DateTime.fromJSDate(blog.data.pubDate, { zone: "UTC" }).setLocale(
    "en-US",
  );
}

export function urlForBlog(blog: CollectionEntry<"blog">) {
  return `/blog/${blogPubDate(blog).year}/${blog.slug}`;
}
