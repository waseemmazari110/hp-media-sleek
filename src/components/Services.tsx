import { motion } from "framer-motion";
import { Globe, TrendingUp, Handshake, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Publisher Content Syndication",
    description:
      "Distribute your journalism across leading aggregators and media platforms worldwide (including MSN, Bloomberg, and Yahoo), expanding readership while generating recurring royalty streams.",
  },
  {
    icon: Handshake,
    title: "Direct Platform Partnerships",
    description:
      "We negotiate direct commercial agreements in your own name, bypassing intermediaries so publishers keep up to 90%+ of licensing revenues.",
  },
  {
    icon: Zap,
    title: "AI Licensing & RAG Partnerships",
    description:
      "Navigate emerging AI opportunities safely. We structure fair, transparent agreements to license publisher archives and live feeds for LLM training and RAG retrieval architectures.",
  },
  {
    icon: TrendingUp,
    title: "Publisher Revenue Optimisation",
    description:
      "Uncover under-monetised editorial assets and archive libraries. We build multiple sustainable revenue lines without overburdening your internal editorial or sales teams.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Core Specialisms
          </p>
          <h2 id="services-heading" className="font-heading text-3xl md:text-5xl text-foreground">
            Content Syndication &amp; Aggregator Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg font-body leading-relaxed">
            Specialist representation delivering high-value distribution deals for national and specialist publishers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" role="list">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              role="listitem"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 shrink-0">
                <service.icon className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
