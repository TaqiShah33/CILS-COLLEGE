import { useState } from "react";
import { Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Admissions", href: "#admissions" }, // New link added
  { label: "Faculty", href: "#faculty" },
  { label: "Campus", href: "#campus" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="flex items-center gap-3 group">
          <Scale className="h-8 w-8 text-gold group-hover:rotate-12 transition-transform" />
          <div>
            <span className="font-display text-xl font-bold text-white tracking-wide">
              Capital Institute
            </span>
            <span className="block text-xs text-gold tracking-[0.25em] uppercase">
              of Legal Studies
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium text-slate-200 hover:text-gold transition-colors tracking-wide uppercase"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions" // Updated from #contact
            className="ml-2 px-5 py-2 bg-gold text-navy font-body font-semibold text-sm rounded uppercase tracking-wider hover:brightness-110 shadow-md transition-all active:scale-95"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body font-medium text-slate-200 hover:text-gold transition-colors uppercase tracking-wide"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#admissions" // Updated from #contact
                onClick={() => setOpen(false)}
                className="px-8 py-3 bg-gold text-navy font-body font-semibold text-sm rounded uppercase tracking-wider shadow-lg"
              >
                Apply Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;