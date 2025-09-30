import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";

import AboutUs from "@/components/AboutUs";
import ServiceHome from "@/components/ServiceHome";
import ServiceDetails from "@/components/ServiceDetails";
import ContactForm from "@/components/ContactForm";

import { ProjectsSection } from "@/components/ProjectsSection";
import { Section } from "lucide-react";
import { WorkExperienceSection } from "@/components/WorkExperienceSection";
import Contact from "@/components/Contact";
import { Testimonials } from "@/components/Testimonials";
import { PortfolioSection } from "@/components/PortfolioSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PortfolioSection />
      <ServiceDetails />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Services;
