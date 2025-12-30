import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PillarsSection from "@/components/PillarsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PillarsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
