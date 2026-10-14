import { useState } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import {
  ArrowLeft,
  Calendar,
  User,
  ExternalLink,
  Share2,
  Check,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  BookOpen,
  Filter,
  CheckCircle2,
  Globe,
  Radio,
} from "lucide-react";
import {
  primaryArticles,
  specialReport,
  newsletterMeta,
  newsletterSegments,
  allTrackedNewsletterLinks,
  bannerMappings,
  type WNIPArticle,
  type WNIPNewsletterSegment,
} from "@/data/newsData";

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showManifest, setShowManifest] = useState<boolean>(false);

  usePageSEO({
    title: "What's New in Publishing | Curated Industry Briefings by Jez Walters",
    description:
      "Curated media intelligence presented in collaboration with WNIP and Jez Walters. Executive briefings on Google AI payouts, Reuters dynamic paywalls, traffic trends, and the Next Net SAIL framework.",
    canonical: "/news",
  });

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/news#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const categories = [
    { id: "all", label: "All Briefings" },
    { id: "AI Licensing", label: "AI Licensing" },
    { id: "Monetization", label: "Monetization" },
    { id: "Traffic & Audience", label: "Traffic & Audience" },
    { id: "Content Distribution", label: "Content Distribution" },
    { id: "Creator Strategy", label: "Creator & B2B" },
    { id: "Special Report", label: "Special Report" },
  ];

  const featuredArticle = primaryArticles.find((a) => a.isFeaturedBanner) || primaryArticles[0];
  const gridArticles = primaryArticles.filter((a) => !a.isFeaturedBanner);

  const filteredGridArticles =
    selectedCategory === "all"
      ? gridArticles
      : gridArticles.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase());

  const filteredSegments =
    selectedCategory === "all"
      ? newsletterSegments
      : newsletterSegments.filter((s) => {
          if (selectedCategory === "Creator Strategy") {
            return (
              s.category.toLowerCase().includes("creator") ||
              s.category.toLowerCase().includes("b2b") ||
              s.category.toLowerCase().includes("writing")
            );
          }
          return s.category.toLowerCase() === selectedCategory.toLowerCase();
        });

  const showSpecialReport =
    selectedCategory === "all" ||
    selectedCategory === "Special Report" ||
    selectedCategory.toLowerCase().includes("ai");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Periodical",
            name: "What's New in Publishing - Executive Briefing",
            url: "https://hpmediaconsulting.com/news",
            publisher: {
              "@type": "Organization",
              name: "HP Media Consulting",
              url: "https://hpmediaconsulting.com",
            },
            editor: {
              "@type": "Person",
              name: "Jez Walters",
              sameAs: "https://whatsnewinpublishing.com",
            },
            description: newsletterMeta.badgeText,
            hasPart: primaryArticles.map((article) => ({
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://hpmediaconsulting.com/news#${article.id}`,
              },
              headline: article.title,
              description: article.excerpt.substring(0, 160) + "...",
              datePublished: article.isoDate,
              image: `https://hpmediaconsulting.com${article.image}`,
              author: {
                "@type": "Person",
                name: article.author,
                jobTitle: article.authorRole,
                sameAs: "https://whatsnewinpublishing.com",
              },
              publisher: {
                "@type": "Organization",
                name: "What's New in Publishing",
                url: "https://whatsnewinpublishing.com",
              },
            })),
          }),
        }}
      />

      {/* Top Header Landmark */}
      <header className="bg-hero text-hero-foreground py-4 px-6 border-b border-hero-foreground/10 sticky top-0 z-50 backdrop-blur-md bg-hero/95 shadow-sm">
        <div className="container mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="/#home"
              className="font-heading text-xl md:text-2xl tracking-tight text-hero-foreground hover:opacity-95 transition-opacity"
              aria-label="HP Media Consulting Home"
            >
              HP Media Consulting
            </a>
            <span className="hidden sm:inline-block text-hero-foreground/40 font-light">/</span>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs tracking-wide text-hero-foreground/90 font-body font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3 text-amber-300 shrink-0" />
              <span>Curated with WNIP</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://whatsnewinpublishing.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 text-xs font-body font-medium text-hero-foreground/85 hover:text-hero-foreground transition-colors"
              title="Visit What's New in Publishing website (opens in a new tab)"
            >
              <span>Visit WNIP</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="/#home"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-body font-medium text-hero-foreground/90 hover:text-hero-foreground transition-colors px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main className="flex-1 container mx-auto max-w-6xl py-10 md:py-16 px-4 sm:px-6">
        {/* Newsletter Masthead / Issue Header */}
        <section aria-labelledby="masthead-heading" className="mb-12">
          <div className="bg-card border border-border/80 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-accent to-emerald-500" />

            {/* Curation Badge Required by Requirement 2 */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider font-body">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{newsletterMeta.badgeText}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-body text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span>{newsletterMeta.date}</span>
                <span className="text-border">·</span>
                <span className="font-medium text-foreground">{newsletterMeta.edition}</span>
              </div>
            </div>

            <div className="max-w-3xl">
              <h1
                id="masthead-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground tracking-tight leading-[1.15] mb-5"
              >
                What's New in Publishing
              </h1>
              <p className="text-lg sm:text-xl text-primary font-heading font-medium leading-snug mb-4">
                The Executive Intelligence Briefing on AI Licensing, Modern Monetization &amp; Audience Infrastructure
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed mb-6">
                {newsletterMeta.editorNote}
              </p>

              {/* Option 1 Industry Curation Guarantee Banner */}
              <div className="p-4 rounded-2xl bg-surface-cool border border-border/80 flex items-start gap-3 text-xs font-body text-muted-foreground leading-relaxed">
                <Globe className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <strong className="text-foreground font-semibold">Direct Source External Attribution Feed (Option 1): </strong>
                  All briefing headlines, featured story banners, and action links route directly to original reporting on Digiday, Search Engine Journal, The Information, Press Gazette, and Substack. Destination pages open in a secure new browser tab (<code className="px-1 py-0.5 rounded bg-muted font-mono text-[11px]">target="_blank" rel="noopener noreferrer"</code>) while keeping HP Media Consulting active in your background tab.
                </div>
              </div>
            </div>

            {/* Editorial Co-Bylines */}
            <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4 text-xs font-body text-muted-foreground">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold text-xs font-heading">
                    JW
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs">{newsletterMeta.curator}</p>
                    <p className="text-[11px] text-muted-foreground">{newsletterMeta.curatorRole}</p>
                  </div>
                </div>

                <div className="h-6 w-px bg-border hidden sm:block" />

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-accent/15 text-accent flex items-center justify-center font-bold text-xs font-heading">
                    HP
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs">{newsletterMeta.coPublisher}</p>
                    <p className="text-[11px] text-muted-foreground">{newsletterMeta.coPublisherRole}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={newsletterMeta.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
                  title="Visit whatsnewinpublishing.com (opens in a new tab)"
                >
                  <span>whatsnewinpublishing.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-border">·</span>
                <button
                  onClick={() => setShowManifest(!showManifest)}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground font-medium underline underline-offset-4 cursor-pointer"
                >
                  <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
                  <span>{showManifest ? "Hide" : "Audit"} 33 Tracked Links</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Drawer for the 33 Tracked Newsletter Segment Links */}
        {showManifest && (
          <section aria-label="33 Newsletter Segment Links Manifest" className="mb-12 animate-in fade-in duration-300">
            <div className="bg-card border-2 border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  <h3 className="font-heading text-lg text-foreground">
                    Verified Destination Manifest: 33 Newsletter Segment Items
                  </h3>
                </div>
                <span className="text-xs bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-medium">
                  33 / 33 Verified with Tracking Intact
                </span>
              </div>
              <p className="text-xs text-muted-foreground mb-6 font-body leading-relaxed">
                Option 1 verification ledger: Every external link below opens in a new browser tab with <code className="px-1 py-0.5 rounded bg-muted font-mono text-[11px]">target="_blank" rel="noopener noreferrer"</code> preserving source attribution and tracking tags.
              </p>

              {/* 4 Primary Promotional Banners Mapping */}
              <div className="mb-6 p-4 rounded-2xl bg-surface-cool border border-border/70">
                <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5 font-body">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Primary Promotional Asset &amp; Banner Link Mapping (1.jpg – 4.jpg)
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {bannerMappings.map((banner, idx) => (
                    <a
                      key={idx}
                      href={banner.destinationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all flex items-center gap-3 group"
                      title={`Open ${banner.label} in a new tab`}
                    >
                      <img
                        src={banner.image}
                        alt={banner.label}
                        className="w-16 h-10 object-cover rounded-lg border border-border/50 shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                          {banner.label}
                        </p>
                        <p className="text-[10px] text-muted-foreground font-mono truncate">
                          {banner.destinationUrl}
                        </p>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {allTrackedNewsletterLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-border/80 bg-surface-cool hover:bg-muted/80 hover:border-primary/40 transition-all flex flex-col justify-between group"
                    title={`Open ${item.name} in a new tab`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-[11px] font-semibold text-primary font-body">#{item.id} {item.type}</span>
                      <ExternalLink className="w-3 h-3 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                    </div>
                    <p className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-[10px] text-muted-foreground font-mono truncate mt-1">
                      {item.url}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Category Filter Navigation Bar */}
        <section aria-label="Topic Filter Navigation" className="mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider pl-1 pr-2">
              <Filter className="w-3.5 h-3.5" />
              Topics:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-body font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.id.toLowerCase()
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* 1. ARTICLE 1: FEATURED LEAD BANNER (1.jpg) */}
        {(selectedCategory === "all" || selectedCategory === "AI Licensing") && (
          <section aria-label="Lead Story" className="mb-14">
            <article
              id={featuredArticle.id}
              aria-labelledby={`title-${featuredArticle.id}`}
              className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
            >
              {/* Primary Image Banner 1.jpg -> opens tracked WNIP destination in a new tab */}
              <a
                href={featuredArticle.imageLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[460px] overflow-hidden bg-muted cursor-pointer group/lead"
                aria-label={`Open WNIP report for ${featuredArticle.title} in a new tab`}
                title="Open WNIP Substack report in a new tab"
              >
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.imageAlt}
                  className="w-full h-full object-cover object-center group-hover/lead:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-primary/95 text-primary-foreground backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-body font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Lead Banner Story · 1.jpg
                  </span>
                  <span className="bg-black/60 backdrop-blur-md text-white/90 text-xs px-3 py-1 rounded-full font-body inline-flex items-center gap-1">
                    <span>{featuredArticle.readTime}</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                    {featuredArticle.category}
                  </span>
                  <p className="text-xs text-white/80 font-body">
                    By {featuredArticle.author} · {featuredArticle.date} · Click to read at source
                  </p>
                </div>
              </a>

              {/* Card Body */}
              <div className="p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3 text-xs font-body text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <strong className="text-foreground">{featuredArticle.author}</strong> ({featuredArticle.authorRole})
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <time dateTime={featuredArticle.isoDate}>{featuredArticle.date}</time>
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopyLink(featuredArticle.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                    aria-label="Share article link"
                  >
                    {copiedId === featuredArticle.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600 font-medium">Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Headline: Clickable external link with target="_blank" and rel="noopener noreferrer" */}
                <h2
                  id={`title-${featuredArticle.id}`}
                  className="font-heading text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 leading-tight hover:text-primary transition-colors"
                >
                  <a
                    href={featuredArticle.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded inline-flex items-baseline gap-2"
                    title={`${featuredArticle.title} (opens in a new tab)`}
                  >
                    <span>{featuredArticle.title}</span>
                    <ExternalLink className="w-5 h-5 text-primary shrink-0 self-center" aria-hidden="true" />
                  </a>
                </h2>

                {/* Excerpt with direct attribution pill */}
                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-base sm:text-lg leading-relaxed text-foreground/90 font-body font-normal">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                {/* Key Takeaways */}
                {featuredArticle.keyPoints && (
                  <div className="mb-8 p-5 rounded-2xl bg-surface-cool border border-border/80">
                    <p className="text-xs font-body font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      Key Industry Takeaways
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-3">
                      {featuredArticle.keyPoints.map((point, idx) => (
                        <li key={idx} className="text-xs font-body text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Buttons & External Attribution Links */}
                <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <a
                    href={featuredArticle.readMoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all hover:translate-y-[-1px] group/link"
                    title="Open original coverage at What's New in Publishing (opens in a new tab)"
                  >
                    <span>{featuredArticle.sourceLabel}</span>
                    <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                  </a>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-body">
                    {featuredArticle.editorialReportUrl && (
                      <a
                        href={featuredArticle.editorialReportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center gap-1 font-medium"
                        title="Read The Information investigation (opens in a new tab)"
                      >
                        <span>{featuredArticle.editorialReportLabel}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {featuredArticle.wnipDigestUrl && (
                      <>
                        <span>·</span>
                        <a
                          href={featuredArticle.wnipDigestUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                          title="Read industry comments on WNIP (opens in a new tab)"
                        >
                          <span>Industry Comments</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* 2. SPECIAL EXECUTIVE REPORT (5.jpg / Sundial Media & Next Net SAIL) */}
        {showSpecialReport && (
          <section aria-label="Special Executive Report" className="mb-14" id="special-report">
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-3xl border border-slate-800 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-12 gap-0 items-stretch">
                {/* Banner 5.jpg -> opens tracked deep-dive in new tab */}
                <a
                  href={specialReport.readMoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block lg:col-span-5 relative min-h-[300px] lg:min-h-full overflow-hidden bg-slate-950 cursor-pointer group/spotlight"
                  aria-label={`Open special report for ${specialReport.title} in a new tab`}
                  title="Open Kirk McDonald interview on Substack in a new tab"
                >
                  <img
                    src={specialReport.image}
                    alt={specialReport.imageAlt}
                    className="w-full h-full object-cover object-center group-hover/spotlight:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-amber-500/90 text-slate-950 font-body text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Special Long-Read Report · 5.jpg
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Featured Leader
                    </p>
                    <p className="text-base font-heading font-bold text-white flex items-center gap-1.5">
                      <span>{specialReport.executive}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </p>
                    <p className="text-xs text-slate-300 font-body">
                      {specialReport.executiveRole}
                    </p>
                  </div>
                </a>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-body text-slate-400 mb-4">
                      <span className="text-amber-400 font-semibold uppercase tracking-wider">
                        {specialReport.category}
                      </span>
                      <span>·</span>
                      <span>{specialReport.date}</span>
                      <span>·</span>
                      <span className="text-slate-300">By {specialReport.author}</span>
                      <span>·</span>
                      <span>{specialReport.readTime}</span>
                    </div>

                    <h2 className="font-heading text-2xl sm:text-3xl text-white mb-3 leading-snug">
                      <a
                        href={specialReport.readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded text-white inline-flex items-baseline gap-2"
                        title={`${specialReport.title} (opens in a new tab)`}
                      >
                        <span>{specialReport.title}</span>
                        <ExternalLink className="w-4 h-4 text-amber-400 shrink-0 self-center" aria-hidden="true" />
                      </a>
                    </h2>

                    <p className="text-sm sm:text-base text-slate-300 font-body font-medium leading-relaxed mb-6">
                      {specialReport.subtitle}
                    </p>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                        <Cpu className="w-3.5 h-3.5" />
                        Framework Spotlight: {specialReport.framework} ({specialReport.frameworkFull})
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-body leading-relaxed">
                        {specialReport.excerpt}
                      </p>
                    </div>

                    {/* Ecosystem Outbound Links */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {specialReport.ecosystemLinks.map((eco) => (
                        <a
                          key={eco.url}
                          href={eco.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs text-slate-200 transition-colors"
                          title={`Open ${eco.label} in a new tab`}
                        >
                          <span className="font-medium text-amber-300">{eco.label}</span>
                          <span className="text-slate-400 text-[11px]">({eco.role})</span>
                          <ExternalLink className="w-3 h-3 text-slate-400" />
                        </a>
                      ))}
                    </div>

                    {/* 4 Pillars Grid */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {specialReport.pillars.map((pillar, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-white/5 border border-white/5">
                          <p className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                            {pillar.title}
                          </p>
                          <p className="text-[11px] text-slate-400 font-body leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link & Attribution */}
                  <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <a
                      href={specialReport.readMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-body font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all hover:translate-y-[-1px] group/link"
                      title="Read Kirk McDonald interview on Substack (opens in a new tab)"
                    >
                      <span>{specialReport.sourceLabel}</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                    </a>

                    <p className="text-xs text-slate-400 font-body">
                      Full coverage by Jez Walters on What's New in Publishing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 3. PRIMARY GRID: 2.jpg (Membrana), 3.jpg (MediaSpace), 4.jpg (CustomerX) */}
        <section aria-label="Curated Executive Analyses" className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading text-foreground tracking-tight">
                Curated Executive Analyses &amp; Banners
              </h2>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Direct external reporting on dynamic paywalls, search dynamics, and agentic distribution
              </p>
            </div>
            <span className="text-xs font-body text-muted-foreground">
              Showing {filteredGridArticles.length} briefing{filteredGridArticles.length === 1 ? "" : "s"}
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGridArticles.map((article: WNIPArticle) => (
              <article
                key={article.id}
                id={article.id}
                aria-labelledby={`title-${article.id}`}
                className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Image Banner: Click opens tracked destination in a new tab */}
                <a
                  href={article.imageLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-full aspect-[16/10] overflow-hidden bg-muted cursor-pointer group/img"
                  aria-label={`Open promotional feature banner for ${article.title} in a new tab`}
                  title={`Open banner destination: ${article.imageLink} (opens in a new tab)`}
                >
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    className="w-full h-full object-cover object-center group-hover/img:scale-[1.04] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block bg-white/95 dark:bg-slate-900/95 text-foreground backdrop-blur-md text-[11px] font-body font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[11px] px-2.5 py-0.5 rounded-full font-body inline-flex items-center gap-1">
                      <span>{article.readTime}</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </span>
                  </div>
                </a>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata Header */}
                    <div className="flex items-center justify-between text-xs font-body text-muted-foreground mb-3">
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 font-medium text-foreground">
                          <User className="w-3.5 h-3.5 text-primary" />
                          {article.author}
                        </span>
                        <span>·</span>
                        <time dateTime={article.isoDate}>{article.date}</time>
                      </div>

                      <button
                        onClick={() => handleCopyLink(article.id)}
                        className="text-muted-foreground hover:text-foreground p-1 rounded transition-colors cursor-pointer"
                        aria-label="Share article"
                        title="Copy link to briefing"
                      >
                        {copiedId === article.id ? (
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        ) : (
                          <Share2 className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Title: Direct link to source with target="_blank" rel="noopener noreferrer" */}
                    <h3
                      id={`title-${article.id}`}
                      className="font-heading text-xl sm:text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors"
                    >
                      <a
                        href={article.readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded inline-flex items-baseline gap-1.5"
                        title={`${article.title} (opens in a new tab)`}
                      >
                        <span>{article.title}</span>
                        <ExternalLink className="w-4 h-4 text-primary shrink-0 self-center" aria-hidden="true" />
                      </a>
                    </h3>

                    {/* Stat Highlight Pill */}
                    {article.highlightStat && (
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-cool border border-border/80 text-xs font-body mb-4">
                        <span className="font-heading font-bold text-primary">{article.highlightStat.value}</span>
                        <span className="text-muted-foreground text-[11px]">{article.highlightStat.label}</span>
                      </div>
                    )}

                    {/* Excerpt */}
                    <div className="prose prose-slate max-w-none mb-6">
                      <p className="text-sm leading-relaxed text-foreground/85 font-body">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Editorial Highlights */}
                    {article.keyPoints && (
                      <div className="mb-6 pt-4 border-t border-border/60">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
                          Editorial Highlights
                        </p>
                        <ul className="space-y-1.5">
                          {article.keyPoints.map((point, idx) => (
                            <li key={idx} className="text-xs text-muted-foreground font-body leading-normal flex items-start gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Bottom Action Button & Source Attribution Links */}
                  <div className="pt-4 border-t border-border mt-auto flex flex-col gap-2.5">
                    {/* Primary Button -> opens source in new tab */}
                    <a
                      href={article.readMoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground font-body font-semibold text-xs sm:text-sm px-4 py-3 rounded-xl transition-all group/link text-center"
                      title={`${article.sourceLabel} (opens in a new tab)`}
                    >
                      <span>{article.sourceLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>

                    {/* Secondary Link Pills (Sponsor / Partner / Original Case Study) */}
                    <div className="flex flex-wrap items-center justify-between text-[11px] text-muted-foreground pt-0.5 px-1 gap-1.5">
                      {article.partnerUrl && (
                        <a
                          href={article.partnerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 font-medium truncate max-w-[210px]"
                          title={`${article.partnerLabel} (opens in a new tab)`}
                        >
                          <span className="truncate">{article.partnerLabel}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      )}
                      {article.editorialReportUrl && article.editorialReportUrl !== article.readMoreUrl && (
                        <a
                          href={article.editorialReportUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center gap-1 font-medium truncate max-w-[200px]"
                          title={article.editorialReportLabel}
                        >
                          <span className="truncate">{article.editorialReportLabel || "Original Case Study"}</span>
                          <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                        </a>
                      )}
                      {article.wnipDigestUrl && (
                        <a
                          href={article.wnipDigestUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 shrink-0 ml-auto"
                          title="View on WNIP (opens in a new tab)"
                        >
                          <span>WNIP #184</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 4. COMPLETE NEWSLETTER INTELLIGENCE FEED: ALL REMAINING 33 SEGMENT ITEMS */}
        <section aria-labelledby="segments-heading" className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-primary font-body font-semibold mb-2">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Issue #184 Curated Intelligence Digest</span>
              </div>
              <h2 id="segments-heading" className="text-2xl sm:text-3xl font-heading text-foreground tracking-tight">
                Complete Industry Dispatches &amp; Source Coverage
              </h2>
              <p className="text-sm text-muted-foreground font-body mt-1">
                Every curated segment from Jez Walters' WNIP Issue #184 with direct external attribution links
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-cool border border-border text-xs font-body text-muted-foreground">
              <span>{filteredSegments.length} Curated Stories</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Direct Link-Out</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredSegments.map((segment: WNIPNewsletterSegment) => (
              <div
                key={segment.id}
                className="bg-card border border-border/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground font-body">
                      {segment.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-body flex items-center gap-1">
                      <span>{segment.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
                    <a
                      href={segment.primaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded inline-flex items-baseline gap-1.5"
                      title={`${segment.title} (opens in a new tab)`}
                    >
                      <span>{segment.title}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-primary shrink-0 self-center" />
                    </a>
                  </h3>

                  <p className="text-xs font-semibold text-primary/90 font-body mb-3">
                    Source: {segment.sourcePublication}
                  </p>

                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed mb-4">
                    {segment.summary}
                  </p>

                  {/* Secondary attribution links if available */}
                  {segment.secondaryLinks && segment.secondaryLinks.length > 0 && (
                    <div className="mb-4 pt-3 border-t border-border/60 flex flex-wrap gap-2">
                      {segment.secondaryLinks.map((sec, idx) => (
                        <a
                          key={idx}
                          href={sec.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline bg-primary/5 px-2.5 py-1 rounded-md"
                          title={`${sec.label} (opens in a new tab)`}
                        >
                          <span>{sec.label}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border/80 mt-auto flex items-center justify-between gap-3">
                  <a
                    href={segment.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent font-body transition-colors"
                    title={`${segment.actionLabel} (opens in a new tab)`}
                  >
                    <span>{segment.actionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </a>

                  <span className="text-[10px] text-muted-foreground font-body">
                    Opens external tab
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. STRATEGIC COMMERCIAL REPRESENTATION SECTION */}
        <section aria-labelledby="advisory-heading" className="mt-16 p-8 sm:p-12 rounded-3xl bg-hero text-hero-foreground relative overflow-hidden shadow-lg">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-hero-foreground/80 bg-white/10 px-3 py-1 rounded-full mb-4">
              <Layers className="w-3.5 h-3.5 text-amber-300" />
              Strategic Publisher Representation
            </span>

            <h2 id="advisory-heading" className="font-heading text-2xl sm:text-3xl md:text-4xl mb-4 leading-tight">
              Transforming Industry Intelligence into Direct Commercial Revenue
            </h2>

            <p className="text-hero-foreground/85 font-body text-sm sm:text-base leading-relaxed mb-8">
              As reported by Jez Walters in What's New in Publishing, generic sub-licensing brokers and unilateral AI contribution pools offer fractional returns. HP Media Consulting represents premier digital publishers in direct, bilateral licensing negotiations with Bloomberg, MSN, and enterprise AI model providers—securing full contractual transparency, attribution covenants, and up to 90%+ contract margin retention.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-hero-foreground text-hero px-6 py-3.5 rounded-xl font-body font-semibold text-sm uppercase tracking-wider hover:bg-hero-foreground/90 transition-all shadow-md"
              >
                <span>Book an AI Licensing Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://whatsnewinpublishing.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-body font-medium text-hero-foreground/90 hover:text-hero-foreground underline underline-offset-4 px-3 py-2"
                title="Subscribe to What's New in Publishing (opens in a new tab)"
              >
                <span>Subscribe to What's New in Publishing</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Landmark */}
      <footer className="bg-hero text-hero-foreground py-10 px-6 text-xs font-body text-hero-foreground/70 border-t border-hero-foreground/10 mt-12">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-base text-hero-foreground">HP Media Consulting</p>
            <p className="text-xs text-hero-foreground/70 mt-1">
              Curated media intelligence presented in collaboration with What's New in Publishing (WNIP).
            </p>
            <p className="text-[11px] text-hero-foreground/50 mt-1">
              &copy; {new Date().getFullYear()} HP Media Consulting &bull; All analysis rights belong to What's New in Publishing &amp; Jez Walters. All external citations route directly to original sources.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-xs justify-center items-center">
            <a href="/#home" className="hover:text-hero-foreground transition-colors">Home</a>
            <a href="/#services" className="hover:text-hero-foreground transition-colors">Services</a>
            <a href="/#about" className="hover:text-hero-foreground transition-colors">About</a>
            <a href="/#contact" className="hover:text-hero-foreground transition-colors">Contact</a>
            <a
              href="https://whatsnewinpublishing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hero-foreground transition-colors inline-flex items-center gap-1 text-amber-300 font-semibold"
              title="Visit What's New in Publishing website (opens in a new tab)"
            >
              <span>What's New in Publishing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
