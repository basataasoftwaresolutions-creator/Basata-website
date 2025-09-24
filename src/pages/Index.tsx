import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import ServiceHome from "@/components/ServiceHome";
import ServiceDetails from "@/components/ServiceDetails";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <AboutUs />
      <ServiceHome />
      <ServiceDetails />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;