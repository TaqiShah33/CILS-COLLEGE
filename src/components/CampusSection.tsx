import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import mootCourtImg from "@/assets/MOOT.jpeg";
import libraryImg from "@/assets/elib.jpeg";
import sportsImg from "@/assets/sport.jpeg"; // Ensure these images exist in your assets folder
import computerLabImg from "@/assets/comp.jpeg";

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

        {/* Responsive Grid System: 1 col on mobile, 2 cols on tablet/desktop */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* 1. Moot Court Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-xl group border border-slate-200/50 shadow-sm"
          >
            <div className="w-full aspect-video bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
              <img
                src={mootCourtImg}
                alt="Moot Court at Capital Institute"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="font-display text-xl font-semibold text-white">Moot Court Room</h3>
              <p className="font-body text-sm text-gray-300 mt-1">National championship-winning advocacy teams</p>
            </div>
          </motion.div>

          {/* 2. Library Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative overflow-hidden rounded-xl group border border-slate-200/50 shadow-sm"
          >
            <div className="w-full aspect-video bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
              <img
                src={libraryImg}
                alt="Law Library"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="font-display text-xl font-semibold text-white">E Library</h3>
              <p className="font-body text-sm text-gray-300 mt-1">Over 500,000 volumes of legal scholarship</p>
            </div>
          </motion.div>

          {/* 3. Sports Arena Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-xl group border border-slate-200/50 shadow-sm"
          >
            <div className="w-full aspect-video bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
              <img
                src={sportsImg}
                alt="Sports Arena"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="font-display text-xl font-semibold text-white">Sports Arena</h3>
              <p className="font-body text-sm text-gray-300 mt-1">State-of-the-art recreational facilities for campus life</p>
            </div>
          </motion.div>

          {/* 4. Computer Lab Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative overflow-hidden rounded-xl group border border-slate-200/50 shadow-sm"
          >
            <div className="w-full aspect-video bg-[#1e1e1e] overflow-hidden flex items-center justify-center">
              <img
                src={computerLabImg}
                alt="Computer Lab"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <h3 className="font-display text-xl font-semibold text-white">Digital Computer Lab</h3>
              <p className="font-body text-sm text-gray-300 mt-1">High-performance systems for research and legal tech training</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CampusSection;