// src/components/Footer.tsx
import { Github, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#222323] dark:bg-[#0a0a0a] border-t border-white/10 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-6">
              <img className="w-24 h-12" src="/logo.svg" alt="Basataa Logo" />
            </div>
            <p className="text-gray-400 leading-relaxed">
              {t('footerDescription')}
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-orange font-semibold text-lg mb-6">{t('pages')}</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-orange transition-colors">{t('home')}</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-orange transition-colors">{t('aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">{t('services')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">{t('projects')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">{t('contactUs')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-orange font-semibold text-lg mb-6">{t('services')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">UI UX Design</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">Website</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange transition-colors">Full Project</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-orange font-semibold text-lg mb-6">{t('social')}</h3>
            
            {/* Alternative Social Links List */}
            <ul className="space-y-3 mt-6">
              <li className="flex gap-3"><a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a><a href="#" className="text-gray-400 hover:text-orange transition-colors mt-2">Twitter</a></li>
              <li className="flex gap-3"><a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a><a href="#" className="text-gray-400 hover:text-orange transition-colors mt-2">LinkedIn</a></li>
              
              <li className="flex gap-3"><a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a><a href="#" className="text-gray-400 hover:text-orange transition-colors mt-2">Facebook</a></li>
              
              <li className="flex gap-3">
                 <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a><a href="#" className="text-gray-400 hover:text-orange transition-colors mt-2">Instagram</a></li>
              
              <li className="flex gap-3"><a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:bg-orange hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange transition-colors mt-2">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t('rights')}
          </p>
          
          {/* Social Icons in Bottom */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-orange transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;