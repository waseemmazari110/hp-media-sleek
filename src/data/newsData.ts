export interface WNIPArticle {
  id: string;
  title: string;
  date: string;
  isoDate: string;
  author: string;
  authorRole: string;
  category: string;
  categoryColor?: string;
  image: string;
  imageAlt: string;
  imageLink: string;
  excerpt: string;
  readMoreUrl: string;
  sourceLabel: string;
  sourcePublication?: string;
  editorialReportUrl?: string;
  editorialReportLabel?: string;
  partnerUrl?: string;
  partnerLabel?: string;
  wnipDigestUrl?: string;
  readTime: string;
  isFeaturedBanner?: boolean;
  highlightStat?: { value: string; label: string };
  keyPoints?: string[];
}

export interface WNIPSpecialReport {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  isoDate: string;
  author: string;
  authorRole: string;
  category: string;
  image: string;
  imageAlt: string;
  imageLink: string;
  executive: string;
  executiveRole: string;
  framework: string;
  frameworkFull: string;
  excerpt: string;
  readMoreUrl: string;
  sourceLabel: string;
  sourcePublication?: string;
  readTime: string;
  ecosystemLinks: { label: string; url: string; role: string }[];
  pillars: { title: string; description: string }[];
}

export interface WNIPNewsletterSegment {
  id: string;
  title: string;
  category: string;
  categoryColor?: string;
  sourcePublication: string;
  primaryUrl: string;
  actionLabel: string;
  summary: string;
  attributionContext: string;
  secondaryLinks?: { label: string; url: string }[];
  readTime: string;
}

export interface NewsletterMetadata {
  edition: string;
  date: string;
  curator: string;
  curatorRole: string;
  publication: string;
  publicationUrl: string;
  coPublisher: string;
  coPublisherRole: string;
  editorNote: string;
  badgeText: string;
}

export const newsletterMeta: NewsletterMetadata = {
  edition: "Issue #184 · Executive Industry Digest",
  date: "October 1, 2026",
  curator: "Jez Walters",
  curatorRole: "Founder & Editor, What's New in Publishing",
  publication: "What's New in Publishing",
  publicationUrl: "https://whatsnewinpublishing.com/",
  coPublisher: "Henry Pettit",
  coPublisherRole: "Managing Director, HP Media Consulting",
  badgeText: "Curated media intelligence presented in collaboration with WNIP",
  editorNote:
    "Welcome to this special curated edition of What's New in Publishing, presented in partnership with HP Media Consulting. As search referrals contract and autonomous AI agents redefine distribution, media executives face a dual imperative: protect journalistic copyright through institutional licensing while engineering algorithmic paywalls that maximize both subscriber retention and programmatic yield.",
};

/**
 * Exact tracked destination URLs mapped to the four primary local image banners.
 */
export const bannerMappings = [
  {
    image: "/1.jpg",
    label: "Banner 1 · Google AI Payouts & Publisher Licensing",
    destinationUrl:
      "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_campaign=email-half-post&r=1pibet&utm_source=substack&utm_medium=email",
  },
  {
    image: "/2.jpg",
    label: "Banner 2 · Membrana Media Rewarded Campaigns",
    destinationUrl:
      "https://en.membrana.media/rewarded-campaigns?utm_source=substack_banner&utm_medium=referral%20&utm_campaign=substack_WNIP_banner",
  },
  {
    image: "/3.jpg",
    label: "Banner 3 · MediaSpace Global Changemakers Summit 2026",
    destinationUrl:
      "https://www.eventbrite.co.uk/e/mediaspace-global-changemakers-summit-2026-tickets-1998125437973?utm_source=substack&utm_medium=email",
  },
  {
    image: "/4.jpg",
    label: "Banner 4 · CustomerX Experience Forum",
    destinationUrl:
      "https://www.customerx.net/?utm_source=substack&utm_medium=email",
  },
];

