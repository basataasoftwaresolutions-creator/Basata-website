import React from "react";
import { Card, CardContent } from "./ui/card";
import arrow2 from "/arrow2.png";

export const WorkExperienceSection = (): JSX.Element => {
  const workExperiences = [
    {
      company: "Cognizant, Mumbai",
      period: "Sep 2016- July 2020",
      role: "Experince Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      
      company: "Sugee Pvt limited, Mumbai",
      period: "Sep 2020- July 2023",
      role: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      company: "Cinetstox, Mumbai",
      period: "Sep 2023",
      role: "Lead UX Designer",
      description: null,
    },
  ];

  return (
    

    
    <section className=" flex flex-col w-full max-w-7xl mx-auto items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative mt-48">
     
      <div className="inline-flex items-center justify-center gap-2.5 px-0 py-4 self-stretch relative flex-[0_0_auto]" />

       <img src={arrow2} alt="" className="absolute top-[-8%] left-[65%] " />
   <h1 className="text-[65px] mb-10 ">Our <span className="bg-gradient-to-b from-[#FF9705] from-[16%] to-[#0048FF]  bg-clip-text text-transparent">Work Experience</span></h1>

      <div className="flex flex-col lg:flex-row items-start justify-between relative self-stretch w-full flex-[0_0_auto] gap-8 lg:gap-12">
        {/* Companies Column */}
        <div className="inline-flex flex-col items-start gap-12 sm:gap-16 md:gap-20 lg:gap-24 relative flex-1 lg:flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {workExperiences.map((experience, index) => (
            <div
              key={`company-${index}`}
              className="inline-flex flex-col items-start gap-2 sm:gap-3 md:gap-3.5 relative flex-[0_0_auto]"
            >
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] tracking-[-0.30px] sm:tracking-[-0.40px] md:tracking-[-0.50px] lg:tracking-[-0.60px] leading-6 sm:leading-7 md:leading-8 lg:leading-10 break-words">
                {experience.company}
              </h3>

              <p className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-light-gray text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl tracking-[-0.20px] sm:tracking-[-0.24px] md:tracking-[-0.30px] lg:tracking-[-0.36px] leading-4 sm:leading-5 md:leading-6 break-words">
                {experience.period}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Column */}
        <div className="relative flex-[0_0_auto] h-64 sm:h-80 md:h-96 lg:h-[402px] mt-[-1.00px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] hidden lg:block">
          <img
            className="h-full w-auto object-contain"
            alt="Timeline"
            src="https://c.animaapp.com/mfogjahzUbfsFI/img/frame-11.svg"
          />
        </div>

        {/* Roles Column */}
        <div className="inline-flex flex-col items-start gap-8 sm:gap-10 md:gap-12 relative flex-1 lg:flex-[0_0_auto] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
          {workExperiences.map((experience, index) => (
            <Card
              key={`role-${index}`}
              className="inline-flex flex-col items-start gap-2 sm:gap-3 md:gap-3.5 relative flex-[0_0_auto] bg-transparent border-none shadow-none"
            >
              <CardContent className="p-0">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] tracking-[-0.30px] sm:tracking-[-0.40px] md:tracking-[-0.50px] lg:tracking-[-0.60px] leading-6 sm:leading-7 md:leading-8 lg:leading-10 break-words">
                  {experience.role}
                </h3>

                {experience.description && (
                  <p className="relative max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:w-[444px] [font-family:'Lufga-Medium',Helvetica] font-medium text-[#D9D9D9] text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.20px] sm:tracking-[-0.24px] md:tracking-[-0.27px] lg:tracking-[-0.30px] leading-5 sm:leading-6 md:leading-7 lg:leading-[normal] mt-2 sm:mt-3 md:mt-3.5 break-words">
                    {experience.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};