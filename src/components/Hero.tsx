// src/components/Hero.tsx
import { Typewriter } from "react-simple-typewriter";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t, language } = useLanguage();

  const typewriterWords =
    language === "en"
      ? [
          "UI/UX Design",
          "Frontend Development",
          "Backend Development",
          "WordPress",
          "AI Solutions",
          "Flutter Apps",
        ]
      : [
          "تصميم واجهات المستخدم",
          "تطوير الواجهات الأمامية",
          "تطوير الواجهات الخلفية",
          "ووردبريس",
          "حلول الذكاء الاصطناعي",
          "تطبيقات فلاتر",
        ];

  return (
    <section className="relative min-h-screen hero-dark pt-20 overflow-hidden">
      {/* Gradient Bubbles Background */}
      <div className="absolute inset-0">
        {/* Bubble 1 - Top Left */}
        <div className="absolute top-50 left-10 w-[460px] h-[460px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9705] to-[#0048FF] rounded-full animate-float"></div>
            <img
              src="/Ellipse 2.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60"
            />
          </div>
        </div>

        {/* Bubble 2 - Bottom Center */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9705] to-[#0048FF] rounded-full animate-float animation-delay-2000"></div>
            <img
              src="/Ellipse 2.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-40"
            />
          </div>
        </div>

        {/* Bubble 3 - Top Right */}
        <div className="absolute top-50 right-10 w-[460px] h-[460px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#FF9705] to-[#0048FF] rounded-full  animate-float animation-delay-4000"></div>
            <img
              src="/Ellipse 2.png"
              alt=""
              className="absolute inset-0 w-full h-full object-cover mix-blend-screen opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-[35px] md:text-[35px] font-bold text-white mb-8 leading-tight">
            <span
              className={`${language === "ar" ? "mb-4 inline-block text-[40px]" : "mb-4"}`}
            >
              {t("heroTitle")}{" "}
            </span>
            <span className={`gradient-text ${language === "ar" ? "mb-3 inline-block" : ""}`}>{t("heroTitleHighlight")}</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("heroSubtitle")}
            <span className="text-xl font-semibold text-orange ms-2 inline-block min-h-[1.5em]">
              <Typewriter
                words={typewriterWords}
                cursorStyle="_"
                loop={0}
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
