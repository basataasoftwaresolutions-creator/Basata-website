import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-foreground font-bold text-xl">Basataa</span>
              <span className="text-muted-foreground text-xs">SOFTWARE SOLUTIONS</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary font-medium hover:text-primary/80 transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Our Team
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Contacts Us
            </a>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="w-10 h-10">
              <Sun className="h-5 w-5" />
            </Button>
            <div className="w-12 h-6 bg-secondary rounded-full relative cursor-pointer">
              <div className="w-5 h-5 bg-primary rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
            </div>
            <Button variant="ghost" size="icon" className="w-10 h-10">
              <Moon className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;