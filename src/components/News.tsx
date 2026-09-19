import { useState } from "react";
import { usePageSEO } from "@/hooks/usePageSEO";
import { ArrowLeft, Clock, Calendar, User, ChevronDown, ChevronUp, Share2, Check, ArrowRight } from "lucide-react";

interface Article {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  author: string;
  authorRole: string;
  date: string;
  isoDate: string;
  readTime: string;
  summary: string;
  content: string[];
}

const articles: Article[] = [
  {
    id: "navigating-ai-licensing-2026",
    category: "Market Analysis & AI Partnerships",
    title: "Navigating AI Licensing: How Publishers Retain Ownership and Commercial Value in 2026",
    subtitle: "The transition from unmetered web scraping to structured corporate licensing deals is reshaping digital publishing economics.",
    author: "Henry Pettit",
    authorRole: "Founder & Managing Director, HP Media Consulting",
    date: "September 15, 2026",
    isoDate: "2026-09-15T09:00:00Z",
    readTime: "5 min read",
    summary:
      "As frontier AI labs exhaust public web data, publishers face a watershed moment: continue allowing uncompensated crawler extraction, or construct high-margin, direct licensing agreements for pre-training and RAG retrieval pipelines.",
    content: [
      "Over the past three decades of digital media distribution, few shifts have moved with the velocity we are witnessing across the artificial intelligence ecosystem in 2026. The initial phase of generative AI was characterized by opportunistic, unregulated web scraping. Frontier model builders crawled billions of open web pages with little regard for copyright, fair remuneration, or content provenance. That era has definitively come to a close.",
      "Today, the commercial dynamics between premium publishers and technology companies have entered a mature, institutional phase. High-capability LLMs, agentic systems, and retrieval-augmented generation (RAG) architectures have discovered a fundamental limitation: synthetic data and scraped forum text lead to catastrophic model degradation. To build reliable reasoning engines in financial markets, medicine, geopolitical analysis, and investigative reporting, AI companies desperately require high-veracity, professionally edited journalism.",
      "For publishers, this shift presents the most lucrative content licensing opportunity since the emergence of financial terminal networks in the 1990s. However, capturing this value requires navigating complex contractual architectures, avoiding traditional sub-licensing traps, and maintaining strict control over editorial assets.",
      "The first critical distinction media executives must draw in 2026 is between pre-training licenses and real-time inference (RAG) agreements. Pre-training licenses grant model developers the right to ingest archival back-catalogs to train foundational base weights. These are typically high-value, fixed-sum or multi-year amortized agreements. Conversely, real-time RAG licenses connect an AI application directly to a publisher's live feed via authenticated APIs, providing users with up-to-the-minute answers, citations, and source verification.",
      "Publishers who conflate these two modalities risk selling their valuable real-time feeds under static archival pricing. A modern AI licensing framework must price live retrieval on a query-volume or subscription-tier basis, creating an annuity revenue stream that grows alongside platform usage, rather than a single depreciating lump sum.",
      "The second hazard is the resurgence of intermediary sub-licensing brokers. In the early days of news aggregators, dozens of third-party syndicators promised publishers easy distribution, only to capture 40% to 60% of the gross margin while bundling disparate titles into non-transparent package deals. The same playbook is being attempted in AI licensing today. Technology aggregators are offering publishers nominal rev-shares to join generic 'AI pools'.",
      "At HP Media Consulting, our firm conviction remains unchanged: direct platform relationships yield superior financial outcomes. When deals are negotiated directly in the publisher's own name, the publisher retains up to 90%+ of contract value, controls explicit model-training parameters, and preserves direct relationships with commercial counterparts at Bloomberg, Microsoft, OpenAI, and specialized enterprise LLM providers.",
      "Furthermore, direct contracts allow publishers to negotiate essential non-monetary protections. These include mandatory brand attribution and link citations within generated answer widgets, express prohibitions against reselling licensed tokens to third parties, and strict audit rights that permit independent verification of API ingestion volumes.",
      "To capitalize on this window of opportunity, media organizations must execute a three-step internal readiness strategy: First, conduct a complete rights audit of your archive to ensure editorial, freelance, and syndicated photography rights are cleared for corporate licensing. Second, implement robust bot-management policies that block unauthorized web crawlers, forcing commercial entities to the negotiating table. Third, structure direct, bespoke terms with counterparties rather than accepting standardized terms of service.",
      "The publishers who thrive over the next decade will not be those who build paywalls in total isolation, nor those who give away their reporting to third-party aggregators. They will be the media companies that recognize high-quality journalism as irreplaceable infrastructure for the cognitive economy, and license it with the commercial rigor it deserves.",
    ],
  },
  {
    id: "direct-aggregator-relationships-2026",
    category: "Syndication Strategy",
    title: "Why Direct Aggregator Relationships Beat Sub-Licensing Intermediaries",
    subtitle: "A practical analysis of contract terms, reporting transparency, and revenue retention for national and specialist titles.",
    author: "Henry Pettit",
    authorRole: "Founder & Managing Director, HP Media Consulting",
    date: "August 28, 2026",
    isoDate: "2026-08-28T09:00:00Z",
    readTime: "4 min read",
    summary:
      "When a third-party aggregator sub-licenses your journalism, significant margin vanishes before reaching your balance sheet. Here is why structuring direct relationships with platforms like MSN and Bloomberg delivers lasting commercial advantage.",
    content: [
      "For many publishing houses, content syndication has historically been treated as an afterthought—an administrative box to tick or a low-touch ancillary project assigned to an overburdened digital team. This mindset inevitably leads to partnering with omnibus sub-licensors who promise to 'handle everything' in exchange for a substantial cut of your revenues.",
      "While sub-licensing may appear frictionless on the surface, the long-term economic penalty is steep. Beyond the obvious 30% to 50% margin haircut, the publisher surrenders visibility. You lose direct access to platform reporting, have no influence over contract renegotiations, and cannot control how your journalism is packaged alongside competing publications.",
      "When HP Media Consulting structures direct agreements with global platforms—whether establishing consumer publications on MSN, financial portals with Bloomberg, or specialized syndication across European media networks—the contract is executed between the platform and the publisher directly. The licensing fee is paid in full into your bank account.",
      "Our compensation is structured as a modest success fee calculated solely on incremental revenues generated. This alignment ensures that every contract clause, minimum guarantee, and revenue-share metric is optimized to the publisher's maximum advantage.",
    ],
  },
];

