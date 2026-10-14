import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Publishers Represented" },
  { value: "30+", label: "Countries Reached" },
  { value: "25+", label: "Years Experience" },
  { value: "$15M+", label: "Publisher Revenue Generated" },
];

const Stats = () => {
  return (
    <section id="stats" aria-label="Performance Metrics" className="py-20 bg-hero">
      <div className="container mx-auto px-6">
        <h2 className="sr-only">Publisher Track Record &amp; Syndication Metrics</h2>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center flex flex-col items-center justify-center"
            >
              <dd className="font-heading text-4xl md:text-5xl text-hero-foreground order-1">
                {stat.value}
              </dd>
              <dt className="mt-2 text-hero-foreground/70 font-body text-sm uppercase tracking-wider order-2">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
