import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AnimatedCounter = ({ end, duration = 3500, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let timeoutId: NodeJS.Timeout;
    let animationFrameId: number;

    const runAnimation = () => {
      setCount(0); // Reset count to 0 at the start of each animation loop
      const startTime = Date.now();

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        const current = Math.floor(easeOutQuart * end);
        setCount(current);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          // Animation finished, wait 3 seconds and restart
          timeoutId = setTimeout(() => {
            runAnimation();
          }, 3000);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    runAnimation();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, isVisible]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { number: 200, suffix: "+", label: t('statProjects') },
    { number: 150, suffix: "+", label: t('statRatings') },
    { number: 150, suffix: "+", label: t('statMembers') },
    { number: 100, suffix: "+", label: t('statServices') },
  ];

  return (
    <section className="relative z-10 -mt-20 pb-20 w-full" dir="auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card backdrop-blur-sm rounded-2xl py-8 px-6 text-center shadow-card border border-border/50 card-hover group"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange mb-2 h-16 flex items-center justify-center">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-foreground font-medium text-lg min-h-[3rem] flex items-center justify-center">
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