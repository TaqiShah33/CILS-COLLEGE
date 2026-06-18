import logoImg from "@/assets/logo.jpeg"; // <-- 1. Import your custom logo file here
// (Change to "logo.svg" or your exact filename if it's different)

const Footer = () => (
  <footer className="bg-navy py-16">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            {/* 2. Replaced the Lucide Icon with an img tag */}
            <img 
              src={logoImg} 
              alt="Capital Institute of Legal Studies Logo" 
              className="h-8 w-auto object-contain" // Keeps aspect ratio perfectly intact
            />
            <span className="font-display text-lg font-bold text-primary-foreground">Capital Institute of Legal Studies</span>
          </div>
          <p className="font-body text-sm text-cream-dark leading-relaxed">
            Shaping legal minds since 1892. Committed to excellence, integrity, and justice.
          </p>
        </div>
        {[
          { title: "Academics", links: ["J.D. Program", "LL.M. Programs", "Clinics", "Research Centers"] },
          { title: "Facilities", links: ["Modern Computer Lab", "E-Library", "Foreign Highly Qualified Staff", "Purpose Built Spacious Campus", "Part-Time English Language Classes","Air-Conditioned Classrooms"] },
          { title: "Quick Links", links: ["Admissions", "Financial Aid", "Alumni", "News & Events"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-display text-sm font-semibold text-gold uppercase tracking-wider mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-cream-dark hover:text-gold transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-navy-light pt-8 text-center">
        <p className="font-body text-xs text-cream-dark">
          © 2026 Capital Institute of Legal Studies. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;