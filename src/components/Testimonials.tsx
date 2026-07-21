import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "HP Media Consulting transformed our syndication strategy. Within months, we had deals with platforms we'd been trying to reach for years.",
    name: "Sarah Mitchell",
    role: "Head of Digital, The Bristol Post",
    avatar: "SM",
  },
  {
    quote:
      "Their deep knowledge of the licensing landscape and warm introductions to key decision-makers made all the difference for our newsroom.",
    name: "James Harrington",
    role: "Managing Editor, City Wire Media",
    avatar: "JH",
  },
  {
    quote:
      "We saw a 40% increase in syndication revenue in the first year. HP Media truly understands what publishers need.",
    name: "Maria Santos",
    role: "CEO, Lisbon Gazette Group",
    avatar: "MS",
  },
];

const publisherLogos = [
  "City A.M",
  "Reuters",
  "The Telegraph",
  "Sky News",
  "Bloomberg",
  "Associated Press",
  "GBN (GB News)",
  "t-online",
  "Barchart",

];

const platformLogos = [
  "Apple News",
  "Google News",
  "Microsoft Start",
  "Yahoo News",
  "Flipboard",
  "SmartNews",
  "Factiva"
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
    <section id="testimonials" className="py-24 md:py-32 bg-surface-cool">
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
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Trusted by Publishers&nbsp;Worldwide
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
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