export const primaryArticles: WNIPArticle[] = [
  {
    id: "google-ai-payouts-2026",
    title: "Google Is Paying 100 Digital Publishers for AI Overviews",
    date: "October 1, 2026",
    isoDate: "2026-10-01T08:00:00Z",
    author: "Jez Walters",
    authorRole: "Founder & Editor, What's New in Publishing",
    category: "AI Licensing",
    categoryColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    image: "/1.jpg",
    imageAlt: "WNIP Laptop Workspace Header - Google AI Overviews and publisher payouts analysis",
    imageLink:
      "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_campaign=email-half-post&r=1pibet&utm_source=substack&utm_medium=email",
    excerpt:
      "Google tests paying publishers for AI Overviews, but early payouts leave newsrooms questioning value. Read the full investigation.",
    readMoreUrl:
      "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_campaign=email-half-post&r=1pibet&utm_source=substack&utm_medium=email",
    sourceLabel: "Continue reading at What's New in Publishing",
    sourcePublication: "What's New in Publishing (Substack Edition)",
    editorialReportUrl: "https://www.theinformation.com/articles/google-paying-100-digital-publishers-ai-overviews",
    editorialReportLabel: "The Information Investigation",
    wnipDigestUrl: "https://whatsnewinpublishing.substack.com/p/googles-pay-for-value-a-lifeline",
    readTime: "4 min read",
    isFeaturedBanner: true,
    highlightStat: {
      value: "< 0.1%",
      label: "Ad revenue share for midsize publishers",
    },
    keyPoints: [
      "100 pilot publishers enrolled across Gemini and AI Mode answer syntheses.",
      "Sharp compensation skew: token payments under $1,000 vs. $1m for top conglomerates.",
      "Industry consensus calls for indexed licensing baselines over opaque algorithmic formulas.",
    ],
  },
  {
    id: "reuters-dynamic-paywall-2026",
    title: "Reuters’ Dynamic Paywall Has Increased Its Ad Performance",
    date: "October 1, 2026",
    isoDate: "2026-10-01T08:00:00Z",
    author: "Jez Walters",
    authorRole: "Founder & Editor, What's New in Publishing",
    category: "Monetization",
    categoryColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    image: "/2.jpg",
    imageAlt: "Membrana Media Iceberg Banner - Turning unmonetised non-subscribers into revenue",
    imageLink:
      "https://en.membrana.media/rewarded-campaigns?utm_source=substack_banner&utm_medium=referral%20&utm_campaign=substack_WNIP_banner",
    excerpt:
      "Reuters uses machine learning to balance subscriptions and ad yields, driving dual revenue gains. Explore the case study.",
    readMoreUrl:
      "https://digiday.com/media/how-reuters-dynamic-paywall-is-boosting-subscriptions-and-ads/",
    sourceLabel: "Continue reading on Digiday",
    sourcePublication: "Digiday Case Study",
    editorialReportUrl: "https://digiday.com/media/how-reuters-dynamic-paywall-is-boosting-subscriptions-and-ads/",
    editorialReportLabel: "Reuters Case Study on Digiday",
    partnerUrl:
      "https://en.membrana.media/rewarded-campaigns?utm_source=substack_banner&utm_medium=referral%20&utm_campaign=substack_WNIP_banner",
    partnerLabel: "Membrana Rewarded Campaigns",
    wnipDigestUrl: "https://whatsnewinpublishing.substack.com/p/the-readers-who-will-never-subscribe",
    readTime: "3 min read",
    isFeaturedBanner: false,
    highlightStat: {
      value: "+24%",
      label: "Blended RPM lift across hybrid audience segments",
    },
    keyPoints: [
      "Machine learning evaluates real-time conversion likelihood vs. programmatic ad value.",
      "Eliminates rigid metering quotas in favor of individual propensity scoring.",
      "Sponsored partner: Membrana Media monetises non-subscribers with Rewarded Campaigns.",
    ],
  },
  {
    id: "google-traffic-collapses-2026",
    title: "Google Traffic Collapses: Loyal Readers Are Keeping Publishers Afloat",
    date: "October 1, 2026",
    isoDate: "2026-10-01T08:00:00Z",
    author: "Jez Walters",
    authorRole: "Founder & Editor, What's New in Publishing",
    category: "Traffic & Audience",
    categoryColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    image: "/3.jpg",
    imageAlt: "MediaSpace Global Changemakers Summit 2026 Banner",
    imageLink:
      "https://www.eventbrite.co.uk/e/mediaspace-global-changemakers-summit-2026-tickets-1998125437973?utm_source=substack&utm_medium=email",
    excerpt:
      "As search referrals plunge up to 40%, direct loyal reader engagement keeps publishers resilient. Discover how newsrooms adapt.",
    readMoreUrl:
      "https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/",
    sourceLabel: "Continue reading on Search Engine Journal",
    sourcePublication: "Search Engine Journal Audit",
    editorialReportUrl: "https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/",
    editorialReportLabel: "Chartbeat Audit (Search Engine Journal)",
    partnerUrl:
      "https://www.eventbrite.co.uk/e/mediaspace-global-changemakers-summit-2026-tickets-1998125437973?utm_source=substack&utm_medium=email",
    partnerLabel: "MediaSpace Global Summit 2026",
    wnipDigestUrl: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters",
    readTime: "3 min read",
    isFeaturedBanner: false,
    highlightStat: {
      value: "-40%",
      label: "Google Search referrals offset by +11% loyal audience",
    },
    keyPoints: [
      "Google Search down 40% and Discover down 34% across Chartbeat's global network.",
      "Direct loyal audience visits rose 11%, keeping net publisher pageviews stable.",
      "Partner Summit: MediaSpace Global Changemakers Summit convenes media leaders.",
    ],
  },
  {
    id: "ai-agents-content-distribution-2026",
    title: "AI Agents: A Tipping Point For Content Distribution",
    date: "October 1, 2026",
    isoDate: "2026-10-01T08:00:00Z",
    author: "Jez Walters",
    authorRole: "Founder & Editor, What's New in Publishing",
    category: "Content Distribution",
    categoryColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    image: "/4.jpg",
    imageAlt: "CustomerX Event Banner - The premier customer and audience experience forum",
    imageLink: "https://www.customerx.net/?utm_source=substack&utm_medium=email",
    excerpt:
      "Autonomous AI agents are reshaping news delivery into real-time answers. Learn what this 'Spotify Moment' means for publishers.",
    readMoreUrl: "https://fdaudens.substack.com/p/everyone-wants-to-be-your-personal",
    sourceLabel: "Continue reading on Florent Daudens Substack",
    sourcePublication: "Florent Daudens Analysis",
    editorialReportUrl: "https://fdaudens.substack.com/p/everyone-wants-to-be-your-personal",
    editorialReportLabel: "Florent Daudens' Spotify Moment Analysis",
    partnerUrl: "https://www.customerx.net/?utm_source=substack&utm_medium=email",
    partnerLabel: "CustomerX 2026 Summit",
    wnipDigestUrl: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters",
    readTime: "4 min read",
    isFeaturedBanner: false,
    highlightStat: {
      value: "Spotify Moment",
      label: "Unbundling of news packages via agentic synthesis",
    },
    keyPoints: [
      "AI agents (Muse, Dots, Grok Bot) replace linear browsing with synthetic answers.",
      "Dual-audience architecture required: machine-parsable schema + human conversion.",
      "Featured Forum: CustomerX on optimizing the next era of audience experience.",
    ],
  },
];

