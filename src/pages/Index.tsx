import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;