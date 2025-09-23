// src/contexts/LanguageContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    // Navigation
    home: 'Home',
    aboutUs: 'About Us',
    services: 'Services',
    projects: 'Projects',
    ourTeam: 'Our Team',
    contactUs: 'Contact Us',
    
    // Hero
    heroTitle: 'We innovate, develop, and elevate your ideas to a new',
    heroTitleHighlight: 'level of professionalism.',
    heroSubtitle: 'We specialize in:',
    
    // Stats
    project: 'Projects',
    rating: 'Ratings',
    work: 'Works',
    service: 'Services',
    
    // About
    aboutTitle: 'What you need to know',
    aboutDescription1: 'We are not just another tech company — we are your growth partner.',
    aboutDescription2: "Here's what makes us the right choice for your next project:",
    aboutDescription3: 'Experienced Team: We bring years of expertise in web development, mobile apps, and UI/UX design.',
    aboutDescription4: 'Tailored Solutions: We listen to your needs and build customized solutions just for you.',
    aboutDescription5: 'Commitment to Quality: We deliver fast, but we never compromise on quality.',
    aboutDescription6: 'Long-Term Support: We believe in building long-lasting partnerships, not just projects.',
    aboutDescription7: "Let's create something great together.",
    
    // Footer
    footerDescription: 'We innovate, develop, and elevate your ideas to a new level of professionalism.',
    pages: 'Pages',
    social: 'Social',
    rights: '© 2022 Basataa. All rights reserved.',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    aboutUs: 'من نحن',
    services: 'الخدمات',
    projects: 'المشاريع',
    ourTeam: 'فريقنا',
    contactUs: 'تواصل معنا',
    
    // Hero
    heroTitle: 'نحن نبتكر ونطور ونرتقي بأفكارك إلى',
    heroTitleHighlight: 'مستوى جديد من الاحترافية.',
    heroSubtitle: 'نحن متخصصون في : ',
    
    // Stats
    project: 'مشروع',
    rating: 'تقييم',
    work: 'عمل',
    service: 'خدمة',
    
    // About
    aboutTitle: 'ما تحتاج إلى معرفته',
    aboutDescription1: 'نحن لسنا مجرد شركة تقنية أخرى — نحن شريكك في النمو.',
    aboutDescription2: 'إليك ما يجعلنا الخيار الصحيح لمشروعك القادم:',
    aboutDescription3: 'فريق ذو خبرة: نجلب سنوات من الخبرة في تطوير الويب وتطبيقات الجوال وتصميم واجهة المستخدم.',
    aboutDescription4: 'حلول مخصصة: نستمع إلى احتياجاتك ونبني حلولاً مخصصة لك فقط.',
    aboutDescription5: 'الالتزام بالجودة: نقدم بسرعة، لكننا لا نتنازل أبدًا عن الجودة.',
    aboutDescription6: 'الدعم طويل المدى: نؤمن ببناء شراكات طويلة الأمد، وليس مجرد مشاريع.',
    aboutDescription7: 'دعنا نصنع شيئًا رائعًا معًا.',
    
    // Footer
    footerDescription: 'نحن نبتكر ونطور ونرتقي بأفكارك إلى مستوى جديد من الاحترافية.',
    pages: 'الصفحات',
    social: 'التواصل الاجتماعي',
    rights: '© 2022 بساطة. جميع الحقوق محفوظة.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};