import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Begin Your Legal Journey
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Admissions Office</h3>
            <div className="space-y-5">
  {[
    { 
      icon: MapPin, 
      text: "75-76 C Satellite Town, Sargodha, 40100",
      href: null // No link for address
    },
    { 
      icon: Phone, 
      text: "0300-1781987",
      href: "tel:03001781987" 
    },
    { 
      icon: Mail, 
      text: "info.cilssgd@gmail.com",
      href: "mailto:info.cilssgd@gmail.com" 
    },
  ].map((c) => (
    <div key={c.text} className="flex items-start gap-4">
      <div className="p-2 rounded bg-navy">
        <c.icon className="h-5 w-5 text-gold" />
      </div>
      
      {/* Logic: If there is an href, show a link. If not, show plain text. */}
      {c.href ? (
        <a 
          href={c.href} 
          className="font-body text-muted-foreground pt-1 hover:text-gold transition-colors"
        >
          {c.text}
        </a>
      ) : (
        <p className="font-body text-muted-foreground pt-1">{c.text}</p>
      )}
    </div>
  ))}
</div>

            <div className="mt-10 p-6 bg-navy rounded-lg">
              <p className="font-display text-lg font-semibold text-gold mb-2">Application Deadline</p>
              <p className="font-body text-cream-dark text-sm">
                Fall 2026 applications close on <strong className="text-primary-foreground">March 1, 2026</strong>.
                Early decision applicants are encouraged to apply by November 15.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full bg-cream rounded-lg p-8 text-center">
                <div className="p-4 bg-navy rounded-full mb-4">
                  <Send className="h-8 w-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="font-body text-muted-foreground">We'll be in touch within 2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-cream rounded-lg p-8 space-y-5 shadow-lg">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1">First Name</label>
                    <input required className="w-full px-4 py-2.5 rounded border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                  <div>
                    <label className="font-body text-sm font-medium text-foreground block mb-1">Last Name</label>
                    <input required className="w-full px-4 py-2.5 rounded border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Email</label>
                  <input required type="email" className="w-full px-4 py-2.5 rounded border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Program of Interest</label>
                  <select className="w-full px-4 py-2.5 rounded border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold">
                    <option>Juris Doctor (J.D.)</option>
                    <option>LL.M. Constitutional Law</option>
                    <option>LL.M. International Law</option>
                    <option>Corporate & Business Law</option>
                    <option>Criminal Justice</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2.5 rounded border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold resize-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gold text-navy font-body font-semibold rounded uppercase tracking-wider text-sm hover:brightness-110 transition"
                >
                  Request Information
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