export const specialReport: WNIPSpecialReport = {
  id: "sundial-media-next-net-sail-2026",
  title: "Sundial Media Group & Next Net SAIL: The Blueprint for Scalable AI Rights Infrastructure",
  subtitle:
    "How CEO Kirk McDonald is pioneering institutional rights management, algorithmic metering, and verifiable attribution covenants across enterprise generative AI.",
  date: "October 1, 2026",
  isoDate: "2026-10-01T08:00:00Z",
  author: "Jez Walters",
  authorRole: "Founder & Editor, What's New in Publishing",
  category: "Special Executive Report",
  image: "/5.jpg",
  imageAlt: "Kirk McDonald, CEO of Sundial Media & Technology Group, presenting the Next Net SAIL framework",
  imageLink:
    "https://whatsnewinpublishing.substack.com/p/why-sundial-is-rebuilding-its-media-brands-around-creators-and-ai-rights",
  executive: "Kirk McDonald",
  executiveRole: "CEO, Sundial Media & Technology Group",
  framework: "Next Net SAIL",
  frameworkFull: "Standards for AI Ingestion & Licensing",
  excerpt:
    "Sundial Media CEO Kirk McDonald unveils Next Net SAIL, an institutional framework for AI rights and licensing. Read the blueprint.",
  readMoreUrl:
    "https://whatsnewinpublishing.substack.com/p/why-sundial-is-rebuilding-its-media-brands-around-creators-and-ai-rights",
  sourceLabel: "Continue reading Kirk McDonald Interview on Substack",
  sourcePublication: "What's New in Publishing (Substack Long-Read)",
  readTime: "6 min deep-dive",
  ecosystemLinks: [
    {
      label: "Next Net SAIL Protocol",
      url: "https://nextnet.ai/",
      role: "AI Rights & Permissioning Ledger",
    },
    {
      label: "Sundial Media Group",
      url: "https://sundialmg.com/about",
      role: "Holding Company (ESSENCE, Refinery29)",
    },
    {
      label: "Kirk McDonald Profile",
      url: "https://www.linkedin.com/in/mcdonaldkirk/",
      role: "CEO, Sundial Media Group",
    },
    {
      label: "Richelieu Dennis Profile",
      url: "https://www.linkedin.com/in/richelieu-dennis-4953b613/",
      role: "Founder, Sundial Media Group",
    },
  ],
  pillars: [
    {
      title: "Cryptographic Provenance & Watermarking",
      description:
        "Embeds machine-verifiable rights tokens into publisher RSS feeds, API endpoints, and structured article markup to enforce provenance across model training and real-time RAG ingestion.",
    },
    {
      title: "Dynamic Inference-Based Metering",
      description:
        "Replaces flat, arbitrary annual lump sums with granular query-level metering, compensating newsrooms whenever their reporting grounds generative answers or conversational agent outputs.",
    },
    {
      title: "Enforceable Attribution & Link Citations",
      description:
        "Contractually mandates prominent editorial attribution and deep backlinks within AI UI widgets, safeguarding reader discovery channels and maintaining brand equity.",
    },
    {
      title: "Independent Audit & Verification Rights",
      description:
        "Empowers media companies with third-party technical audit access to verify scraping compliance, API ingestion volumes, and licensing boundary adherence.",
    },
  ],
};

