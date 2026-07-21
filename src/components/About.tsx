import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "Direct partnerships with leading platforms",
  "Higher revenue retention for publishers",
  "25+ years of industry expertise",
  "100+ publishers in 30+ countries",
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
              Our Real Value to&nbsp;You
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              We offer a handheld &ldquo;human touch&rdquo; service in setting up multiple
              new licensing and syndication revenue lines. Built for small and
              mid-size website owners with great news content who lack the time or
              expertise to land impactful syndication deals.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              For established publishers, growing but operationally stretched,
              HP Media Consulting is your perfect partner. We provide trust,
              industry expertise, warm introductions, saving you time with proven
              solutions.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 bg-surface-cool rounded-xl p-6"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium text-lg">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
