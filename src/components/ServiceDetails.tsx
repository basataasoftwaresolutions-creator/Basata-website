import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, Star, Zap, ArrowRight, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const ServiceDetails = () => {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setActiveCategory(category);
      setTimeout(() => {
        const element = document.getElementById("service-details");
        if (element) {
          const headerOffset = 100; // Adjust this value based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [searchParams]);

  const services = {
    design: [
      {
        id: 1,
        name: "تصميم هوية بصرية كاملة",
        nameEn: "Complete Brand Identity Design",
        description: "تصميم شعار، ألوان، خطوط، كروت، وأغلفة السوشيال ميديا لتأسيس هوية مميزة للعلامة التجارية",
        descriptionEn: "Logo design, colors, fonts, cards, and social media covers to establish a distinctive brand identity",
        price: 6000,
        duration: "10 أيام",
        durationEn: "10 days",
        isPopular: false,
        features: ["4 تصاميم للشعار", "دليل استخدام الهوية", "تحسينات حتى الاعتماد"],
        featuresEn: ["4 logo designs", "Brand identity guide", "Revisions until approval"],
        tools: ["Figma", "Illustrator"],
        category: "design"
      },
      {
        id: 2,
        name: "تصميم شعار احترافي",
        nameEn: "Professional Logo Design",
        description: "تصميم لوجو احترافي يعبر عن نشاطك التجاري بأسلوب فريد ومبتكر",
        descriptionEn: "Professional logo design that represents your business with a unique and innovative style",
        price: 2000,
        duration: "4 أيام",
        durationEn: "4 days",
        isPopular: true,
        features: ["3 نماذج", "أكثر من صيغة للتسليم", "خط ألوان متكامل"],
        featuresEn: ["3 samples", "Multiple delivery formats", "Complete color palette"],
        tools: ["Illustrator"],
        category: "design"
      },
      {
        id: 3,
        name: "تصميم واجهة موقع (UI Web Design)",
        nameEn: "Website UI Design",
        description: "تصميم واجهات موقع احترافي متكامل متوافق مع تجربة المستخدم",
        descriptionEn: "Professional website interface design compatible with user experience",
        price: 3500,
        duration: "7 أيام",
        durationEn: "7 days",
        isPopular: false,
        features: ["5 صفحات رئيسية", "ملف Figma منظم", "Prototype بسيط"],
        featuresEn: ["5 main pages", "Organized Figma file", "Simple prototype"],
        tools: ["Figma"],
        category: "design"
      },
      {
        id: 4,
        name: "تصميم واجهة تطبيق موبايل",
        nameEn: "Mobile App UI Design",
        description: "تصميم واجهات تطبيق احترافي جذاب وسهل الاستخدام",
        descriptionEn: "Attractive and user-friendly professional app interface design",
        price: 4500,
        duration: "8 أيام",
        durationEn: "8 days",
        isPopular: false,
        features: ["10 شاشات", "Prototype تفاعلي", "تسليم ملفات قابلة للتطوير"],
        featuresEn: ["10 screens", "Interactive prototype", "Delivery of scalable files"],
        tools: ["Figma"],
        category: "design"
      },
      {
        id: 5,
        name: "تصميم بروفايل شركة",
        nameEn: "Company Profile Design",
        description: "إعداد وتصميم ملف تعريفي احترافي للشركات بصيغة PDF",
        descriptionEn: "Preparation and design of professional company profile in PDF format",
        price: 2500,
        duration: "5 أيام",
        durationEn: "5 days",
        isPopular: false,
        features: ["10 صفحات", "تعديلين مجانًا"],
        featuresEn: ["10 pages", "2 free revisions"],
        tools: ["Illustrator", "InDesign"],
        category: "design"
      }
    ],
    web: [
      {
        id: 6,
        name: "موقع شركة تعريفي",
        nameEn: "Company Website",
        description: "موقع احترافي لعرض خدمات الشركة ونبذة عنها مع تصميم متجاوب",
        descriptionEn: "Professional website to showcase company services with responsive design",
        price: 9000,
        duration: "10 أيام",
        durationEn: "10 days",
        isPopular: false,
        features: ["5 صفحات", "دومين واستضافة سنة", "تصميم متجاوب", "SSL"],
        featuresEn: ["5 pages", "Domain and hosting for 1 year", "Responsive design", "SSL"],
        tools: ["React", "Node.js", "Bootstrap"],
        category: "web"
      },
      {
        id: 7,
        name: "موقع متجر إلكتروني",
        nameEn: "E-commerce Website",
        description: "متجر إلكتروني كامل مع لوحة تحكم وإمكانية الدفع الإلكتروني",
        descriptionEn: "Complete e-commerce store with admin panel and online payment",
        price: 20000,
        duration: "20 يوم",
        durationEn: "20 days",
        isPopular: true,
        features: ["لوحة تحكم", "سلة شراء", "ربط وسائل الدفع"],
        featuresEn: ["Admin panel", "Shopping cart", "Payment gateway integration"],
        tools: ["WordPress", "WooCommerce"],
        category: "web"
      },
      {
        id: 8,
        name: "موقع شخصي (Portfolio)",
        nameEn: "Personal Portfolio Website",
        description: "موقع شخصي لعرض الأعمال والخبرات بشكل احترافي",
        descriptionEn: "Personal website to showcase work and experience professionally",
        price: 5000,
        duration: "7 أيام",
        durationEn: "7 days",
        isPopular: false,
        features: ["4 صفحات", "تصميم مميز", "مناسب للجوال"],
        featuresEn: ["4 pages", "Unique design", "Mobile-friendly"],
        tools: ["React", "TailwindCSS"],
        category: "web"
      },
      {
        id: 9,
        name: "منصة تعليمية (ويب)",
        nameEn: "Educational Platform (Web)",
        description: "منصة تعليمية للمدرسين مع إمكانية إضافة الفيديوهات وتنظيم الدروس",
        descriptionEn: "Educational platform for teachers with video uploads and lesson organization",
        price: 25000,
        duration: "25 يوم",
        durationEn: "25 days",
        isPopular: false,
        features: ["نظام دورات", "إضافة فيديوهات", "إدارة مستخدمين"],
        featuresEn: ["Course system", "Video uploads", "User management"],
        tools: ["React", "Node.js", "TailwindCSS"],
        category: "web"
      }
    ],
    apps: [
      {
        id: 10,
        name: "منصة تعليمية (تطبيق)",
        nameEn: "Educational Platform (App)",
        description: "تطبيق للمدرسين والطلاب مع إدارة للدروس والاجتماعات",
        descriptionEn: "App for teachers and students with lesson and meeting management",
        price: 35000,
        duration: "35 يوم",
        durationEn: "35 days",
        isPopular: true,
        features: ["إنشاء اجتماعات", "فصول دراسية", "رفع فيديوهات", "تسجيل دخول للطلاب"],
        featuresEn: ["Create meetings", "Classrooms", "Upload videos", "Student login"],
        tools: ["Flutter", "Firebase"],
        category: "apps"
      },
      {
        id: 11,
        name: "تطبيق متجر إلكتروني",
        nameEn: "E-commerce Mobile App",
        description: "تطبيق موبايل لعرض وبيع المنتجات مع إدارة الطلبات",
        descriptionEn: "Mobile app to display and sell products with order management",
        price: 30000,
        duration: "30 يوم",
        durationEn: "30 days",
        isPopular: false,
        features: ["ربط ببوابة الدفع", "سلة مشتريات", "لوحة تحكم"],
        featuresEn: ["Payment gateway integration", "Shopping cart", "Admin panel"],
        tools: ["Flutter", "Firebase"],
        category: "apps"
      }
    ],
    full_projects: [
      {
        id: 12,
        name: "باقة مشروع متكاملة (تصميم + موقع + تطبيق)",
        nameEn: "Complete Project Package (Design + Website + App)",
        description: "بناء مشروعك الرقمي الكامل من الصفر، يشمل التصميم والموقع والتطبيق بسعر مخفض",
        descriptionEn: "Build your complete digital project from scratch, including design, website, and app at a discounted price",
        price: 60000,
        duration: "45 يوم",
        durationEn: "45 days",
        isPopular: true,
        features: ["تصميم كامل", "موقع ويب احترافي", "تطبيق موبايل", "لوحة تحكم"],
        featuresEn: ["Complete design", "Professional website", "Mobile app", "Admin panel"],
        tools: ["React", "Node.js", "Flutter", "Figma"],
        category: "full_projects"
      }
    ]
  };

  const allServices = [
    ...services.design,
    ...services.web,
    ...services.apps,
    ...services.full_projects
  ];

  const filteredServices = activeCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const categories = [
    { id: "all", nameAr: "الكل", nameEn: "All" },
    { id: "design", nameAr: "تصميم", nameEn: "Design" },
    { id: "web", nameAr: "مواقع", nameEn: "Websites" },
    { id: "apps", nameAr: "تطبيقات", nameEn: "Apps" },
    { id: "full_projects", nameAr: "مشاريع متكاملة", nameEn: "Full Projects" }
  ];

  return (
    <section
      id="service-details"
      className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white  dark:from-[#292929] dark:to-[#292929] relative overflow-hidden"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* خط سميك - responsive */}
      <div className="w-[calc(100%-40px)] mx-[20px] sm:w-[calc(100%-120px)] sm:mx-[60px] md:w-[calc(100%-240px)] md:mx-[120px] lg:w-[calc(100%-340px)] lg:mx-[170px] xl:w-[calc(100%-440px)] xl:mx-[220px] h-1 sm:h-1.5 md:h-2 bg-gradient-to-r from-orange-500/70 via-orange-500 to-orange-500/70 rounded-full mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-[100px]"></div>

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-orange-500/5 dark:bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-24 h-24 sm:w-40 sm:h-40 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* الصورة اليسرى - responsive - ثابتة */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-0 hidden lg:block pointer-events-none">
          <img
            src="/SVG/design.svg"
            alt="Left decoration"
            className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] mt-[60px] lg:mt-[80px] xl:mt-[80px] opacity-60 dark:opacity-40"
          />
        </div>

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
                src="/SVG/Deco-img-arrow.svg"
                alt="arrow"
                className="w-[400px] h-[150px] mx-auto pr-10 sm:pr-20 md:pr-24 lg:pr-[120px] xl:pr-[180px] 2xl:pr-[200px] opacity-70 dark:opacity-50 hover:opacity-100 dark:hover:opacity-80 transition-opacity duration-300"
              />

              {/* Badge with ellipse */}
              <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 relative">
                <span className="text-lg sm:text-xl md:text-2xl font-medium font-poppins text-gray-900 dark:text-gray-100">
                  {language === "ar" ? "تفاصيل الخدمات" : "Service Details"}
                </span>
                <span className="">
                  <img
                    src="/SVG/Ellipse 5.svg"
                    alt="Ellipse 5"
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 absolute -top-2 sm:-top-3 right-[80px] sm:right-[100px] md:right-[120px] lg:right-[130px] z-10 opacity-80 dark:opacity-60"
                  />
                </span>
              </div>

              {/* Main Title - responsive */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 font-poppins px-2">
                {language === "ar"
                  ? "اختر الباقة المناسبة لك"
                  : "Choose Your Perfect Package"}
              </h2>

              {/* Description - responsive */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl lg:max-w-2xl mx-auto px-4">
                {language === "ar"
                  ? "نقدم مجموعة متنوعة من الباقات لتناسب احتياجاتك وميزانيتك"
                  : "We offer a variety of packages to suit your needs and budget"}
              </p>

              {/* Category Filter - responsive */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mt-6 sm:mt-8">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      const newUrl = new URL(window.location.href);
                      newUrl.searchParams.set("category", cat.id);
                      window.history.pushState({}, "", newUrl);
                    }}
                    className={`px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300
                      ${
                        activeCategory === cat.id
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      }`}
                  >
                    {language === "ar" ? cat.nameAr : cat.nameEn}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Services Grid - responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
              {filteredServices.map((service, index) => (
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
                    className="relative p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-gray-800
                    border border-gray-200/50 dark:border-gray-700/50
                    hover:shadow-2xl hover:shadow-orange-500/10 dark:hover:shadow-orange-500/20
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
                        <div className="bg-white text-orange-500 px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1 rounded-full text-xs font-bold shadow-lg">
                          {language === "ar" ? "الأكثر طلباً" : "Most Popular"}
                        </div>
                      </div>
                    )}

                    {/* Content Container */}
                    <div className="relative z-20 flex flex-col h-full">
                      {/* Service Title - responsive */}
                      <div className="mb-4 sm:mb-5 md:mb-6">
                        <h3
                          className="text-base sm:text-lg md:text-xl font-bold mb-2 font-poppins text-gray-900 dark:text-white
                          group-hover:text-white transition-colors duration-500 leading-tight"
                        >
                          {language === "ar" ? service.name : service.nameEn}
                        </h3>

                        {/* Price - responsive */}
                        <div className="flex items-baseline gap-1">
                          <span
                            className="text-xs opacity-70 text-gray-600 dark:text-gray-400
                            group-hover:text-white/90 transition-colors duration-500"
                          >
                            {language === "ar" ? "يبدأ من" : "Start with"}
                          </span>
                          <span
                            className="text-xl sm:text-2xl md:text-3xl font-bold font-poppins text-gray-900 dark:text-white
                            group-hover:text-white transition-colors duration-500"
                          >
                            {service.price} {language === "ar" ? "ج.م" : "EGP"}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4 group-hover:text-white/90 transition-colors duration-500">
                        {language === "ar" ? service.description : service.descriptionEn}
                      </p>

                      {/* What's Included - responsive */}
                      <div className="flex-1 mb-4 sm:mb-5 md:mb-6">
                        <h4
                          className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 text-gray-900 dark:text-white
                          group-hover:text-white transition-colors duration-500"
                        >
                          {language === "ar" ? "ما يشمله" : "What's included"}
                        </h4>

                        <ul className="space-y-2 sm:space-y-3">
                          {(language === "ar"
                            ? service.features
                            : service.featuresEn
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
                                className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-gray-400
                                group-hover:text-white/90 transition-colors duration-500"
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tools */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {service.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs rounded-full bg-orange-500/10 dark:bg-orange-500/20 text-orange-500 dark:text-orange-400 group-hover:bg-white/20 group-hover:text-white transition-colors duration-500"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>

                      {/* Duration - responsive */}
                      <div className="flex items-center gap-2 mb-4 sm:mb-5 md:mb-6">
                        <Clock
                          className="w-3 h-3 sm:w-4 sm:h-4 text-orange-500 dark:text-orange-400
                          group-hover:text-white transition-colors duration-500"
                        />
                        <span
                          className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400
                          group-hover:text-white transition-colors duration-500"
                        >
                          {language === "ar"
                            ? service.duration
                            : service.durationEn}
                        </span>
                      </div>

                      {/* Order Button - responsive */}
                      <button
                        className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base
                        flex items-center justify-center gap-2
                        transition-all duration-500
                        hover:scale-105 hover:shadow-lg
                        bg-orange-500 text-white 
                        group-hover:bg-white group-hover:text-orange-500
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