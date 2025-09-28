// src/components/ContactForm.tsx
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  User, 
  MapPin, 
  Calendar, 
  DollarSign, 
  FileText, 
  Gift, 
  CreditCard, 
  Shield,
  Smartphone,
  ChevronDown,
  Send,
  Lock,
  HelpCircle,
  CheckCircle
} from "lucide-react";

const ContactForm = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    timeline: '',
    budget: '',
    description: '',
    discountCode: '',
    paymentMethod: 'card',
    cardNumber: '',
    expirationDate: '',
    securityCode: '',
    nameOnCard: '',
    phoneNumber: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    'Egypt', 'Saudi Arabia', 'UAE', 'Kuwait', 'Qatar', 
    'Jordan', 'Lebanon', 'Morocco', 'Tunisia', 'Algeria', 'Other'
  ];

  const timelines = [
    { value: '1week', label: t('timeline1Week') },
    { value: '2weeks', label: t('timeline2Weeks') },
    { value: '1month', label: t('timeline1Month') },
    { value: '2months', label: t('timeline2Months') },
    { value: '3months', label: t('timeline3Months') }
  ];

  const budgets = [
    { value: '500', label: t('budget500') },
    { value: '1000', label: t('budget1000') },
    { value: '2500', label: t('budget2500') },
    { value: '5000', label: t('budget5000') },
    { value: '10000', label: t('budget10000') }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact-form" 
      className="pt-32 pb-20 bg-background relative overflow-hidden" 
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={language}
            className="flex flex-col lg:flex-row gap-12 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Form Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 w-full"
            >
              {/* Header */}
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-orange-light dark:bg-orange/20 rounded-full mb-6">
                  <span className="text-sm font-medium text-orange">
                    {t("contactFormSubtitle")}
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
                  {t("contactFormTitle")}
                </h2>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t("contactFormDescription")}
                </p>

                {/* Decorative Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-orange to-orange/20 rounded-full mt-6"></div>
              </div>

              {/* Success Message */}
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 
                    rounded-3xl p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {language === 'ar' ? 'تم الإرسال بنجاح!' : 'Successfully Sent!'}
                  </h3>
                  <p className="text-green-600/80 dark:text-green-400/80">
                    {language === 'ar' 
                      ? 'سنتواصل معك خلال 24 ساعة'
                      : 'We will contact you within 24 hours'
                    }
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Full Name */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <User className="w-5 h-5 text-orange" />
                      {t('fullName')}
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        placeholder={t('firstName')}
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                          bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                          transition-all duration-300 placeholder:text-muted-foreground
                          hover:border-orange/50"
                        required
                      />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        placeholder={t('lastName')}
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                          bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                          transition-all duration-300 placeholder:text-muted-foreground
                          hover:border-orange/50"
                        required
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <Mail className="w-5 h-5 text-orange" />
                      {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني...' : 'Enter your email...'}
                      className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                        bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-300 placeholder:text-muted-foreground
                        hover:border-orange/50"
                      required
                    />
                  </div>

                  {/* Country */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <MapPin className="w-5 h-5 text-orange" />
                      {t('yourCountry')}
                    </label>
                    <div className="relative">
                      <select
                        title="Country" 
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                          bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                          transition-all duration-300 appearance-none cursor-pointer
                          hover:border-orange/50"
                        required
                      >
                        <option value="">{t('selectCountry')}</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none`} />
                    </div>
                  </div>

                  {/* Timeline & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Timeline */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-foreground font-medium">
                        <Calendar className="w-5 h-5 text-orange" />
                        {t('requiredDateline')}
                      </label>
                      <div className="relative">
                        <select
                          title="Timeline"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange('timeline', e.target.value)}
                          className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                            bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                            transition-all duration-300 appearance-none cursor-pointer
                            hover:border-orange/50"
                          required
                        >
                          <option value="">{t('chooseDateline')}</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>{timeline.label}</option>
                          ))}
                        </select>
                        <ChevronDown className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none`} />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-4">
                      <label className="flex items-center gap-2 text-foreground font-medium">
                        <DollarSign className="w-5 h-5 text-orange" />
                        {t('expectedBudget')}
                      </label>
                      <div className="relative">
                        <select
                          title="Budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                            bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                            transition-all duration-300 appearance-none cursor-pointer
                            hover:border-orange/50"
                          required
                        >
                          <option value="">{t('chooseBudget')}</option>
                          {budgets.map((budget) => (
                            <option key={budget.value} value={budget.value}>{budget.label}</option>
                          ))}
                        </select>
                        <ChevronDown className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none`} />
                      </div>
                    </div>
                  </div>

                  {/* Service Description */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <FileText className="w-5 h-5 text-orange" />
                      {t('serviceDescription')}
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01 }}
                      rows={6}
                      placeholder={t('serviceDescriptionPlaceholder')}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                        bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-300 placeholder:text-muted-foreground resize-none
                        hover:border-orange/50"
                      required
                    />
                  </div>

                  {/* Discount Code */}
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 text-foreground font-medium">
                      <Gift className="w-5 h-5 text-orange" />
                      {t('discountCode')} <span className="text-muted-foreground text-sm">{t('discountCodeOptional')}</span>
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      placeholder={t('discountCodePlaceholder')}
                      value={formData.discountCode}
                      onChange={(e) => handleInputChange('discountCode', e.target.value)}
                      className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                        bg-card focus:border-orange focus:ring-2 focus:ring-orange/20
                        transition-all duration-300 placeholder:text-muted-foreground
                        hover:border-orange/50"
                    />
                  </div>

                  {/* Payment Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-card p-8 rounded-3xl border border-gray-200/50 dark:border-gray-700/50 
                      space-y-6 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <Shield className="w-6 h-6 text-orange" />
                      <h3 className="text-2xl font-bold text-foreground font-poppins">{t('paymentTitle')}</h3>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-6 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-green-500" />
                      {t('paymentSecure')}
                    </p>

                    {/* Payment Method Toggle */}
                    <div className="space-y-4">
                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        onClick={() => handleInputChange('paymentMethod', 'card')}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === 'card' 
                            ? 'border-orange bg-orange/5 shadow-md' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-orange/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.paymentMethod === 'card' 
                              ? 'border-orange bg-orange' 
                              : 'border-gray-300'
                          }`}>
                            {formData.paymentMethod === 'card' && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-white rounded-full"
                              />
                            )}
                          </div>
                          <CreditCard className="w-5 h-5 text-orange" />
                          <span className="font-medium text-foreground">{t('payWithCard')}</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        whileHover={{ scale: 1.01 }}
                        onClick={() => handleInputChange('paymentMethod', 'wallet')}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.paymentMethod === 'wallet' 
                            ? 'border-orange bg-orange/5 shadow-md' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-orange/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.paymentMethod === 'wallet' 
                              ? 'border-orange bg-orange' 
                              : 'border-gray-300'
                          }`}>
                            {formData.paymentMethod === 'wallet' && (
                              <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 bg-white rounded-full"
                              />
                            )}
                          </div>
                          <Smartphone className="w-5 h-5 text-orange" />
                          <span className="font-medium text-foreground">{t('electronicWallets')}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Card Payment Fields */}
                    <AnimatePresence mode="wait">
                      {formData.paymentMethod === 'card' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          {/* Card Number */}
                          <div className="relative">
                            <input
                              type="text"
                              placeholder={t('cardNumber')}
                              value={formData.cardNumber}
                              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                              className="w-full p-4 pr-12 rounded-2xl border border-gray-200 dark:border-gray-700 
                                bg-background focus:border-orange focus:ring-2 focus:ring-orange/20
                                transition-all duration-300 placeholder:text-muted-foreground
                                hover:border-orange/50"
                              maxLength={19}
                            />
                            <Lock className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground`} />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {/* Expiration Date */}
                            <input
                              type="text"
                              placeholder={t('expirationDate')}
                              value={formData.expirationDate}
                              onChange={(e) => handleInputChange('expirationDate', e.target.value)}
                              className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                                bg-background focus:border-orange focus:ring-2 focus:ring-orange/20
                                transition-all duration-300 placeholder:text-muted-foreground
                                hover:border-orange/50"
                              maxLength={5}
                            />

                            {/* Security Code */}
                            <div className="relative">
                              <input
                                type="text"
                                placeholder={t('securityCode')}
                                value={formData.securityCode}
                                onChange={(e) => handleInputChange('securityCode', e.target.value)}
                                className="w-full p-4 pr-12 rounded-2xl border border-gray-200 dark:border-gray-700 
                                  bg-background focus:border-orange focus:ring-2 focus:ring-orange/20
                                  transition-all duration-300 placeholder:text-muted-foreground
                                  hover:border-orange/50"
                                maxLength={4}
                              />
                              <HelpCircle className={`absolute ${language === 'ar' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground`} />
                            </div>
                          </div>

                          {/* Name on Card */}
                          <input
                            type="text"
                            placeholder={t('nameOnCard')}
                            value={formData.nameOnCard}
                            onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                            className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                              bg-background focus:border-orange focus:ring-2 focus:ring-orange/20
                              transition-all duration-300 placeholder:text-muted-foreground
                              hover:border-orange/50"
                          />
                        </motion.div>
                      )}

                      {/* Wallet Payment Fields */}
                      {formData.paymentMethod === 'wallet' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          <input
                            type="tel"
                            placeholder={t('phoneNumber')}
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            className="w-full p-4 rounded-2xl border border-gray-200 dark:border-gray-700 
                              bg-background focus:border-orange focus:ring-2 focus:ring-orange/20
                              transition-all duration-300 placeholder:text-muted-foreground
                              hover:border-orange/50"
                            required={formData.paymentMethod === 'wallet'}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-8 bg-gradient-to-r from-orange to-orange/80 
                      text-white font-bold text-lg rounded-2xl font-poppins
                      hover:shadow-xl hover:shadow-orange/25 
                      transition-all duration-300
                      flex items-center justify-center gap-3
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                    {t('sendService')}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex-1 relative w-full lg:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10">
                <img
                  src="../../public/SVG/amico.svg"
                  alt="Contact Us"
                  className="w-full h-[800px] object-contain"
                />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-orange/30 to-orange/10 rounded-2xl blur-md"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-20 left-10 w-12 h-12 bg-gradient-to-br from-blue-500/30 to-blue-500/10 rounded-full blur-md"
              ></motion.div>

              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 right-20 w-8 h-8 bg-gradient-to-br from-purple-500/30 to-purple-500/10 rounded-full blur-sm"
              ></motion.div>

              {/* Additional Decorative Elements */}
              <motion.div
                animate={{ 
                  x: [0, 5, 0],
                  y: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/3 left-5 w-6 h-6 bg-gradient-to-br from-green-500/20 to-green-500/5 rounded-lg blur-sm"
              ></motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">
              {language === 'ar' ? 'لماذا تختار بساطة؟' : 'Why Choose Basataa?'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  icon: Shield,
                  titleEn: 'Secure & Reliable',
                  titleAr: 'آمن وموثوق',
                  descEn: '100% secure transactions with encrypted data',
                  descAr: 'معاملات آمنة 100% مع بيانات مشفرة'
                },
                {
                  icon: CheckCircle,
                  titleEn: 'Quality Guaranteed',
                  titleAr: 'جودة مضمونة',
                  descEn: 'High-quality work delivered on time',
                  descAr: 'عمل عالي الجودة يتم تسليمه في الوقت المحدد'
                },
                {
                  icon: Smartphone,
                  titleEn: '24/7 Support',
                  titleAr: 'دعم 24/7',
                  descEn: 'Round-the-clock customer support',
                  descAr: 'دعم عملاء على مدار الساعة'
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + (index * 0.1) }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange/20 to-orange/10 
                      rounded-2xl flex items-center justify-center mx-auto mb-4
                      hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-orange" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">
                      {language === 'ar' ? item.titleAr : item.titleEn}
                    </h4>
                    <p className="text-muted-foreground">
                      {language === 'ar' ? item.descAr : item.descEn}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;