import { useLanguage } from "@/contexts/LanguageContext"

const Divider = () => {
  const { language } = useLanguage();
  
  return (
    <div className="w-full bg-[#0048FF] h-[200px] flex items-center justify-center">
      <p className={`[font-family:Poppins,sans-serif] font-medium text-[64px] tracking-[-1.5%] text-center text-white transition-opacity duration-300 ${
        language === 'ar' ? 'opacity-100' : 'opacity-0'
      }`}>
        وصلت لكود الخصم على صفحاتنا ؟
      </p>
    </div>
  )
}

export default Divider