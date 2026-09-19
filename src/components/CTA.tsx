import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" aria-labelledby="cta-heading" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            Get Started
          </p>
          <h2 id="cta-heading" className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Ready to Unlock New Publishing Revenue?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto font-body">
            Book a discovery call today to evaluate direct syndication opportunities and AI licensing agreements tailored to your publication.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors shadow-sm"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="/#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