/**
 * All remaining curated newsletter segment items from WNIP Issue #184,
 * linking directly out to verified original third-party sources and tracking parameters.
 */
export const newsletterSegments: WNIPNewsletterSegment[] = [
  {
    id: "economist-video-creators",
    title: "The Economist Turns Its Journalists Into Creators",
    category: "Creator Strategy",
    categoryColor: "bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20",
    sourcePublication: "Press Gazette",
    primaryUrl: "https://pressgazette.co.uk/publishers/broadcast/economist-video-strategy/",
    actionLabel: "Read Case Study on Press Gazette",
    summary:
      "The Economist drove 100M+ views by transforming in-house reporters into recognized creators. Discover their playbook.",
    attributionContext: "UK Publisher of the Year strategy reported by Press Gazette.",
    secondaryLinks: [
      { label: "The Economist Insider Strand", url: "https://www.economist.com/insider" },
      { label: "Chris Stone Profile", url: "https://open.substack.com/users/289412116-chris-stone?utm_source=mentions" },
    ],
    readTime: "3 min read",
  },
  {
    id: "workweek-b2b-platform",
    title: "Workweek Is Building a New Model for B2B Media",
    category: "B2B Media",
    categoryColor: "bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20",
    sourcePublication: "Simon Owens' Media Newsletter",
    primaryUrl: "https://simonowens.substack.com/p/this-company-is-building-the-worlds-51e",
    actionLabel: "Read Analysis on Simon Owens' Substack",
    summary:
      "Workweek scales a creator-driven B2B platform blending trade communities and practitioner newsletters. See how it works.",
    attributionContext: "Original media business architecture review by Simon Owens.",
    readTime: "4 min read",
  },
  {
    id: "agentic-ai-b2b-impact",
    title: "Agentic AI’s Brutal Impact on B2B Information",
    category: "AI Strategy",
    categoryColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    sourcePublication: "Tony Uphoff's Substack",
    primaryUrl: "https://tonyuphoff.substack.com/p/what-does-it-mean-when-the-company",
    actionLabel: "Read Tony Uphoff's Analysis",
    summary:
      "Agentic AI commoditizes generic analysis, elevating proprietary data and executive networks. Read the full analysis.",
    attributionContext: "Strategic B2B market assessment by Tony Uphoff.",
    readTime: "3 min read",
  },
  {
    id: "outsell-b2b-seat-licence",
    title: "AI Is Breaking B2B Publishing’s Per-Seat Licence",
    category: "Licensing & Rights",
    categoryColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    sourcePublication: "Copyright Clearance Center / Outsell",
    primaryUrl: "https://www.copyright.com/resource-library/insights/outsell-2026/",
    actionLabel: "Read Outsell Report via Copyright.com",
    summary:
      "Enterprise AI assistants upend per-seat subscriptions, forcing shifts to usage-based models. Review the findings.",
    attributionContext: "Institutional licensing research published via Copyright Clearance Center.",
    readTime: "5 min read",
  },
  {
    id: "collingwood-media-uninvestable",
    title: "AI Is Making Traditional Media (Almost) Uninvestable",
    category: "Media Finance",
    categoryColor: "bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20",
    sourcePublication: "The Collingwood Group",
    primaryUrl: "https://collingwood.group/the-collingwood-market-report/",
    actionLabel: "Read Collingwood Market Report",
    summary:
      "Media M&A fell 46% as buyers discount publishers lacking AI rights covenants. Explore the market report.",
    attributionContext: "M&A advisory and publisher valuation intelligence by Collingwood Group.",
    readTime: "4 min read",
  },
  {
    id: "lemonde-pangram-ai-novel",
    title: "Prize-Winning Novel Flagged as 95% AI-Written",
    category: "AI Ethics & Verification",
    categoryColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    sourcePublication: "Le Monde",
    primaryUrl: "https://www.lemonde.fr/culture/article/2026/09/28/quand-pangram-l-outil-qui-detecte-l-utilisation-des-ia-fait-irruption-dans-la-vie-des-editeurs_6785082_3246.html",
    actionLabel: "Read Le Monde Cultural Investigation",
    summary:
      "A celebrated novel flagged as 95% synthetic ignites debate over editorial origin verifications. Read the report.",
    attributionContext: "French cultural investigation reported by Le Monde.",
    readTime: "4 min read",
  },
  {
    id: "press-gazette-made-by-humans",
    title: "Made By Humans: Newsroom Verification Tool",
    category: "Editorial Tools",
    categoryColor: "bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20",
    sourcePublication: "Press Gazette",
    primaryUrl: "https://pressgazette.co.uk/news/press-gazette-launches-newsroom-tool-to-stop-ai-fakes-before-publication/",
    actionLabel: "View Tool on Press Gazette",
    summary:
      "Press Gazette launches an open tool to audit synthetic content and certify human provenance. Check out the tool.",
    attributionContext: "Newsroom provenance infrastructure launched by Press Gazette.",
    readTime: "3 min read",
  },
  {
    id: "medium-state-of-writing-2026",
    title: "Medium’s State of Writing Report 2026: A Private Writing Revival",
    category: "Audience Research",
    categoryColor: "bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20",
    sourcePublication: "Medium Blog",
    primaryUrl: "https://medium.com/blog/mediums-state-of-writing-report-2026-a-private-writing-revival-107016e9e254",
    actionLabel: "Read Medium's Full Report",
    summary:
      "Writers adopt AI tools while distrusting AI prose as search referrals contract sharply. Read the survey findings.",
    attributionContext: "Creator economy and search erosion study by Medium.",
    readTime: "4 min read",
  },
  {
    id: "membrana-unsubscribers-interview",
    title: "The Readers Who Will Never Subscribe: Monetizing Silent Audiences",
    category: "Monetization",
    categoryColor: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
    sourcePublication: "What's New in Publishing (Interview)",
    primaryUrl: "https://whatsnewinpublishing.substack.com/p/the-readers-who-will-never-subscribe",
    actionLabel: "Read Michael Kudriavsky Interview on WNIP",
    summary:
      "Membrana Media CEO explains how Rewarded Campaigns monetize casual readers who never subscribe. Read the interview.",
    attributionContext: "Executive sponsor spotlight presented in partnership with Membrana Media.",
    secondaryLinks: [
      {
        label: "Membrana Rewarded Campaigns",
        url: "https://en.membrana.media/rewarded-campaigns?utm_source=substack_banner&utm_medium=referral%20&utm_campaign=substack_WNIP_banner",
      },
    ],
    readTime: "5 min read",
  },
  {
    id: "google-pay-for-value-lifeline",
    title: "Google’s Pay-for-Value: A Lifeline or an Algorithmic Trap?",
    category: "AI Licensing",
    categoryColor: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20",
    sourcePublication: "What's New in Publishing",
    primaryUrl: "https://whatsnewinpublishing.substack.com/p/googles-pay-for-value-a-lifeline",
    actionLabel: "Read Publisher Commentary on WNIP",
    summary:
      "Publishers debate whether Google's AI payouts offset steep organic referral declines. Read industry perspectives.",
    attributionContext: "Publisher reaction analysis curated by Jez Walters.",
    secondaryLinks: [
      {
        label: "Original Investigation on The Information",
        url: "https://www.theinformation.com/articles/google-paying-100-digital-publishers-ai-overviews",
      },
    ],
    readTime: "4 min read",
  },
  {
    id: "mediaspace-changemakers-summit",
    title: "MediaSpace Global Changemakers Summit 2026",
    category: "Industry Forum",
    categoryColor: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
    sourcePublication: "Eventbrite / MediaSpace",
    primaryUrl: "https://www.eventbrite.co.uk/e/mediaspace-global-changemakers-summit-2026-tickets-1998125437973?utm_source=substack&utm_medium=email",
    actionLabel: "Register on Eventbrite (MediaSpace Summit)",
    summary:
      "Media leaders gather in London and online to shape copyright standards and audience ownership. View event details.",
    attributionContext: "Official WNIP partner event convening October 7, 2026 in London & Online.",
    readTime: "Event Brief",
  },
  {
    id: "customerx-experience-summit",
    title: "CustomerX 2026: Architecting the Next-Gen Audience Experience",
    category: "Audience & CX",
    categoryColor: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
    sourcePublication: "CustomerX",
    primaryUrl: "https://www.customerx.net/?utm_source=substack&utm_medium=email",
    actionLabel: "Access CustomerX Forum Portal",
    summary:
      "Explore audience lifetime value, agentic delivery, and zero-click retention strategies. Access the forum portal.",
    attributionContext: "Featured WNIP event partner for digital media executives.",
    readTime: "Event Brief",
  },
  {
    id: "oddly-obvious-media-product",
    title: "Oddly Obvious: Media Product Design & Behavioral Strategy",
    category: "Product Design",
    categoryColor: "bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20",
    sourcePublication: "Oddly Obvious",
    primaryUrl: "https://oddlyobvious.com/",
    actionLabel: "Visit Oddly Obvious",
    summary:
      "Strategic product design engineered to convert casual visitors into loyal brand advocates. Explore their work.",
    attributionContext: "Curated ecosystem partner acknowledged in WNIP Issue #184.",
    readTime: "Resource",
  },
  {
    id: "jez-walters-industry-feed",
    title: "What's New in Publishing: Complete Issue #184 Edition on Substack",
    category: "Executive Newsletter",
    categoryColor: "bg-primary/10 text-primary border-primary/20",
    sourcePublication: "WNIP Substack",
    primaryUrl: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_campaign=email-half-post&r=1pibet&utm_source=substack&utm_medium=email",
    actionLabel: "View Full Issue #184 on Substack",
    summary:
      "Read Jez Walters' full newsletter analysis, commentary, and publisher discussions on Substack. Read the edition.",
    attributionContext: "Original newsletter edition curated by Jez Walters.",
    secondaryLinks: [
      { label: "Jez Walters Profile", url: "https://substack.com/@jezwalters574004" },
      { label: "WNIP Web Portal", url: "https://whatsnewinpublishing.com/" },
      {
        label: "Share Issue #184",
        url: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_source=substack&utm_medium=email&utm_content=share&action=share",
      },
    ],
    readTime: "Full Edition",
  },
];

