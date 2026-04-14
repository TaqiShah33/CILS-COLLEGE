import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import AdmissionSection from "@/components/AdmissionSection"; // Added this
import FacultySection from "@/components/FacultySection";
import CampusSection from "@/components/CampusSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProgramsSection />
    <AdmissionSection /> {/* Added this between Programs and Faculty */}
    <FacultySection />
    <CampusSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;