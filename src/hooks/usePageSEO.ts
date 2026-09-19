import { useEffect } from "react";

export interface PageSEOOptions {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
}

const DEFAULT_TITLE = "HP Media Consulting | Publisher Content Syndication, Licensing & AI Partnerships";
const DEFAULT_DESC = "HP Media Consulting helps premium publishers monetise journalism through direct content syndication, global platform licensing, and AI training partnerships.";
const BASE_URL = "https://hpmediaconsulting.com";

export const usePageSEO = ({
  title,
  description,
  canonical,
  noindex = false,
}: PageSEOOptions) => {
  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title ? `${title} | HP Media Consulting` : DEFAULT_TITLE;
    document.title = title?.includes("HP Media Consulting") ? title : finalTitle;

    // 2. Update Meta Description
    let descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!descMeta) {
      descMeta = document.createElement("meta");
      descMeta.setAttribute("name", "description");
      document.head.appendChild(descMeta);
    }
    descMeta.setAttribute("content", description || DEFAULT_DESC);

    // 3. Update Canonical Tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    const finalCanonical = canonical ? (canonical.startsWith("http") ? canonical : `${BASE_URL}${canonical}`) : BASE_URL;
    canonicalLink.setAttribute("href", finalCanonical);

    // 4. Handle Robots / Indexing (Crucial for Soft 404s)
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    if (noindex) {
      robotsMeta.setAttribute("content", "noindex, nofollow");
    } else {
      robotsMeta.setAttribute("content", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    }
  }, [title, description, canonical, noindex]);
};

export default usePageSEO;