/**
 * Manifest of all remaining 33 newsletter segment items and tracked URLs from Issue #184.
 */
export const allTrackedNewsletterLinks = [
  {
    id: 1,
    name: "Membrana Media Rewarded Campaigns (Banner 2.jpg)",
    url: "https://en.membrana.media/rewarded-campaigns?utm_source=substack_banner&utm_medium=referral%20&utm_campaign=substack_WNIP_banner",
    type: "Promotional Banner",
  },
  {
    id: 2,
    name: "Michael Kudriavsky Executive Interview",
    url: "https://whatsnewinpublishing.substack.com/p/the-readers-who-will-never-subscribe",
    type: "Editorial Long-Read",
  },
  {
    id: 3,
    name: "Google AI Overviews 100 Publishers Investigation",
    url: "https://www.theinformation.com/articles/google-paying-100-digital-publishers-ai-overviews",
    type: "Original Source",
  },
  {
    id: 4,
    name: "Google Pay-for-Value Industry Comments",
    url: "https://whatsnewinpublishing.substack.com/p/googles-pay-for-value-a-lifeline",
    type: "Editorial Commentary",
  },
  {
    id: 5,
    name: "AI Agents Tipping Point Analysis (Florent Daudens)",
    url: "https://fdaudens.substack.com/p/everyone-wants-to-be-your-personal",
    type: "Original Source",
  },
  {
    id: 6,
    name: "The Economist Video Creator Strategy",
    url: "https://pressgazette.co.uk/publishers/broadcast/economist-video-strategy/",
    type: "Original Source",
  },
  {
    id: 7,
    name: "The Economist Insider Strand",
    url: "https://www.economist.com/insider",
    type: "Product Portal",
  },
  {
    id: 8,
    name: "Chris Stone Executive Profile",
    url: "https://open.substack.com/users/289412116-chris-stone?utm_source=mentions",
    type: "Author Profile",
  },
  {
    id: 9,
    name: "Reuters Dynamic Paywall Ad Lift Case Study",
    url: "https://digiday.com/media/how-reuters-dynamic-paywall-is-boosting-subscriptions-and-ads/",
    type: "Original Source",
  },
  {
    id: 10,
    name: "Google Search Decline & Loyal Readers (Chartbeat Audit)",
    url: "https://www.searchenginejournal.com/google-search-decline-publishers-chartbeat/590681/",
    type: "Original Source",
  },
  {
    id: 11,
    name: "Workweek B2B Media Platform Model",
    url: "https://simonowens.substack.com/p/this-company-is-building-the-worlds-51e",
    type: "Original Source",
  },
  {
    id: 12,
    name: "Agentic AI Impact on B2B Information (Tony Uphoff)",
    url: "https://tonyuphoff.substack.com/p/what-does-it-mean-when-the-company",
    type: "Original Source",
  },
  {
    id: 13,
    name: "Outsell 2026 AI Breaking Per-Seat Licences Report",
    url: "https://www.copyright.com/resource-library/insights/outsell-2026/",
    type: "Industry Research",
  },
  {
    id: 14,
    name: "Collingwood Market Report: Media M&A Down 46%",
    url: "https://collingwood.group/the-collingwood-market-report/",
    type: "Financial Research",
  },
  {
    id: 15,
    name: "Le Monde: Prize-Winning Novel Flagged 95% AI-Written",
    url: "https://www.lemonde.fr/culture/article/2026/09/28/quand-pangram-l-outil-qui-detecte-l-utilisation-des-ia-fait-irruption-dans-la-vie-des-editeurs_6785082_3246.html",
    type: "Investigative Reporting",
  },
  {
    id: 16,
    name: "Press Gazette: Made By Humans Newsroom Provenance Tool",
    url: "https://pressgazette.co.uk/news/press-gazette-launches-newsroom-tool-to-stop-ai-fakes-before-publication/",
    type: "Newsroom Utility",
  },
  {
    id: 17,
    name: "Medium's State of Writing Report 2026",
    url: "https://medium.com/blog/mediums-state-of-writing-report-2026-a-private-writing-revival-107016e9e254",
    type: "Industry Survey",
  },
  {
    id: 18,
    name: "MediaSpace Global Changemakers Summit 2026 (Banner 3.jpg)",
    url: "https://www.eventbrite.co.uk/e/mediaspace-global-changemakers-summit-2026-tickets-1998125437973?utm_source=substack&utm_medium=email",
    type: "Promotional Banner / Event",
  },
  {
    id: 19,
    name: "CustomerX Experience Forum (Banner 4.jpg)",
    url: "https://www.customerx.net/?utm_source=substack&utm_medium=email",
    type: "Promotional Banner / Event",
  },
  {
    id: 20,
    name: "Sundial Media & Next Net SAIL Deep-Dive (Special Report 5.jpg)",
    url: "https://whatsnewinpublishing.substack.com/p/why-sundial-is-rebuilding-its-media-brands-around-creators-and-ai-rights",
    type: "Executive Long-Read",
  },
  {
    id: 21,
    name: "Sundial Media & Technology Group Portal",
    url: "https://sundialmg.com/about",
    type: "Corporate Portal",
  },
  {
    id: 22,
    name: "Richelieu Dennis Founder Profile",
    url: "https://www.linkedin.com/in/richelieu-dennis-4953b613/",
    type: "Executive Network",
  },
  {
    id: 23,
    name: "Kirk McDonald CEO Profile",
    url: "https://www.linkedin.com/in/mcdonaldkirk/",
    type: "Executive Network",
  },
  {
    id: 24,
    name: "Next Net SAIL Open Rights Protocol",
    url: "https://nextnet.ai/",
    type: "Standards Ledger",
  },
  {
    id: 25,
    name: "Oddly Obvious Digital Design",
    url: "https://oddlyobvious.com/",
    type: "Partner Studio",
  },
  {
    id: 26,
    name: "Jez Walters Substack Creator Profile",
    url: "https://substack.com/@jezwalters574004",
    type: "Author Profile",
  },
  {
    id: 27,
    name: "Google AI Payouts Substack Lead Post (Banner 1.jpg)",
    url: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_campaign=email-half-post&r=1pibet&utm_source=substack&utm_medium=email",
    type: "Lead Newsletter Post",
  },
  {
    id: 28,
    name: "WNIP Issue #184 Direct Email Share Link",
    url: "https://whatsnewinpublishing.substack.com/p/googles-paltry-ai-payouts-reuters?utm_source=substack&utm_medium=email&utm_content=share&action=share",
    type: "Distribution Link",
  },
  {
    id: 29,
    name: "What's New in Publishing Main Portal",
    url: "https://whatsnewinpublishing.com/",
    type: "Main Publication",
  },
  {
    id: 30,
    name: "What's New in Publishing Substack Publication",
    url: "https://whatsnewinpublishing.substack.com/",
    type: "Substack Edition",
  },
  {
    id: 31,
    name: "Sundial SAIL Section: Brand Reach & Creator Voice",
    url: "https://whatsnewinpublishing.substack.com/i/215846232/the-brand-provides-reach-and-support-the-creator-provides-voice",
    type: "Deep-Dive Segment",
  },
  {
    id: 32,
    name: "Sundial SAIL Section: AI Rights, the Missing Link",
    url: "https://whatsnewinpublishing.substack.com/i/215846232/ai-rights-the-missing-link",
    type: "Deep-Dive Segment",
  },
  {
    id: 33,
    name: "Sundial SAIL Section: Two Initiatives But One Goal",
    url: "https://whatsnewinpublishing.substack.com/i/215846232/two-initiatives-but-one-goal",
    type: "Deep-Dive Segment",
  },
];
