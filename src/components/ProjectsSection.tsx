import { ArrowUpRightIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import webdev from "/Frame 62 (1).png";
import ellip from "/Ellipse 5.png";
import arrow from "/Deco-img-arrow.png";

export const ProjectsSection = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterButtons = [
    { id: "All", label: "All" },
    { id: "UI UX Design", label: "UI UX Design" },
    { id: "Website Development", label: "Website Development" },
    { id: "Mobile App", label: "Mobile App" },
    { id: "Full Project", label: "Full Project" },
  ];

  const projects = [
    {
      id: 1,
      backgroundImage:
        "https://c.animaapp.com/mfogjahzUbfsFI/img/rectangle-6-3.svg",
      frameImage1: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-62-1.svg",
      frameImage2: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-61.svg",
      label: "UI/UX Design"
    },
    {
      id: 2,
      backgroundImage:
        "https://c.animaapp.com/mfogjahzUbfsFI/img/rectangle-6.svg",
      frameImage1: "webdevlopment",
      frameImage2: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-61.svg",
      label: "Web Development"
    },
    {
      id: 3,
      backgroundImage:
        "https://c.animaapp.com/mfogjahzUbfsFI/img/rectangle-6-2.svg",
      frameImage1: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-62.svg",
      frameImage2: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-61.svg",
      label: "Mobile App"
    },
    {
      id: 4,
      backgroundImage:
        "https://c.animaapp.com/mfogjahzUbfsFI/img/rectangle-6-1.svg",
      frameImage1: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-62-3.svg",
      frameImage2: "https://c.animaapp.com/mfogjahzUbfsFI/img/frame-61.svg",
      label: "Full Project"
    },
  ];

  const paginationDots = [
    { id: 1, active: true },
    { id: 2, active: false },
    { id: 3, active: false },
    { id: 4, active: false },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-6 md:gap-8 lg:gap-10 relative px-4 sm:px-6 lg:px-8 mt-64">
      <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 relative w-full ">
        <img src={ellip} alt="" className="absolute top-[-4%] left-[41%] " />
        <img src={arrow} alt="" className="absolute top-[-40%] left-[20%] " />
        {/* Header Section */}
        <header className="inline-flex flex-col items-center gap-2 relative translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange rounded-full flex items-center justify-center">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xs sm:text-sm md:text-base md:text-[24px] mt-4">
              Projects
            </span>
          </div>

          <h2 className="font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center relative w-fit [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal] mt-2">
            Our Works
          </h2>
        </header>

        {/* Filter Navigation */}
        <nav className="flex flex-wrap max-w-full w-full items-center justify-center gap-2 sm:gap-3 px-0 py-4 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {filterButtons.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 h-auto inline-flex items-center justify-center gap-2.5 relative rounded-full transition-colors text-sm sm:text-base whitespace-nowrap ${
                activeFilter === filter.id
                  ? "bg-orange text-white"
                  : "bg-transparent text-white hover:bg-orange/20"
              }`}
              variant="ghost"
            >
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-normal tracking-[0] leading-[normal]">
                {filter.label}
              </span>
            </Button>
          ))}
        </nav>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 relative w-full max-w-6xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="relative group cursor-pointer transition-transform hover:scale-105 w-full max-w-xs mx-auto rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0 relative">
                <div className="flex flex-col w-full h-64 sm:h-72 md:h-80 items-center justify-end gap-3 sm:gap-4 md:gap-5 relative rounded-2xl overflow-hidden bg-gradient-to-b from-orange-400 to-orange-500">
                  {/* Project Type Label */}
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-white text-xs sm:text-sm font-medium ">
                     
                    </span>
                  </div>

                  <img
                    className=" absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay"
                    alt="Project background"
                    src={project.backgroundImage}
                  />

                  <h1 className="  relative text-white flex-[0_0_auto] z-10   object-contain transform -translate-y-9 text-[25px]">
                    {project.label}
                  </h1>

                  <img
                    className="relative self-stretch lg:w-[500px] flex-[0_0_auto] z-10 h-auto object-contain "
                    alt="Project details"
                    src={project.frameImage2}
                  />
                </div>

                <Button
                  className="flex w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 items-center justify-center gap-2.5 p-2 sm:p-3 absolute bottom-[-24px] right-4 bg-black rounded-full border-2 border-solid border-white hover:bg-gray-800 transition-colors shadow-lg"
                  variant="ghost"
                >
                  <ArrowUpRightIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="inline-flex items-center gap-2 sm:gap-3 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        {paginationDots.map((dot) => (
          <button
            key={dot.id}
            className={`relative rounded-full transition-colors ${
              dot.active
                ? "w-3 h-3 bg-orange"
                : "w-2 h-2 bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to page ${dot.id}`}
          />
        ))}
      </div>
    </section>
  );
};