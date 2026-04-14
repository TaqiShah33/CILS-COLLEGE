import { motion } from "framer-motion";
import heroCampus from "@/assets/uni.jpeg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroCampus}
      alt="Capital Institute of Legal Studies"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-navy/70" />
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-gold font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
      >
        Established 2026
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
      >
        Investing in legal Future! <br />
        
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="font-body text-lg md:text-xl text-cream-dark max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        A tradition of academic excellence, rigorous scholarship, and unwavering
        commitment to the rule of law.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#programs"
          className="px-8 py-3 bg-gold text-navy font-body font-semibold rounded uppercase tracking-wider text-sm hover:brightness-110 transition"
        >
          Explore Programs
        </a>
        <a
          href="#about"
          className="px-8 py-3 border border-gold text-gold font-body font-semibold rounded uppercase tracking-wider text-sm hover:bg-gold hover:text-navy transition"
        >
          Learn More
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
