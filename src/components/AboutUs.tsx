// src/components/AboutUs.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const AboutUs = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section 
      id="about-us" 
      className="pt-32 pb-20 bg-background" 
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            className="flex flex-col lg:flex-row gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 space-y-6 w-full"
            >
              <div className="inline-flex items-center px-4 py-2 bg-orange-light dark:bg-orange/20 rounded-full">
                <span className="text-sm font-medium text-orange">
                  {t("aboutUs")}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t("aboutTitle")}
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  {t("aboutDescription1")}
                </p>
                <p className="text-lg leading-relaxed font-semibold text-foreground">
                  {t("aboutDescription2")}
                </p>
                <ul className="space-y-3">
                  {[3, 4, 5, 6].map((num) => (
                    <li key={num} className="flex items-start gap-2">
                      <span className="text-orange mt-1">•</span>
                      <span>{t(`aboutDescription${num}`)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-semibold text-foreground pt-4">
                  {t("aboutDescription7")}
                </p>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative w-full lg:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
                <img
                  src="/SVG/about-us-page.svg"
                  alt="Basataa Team"
                  className="w-full h-[600px] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutUs;