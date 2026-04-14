import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Scale, 
  Gavel, 
  CheckCircle2, 
  Trophy, 
  Heart, 
  Users, 
  Accessibility,
  GraduationCap
} from "lucide-react";

const scholarshipQuotas = [
  { icon: Trophy, title: "Merit Based", count: 5 },
  { icon: Heart, title: "Shuhada (Son/Daughter)", count: 2 },
  { icon: Users, title: "Lawyer (Son/Daughter)", count: 2 },
  { icon: Accessibility, title: "Disable Quota", count: 1 },
];

const benefits = [
  "Prestigious Career with Global Opportunities",
  "Ability to Advocate for Social Justice & Human Rights",
  "Strong Foundation for Civil Services & Judiciary",
  "Develop Critical Thinking and Persuasive Communication",
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-3">Academic Excellence</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Programs & Opportunities
          </h2>
        </div>

        {/* MAJOR BLOCK: LL.B. Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-navy rounded-2xl p-8 md:p-12 mb-12 text-white shadow-2xl border-l-8 border-gold relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <GraduationCap className="text-gold h-8 w-8" />
                <span className="text-gold font-bold tracking-widest uppercase text-sm">Flagship Degree</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">LL.B. (4 Years) Program</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                A comprehensive undergraduate degree designed to produce future leaders in the legal profession. 
                Our curriculum bridges the gap between traditional jurisprudence and modern legal practice, 
                fully recognized by the Pakistan Bar Council.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-center min-w-[200px]">
              <span className="text-gold font-bold block mb-1 uppercase tracking-tighter">Status</span>
              <span className="text-2xl font-bold">Admissions Open</span>
              <div className="mt-4 h-1 w-full bg-gold/30 rounded-full overflow-hidden">
                <div className="h-full bg-gold w-2/3"></div>
              </div>
            </div>
          </div>
          {/* Background decoration */}
          <Scale className="absolute -right-10 -bottom-10 h-64 w-64 text-white/5 rotate-12" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SUB-BLOCK: Why Law? */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-cream p-8 rounded-xl border border-border shadow-sm"
          >
            <h3 className="font-display text-2xl font-bold text-navy mb-8 flex items-center gap-3">
              <Gavel className="text-gold" /> Why Choose Law?
            </h3>
            <ul className="space-y-5">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-gold/20 p-1 rounded-full group-hover:bg-gold transition-colors">
                    <CheckCircle2 className="h-4 w-4 text-gold group-hover:text-navy" />
                  </div>
                  <span className="font-body text-foreground leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SUB-BLOCK: Scholarship Quota */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 rounded-xl border border-border shadow-sm"
          >
            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-navy mb-2">100% Free Education</h3>
              <p className="text-muted-foreground text-sm uppercase tracking-widest font-semibold">Scholarship Quotas (Total Seats)</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {scholarshipQuotas.map((q, i) => (
                <div key={i} className="p-4 bg-cream-dark rounded-lg border border-border flex items-center gap-4 hover:border-gold transition-colors group">
                  <div className="bg-navy p-2 rounded text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                    <q.icon size={20} />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-navy block">{q.count}</span>
                    <span className="text-[10px] text-muted-foreground uppercase font-bold leading-tight block">{q.title}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground italic border-t border-border pt-4">
              * Scholarships are awarded on a first-come, first-served basis for eligible candidates.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;