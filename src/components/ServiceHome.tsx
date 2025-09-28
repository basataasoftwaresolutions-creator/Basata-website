// src/components/ServiceHome.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Palette, Globe, Layers } from "lucide-react";

const ServiceHome = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const services = [
    {
      id: 1,
      title: t("mobileApps"),
      description: t("mobileAppsDescription"),
      icon: Smartphone,
      image: "../../public/SVG/app-data/cuate.svg",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: 2,
      title: t("uiUxDesign"),
      description: t("uiUxDesignDescription"),
      icon: Palette,
      image: "../../public/SVG/ui-ux-differences/rafiki.svg",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
    },
    {
      id: 3,
      title: t("webDevelopment"),
      description: t("webDevelopmentDescription"),
      icon: Globe,
      image: "../../public/SVG/web-devices/pana.svg",
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
    },
    {
      id: 4,
      title: t("fullProject"),
      description: t("fullProjectDescription"),
      icon: Layers,
      image: "../../public/SVG/website-setup/cuate.svg",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-background relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* الصورة اليسرى - في المنتصف شمال */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0
        hidden sm:block lg:left-0 xl:left-0">
        <img
          src="../../public/SVG/design.svg" 
          alt="Left decoration"
          className="w-[600px] h-[600px] sm:w-[500px] sm:h-[500px] mt-[275px] opacity-80"
        />
      </div>

      {/* الصورة اليمنى - أقصى اليمين */}
      <div className="absolute right-0 top-0 z-0
        hidden sm:block lg:right-0 xl:right-0">
        <img
          src="../../public/SVG/half-arrow.svg"
          alt="Right decoration"
          className="w-[550px] h-[550px] sm:w-[450px] sm:h-[450px] mt-[250px] opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <img
                src="../../public/SVG/Deco-img-arrow.svg"
                alt="arrow"
                className="w-45 h-40 mb-1 mx-auto pr-28"
              />
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6 relative">
                <span className="text-2xl font-medium font-poppins">
                  {t("servicesSubtitle")}
                </span>
                <span className="">
                  <img
                    src="../../public/SVG/Ellipse 5.svg"
                    alt="Ellipse 5"
                    className="w-18 h-18 absolute -top-4 right-14 z-10"
                  />
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-poppins">
                {t("servicesTitle")}
              </h2>
            </motion.div>

            {/* Services Grid - متساوي الارتفاع */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
              {services.map((service, index) => {
                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1 + 0.2,
                    }}
                    className="group h-full"
                  >
                    <div className={`
                      relative p-8 rounded-3xl ${service.bgColor} 
                      border border-gray-200/50 dark:border-gray-700/50
                      hover:shadow-2xl hover:shadow-orange/10 
                      transition-all duration-500 
                      hover:-translate-y-2
                      backdrop-blur-sm
                      h-full flex flex-col
                      overflow-hidden
                    `}>
                      
                      {/* Content الأساسي - يظهر دائماً */}
                      <div className="relative z-20 flex flex-col h-full">
                        {/* Title في أعلى الكارد */}
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground font-poppins
                            group-hover:text-orange transition-colors duration-300">
                            {service.title}
                          </h3>
                        </div>

                        {/* الصورة الكبيرة */}
                        <div className="flex-1 flex items-center justify-center mb-4">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full max-w-[550px] max-h-[450px] object-contain 
                              group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Overlay للوصف - يظهر عند الـ hover */}
                      <div className={`
                        absolute inset-0 rounded-3xl
                        bg-gradient-to-br ${service.gradient} 
                        opacity-0 group-hover:opacity-95
                        transition-all duration-500
                        flex items-center justify-center p-8
                        z-30
                      `}>
                        <div className="text-center text-white">
                          {/* العنوان في الـ overlay */}
                          <h3 className="text-2xl md:text-3xl font-bold mb-6 font-poppins">
                            {service.title}
                          </h3>
                          
                          {/* الوصف */}
                          <p className="text-lg leading-relaxed font-poppins opacity-90">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Corner Decoration */}
                      <div className="absolute top-4 right-4 w-3 h-3 bg-orange rounded-full
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceHome;