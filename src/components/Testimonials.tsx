import { Avatar, AvatarFallback } from "../components/ui/avatar";
import Divider from "./Divider";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

export const Testimonials = (): JSX.Element => {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
   <>
   <Divider />
    <section className="flex flex-col w-full items-center gap-16 py-48 bg-[#FEFDFB] dark:bg-[#1E1E1E] relative overflow-x-clip"  dir="ltr"
      style={{ direction: 'ltr' }}>
      <header className="flex flex-col items-center gap-2 translate-y-[-1rem] relative mt-20">
        <div className="w-[129px] h-[129px] bg-gradient-orange/25 dark:bg-gradient-orange rounded-[64.5px] absolute top-[-76%] left-[26%] -z-10" />
    
        <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#222323] dark:text-white text-2xl tracking-[0] leading-[normal]">
          {t('testimonialTitle')}
        </h3>

        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#222323] dark:text-white text-5xl text-center tracking-[0] leading-[normal]">
          {t('testimonialSubtitle')}
        </h2>
      </header>

      <div className="relative w-[70%] md:w-[80%] px-[300px] h-[720px] dark:bg-testimonials-dark-bg overflow-hidden translate-y-[-1rem] z-10">
        <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 w-[392px] h-[816px] bg-gradient-to-b from-[#FF9705] to-[#0048FF] dark:bg-gradient-orange" />

        <img
          className="absolute top-[81px] left-1/2 transform -translate-x-1/2 w-[99px] h-[72px]"
          alt="Quotes"
          src="https://c.animaapp.com/mfogjahzUbfsFI/img/quotes.svg"
        />

        <div className="flex items-center gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-6xl w-full px-8">
          <div className="relative w-[402px] h-[448px] bg-white rounded-xl overflow-hidden flex-shrink-0 translate-y-[-1rem]   md:block hidden">
            <img
              className="w-full h-full object-cover"
              alt="Men"
              src="/public/test_placeholder.png"
            />
          </div>

          <div className="flex-1  max-w-[450px] md:max-w-[618px] bg-white rounded-xl shadow-[0px_0px_20px_#0000000d] translate-y-[-1rem]   ">
            <div className="p-8 ">
              <div className="flex items-start gap-6 mb-4">
                <div className="w-0.5 h-full bg-orange flex-shrink-0" />

                <div className="flex flex-col gap-4 flex-1 pl-[24px] border-l-2 border-l-gradient-orange">
                  <div className="flex items-center gap-4">
                    <img
                      className="flex-shrink-0"
                      alt="Rating"
                      src="/public/rating.png"
                    />

                    <span className="[font-family:'Inter',Helvetica] font-semibold text-black text-lg leading-6">
                      4/5
                    </span>
                  </div>

                  <blockquote className="[font-family:'DM_Sans',Helvetica] font-normal text-black text-lg tracking-[0] leading-6">
                    The team took time to understand our vision and delivered a
                    sleek, professional site that not only looks great but also
                    improved our conversion rates. Their design process was
                    smooth, communication was clear, and they met all deadlines.
                    We&apos;ve received numerous compliments on the new site,
                    and it&apos;s easier for customers to navigate. I can
                    confidently say we&apos;ll be working with them again in the
                    future.&quot;
                  </blockquote>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-6 mt-6">
                <Avatar className="w-8 h-8 bg-gradient-orange">
                  <AvatarFallback className="bg-gradient-orange text-white [font-family:'Inter',Helvetica] font-semibold text-sm">
                    ES
                  </AvatarFallback>
                </Avatar>

                <span className="[font-family:'Inter',Helvetica] font-semibold text-testimonials-dark-bg text-lg tracking-[0] leading-[30px]">
                  Emmanuel S
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] left-[5%]">
        <img src="/public/Deco-img-arrow.png" alt="" />
      </div>
      <div className="absolute top-[42%] right-[-11%] ">
        <img src="/public/test-circle.png" alt="" />
      </div>
    </section>
   </>
  );
};