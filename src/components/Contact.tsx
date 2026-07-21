import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

// ── EmailJS Config ──────────────────────────────────────────────
const EMAILJS_SERVICE_ID = "service_4f1dc7z";
const EMAILJS_TEMPLATE_ID = "template_6wz3n3e";
const EMAILJS_PUBLIC_KEY = "gKyDq-R73iN8qSUJQ";
// ────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  companyName: z.string().optional(),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please provide a bit more detail so we can help you."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type SubmitStatus = "idle" | "success" | "error";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.fullName,
          from_email: data.email,
          company_name: data.companyName || "N/A",
          message: data.message,
          to_email: "hpettit@hpmediaconsulting.com",
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-warm">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-5xl text-foreground leading-tight">
            Get in Touch
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
            Have a question or ready to explore new revenue streams? Send us a
            message and Henry will get back to you shortly.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-background rounded-2xl border border-border shadow-sm p-8 md:p-10 space-y-6"
          noValidate
        >
          {/* Full Name */}
          <div className="grid gap-2">
            <label
              htmlFor="fullName"
              className="font-body text-sm font-medium text-foreground"
            >
              Full Name <span className="text-destructive">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. Jane Doe"
              autoComplete="name"
              className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-destructive text-xs font-body">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Business / Company Name */}
          <div className="grid gap-2">
            <label
              htmlFor="companyName"
              className="font-body text-sm font-medium text-foreground"
            >
              Business / Company Name
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="e.g. Acme Publishing Ltd."
              autoComplete="organization"
              className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("companyName")}
            />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <label
              htmlFor="email"
              className="font-body text-sm font-medium text-foreground"
            >
              Email Address <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              autoComplete="email"
              className="flex h-11 w-full rounded-lg border border-input bg-background px-4 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-destructive text-xs font-body">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="font-body text-sm font-medium text-foreground"
            >
              Message / Inquiry Details <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Tell us about your publishing business, the type of content you produce, or what kind of syndication and licensing opportunities you're looking for…"
              className="flex w-full rounded-lg border border-input bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
              {...register("message")}
            />
            {errors.message && (
              <p className="text-destructive text-xs font-body">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Send Inquiry
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm font-body text-green-600"
            >
              <CheckCircle className="w-4 h-4 shrink-0" />
              Your message has been sent! We'll be in touch soon.
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-sm font-body text-destructive"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              Something went wrong. Please try again or email us directly at{" "}
              <a
                href="mailto:hpettit@hpmediaconsulting.com"
                className="underline underline-offset-2 hover:text-accent transition-colors"
              >
                hpettit@hpmediaconsulting.com
              </a>
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
