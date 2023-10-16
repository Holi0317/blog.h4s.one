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

  const blog = await getCollection("blog");

  return rss({
    title: `${AppConfig.name} blog`,
    description: `Random thoughts from ${AppConfig.name}`,
    site: context.site,
    // RSS Spec: https://www.rssboard.org/rss-specification
    // TODO: Add pubDate
    customData: `
    <language>en-us</language>
    <generator>${context.generator}</generator>
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
