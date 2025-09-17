import { Typewriter } from 'react-simple-typewriter';

const Stats = () => {
  const stats = [
    { number: "200+", label: "مشروع" },
    { number: "150+", label: "تقييم" },
    { number: "150+", label: "عمل" },
    { number: "100+", label: "خدمة" },
  ];

  return (
    <section className="relative z-10 -mt-20 pb-20 w-full">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl py-6 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300 bg-[#FEFDFB] px-16"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2 text-[#FF9705] h-12 flex items-center justify-center">
                <Typewriter
                  words={[stat.number]}
                  loop={0} // 0 = infinite
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;