const News = () => {
  const [expandedArticleId, setExpandedArticleId] = useState<string | null>(articles[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  usePageSEO({
    title: "Publishing, Syndication & AI Licensing Insights | HP Media Consulting",
    description:
      "Executive perspectives from Henry Pettit on publisher content syndication, platform licensing agreements with Bloomberg and MSN, and commercial AI training partnerships.",
    canonical: "/news",
  });

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}/news#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Schema.org Article Structured Data for Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "HP Media Consulting Insights",
            url: "https://hpmediaconsulting.com/news",
            description: "Industry analysis on content syndication and AI licensing for publishers.",
            blogPost: articles.map((article) => ({
              "@type": "NewsArticle",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": `https://hpmediaconsulting.com/news#${article.id}`,
              },
              headline: article.title,
              description: article.summary,
              datePublished: article.isoDate,
              author: {
                "@type": "Person",
                name: article.author,
                jobTitle: article.authorRole,
              },
              publisher: {
                "@type": "Organization",
                name: "HP Media Consulting",
                url: "https://hpmediaconsulting.com/",
              },
            })),
          }),
        }}
      />

      {/* Header Landmark */}
      <header className="bg-hero text-hero-foreground py-5 px-6 border-b border-hero-foreground/10 sticky top-0 z-40 backdrop-blur-md bg-hero/95">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <a
            href="/#home"
            className="font-heading text-xl md:text-2xl tracking-tight text-hero-foreground hover:opacity-95 transition-opacity"
            aria-label="HP Media Consulting Home"
          >
            HP Media Consulting
          </a>
          <a
            href="/#home"
            className="inline-flex items-center gap-2 text-sm font-body font-medium text-hero-foreground/80 hover:text-hero-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-hero-foreground/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
        </div>
      </header>

      {/* Main Content Landmark */}
      <main className="flex-1 container mx-auto max-w-4xl py-16 px-6">
        {/* Breadcrumb / Section Header */}
        <div className="mb-14 text-center sm:text-left">
          <p className="text-primary font-body font-semibold text-xs uppercase tracking-widest mb-3">
            Executive Briefings &amp; Market Intelligence
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading text-foreground tracking-tight leading-tight mb-4">
            Publishing, Syndication &amp; AI News
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground font-body leading-relaxed max-w-2xl">
            Strategic analysis from Henry Pettit on maximizing commercial revenues through direct aggregator contracts, publisher licensing, and emerging AI data agreements.
          </p>
        </div>

        {/* Article Feed Section */}
        <section aria-label="Executive Briefings List" className="space-y-12">
          {articles.map((article) => {
            const isExpanded = expandedArticleId === article.id;

            return (
              <article
                key={article.id}
                id={article.id}
                aria-labelledby={`title-${article.id}`}
                className="bg-card rounded-2xl border border-border shadow-sm p-6 sm:p-10 transition-shadow hover:shadow-md"
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-body text-muted-foreground mb-4">
                  <span className="bg-primary/10 text-primary font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <time dateTime={article.isoDate}>{article.date}</time>
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                    {article.readTime}
                  </span>
                </div>

                {/* Article Titles */}
                <h2
                  id={`title-${article.id}`}
                  className="font-heading text-2xl sm:text-3xl text-foreground mb-3 leading-snug"
                >
                  {article.title}
                </h2>
                <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 font-medium">
                  {article.subtitle}
                </p>

                {/* Author Card */}
                <div className="flex items-center justify-between border-y border-border py-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-heading font-bold text-sm">
                      <User className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-body font-semibold text-foreground text-sm">{article.author}</p>
                      <p className="font-body text-muted-foreground text-xs">{article.authorRole}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopyLink(article.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-md border border-border hover:bg-muted/40 transition-colors"
                    aria-label="Copy article link"
                  >
                    {copiedId === article.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-600" />
                        <span className="text-green-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Share2 className="w-3.5 h-3.5" />
                        <span>Share</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Body Content */}
                <div className="prose prose-slate max-w-none text-foreground/90 font-body leading-relaxed space-y-4">
                  <p className="text-base sm:text-lg leading-relaxed font-normal">
                    {article.content[0]}
                  </p>

                  {isExpanded ? (
                    <>
                      {article.content.slice(1).map((paragraph, idx) => (
                        <p key={idx} className="text-base leading-relaxed text-muted-foreground/95">
                          {paragraph}
                        </p>
                      ))}

                      {/* Callout box inside article */}
                      <div className="mt-8 p-6 rounded-xl bg-surface-cool border border-border/80 not-prose">
                        <h3 className="font-heading text-lg text-foreground mb-2">
                          Key Takeaway for Commercial Leadership
                        </h3>
                        <p className="text-sm font-body text-muted-foreground leading-relaxed">
                          Do not surrender proprietary AI distribution rights to generic sub-licensing pools. Direct contracts establish copyright visibility, attribution links, and enforceable audit covenants.
                        </p>
                        <div className="mt-4">
                          <a
                            href="/#contact"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary hover:underline"
                          >
                            Schedule an AI Licensing Assessment with Henry Pettit
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      … Click below to read the complete briefing.
                    </p>
                  )}
                </div>

                {/* Read Full / Collapse Toggle */}
                <div className="mt-8 pt-4 border-t border-border flex items-center justify-between">
                  <button
                    onClick={() => setExpandedArticleId(isExpanded ? null : article.id)}
                    className="inline-flex items-center gap-2 text-sm font-body font-semibold text-primary hover:text-accent transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={`body-${article.id}`}
                  >
                    {isExpanded ? (
                      <>
                        Collapse Briefing
                        <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Read Full Analysis ({article.readTime})
                        <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <a
                    href="/#contact"
                    className="text-xs font-body font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Inquire about representation &rarr;
                  </a>
                </div>
              </article>
            );
          })}
        </section>

        {/* Bottom CTA Block */}
        <section aria-labelledby="news-cta-heading" className="mt-16 p-8 md:p-12 rounded-2xl bg-hero text-hero-foreground text-center">
          <h2 id="news-cta-heading" className="font-heading text-2xl md:text-3xl mb-4">
            Looking to License Your Publisher Archive or Live News Feed?
          </h2>
          <p className="text-hero-foreground/80 font-body text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            HP Media Consulting represents premium publishers in direct negotiations with Bloomberg, MSN, and enterprise AI retrieval platforms.
          </p>
          <a
            href="/#contact"
            className="inline-block bg-hero-foreground text-hero px-8 py-3.5 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-hero-foreground/90 transition-all shadow-sm"
          >
            Book a Discovery Call
          </a>
        </section>
      </main>

      {/* Footer Landmark */}
      <footer className="bg-hero text-hero-foreground py-8 px-6 text-center text-xs font-body text-hero-foreground/60 border-t border-hero-foreground/10">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} HP Media Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/#home" className="hover:text-hero-foreground transition-colors">Home</a>
            <a href="/#services" className="hover:text-hero-foreground transition-colors">Services</a>
            <a href="/#about" className="hover:text-hero-foreground transition-colors">About</a>
            <a href="/#contact" className="hover:text-hero-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
