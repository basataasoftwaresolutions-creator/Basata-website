const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background pt-20 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute inset-0 z-0">
        {/* Left Orb */}
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-orb rounded-full opacity-60 blur-sm"></div>
        
        {/* Right Orb */}
        <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-orb rounded-full opacity-60 blur-sm"></div>
        
        {/* Center Bottom Orb */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-orb rounded-full opacity-50 blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
            We innovate, develop, and elevate your ideas to a new{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              level of professionalism.
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            We specialize in: UI&UX | Frontend | Backend | WordPress | AI | Flutter
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;