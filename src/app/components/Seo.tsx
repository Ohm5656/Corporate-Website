import { useEffect } from "react";

const SITE_NAME = "NTP Electric and Engineering";
const DEFAULT_DESCRIPTION =
  "Industrial electrical engineering, cold room systems, control panels, and factory electrical services for modern facilities in Thailand.";
const DEFAULT_KEYWORDS =
  "NTP Electric, electrical engineering Thailand, factory electrical system, control panel, cold room, industrial refrigeration";
const DEFAULT_IMAGE = "/og-image.svg";

interface SeoProps {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

function ensureMeta(attribute: "name" | "property", value: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  );

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
}

function ensureLink(rel: string) {
  let link = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }

  return link;
}

function toAbsoluteUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return new URL(path, window.location.origin).toString();
}

export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = toAbsoluteUrl(path ?? window.location.pathname);
    const imageUrl = toAbsoluteUrl(image);
    const robots = noIndex ? "noindex, nofollow" : "index, follow";

    document.title = pageTitle;

    ensureMeta("name", "description").setAttribute("content", description);
    ensureMeta("name", "keywords").setAttribute("content", keywords);
    ensureMeta("name", "robots").setAttribute("content", robots);
    ensureMeta("name", "author").setAttribute("content", SITE_NAME);
    ensureMeta("name", "twitter:card").setAttribute(
      "content",
      "summary_large_image",
    );
    ensureMeta("name", "twitter:title").setAttribute("content", pageTitle);
    ensureMeta("name", "twitter:description").setAttribute(
      "content",
      description,
    );
    ensureMeta("name", "twitter:image").setAttribute("content", imageUrl);

    ensureMeta("property", "og:title").setAttribute("content", pageTitle);
    ensureMeta("property", "og:description").setAttribute(
      "content",
      description,
    );
    ensureMeta("property", "og:type").setAttribute("content", type);
    ensureMeta("property", "og:url").setAttribute("content", canonicalUrl);
    ensureMeta("property", "og:image").setAttribute("content", imageUrl);
    ensureMeta("property", "og:site_name").setAttribute("content", SITE_NAME);
    ensureMeta("property", "og:locale").setAttribute("content", "th_TH");

    ensureLink("canonical").setAttribute("href", canonicalUrl);

    const existingScript = document.head.querySelector<HTMLScriptElement>(
      'script[data-seo="structured-data"]',
    );

    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.dataset.seo = "structured-data";
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [description, image, keywords, noIndex, path, structuredData, title, type]);

  return null;
}
