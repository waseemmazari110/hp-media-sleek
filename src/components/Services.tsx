import { motion } from "framer-motion";
import { Globe, TrendingUp, Handshake, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Content Syndication",
    description:
      "Distribute your journalism across leading platforms worldwide, reaching new audiences while generating sustainable revenue streams.",
  },
  {
    icon: Handshake,
    title: "Direct Platform Partnerships",
    description:
      "We negotiate directly with platforms on your behalf, cutting out middlemen so you retain a far greater share of licensing revenue.",
  },
  {
    icon: Zap,
    title: "AI Licensing Opportunities",
    description:
      "Navigate the new AI landscape with confidence. We help publishers license content to AI companies on fair, transparent terms.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimisation",
    description:
      "Our team identifies untapped monetisation channels and builds multiple new revenue lines from your existing content library.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            Content Syndication &amp; Aggregator Services
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-lg">
            Our professional sales team is ready to take your content further.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-card-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
