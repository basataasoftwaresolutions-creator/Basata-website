import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "lucide-react";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      
      <ProjectsSection />
     
      <WorkExperienceSection />
      <Footer />
    </div>
  );
};

export default Index;