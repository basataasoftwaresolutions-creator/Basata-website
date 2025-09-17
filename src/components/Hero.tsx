import { Type } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#222323] pt-20 overflow-hidden">
      {/* Gradient Orbs */}
      <div className=" ">
        <img src="public/Ellipse 2.png" alt="circle" className="absolute -top-8 left-10 w-80 h-80 rounded-full "/>
        {/* Left Orb */}
        {/* <div className="absolute top-1/4 left-10 w-80 h-80 bg-gradient-orb rounded-full opacity-60 blur-sm"></div> */}
        <img src="public/Ellipse 2.png" alt="circle" className="absolute bottom-10 left-10 w-20 h-20 rounded-full "/>
        {/* Right Orb */}
        {/* <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-orb rounded-full opacity-60 blur-sm"></div> */}
        <img src="public/Ellipse 2.png" alt="circle" className="absolute bottom-20 left-80 w-60 h-60 rounded-full "/>

        <img src="public/Ellipse 2.png" alt="circle" className="absolute bottom-20 right-40 w-20 h-20 rounded-full "/>

        <img src="public/Ellipse 2.png" alt="circle" className="absolute top-60 right-60 w-10 h-10 rounded-full "/>


        {/* Center Bottom Orb */}
        {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-orb rounded-full opacity-50 blur-sm"></div> */}
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
            We specialize in : 
            <span className = "text-xl font-semibold text-[#FF9705] ml-2">
              <Typewriter 
                words={["UI/UX Design", "Frontend Development", "Backend Development", "WordPress", "AI Solutions", "Flutter Apps"]}
                cursorStyle="_"
                loop={0} // 0 = infinite
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1500}              
              />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;