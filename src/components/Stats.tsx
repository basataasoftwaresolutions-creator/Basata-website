// src/components/Stats.tsx
import { Typewriter } from 'react-simple-typewriter';
import { useLanguage } from '@/contexts/LanguageContext';

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { number: "200+", label: t('project'), labelEn: "Happy Clients" },
    { number: "150+", label: t('rating'), labelEn: "Happy Clients" },
    { number: "150+", label: t('work'), labelEn: "Happy Clients" },
    { number: "100+", label: t('service'), labelEn: "Happy Clients" },
  ];

  return (
    <section className="relative z-10 -mt-20 pb-20 w-full">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card backdrop-blur-sm rounded-2xl py-8 px-6 text-center shadow-card border border-border/50 card-hover group"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2 h-16 flex items-center justify-center">
                <Typewriter
                  words={[stat.number]}
                  loop={0}
                  typeSpeed={150}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </div>
              <div className="text-foreground font-medium text-lg">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm mt-1">
                Happy Clients
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;