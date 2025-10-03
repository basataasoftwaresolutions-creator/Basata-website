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
    
    // Services
    servicesTitle: 'What we do?',
    servicesSubtitle: 'Services',
    mobileApps: 'Mobile Apps',
    mobileAppsDescription: 'We create innovative and user-friendly mobile applications for iOS and Android platforms, designed to meet your business needs and provide exceptional user experiences.',
    uiUxDesign: 'UI UX Design',
    uiUxDesignDescription: 'Our design team crafts beautiful, intuitive, and user-centered interfaces that not only look great but also provide seamless user experiences across all devices.',
    webDevelopment: 'Web Development',
    webDevelopmentDescription: 'We build modern, responsive, and scalable websites and web applications using the latest technologies to help your business thrive in the digital world.',
    fullProject: 'Full Project',
    fullProjectDescription: 'From concept to deployment, we handle complete project development including planning, design, development, testing, and maintenance to deliver comprehensive solutions.',

     // Contact Form
    contactFormTitle: 'Get in Touch',
    contactFormSubtitle: 'Contact Us',
    contactFormDescription: 'Ready to start your project? Fill out the form and we\'ll get back to you within 24 hours.',
    
    // Form Fields
    fullName: 'Full Name',
    firstName: 'First name...',
    lastName: 'Last name...',
    yourCountry: 'Your Country',
    selectCountry: 'Select your country',
    requiredDateline: 'Required Timeline',
    chooseDateline: 'Choose timeline',
    expectedBudget: 'Expected Budget',
    chooseBudget: 'Choose budget',
    serviceDescription: 'Service Description',
    serviceDescriptionPlaceholder: 'Enter the details of the required service...',
    discountCode: 'Your Discount Code',
    discountCodeOptional: '(if you have)',
    discountCodePlaceholder: 'Enter the discount code',
    
    // Payment
    paymentTitle: 'Payment',
    paymentSecure: 'All transactions are secure and encrypted.',
    payWithCard: 'Pay with Card, Wallet',
    cardNumber: 'Card number',
    expirationDate: 'Expiration date (MM / YY)',
    securityCode: 'Security code',
    nameOnCard: 'Name on card',
    electronicWallets: 'Electronic wallets (Orange cash, Vodafone cash...)',
    phoneNumber: 'Enter your phone number',
    sendService: 'Send your service',
    
    // Timeline Options
    timeline1Week: '1 Week',
    timeline2Weeks: '2 Weeks',
    timeline1Month: '1 Month',
    timeline2Months: '2 Months',
    timeline3Months: '3+ Months',
    
    // Budget Options
    budget500: 'Under $500',
    budget1000: '$500 - $1,000',
    budget2500: '$1,000 - $2,500',
    budget5000: '$2,500 - $5,000',
    budget10000: '$5,000+',

    // Testimonials
    testimonialTitle: "Testimonial",
    testimonialSubtitle: "Our Client Feedback",
    testimonialFeedback: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines. We've received numerous compliments on the new site, and it's easier for customers to navigate. I can confidently say we'll be working with them again in the future.\"\"",
    
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
    
    // Services
    servicesTitle: 'اى اللى بنقدمهولك ؟',
    servicesSubtitle: 'خدمتنا',
    mobileApps: 'تطبيقات الجوال',
    mobileAppsDescription: 'نقوم بإنشاء تطبيقات جوال مبتكرة وسهلة الاستخدام لمنصات iOS و Android، مصممة لتلبية احتياجات عملك وتوفير تجارب مستخدم استثنائية.',
    uiUxDesign: 'تصميم واجهة المستخدم',
    uiUxDesignDescription: 'فريق التصميم لدينا يصنع واجهات جميلة وبديهية ومتمركزة حول المستخدم والتي لا تبدو رائعة فحسب، بل توفر أيضًا تجارب مستخدم سلسة عبر جميع الأجهزة.',
    webDevelopment: 'تطوير الويب',
    webDevelopmentDescription: 'نبني مواقع ويب وتطبيقات ويب حديثة ومتجاوبة وقابلة للتطوير باستخدام أحدث التقنيات لمساعدة عملك على النجاح في العالم الرقمي.',
    fullProject: 'مشروع متكامل',
    fullProjectDescription: 'من المفهوم إلى النشر، نتعامل مع تطوير المشروع الكامل بما في ذلك التخطيط والتصميم والتطوير والاختبار والصيانة لتقديم حلول شاملة.',

     // Contact Form
    contactFormTitle: 'تواصل معنا',
    contactFormSubtitle: 'اتصل بنا',
    contactFormDescription: 'مستعد لبدء مشروعك؟ املأ النموذج وسنتواصل معك خلال 24 ساعة.',
    
    // Form Fields
    fullName: 'الاسم الكامل',
    firstName: 'الاسم الأول...',
    lastName: 'اسم العائلة...',
    yourCountry: 'بلدك',
    selectCountry: 'اختر بلدك',
    requiredDateline: 'الجدول الزمني المطلوب',
    chooseDateline: 'اختر الجدول الزمني',
    expectedBudget: 'الميزانية المتوقعة',
    chooseBudget: 'اختر الميزانية',
    serviceDescription: 'وصف الخدمة',
    serviceDescriptionPlaceholder: 'أدخل تفاصيل الخدمة المطلوبة...',
    discountCode: 'كود الخصم',
    discountCodeOptional: '(إن وجد)',
    discountCodePlaceholder: 'أدخل كود الخصم',
    
    // Payment
    paymentTitle: 'الدفع',
    paymentSecure: 'جميع المعاملات آمنة ومشفرة.',
    payWithCard: 'الدفع بالكارت أو المحفظة',
    cardNumber: 'رقم الكارت',
    expirationDate: 'تاريخ الانتهاء (شهر / سنة)',
    securityCode: 'كود الأمان',
    nameOnCard: 'الاسم على الكارت',
    electronicWallets: 'المحافظ الإلكترونية (أورانج كاش، فودافون كاش...)',
    phoneNumber: 'أدخل رقم هاتفك',
    sendService: 'إرسال طلب الخدمة',
    
    // Timeline Options
    timeline1Week: 'أسبوع واحد',
    timeline2Weeks: 'أسبوعين',
    timeline1Month: 'شهر واحد',
    timeline2Months: 'شهرين',
    timeline3Months: '3+ أشهر',
    
    // Budget Options
    budget500: 'أقل من 500$',
    budget1000: '500$ - 1,000$',
    budget2500: '1,000$ - 2,500$',
    budget5000: '2,500$ - 5,000$',
    budget10000: '5,000$+',

    // Testimonials
    testimonialTitle: "الاراء",
    testimonialSubtitle: "نبذه عن اراء عملائنا وتقيماتهم",

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