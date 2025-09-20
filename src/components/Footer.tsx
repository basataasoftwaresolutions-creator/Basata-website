import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border ">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img className="w-30 h-30" src="public/logo.svg" alt="Basataa Logo" />
              {/* <div className="flex flex-col">
                <span className="text-foreground font-bold text-xl">Basataa</span>
                <span className="text-muted-foreground text-xs">SOFTWARE SOLUTIONS</span>
              </div> */}
            </div>
            <p className="text-muted-foreground leading-relaxed">
              We innovate, develop, and elevate your ideas to a new level of professionalism.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Pages</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">UI UX Design</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Website</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Full Project</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-primary font-semibold text-lg mb-6">Social</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2022 Basataa. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;