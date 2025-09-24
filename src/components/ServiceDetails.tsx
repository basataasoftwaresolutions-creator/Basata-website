// src/components/ServiceDetails.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, ArrowRight } from "lucide-react";

const ServiceDetails = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const services = [
    {
      id: 1,
      title: "Full Informational Website",
      titleAr: "موقع معلوماتي شامل",
      price: "$1,000",
      duration: "7 days",
      durationAr: "7 أيام",
      isPopular: false,
      features: [
        "5-6 custom-designed pages",
        "Contact form",
        "Map integration",
        "Built with React or WordPress",
      ],
      featuresAr: [
        "5-6 صفحات مصممة خصيصاً",
        "نموذج اتصال",
        "تكامل الخرائط",
        "مبني بـ React أو WordPress",
      ],
    },
    {
      id: 2,
      title: "Basic E-commerce Store",
      titleAr: "متجر إلكتروني أساسي",
      price: "$2,500",
      duration: "12 days",
      durationAr: "12 يوم",
      isPopular: true,
      features: [
        "6-8 pages",
        "Payment integration",
        "Shopping cart",
        "User accounts",
        "Admin dashboard",
        "Built with WooCommerce or React",
      ],
      featuresAr: [
        "6-8 صفحات",
        "تكامل الدفع",
        "عربة التسوق",
        "حسابات المستخدمين",
        "لوحة تحكم الإدارة",
        "مبني بـ WooCommerce أو React",
      ],
    },
    {
      id: 3,
      title: "Full Informational Website",
      titleAr: "موقع معلوماتي شامل",
      price: "$1,000",
      duration: "10 days",
      durationAr: "10 أيام",
      isPopular: false,
      features: [
        "5-6 custom-designed pages",
        "Contact form",
        "Custom team-themed design",
        "Built using WordPress or a Headless CMS",
      ],
      featuresAr: [
        "5-6 صفحات مصممة خصيصاً",
        "نموذج اتصال",
        "تصميم مخصص للفريق",
        "مبني باستخدام WordPress أو CMS",
      ],
    },
    {
      id: 4,
      title: "Service Booking Website",
      titleAr: "موقع حجز خدمات",
      price: "$3,000",
      duration: "14 days",
      durationAr: "14 يوم",
      isPopular: false,
      features: [
        "8-10 pages",
        "Booking system",
        "Email/SMS notifications",
        "User registration",
        "Built with Laravel or Node.js",
      ],
      featuresAr: [
        "8-10 صفحات",
        "نظام حجز",
        "إشعارات البريد/الرسائل",
        "تسجيل المستخدمين",
        "مبني بـ Laravel أو Node.js",
      ],
    },
    {
      id: 5,
      title: "Custom Admin Dashboard",
      titleAr: "لوحة تحكم مخصصة",
      price: "$1,000",
      duration: "7 days",
      durationAr: "7 أيام",
      isPopular: false,
      features: [
        "Page count based on features",
        "Management tools",
        "Analytics dashboard",
        "User permissions",
        "Built with Node.js or Laravel",
      ],
      featuresAr: [
        "عدد الصفحات حسب الميزات",
        "أدوات الإدارة",
        "لوحة تحليلات",
        "صلاحيات المستخدمين",
        "مبني بـ Node.js أو Laravel",
      ],
    },
    {
      id: 6,
      title: "Blog or News Website",
      titleAr: "موقع مدونة أو أخبار",
      price: "$1,200",
      duration: "7 days",
      durationAr: "7 أيام",
      isPopular: false,
      features: [
        "5-7 pages",
        "Article and category layout",
        "Search functionality",
        "Built with WordPress or Next.js",
      ],
      featuresAr: [
        "5-7 صفحات",
        "تخطيط المقالات والفئات",
        "وظيفة البحث",
        "مبني بـ WordPress أو Next.js",
      ],
    },
    {
      id: 7,
      title: "Real Estate Website",
      titleAr: "موقع عقارات",
      price: "$3,500",
      duration: "15-20 days",
      durationAr: "15-20 يوم",
      isPopular: false,
      features: [
        "10+ pages",
        "Property filtering",
        "Map integration",
        "User accounts",
        "Built with React and Node.js",
      ],
      featuresAr: [
        "أكثر من 10 صفحات",
        "تصفية العقارات",
        "تكامل الخرائط",
        "حسابات المستخدمين",
        "مبني بـ React و Node.js",
      ],
    },
    {
      id: 8,
      title: "Professional Landing Page",
      titleAr: "صفحة هبوط احترافية",
      price: "$300",
      duration: "3 days",
      durationAr: "3 أيام",
      isPopular: false,
      features: [
        "Single-page promotional site",
        "Call-to-action (CTA) sections",
        "SEO optimization",
        "Built using HTML and Bootstrap",
      ],
      featuresAr: [
        "موقع ترويجي بصفحة واحدة",
        "أقسام الدعوة للعمل",
        "تحسين محركات البحث",
        "مبني باستخدام HTML و Bootstrap",
      ],
    },
    {
      id: 9,
      title: "Subscription-Based Website",
      titleAr: "موقع قائم على الاشتراكات",
      price: "$2,800",
      duration: "14 days",
      durationAr: "14 يوم",
      isPopular: false,
      features: [
        "8-10 pages",
        "Subscription plans",
        "Login system",
        "Admin dashboard",
        "Built with Laravel and Stripe",
      ],
      featuresAr: [
        "8-10 صفحات",
        "خطط الاشتراك",
        "نظام تسجيل الدخول",
        "لوحة تحكم الإدارة",
        "مبني بـ Laravel و Stripe",
      ],
    },
    {
      id: 10,
      title: "Bilingual Website",
      titleAr: "موقع ثنائي اللغة",
      price: "+20%",
      duration: "+2-3 days",
      durationAr: "+2-3 أيام",
      isPopular: false,
      isAdditional: true,
      features: [
        "Full bilingual support",
        "Arabic and English content",
        "Works with any package",
        "Built with WordPress or React",
      ],
      featuresAr: [
        "دعم كامل ثنائي اللغة",
        "محتوى عربي وإنجليزي",
        "يعمل مع أي باقة",
        "مبني بـ WordPress أو React",
      ],
    },
  ];

  return (
    <section
      id="service-details"
      className="py-10 sm:py-16 md:py-20 bg-background relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* خط سميك - responsive */}
      <div className="w-[calc(100%-40px)] mx-[20px] sm:w-[calc(100%-120px)] sm:mx-[60px] md:w-[calc(100%-240px)] md:mx-[120px] lg:w-[calc(100%-340px)] lg:mx-[170px] xl:w-[calc(100%-440px)] xl:mx-[220px] h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-orange/70 via-orange to-orange/70 rounded-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-[100px]"></div>

      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* الصورة اليسرى - responsive */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block">
        <img
          src="../../public/SVG/design.svg"
          alt="Left decoration"
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] mt-[60px] lg:mt-[80px] xl:mt-[80px] opacity-85"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              className="text-center mb-12 sm:mb-16"
            >
              {/* Arrow Image - fixed size */}
              <img
                src="../../public/SVG/Deco-img-arrow.svg"
                alt="arrow"
                className="w-[400px] h-[150px] mx-auto pr-10 sm:pr-20 md:pr-24 lg:pr-[120px] xl:pr-[180px] 2xl:pr-[200px] opacity-90 hover:opacity-100 transition-opacity duration-300"
              />

              {/* Badge with ellipse */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 relative">
                <span className="text-lg sm:text-xl md:text-2xl font-medium font-poppins">
                  {language === "ar" ? "تفاصيل الخدمات" : "Service Details"}
                </span>
                <span className="">
                  <img
                    src="../../public/SVG/Ellipse 5.svg"
                    alt="Ellipse 5"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 absolute -top-2 sm:-top-3 right-[80px] sm:right-[100px] md:right-[120px] lg:right-[130px] z-10"
                  />
                </span>
              </div>

              {/* Main Title - responsive */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-poppins px-2">
                {language === "ar"
                  ? "اختر الباقة المناسبة لك"
                  : "Choose Your Perfect Package"}
              </h2>

              {/* Description - responsive */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                {language === "ar"
                  ? "نقدم مجموعة متنوعة من الباقات لتناسب احتياجاتك وميزانيتك"
                  : "We offer a variety of packages to suit your needs and budget"}
              </p>
            </motion.div>

            {/* Services Grid - responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.2,
                  }}
                  className="group relative"
                >
                  <div
                    className="relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-card
                    border border-gray-200/50 dark:border-gray-700/50
                    hover:shadow-2xl hover:shadow-orange/10
                    transition-all duration-500
                    hover:-translate-y-2
                    backdrop-blur-sm
                    h-full flex flex-col
                    overflow-hidden"
                  >
                    {/* Gradient Background - يظهر عند الـ hover فقط */}
                    <div
                      className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-500 z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #FF9705 0%, #0048FF 100%)",
                      }}
                    ></div>

                    {/* Popular Badge - responsive */}
                    {service.isPopular && (
                      <div className="absolute -top-1 sm:-top-1.5 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-white text-orange px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 rounded-full text-xs font-bold shadow-lg">
                          {language === "ar" ? "الأكثر طلباً" : "Most Popular"}
                        </div>
                      </div>
                    )}

                    {/* Additional Badge - responsive */}
                    {service.isAdditional && (
                      <div className="absolute -top-1 sm:-top-1.5 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-white text-blue-600 px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 rounded-full text-xs font-bold shadow-lg">
                          {language === "ar" ? "إضافي" : "Additional Cost"}
                        </div>
                      </div>
                    )}

                    {/* Content Container */}
                    <div className="relative z-20 flex flex-col h-full">
                      {/* Service Title - responsive */}
                      <div className="mb-4 sm:mb-5 md:mb-6">
                        <h3
                          className="text-base sm:text-lg md:text-xl font-bold mb-2 font-poppins text-foreground 
                          group-hover:text-white transition-colors duration-500 leading-tight"
                        >
                          {language === "ar" ? service.titleAr : service.title}
                        </h3>

                        {/* Price - responsive */}
                        <div className="flex items-baseline gap-1">
                          <span
                            className="text-xs opacity-70 text-muted-foreground
                            group-hover:text-white/90 transition-colors duration-500"
                          >
                            {service.isAdditional
                              ? language === "ar"
                                ? "تكلفة إضافية"
                                : "Additional Cost"
                              : language === "ar"
                              ? "يبدأ من"
                              : "Start with"}
                          </span>
                          <span
                            className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-foreground
                            group-hover:text-white transition-colors duration-500"
                          >
                            {service.price}
                          </span>
                        </div>
                      </div>

                      {/* What's Included - responsive */}
                      <div className="flex-1 mb-4 sm:mb-5 md:mb-6">
                        <h4
                          className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-foreground
                          group-hover:text-white transition-colors duration-500"
                        >
                          {language === "ar" ? "ما يشمله" : "What's included"}
                        </h4>

                        <ul className="space-y-2 sm:space-y-3">
                          {(language === "ar"
                            ? service.featuresAr
                            : service.features
                          ).map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 sm:gap-3"
                            >
                              <Check
                                className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-green-500
                                group-hover:text-white transition-colors duration-500"
                              />
                              <span
                                className="text-xs sm:text-sm leading-relaxed text-muted-foreground
                                group-hover:text-white/90 transition-colors duration-500"
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Duration - responsive */}
                      <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
                        <Clock
                          className="w-3 h-3 sm:w-4 sm:h-4 text-orange
                          group-hover:text-white transition-colors duration-500"
                        />
                        <span
                          className="text-xs sm:text-sm font-medium text-muted-foreground
                          group-hover:text-white transition-colors duration-500"
                        >
                          {language === "ar"
                            ? service.durationAr
                            : service.duration}
                        </span>
                      </div>

                      {/* Order Button - responsive */}
                      <button
                        className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base
                        flex items-center justify-center gap-2
                        transition-all duration-500
                        hover:scale-105 hover:shadow-lg
                        bg-orange text-white 
                        group-hover:bg-white group-hover:text-orange
                                                border border-transparent group-hover:border-white/20"
                      >
                        <span>
                          {language === "ar" ? "اطلب الآن" : "Order Now"}
                        </span>
                        <ArrowRight
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${
                            language === "ar" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceDetails;
