import React, { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export const PortfolioSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("الكل");

  const filterTabs = [
    "المتاجر الألكترونية",
    "لوحات التحكم",
    "صفحات الهبوط",
    "الأعمال",
    "الكل",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Shopping website",
      category: "E-commerce",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#ffffff]",
    },
    {
      id: 2,
      title: "Skincare website",
      category: "Bussiness",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-1.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#ffffff]",
    },
    {
      id: 3,
      title: "Skincare website",
      category: "Landing page",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-2.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#e6dcd0]",
    },
    {
      id: 4,
      title: "Shopping website",
      category: "E-commerce",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-3.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#ffffff]",
    },
    {
      id: 5,
      title: "Skincare website",
      category: "Bussiness",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-4.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#ffffff]",
    },
    {
      id: 6,
      title: "Skincare website",
      category: "Landing page",
      image: "https://c.animaapp.com/mfxa49ooLVMw3m/img/image-2-5.png",
      technologies: ["HTML", "CSS", "React"],
      backgroundColor: "bg-[#e6dcd0]",
    },
  ];

  const filteredItems = activeFilter === "الكل"
    ? portfolioItems
    : portfolioItems.filter(item => {
        const categoryMap: { [key: string]: string } = {
          "المتاجر الألكترونية": "E-commerce",
          "لوحات التحكم": "Dashboard",
          "صفحات الهبوط": "Landing page",
          "الأعمال": "Bussiness",
        };
        return item.category === categoryMap[activeFilter];
      });

  return (
    <section className=" flex flex-col w-full items-end gap-16 relative bg-white px-8 py-16">
      {/* Header */}
      <header className="flex mr-20 flex-col w-[120px] items-end gap-2 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
       <h2 className="[font-family:'Poppins',Helvetica] font-medium   text-[#222323] text-[32px] text-right tracking-normal leading-none [direction:rtl]">
  أعمالنا
</h2>
        <img
          className="relative self-stretch w-full h-[6px]"
          alt="Line"
          src="https://c.animaapp.com/mfxa49ooLVMw3m/img/line-1.svg"
        />
      </header>

      <div className="flex flex-col items-center gap-12 relative self-stretch w-full max-w-[1440px] mx-auto">
        {/* Filter Tabs */}
        <nav className="inline-flex items-center gap-3 px-0 py-4 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {filterTabs.map((tab, index) => (
            <Button
              key={tab}
              variant={activeFilter === tab ? "default" : "ghost"}
              className={`px-6 py-3 h-auto inline-flex items-center justify-center gap-2 relative rounded-[40px] transition-colors ${
                activeFilter === tab
                  ? "bg-[#FF9705] hover:bg-[#FF9705]/90 text-white"
                  : "bg-[#F5F5F5] hover:bg-[#E0E0E0] text-[#222323]"
              } [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[20px] tracking-[0] leading-[28px] [direction:rtl]`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </Button>
          ))}
        </nav>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative w-[90%]">
          {filteredItems.map((item, index) => (
            <Card
              key={item.id}
              className="relative border-0 flex flex-col items-start bg-[#ffffff] rounded-[24px] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
            >
              <div
                className={`absolute top-0 left-0 w-full h-[360px] ${item.backgroundColor} rounded-[24px_24px_0px_0px]`}
              />
              <img
                className="relative self-stretch w-full h-[360px] object-cover rounded-[24px_24px_0px_0px]"
                alt={item.title}
                src={item.image}
              />
              <CardContent className="flex flex-col items-start gap-6 p-6 relative self-stretch w-full">
                {/* Title and Category */}
                <div className="flex items-center justify-between relative self-stretch w-full">
                  <h3 className="[font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[#222323] text-[24px] tracking-[0] leading-[32px] [direction:rtl]">
                    {item.title}
                  </h3>
                  <Badge className="px-4 py-2 bg-[#F5F5F5] hover:bg-[#F5F5F5] text-[#222323] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[18px] tracking-[0] leading-[26px] rounded-[40px]">
                    {item.category}
                  </Badge>
                </div>

                {/* Technology Tags */}
                <div className="inline-flex items-center gap-3 relative flex-wrap">
                  {item.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="px-4 py-2 rounded-[40px] border-[2px] border-solid border-[#FF9705] bg-transparent hover:bg-[#FF9705]/10 text-[#222323] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-medium text-[18px] tracking-[0] leading-[26px]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Visit Website Button */}
                <Button className="w-full h-[48px] bg-[#FF9705] hover:bg-[#FF9705]/90 rounded-[40px] text-white [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[18px] tracking-[0] leading-[26px] [direction:rtl]">
                  زيارة الموقع
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* More Button */}
        <Button
          variant="outline"
          className="w-[200px] h-[56px] rounded-[40px] border-[2px] border-solid border-[#FF9705] bg-transparent hover:bg-[#FF9705]/10 text-[#FF9705] [font-family:'IBM_Plex_Sans_Arabic',Helvetica] font-semibold text-[20px] tracking-[0] leading-[28px] [direction:rtl] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]"
        >
          المزيد
        </Button>
      </div>
    </section>
  );
};