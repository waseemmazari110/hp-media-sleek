import { motion } from "framer-motion";
import { ArrowRight, Users, DollarSign, Globe, Handshake, Target } from "lucide-react";

const tile = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
            About
          </p>
          <h2 className="font-heading text-3xl md:text-5xl text-foreground">
            The Story Behind HP&nbsp;Media
          </h2>
        </motion.div>

        {/* ── Tile Grid ───────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ── Tile 1: Core Philosophy (spans 2 cols on lg) ── */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="lg:col-span-2 bg-surface-cool rounded-2xl p-8 md:p-10 border border-border"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Core Philosophy</h3>
            </div>
            <blockquote className="font-heading text-lg md:text-xl text-foreground italic leading-snug mb-4">
              &ldquo;The external content partnership department you never knew you needed&rdquo;
            </blockquote>
            <p className="text-muted-foreground font-body leading-relaxed">
              That line came from a client, and it has stuck, because it describes the job better than we can.
              Most publishers know syndication and licensing should be earning them more. It sits on the list.
              What&rsquo;s missing isn&rsquo;t the will&nbsp;&mdash; it&rsquo;s the time, the contacts, and someone
              who has done it enough times to know which deals are worth chasing and which are a waste of a quarter.
            </p>
            <p className="text-foreground font-body font-medium mt-4">
              That&rsquo;s the gap HP Media fills.
            </p>
          </motion.div>

          {/* ── Tile 2: Meet Henry (photo + name) ───────────── */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm flex flex-col"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/Henry.jpg"
                alt="Henry Pettit, Founder of HP Media Consulting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-heading text-xl text-white">Henry Pettit</p>
                <p className="text-white/75 font-body text-sm mt-0.5">Founder, HP Media Consulting</p>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                Thirty-plus years in publishing sales, subscriptions and licensing. Former Managing Director
                of an international news agency. Former Head of Sales &amp; Licensing at NLA media access.
              </p>
            </div>
          </motion.div>

          {/* ── Tile 3: How We Got Here ─────────────────────── */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">How We Got Here</h3>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              Henry founded HP Media Consulting in late 2020, initially to run licensing projects for a handful
              of publishers. Within eighteen months the work had grown well beyond that&nbsp;&mdash; multi-year
              licensing agreements with Bloomberg for financial titles, consumer brands established on MSN,
              and a steady stream of publishers asking for help turning their archives into revenue.
            </p>
            <p className="text-foreground font-body font-medium mt-4">
              The approach hasn&rsquo;t changed since. Henry works on the deals himself. Clients aren&rsquo;t
              handed to an account manager.
            </p>
          </motion.div>

          {/* ── Tile 4: Background ──────────────────────────── */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Handshake className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Background</h3>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              More than thirty years in publishing sales, subscriptions and licensing. That includes Managing
              Director of an international news agency, and four years as Head of Sales and Licensing at
              NLA media access&nbsp;&mdash; the UK&rsquo;s collective licensing organisation, owned by the
              national newspaper groups. Several of those newspaper groups are clients today.
            </p>
            <p className="text-foreground font-body font-medium mt-4">
              HP Media arrives at a negotiation already knowing the counterparty, the going rate, and where
              the contract terms usually bite.
            </p>
          </motion.div>

          {/* ── Tile 5: HP Media Today (spans 2 cols on lg) ──── */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="lg:col-span-2 bg-hero text-hero-foreground rounded-2xl p-8 md:p-10"
          >
            <h3 className="font-heading text-xl mb-6">HP Media Today</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: "~$5M", label: "Annual revenue generated" },
                { stat: "~100", label: "Clients across 30 countries" },
                { stat: "50–60", label: "Active clients at any time" },
                { stat: "2×", label: "Year-on-year revenue growth" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="font-heading text-2xl md:text-3xl">{item.stat}</p>
                  <p className="mt-1 text-xs font-body opacity-70 leading-snug">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm font-body opacity-60 max-w-lg">
              Between 2020 and 2025, the revenue we generated for clients came close to doubling year on year.
              We work with publishers and syndication platforms alike.
            </p>
          </motion.div>

          {/* ── Tile 6: Why We Stay Small ───────────────────── */}
          <motion.div
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="bg-card rounded-2xl p-8 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Why We Stay Small</h3>
            </div>
            <p className="text-muted-foreground font-body leading-relaxed">
              Deliberately, we don&rsquo;t take on more than we can do properly. We know every client
              personally, and we keep the number actively earning each month to around fifty or sixty.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mt-4">
              Clients tell us the relationship is the point. They know their content is being represented
              by someone who understands their business and has their interests at heart&nbsp;&mdash; not a
              volume operation moving inventory.
            </p>
          </motion.div>

          {/* ── Tile 7: Direct Deals ────────────────────────── */}
          <motion.div
            custom={6}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="lg:col-span-2 bg-card rounded-2xl p-8 md:p-10 border border-border shadow-sm"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-xl text-foreground">Direct Deals, Not Sub-Licensing</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Where a third-party aggregator sub-licenses your content, a significant share of the
                  revenue disappears before it reaches you. Wherever possible, HP Media sets deals up in
                  the publisher&rsquo;s own name. The licensee pays the publisher directly, in full.
                </p>
              </div>
              <div>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Our fee is a small percentage, taken only after the client has been paid. No retainers.
                  No upfront cost. If you don&rsquo;t earn, we don&rsquo;t earn&nbsp;&mdash; which tends to
                  concentrate the mind on deals that actually pay.
                </p>
                <p className="text-muted-foreground font-body leading-relaxed mt-4">
                  Set against the cost of hiring a licensing manager, or the margin lost to an intermediary,
                  it is the least expensive route to the same outcome. Usually a better one.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Tile 8: What Working With Us Looks Like (full width) ── */}
          <motion.div
            custom={7}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={tile}
            className="md:col-span-2 lg:col-span-3 bg-surface-cool rounded-2xl p-8 md:p-10 border border-border text-center"
          >
            <p className="text-primary font-body font-semibold text-sm uppercase tracking-widest mb-3">
              The Outcome
            </p>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              What Working With Us Looks Like
            </h3>
            <p className="text-muted-foreground text-lg font-body leading-relaxed max-w-2xl mx-auto">
              You keep doing your job. We get the deals in place, negotiate the terms, chase the
              paperwork and monitor the payments&nbsp;&mdash; and the result looks very much as though
              you&rsquo;d built the whole thing in&house yourself.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-muted-foreground text-sm font-body">
                A short conversation is usually enough to tell whether there&rsquo;s money on the table.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
