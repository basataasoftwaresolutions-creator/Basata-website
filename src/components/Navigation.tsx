// src/components/Navigation.tsx
import { Languages, Moon, Sun, Menu, X, Home, Info, Briefcase, FolderOpen, Users, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(''); // إضافة state لتتبع الرابط النشط
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.classList.remove('menu-open');
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // دالة للتعامل مع النقر على الروابط
  const handleLinkClick = (e, href, id) => {
    e.preventDefault();
    closeMenu();
    setActiveLink(id); // تحديد الرابط النشط عند النقر

    if (id === 'home') {
      // إذا كان رابط Home
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100);
      } else {
        // التمرير إلى أعلى الصفحة (Hero section)
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    } else if (id === 'about') {
      // إذا كان رابط About Us
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const aboutSection = document.getElementById('about-us');
          if (aboutSection) {
            aboutSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const aboutSection = document.getElementById('about-us');
        if (aboutSection) {
          aboutSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else if (href.startsWith('#')) {
      // للروابط الأخرى التي تبدأ بـ #
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
      } else {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    } else {
      // للروابط العادية
      navigate(href);
    }
  };

  const navigationLinks = [
    { id: 'home', href: '#home', label: t('home'), icon: Home },
    { id: 'about', href: '#about-us', label: t('aboutUs'), icon: Info },
    { id: 'services', href: '#services', label: t('services'), icon: Briefcase },
    { id: 'projects', href: '#projects', label: t('projects'), icon: FolderOpen },
    { id: 'team', href: '#team', label: t('ourTeam'), icon: Users },
    { id: 'contact', href: '#contact', label: t('contactUs'), icon: Mail },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-lg bg-[#222323]/95 dark:bg-[#0a0a0a]/95 shadow-lg' 
          : 'backdrop-blur-md bg-[#222323]/90 dark:bg-[#0a0a0a]/90'
      } border-b border-white/10`} dir="ltr" style={{ direction: 'ltr' }}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                navigate('/');
                setActiveLink('home'); // تحديد home كرابط نشط عند الضغط على اللوجو
                setTimeout(() => {
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  });
                }, 100);
              }}
            >
              <img className="w-20 h-10 sm:w-24 sm:h-12 object-contain" src="/logo.svg" alt="Basataa Logo" />
            </motion.div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${
                    activeLink === link.id
                      ? 'text-orange font-medium' 
                      : 'text-white hover:text-orange'
                  } transition-colors relative group cursor-pointer`}
                  onClick={(e) => handleLinkClick(e, link.href, link.id)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange transition-all group-hover:w-full"></span>
                </motion.a>
              ))}
            </div>

            {/* Desktop Theme/Language Toggle */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center space-x-2 rtl:space-x-reverse"
            >
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 text-white hover:text-orange hover:bg-white/10"
                onClick={toggleLanguage}
              >
                <Languages className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 text-white hover:text-orange hover:bg-white/10"
                onClick={toggleTheme}
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
            </motion.div>

            {/* Mobile Menu Button - Three Lines Hamburger */}
            <button
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center space-y-1.5 focus:outline-none relative z-50 mr-6"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 6 : 0,
                }}
                className="w-6 h-0.5 bg-white transition-all origin-center"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                className="w-6 h-0.5 bg-white transition-all"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -6 : 0,
                }}
                className="w-6 h-0.5 bg-white transition-all origin-center"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Full Screen Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-[72px] bottom-0 bg-[#1a1a1a] dark:bg-[#0a0a0a] z-50 md:hidden overflow-y-auto overflow-x-hidden"
              style={{ height: 'calc(100vh - 72px)' }}
            >
              <div className="container mx-auto px-4 py-6 sm:py-8">
                {/* Navigation Links */}
                <nav className="space-y-2">
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 + 0.1 }}
                        className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl ${
                          activeLink === link.id
                            ? 'bg-gradient-to-r from-orange to-orange/80 text-white shadow-lg'
                            : 'text-gray-300 hover:bg-white/5 hover:text-orange'
                        } transition-all cursor-pointer`}
                        onClick={(e) => handleLinkClick(e, link.href, link.id)}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                        <span className="font-medium text-lg sm:text-xl">{link.label}</span>
                      </motion.a>
                    );
                  })}
                </nav>

                {/* Divider */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="my-6 sm:my-8 h-px bg-white/10"
                />

                {/* Bottom Actions */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-3 sm:space-y-4"
                >
                  {/* Language Toggle */}
                  <button
                    onClick={toggleLanguage}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                      <span className="font-medium text-lg sm:text-xl">{language === 'en' ? 'Language' : 'اللغة'}</span>
                    </div>
                    <span className="text-base sm:text-lg text-gray-400">{language === 'en' ? 'العربية' : 'English'}</span>
                  </button>

                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 hover:bg-white/10 text-white transition-all"
                  >
                    <div className="flex items-center gap-4">
                      {theme === 'light' ? (
                        <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                      ) : (
                        <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-orange flex-shrink-0" />
                      )}
                      <span className="font-medium text-lg sm:text-xl">{language === 'en' ? 'Theme' : 'المظهر'}</span>
                    </div>
                    <span className="text-base sm:text-lg text-gray-400">
                      {theme === 'light' ? (language === 'en' ? 'Dark' : 'داكن') : (language === 'en' ? 'Light' : 'فاتح')}
                    </span>
                  </button>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-12"
                >
                  <a href="#" className="text-gray-400 hover:text-orange transition-colors p-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange transition-colors p-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange transition-colors p-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.667.072 4.947.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.667-.014 4.947-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-orange transition-colors p-2">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </motion.div>

                {/* Bottom Decoration */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-8 sm:mt-12 flex justify-center"
                >
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-transparent via-orange to-transparent rounded-full"></div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;