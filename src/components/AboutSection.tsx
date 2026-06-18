import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import libraryImg from "@/assets/library.jpg";
import { BookOpen, Award, Users, Globe, Gavel, Scale } from "lucide-react";

const stats = [
  { icon: Users, value: "Foreign Qualified Staff", label: "Legal Practitioners" },
  { icon: Gavel, value: "Digital Computer Lab", label: "Practical Training" },
  { icon: BookOpen, value: "Purpose Built Spacious Campus", label: "Real-world Experience" },
  { icon: Globe, value: "E-Library", label: "GAT Specialized" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">About Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-snug">
              Empowering the Next Generation<br />of Legal Minds
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Capital Institute of Legal Studies (CILS) is a modern, research-driven
              institution dedicated to legal excellence. Located in the heart of Sargodha, 
              we provide students with the practical skills and ethical foundation needed 
              to lead in Pakistan's evolving legal landscape.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From constitutional law to corporate practice, our programs blend doctrinal
              mastery with hands-on experience through our dedicated moot court 
              competitions and legal internship placements.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.value} className="flex items-start gap-3 group">
                  <div className="p-2 rounded bg-navy group-hover:bg-gold transition-colors">
                    <s.icon className="h-5 w-5 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-foreground leading-tight">{s.value}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={libraryImg}
                alt="Modern Law Library"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Clickable Admissions Link */}
            <a 
              href="#admissions" 
              className="absolute -bottom-6 -left-6 bg-navy p-8 rounded-lg shadow-xl z-20 hidden md:block max-w-[220px] hover:bg-slate-900 hover:-translate-y-2 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-display font-bold text-gold mb-1 group-hover:text-white transition-colors">
                Admissions
              </h3>
              <p className="text-white/90 text-sm font-medium tracking-wide">
                Open for Fall 2026
              </p>
              <span className="mt-4 block text-[10px] text-gold font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Apply Now →
              </span>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;