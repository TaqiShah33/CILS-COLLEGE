import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mootCourtImg from "@/assets/moot-court.jpg";
import libraryImg from "@/assets/library.jpg";

const CampusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="campus" className="py-24 bg-cream">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Campus Life</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Where Tradition Meets Innovation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-lg group"
          >
            <img
              src={mootCourtImg}
              alt="Moot Court at Lexington"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground">Moot Court Program</h3>
              <p className="font-body text-sm text-cream-dark mt-1">National championship-winning advocacy teams</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative overflow-hidden rounded-lg group"
          >
            <img
              src={libraryImg}
              alt="Law Library"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground">Historic Law Library</h3>
              <p className="font-body text-sm text-cream-dark mt-1">Over 500,000 volumes of legal scholarship</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusSection;
