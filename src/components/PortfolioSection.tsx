import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export const PortfolioSection = (): JSX.Element => {
  const { theme } = useTheme();
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState(language === "ar" ? "all" : "all");

  const filterTabs = [
    { id: "ecommerce", key: "ecommerce" },
    { id: "dashboard", key: "dashboard" },
    { id: "landingPage", key: "landingPage" },
    { id: "business", key: "business" },
    { id: "all", key: "all" },
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Shopping website",
      category: "E-commerce",
      categoryKey: "ecommerce",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-white dark:bg-card",
    },
    {
      id: 2,
      title: "Skincare website",
      category: "Business",
      categoryKey: "business",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-1.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-white dark:bg-card",
    },
    {
      id: 3,
      title: "Skincare website",
      category: "Landing page",
      categoryKey: "landingPage",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-2.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#e6dcd0] dark:bg-secondary",
    },
    {
      id: 4,
      title: "Shopping website",
      category: "E-commerce",
      categoryKey: "ecommerce",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-3.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-white dark:bg-card",
    },
    {
      id: 5,
      title: "Skincare website",
      category: "Business",
      categoryKey: "business",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-4.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-white dark:bg-card",
    },
    {
      id: 6,
      title: "Skincare website",
      category: "Landing page",
      categoryKey: "landingPage",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-5.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#e6dcd0] dark:bg-secondary",
    },
  ];

  const filteredItems = activeFilter === "all"
    ? portfolioItems
    : portfolioItems.filter(item => {
        const categoryMap: { [key: string]: string } = {
          "ecommerce": "E-commerce",
          "dashboard": "Dashboard",
          "landingPage": "Landing page",
          "business": "Business",
        };
        return item.category === categoryMap[activeFilter];
      });

  return (
    <section 
      className="flex flex-col w-full items-center gap-16 relative bg-background px-4 sm:px-6 lg:px-8 py-12 md:py-16 mt-20 sm:mt-24 md:mt-32"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Header */}
      <header className="flex flex-col items-center gap-2 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full">
        <h2 className="[font-family:'Poppins',Helvetica] font-medium text-foreground text-2xl sm:text-3xl md:text-4xl text-center tracking-normal leading-none">
          {t("ourWorks")}
        </h2>
        <img
          className="relative w-24 sm:w-32 md:w-40 h-[6px] opacity-80"
          alt="Line"
          src="https://c.animaapp.com/mfxa49ooLVMw3m/img/line-1.svg"
        />
      </header>

      <div className="flex flex-col items-center gap-12 relative self-stretch w-full max-w-[1440px] mx-auto">
        {/* Filter Tabs */}
        <nav className="inline-flex flex-wrap items-center justify-center gap-3 px-0 py-4 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeFilter === tab.id ? "default" : "ghost"}
              className={`px-4 sm:px-6 py-2 sm:py-3 h-auto inline-flex items-center justify-center gap-2 relative rounded-[40px] transition-colors ${
                activeFilter === tab.id
                  ? "bg-orange hover:bg-orange/90 text-white"
                  : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
              } [font-family:'Poppins',Helvetica] font-medium text-sm sm:text-base md:text-lg tracking-[0] leading-[28px]`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {t(tab.key)}
            </Button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative w-full">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="relative border border-border flex flex-col items-start bg-card rounded-[24px] shadow-lg hover:shadow-2xl transition-all duration-300 translate-y-[-1rem] animate-fade-in opacity-0 overflow-hidden"
              style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
            >
              <div
                className={`absolute top-0 left-0 w-full h-[360px] ${item.backgroundColor} rounded-[24px_24px_0px_0px]`}
              />
              <img
                className="relative self-stretch w-full h-[360px] object-cover rounded-[24px_24px_0px_0px] opacity-90"
                alt={item.title}
                src={item.image}
              />
              <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 relative self-stretch w-full">
                {/* Title and Category */}
                <div className="flex items-center justify-between relative self-stretch w-full gap-2">
                  <h3 className="[font-family:'Poppins',Helvetica] font-medium text-card-foreground text-lg sm:text-xl md:text-2xl tracking-[0] leading-[32px] flex-1">
                    {item.title}
                  </h3>
                  <Badge className="px-3 sm:px-4 py-1 sm:py-2 bg-secondary hover:bg-secondary/80 text-foreground [font-family:'Poppins',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-[26px] rounded-[40px] whitespace-nowrap">
                    {t(item.categoryKey)}
                  </Badge>
                </div>

                {/* Technology Tags */}
                <div className="inline-flex items-center gap-2 sm:gap-3 relative flex-wrap">
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-3 sm:px-4 py-1 sm:py-2 rounded-[40px] border-2 border-solid border-orange bg-transparent hover:bg-orange/10 text-foreground [font-family:'Poppins',Helvetica] font-medium text-sm sm:text-base tracking-[0] leading-[26px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Visit Website Button */}
                <Button className="w-full h-[48px] bg-orange hover:bg-orange/90 rounded-[40px] text-white [font-family:'Poppins',Helvetica] font-semibold text-base sm:text-lg tracking-[0] leading-[26px]">
                  {t("visitWebsite")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Button */}
        <Button
          variant="outline"
          className="w-[200px] h-[56px] rounded-[40px] border-2 border-solid border-orange bg-transparent hover:bg-orange/10 text-orange [font-family:'Poppins',Helvetica] font-semibold text-base sm:text-lg md:text-xl tracking-[0] leading-[28px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
        >
          {t("more")}
        </Button>
      </div>
    </section>
  );
};