import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Publishers Served" },
  { value: "30+", label: "Countries Reached" },
  { value: "25+", label: "Years Experience" },
  { value: "$15M+", label: "Revenue Generated" },
];

const Stats = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-heading text-4xl md:text-5xl text-hero-foreground">
                {stat.value}
              </p>
              <p className="mt-2 text-hero-foreground/70 font-body text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
