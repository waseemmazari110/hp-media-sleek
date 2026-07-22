import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Henry has priceless connections to all the relevant news aggregators and media houses. With his help we opened up additional revenue streams through cooperation, syndication and licensing that we are really excited about and that help us grow.",
    name: "Corina Lingscheidt",
    role: "Managing Director, News.de",
    avatar: "ND",
  },
  {
    quote:
      "We needed to rapidly build our syndication and licencing business but didn't have the expertise in-house to scale at speed, so we turned to HP Media Consulting. It was one of the best decisions we've made this year. Henry's expertise, network of contacts and calm professionalism has been invaluable, and he's helped us establish a significant new revenue stream and brought on multiple partners across the globe. I can't recommend him highly enough.",
    name: "Geoff Marsh",
    role: "Commercial Director, GB News",
    avatar: "GB",
  },
  {
    quote:
      "I have had the pleasure of working with Henry at HP Media Consulting for the past year, and I can confidently say he is a true asset to any company looking to syndicate their content. His extensive connections, coupled with his considerable experience, has resulted in content distribution agreements with 7 platforms, which generates income and builds brand awareness. Henry is a clear, concise communicator who kept us informed throughout the process, and his dedication to our success went above and beyond expectations. I wouldn't hesitate to recommend HP Media to anyone looking for a top-notch distribution consultant.",
    name: "Matt Grossman",
    role: "Barchart.com",
    avatar: "BC",
  },
  {
    quote:
      "We are very happy with the cooperation with HP Media Consulting. Together we were able to expand the reach of our special interest platforms and monetize them excellently. We look forward to further successes together.",
    name: "Sven Scheffler",
    role: "Str\u00f6er Media Brands",
    avatar: "SM",
  },
  {
    quote:
      "HP Media Consulting has been an integral part of City AM's growth story - Henry has been pivotal in helping City AM navigate the ecosystem of off-site content. He is adept at bringing new opportunities to us in an evolving media landscape - I would highly recommend working with Henry.",
    name: "Harry Owen",
    role: "CEO, City AM",
    avatar: "CA",
  },
  {
    quote:
      "Thanks to Henry's HP Media Consulting help we have closed syndication deals with some of the biggest names in the business such as Bloomberg and MSN.com, which has become a major part of IntelliNews' revenues. HP Media Consulting has become a major ally and key part of our growth strategy as new deals are always in the works.",
    name: "Ben Aris",
    role: "IntelliNews",
    avatar: "IN",
  },
  {
    quote:
      "Henry and HP Media Consulting have been an invaluable partner for us, helping us achieve something sorely needed during a full-scale war - that of getting Ukrainian voices to Western audiences. His advice and effort on our behalf have been critical to our success as a Ukrainian media company entering the global market, and we look forward to continuing that partnership.",
    name: "Roman Koktriatski",
    role: "The New Voice of Ukraine",
    avatar: "NV",
  },
  {
    quote:
      "Henry played a pivotal role in getting Kyiv Independent's journalism to be seen by millions of people worldwide via partnerships with news aggregators. We rely on his guidance and advice to stay competitive and relevant in news syndication.",
    name: "Zakhar Protsiuk",
    role: "Kyiv Independent",
    avatar: "KI",
  },
];

const publisherLogos = [
  "City AM",
  "Citywire",
  "SWNS",
  "GB News",
  "The Lawyer",
  "Reach plc",
  "PR Newswire",
  "Invezz",
  "The Kyiv Independent",
  "RBC Ukraine",
  "The Moscow Times",
  "Jerusalem Post",
  "T-Online",
  "Watson.de",
  "Str\u00f6er Media Brands",
  "Redaktions Netzwerk Deutschland",
  "News.de",
  "Madsack Media",
  "Benzinga",
  "Barchart",
  "Stocktwits",
  "StockStory",
  "Cointelegraph",
  "Investing.com",
  "Brobible",
  "Tikr",
  "Moneywise",
  "Cybernews",
  "MarketBeat",
  "The Center Square",
  "Reason Foundation",
  "Baltic News Service",
  "EU Observer",
  "The Beiruter",
  "Daily Post (Nigeria)",
  "Daily Maverick",
  "Business Insider Africa",
  "Hong Kong Free Press",
  "SME Group",
  "Dennik N",
  "Stars Insider",
  "A Bola",
  "ZME Science",
  "IFL Science",
  "NFL.com",
  "Rugbypass",
  "Anfield Watch",
  "IntelliNews",
  "The New Voice of Ukraine",
  "plus others",
];

const platformLogos = [
  "Bloomberg",
  "Moodys",
  "Smart News",
  "Newsbreak",
  " Samsung News",
  "Opera News",
  "Yahoo",
  " AOL",
  " CCC",
  "CLA",
  " PMG Presse Monitor",
  "Cafeyn",
  " Readly",
  " Video Solutions",
  " AI RAG integrations",
  "MSN",
  "Factiva",
  "Lexis Nexis",
  "LSEG",
  "Apple News",
  "Google",
  "Yahoo Finance",
  "and other licensing options",
];

const LogoRow = ({ logos, label }: { logos: string[]; label: string }) => (
  <div>
    <p className="text-muted-foreground text-xs uppercase tracking-widest font-body font-semibold mb-4 text-center">
      {label}
    </p>
    <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
      {logos.map((name) => (
        <span
          key={name}
          className="text-muted-foreground/60 font-heading text-sm md:text-base whitespace-nowrap hover:text-primary transition-colors"
        >
          {name}
        </span>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="clients" className="py-24 md:py-32 bg-surface-cool">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Clients
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Trusted by Publishers&nbsp;Worldwide
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={`${t.name}-${t.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border flex flex-col"
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4 flex-shrink-0" />
              <p className="text-foreground/80 font-body text-base leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-body font-semibold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="font-body text-muted-foreground text-xs">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-10"
        >
          <LogoRow logos={publisherLogos} label="Publisher Partners" />
          <div className="border-t border-border" />
          <LogoRow logos={platformLogos} label="Platform Partners" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
