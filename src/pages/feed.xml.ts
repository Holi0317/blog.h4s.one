import { DateTime } from "luxon";
import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { AppConfig } from "../AppConfig";
import { getCollection } from "astro:content";
import { urlForBlog } from "../utils/blog";

export async function GET(context: APIContext) {
  if (context.site == null) {
    throw new Error("site is not configured in astro.config.mjs");
  }

  const blog = await getCollection("blog", (blog) => {
    return !blog.data.draft;
  });

  const a = Math.max(...blog.map((b) => b.data.pubDate.valueOf()));

  return rss({
    title: `${AppConfig.name} blog`,
    description: `Random thoughts from ${AppConfig.name}`,
    site: context.site,
    // RSS Spec: https://www.rssboard.org/rss-specification
    customData: `
    <language>en-us</language>
    <generator>${context.generator}</generator>
    <pubDate>${DateTime.fromMillis(a).toHTTP()}</pubDate>
    <lastBuildDate>${DateTime.utc().toHTTP()}</lastBuildDate>
    `,

    items: blog.map((blog) => ({
      title: blog.data.title,
      pubDate: blog.data.pubDate,
      description: blog.data.snippet,
      link: urlForBlog(blog),
    })),
  });
}
