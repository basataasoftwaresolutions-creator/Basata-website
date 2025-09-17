const Stats = () => {
  const stats = [
    { number: "100+", label: "Happy Clients" },
    { number: "100+", label: "Happy Clients" },
    { number: "100+", label: "Happy Clients" },
    { number: "100+", label: "Happy Clients" },
  ];

  return (
    <section className="relative z-10 -mt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-card border border-border/50 hover:shadow-glow transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
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