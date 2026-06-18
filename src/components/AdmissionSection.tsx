import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, FileText, UserCheck, CreditCard, Send } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Eligibility",
    desc: "Higher Secondary School Certificate (Inter/A-Levels) with minimum 45% marks and a LAT score of at least 50."
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Submit CNIC/B-Form, Matric & Inter result cards, and 4 passport-size photographs."
  },
  {
    icon: UserCheck,
    title: "Interview",
    desc: "Shortlisted candidates will be called for a personal interview with the admission committee."
  },
  {
    icon: CreditCard,
    title: "Fee Deposit",
    desc: "Upon selection, deposit the admission fee to secure your seat in the LL.B. program."
  }
];

const AdmissionSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdmissionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    // Linked with your xaqayngl endpoint
    const response = await fetch("https://formspree.io/f/xaqayngl", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setSubmitted(true);
      setLoading(false);
    } else {
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Side: Info & Form */}
          <div className="lg:w-1/2">
            <p className="text-gold font-bold tracking-widest uppercase text-sm mb-4">Admissions Process</p>
            <h2 className="text-4xl font-display font-bold text-navy mb-6">Start Your Legal Journey</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Admission to CILS is based on merit and the Law Admission Test (LAT) results. 
              We look for students with a passion for justice and strong analytical potential.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleAdmissionSubmit} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="text-xl font-bold text-navy mb-6">Admission Inquiry Form</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy/50 uppercase ml-1">Student Name</label>
                    <input 
                      name="full_name" 
                      placeholder="e.g. Ali Ahmed" 
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-gold outline-none transition-all" 
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy/50 uppercase ml-1">Phone Number</label>
                    <input 
                      name="phone" 
                      placeholder="0300-1234567" 
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-gold outline-none transition-all" 
                      required 
                    />
                  </div>
                </div>

                <div className="space-y-1 mb-4">
                  <label className="text-xs font-bold text-navy/50 uppercase ml-1">Email Address</label>
                  <input 
                    name="email" 
                    type="email" 
                    placeholder="student@example.com" 
                    className="w-full p-3 rounded-lg border border-slate-200 focus:border-gold outline-none transition-all" 
                    required 
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy/50 uppercase ml-1">Last Qualification</label>
                    <select name="qualification" className="w-full p-3 rounded-lg border border-slate-200 bg-white outline-none focus:border-gold transition-all">
                      <option value="Inter">Intermediate (F.A/F.Sc)</option>
                      <option value="A-Levels">A-Levels</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-navy/50 uppercase ml-1">LAT Score</label>
                    <input 
                      name="lat_score" 
                      placeholder="Enter Score (if taken)" 
                      className="w-full p-3 rounded-lg border border-slate-200 focus:border-gold outline-none transition-all" 
                    />
                  </div>
                </div>

                <button 
                  disabled={loading}
                  className="w-full py-4 bg-navy text-white font-bold rounded-lg hover:bg-gold hover:text-navy transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={18} className={loading ? "animate-pulse" : ""} /> 
                  {loading ? "Sending..." : "Submit Application"}
                </button>
              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-navy text-white p-12 rounded-2xl text-center border-b-4 border-gold shadow-xl"
              >
                <div className="bg-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send className="text-gold" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gold mb-4">Application Received!</h3>
                <p className="text-slate-300">
                  Thank you for applying to CILS. Our admissions officer will review your details 
                  and contact you on your provided phone number shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-gold hover:underline font-medium"
                >
                  Submit another inquiry
                </button>
              </motion.div>
            )}
          </div>

          {/* Right Side: Steps Grid */}
          <div className="lg:w-1/2 grid sm:grid-cols-2 gap-6 content-start">
            {steps.map((step, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-gold hover:shadow-md transition-all group">
                <div className="bg-navy p-3 rounded-lg inline-block mb-4 group-hover:bg-gold transition-colors">
                  <step.icon className="text-gold h-6 w-6 group-hover:text-navy" />
                </div>
                <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;