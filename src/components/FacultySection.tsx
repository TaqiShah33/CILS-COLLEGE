import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import bellaImg from "@/assets/BELLA.jpeg";

// 1. IMPORT THE LEADERSHIP IMAGES EXPLICITLY HERE
import asifImg from "@/assets/asif.jpeg"; 
import naumanImg from "@/assets/noman.jpeg";
import aynaImg from "@/assets/ayna.jpeg";
import mohsanImg from "@/assets/mohsan.jpeg";
import abidImg from "@/assets/abid.jpeg"; // Ensure this filename matches your asset folder perfectly

const leadership = [
  {
    name: "RAI ASIF ZIA KHARRAL",
    role: "Director",
    image: asifImg, 
    message: "Our mission is to redefine legal education in Sargodha by blending traditional ethics with modern advocacy skills."
  },
  {
    name: "KHAWAJA NAUMAN AHMED SETHI",
    role: "Principal",
    image: naumanImg, 
    message: "We provide an environment where students don't just study law—they learn to practice it with integrity and precision."
  }
];

const faculty = [
  { 
    name: "SYED MOHSAN RAZA SHAH", 
    role: "PROFESSOR", 
    image: mohsanImg, 
    message: "Focusing on the pillar of justice." 
  },
  { 
    name: "RAI ABID HUSSAIN BHATTI", 
    role: "PROFESSOR", 
    image: abidImg, 
    message: "Advocating for global equality." 
  },
  { 
    name: "SYEDA FAIQA BATOOL", 
    role: "PROGRAMME COORDINATOR", 
    image: bellaImg, 
    message: "Mastering the business of law." 
  },
  { 
    name: "AYNA HAIDER", 
    role: "HEAD OF ACADEMICS", 
    image: aynaImg, 
    message: "The art of persuasive defense." 
  },
];

const FacultySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faculty" className="py-24 bg-navy">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Our Leadership</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            Guiding the Next Generation
          </h2>
        </div>

        {/* LEADERSHIP SECTION: Director & Principal */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {leadership.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="flex flex-col lg:flex-row bg-navy-light/30 rounded-2xl overflow-hidden border border-white/10 group"
            >
              <div className="lg:w-2/5 min-h-[250px] overflow-hidden flex items-center justify-center bg-navy-light/10">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="lg:w-3/5 p-8 flex flex-col justify-center">
                <Quote className="text-gold mb-4 opacity-50" size={32} />
                <h3 className="text-2xl font-display font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-gold font-medium mb-4 uppercase tracking-wider text-xs">{leader.role}</p>
                <p className="text-slate-300 italic leading-relaxed">"{leader.message}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FACULTY SECTION: 4 Grid */}
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Expert Faculty</p>
          <h3 className="font-display text-2xl font-bold text-white">Distinguished Legal Scholars</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-navy-light/20 p-6 rounded-xl border border-white/5 text-center group flex flex-col items-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold mb-4">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-display text-lg font-bold text-white">{f.name}</h4>
              <p className="text-gold text-xs font-medium uppercase tracking-tighter mb-4">{f.role}</p>
              <p className="text-slate-400 text-xs italic leading-relaxed mt-auto pt-4 border-t border-white/10 w-full">
                {f.message}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;