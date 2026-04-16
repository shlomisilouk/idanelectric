/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Zap, 
  ShieldCheck, 
  Search, 
  FileCheck, 
  Lightbulb, 
  Car, 
  Phone, 
  MessageCircle,
  CheckCircle2,
  Menu,
  X,
  Mail,
  Instagram,
  Facebook,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const services = [
  {
    title: "איתור וטיפול בתקלות חשמל",
    icon: <Search className="w-6 h-6 text-gold" />,
    description: "אבחון מדויק ופתרון מהיר לכל תקלה במערכת החשמל הביתית או העסקית."
  },
  {
    title: "העברת ביקורת חברת חשמל",
    icon: <FileCheck className="w-6 h-6 text-gold" />,
    description: "הכנה וליווי מלא עד לקבלת אישור תקינות מחברת החשמל."
  },
  {
    title: "החלפת לוחות חשמל",
    icon: <Zap className="w-6 h-6 text-gold" />,
    description: "שדרוג והחלפת לוחות חשמל ישנים ללוחות מודרניים ובטיחותיים."
  },
  {
    title: "התקנת גופי תאורה",
    icon: <Lightbulb className="w-6 h-6 text-gold" />,
    description: "התקנה מקצועית של כל סוגי גופי התאורה, כולל תאורת חוץ ופנים."
  },
  {
    title: "עמדות טעינה לרכב חשמלי",
    icon: <Car className="w-6 h-6 text-gold" />,
    description: "התקנת עמדות טעינה ביתיות וציבוריות בהתאם לתקנים המחמירים ביותר."
  }
];

const guarantees = [
  {
    title: "לא פתרתי, לא שילמת",
    icon: <CheckCircle2 className="w-10 h-10 text-gold" />,
    description: "ביטחון מלא בתוצאה. אנחנו עומדים מאחורי המקצועיות שלנו."
  },
  {
    title: "שקיפות מלאה",
    icon: <Search className="w-10 h-10 text-gold" />,
    description: "אבחון מקצועי, הסבר מפורט והצעת מחיר קבועה לפני תחילת העבודה."
  },
  {
    title: "אחריות מלאה",
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    description: "כל עבודה מלווה באחריות מקיפה לשקט הנפשי שלך."
  }
];

const beforeAfterWorks = [
  {
    title: "שדרוג לוח חשמל",
    description: "החלפת לוח ישן ומסוכן בלוח מודרני, בטיחותי ומאורגן.",
    image: "/c5.jpeg"
  },
  {
    title: "התקנת טיימר לדוד",
    description: "מעבר לטיימר דיגיטלי חכם לשליטה מקסימלית.",
    image: "/before1.jpeg"
  },
  {
    title: "התקנת תאורת לד מעוצבת",
    description: "שיפור משמעותי במראה הבית ובצריכת האנרגיה.",
    image: "/before4.jpeg"
  },
  {
    title: "תיקון שקעים שרופים",
    description: "איתור קצר וטיפול בשקעים שהתחממו יתר על המידה.",
    image: "/before3.jpeg"
  },
  {
    title: "התקנת עמדת טעינה לרכב חשמלי",
    description: "פתרון טעינה מהיר, בטיחותי ומקצועי לרכב החשמלי שלך.",
    image: "/c6.jpeg"
  },
  {
    title: "התקנת גופי לד בפרגולה",
    description: "תאורת אווירה מעוצבת ועמידה למים לשדרוג הפרגולה והגינה.",
    image: "/c7.jpeg"
  }
];

const customerReviews = [
  { image: "/c1.jpeg" },
  { image: "/c2.jpeg" },
  { image: "/c3.jpeg" },
  { image: "/c4.jpeg" },
  { image: "/c8.jpeg" },
  { image: "/c9.jpeg" }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const reviewsScrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const scrollReviews = (direction: 'left' | 'right') => {
    if (reviewsScrollRef.current) {
      const { scrollLeft, clientWidth } = reviewsScrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      reviewsScrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-gold selection:text-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-gold/20 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex md:grid md:grid-cols-3 items-center justify-between flex-row-reverse md:flex-row relative">
          {/* Contact Info - Top Left */}
          <div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-zinc-300">
            <a href="mailto:Idanelectric1@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold" />
              <span>Idanelectric1@gmail.com</span>
            </a>
            <div className="h-4 w-[1px] bg-white/10 mx-1"></div>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/idan_sharabi/" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/search/top/?q=idan%20sharabi" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@idanelectric" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.96.5.63 1.28 1.04 2.07 1.07.9.06 1.83-.27 2.43-.94.43-.48.63-1.12.61-1.75.03-5.53.02-11.07.03-16.61z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile Floating Buttons in Header */}
          <div className="flex md:hidden items-center gap-3 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <motion.a 
              href="https://wa.me/972505745915?text=%D7%94%D7%99%D7%99%20%D7%A2%D7%99%D7%93%D7%9F%20%D7%94%D7%97%D7%A9%D7%9E%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%90%D7%95%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8."
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </motion.a>
            <motion.a 
              href="tel:0505745915"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center shadow-lg"
            >
              <Phone className="w-5 h-5 fill-current" />
            </motion.a>
          </div>

          <div className="flex items-center justify-center">
            <img src="/headline2.jpeg" alt="עידן החשמל" className="h-12 md:h-16 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 justify-end">
            <a href="#services" className="text-sm font-medium hover:text-gold transition-colors">שירותים</a>
            <a href="#reviews" className="text-sm font-medium hover:text-gold transition-colors">המלצות</a>
            <a href="#contact" className="px-5 py-2 bg-gold text-black rounded-full text-sm font-bold hover:bg-white transition-all transform hover:scale-105">
              הזמן חשמלאי
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden justify-end">
            <button 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-black border-b border-gold/20 p-6 md:hidden flex flex-col gap-4 text-center"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">שירותים</a>
            <a href="#reviews" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium py-2">המלצות</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-gold text-black py-3 rounded-lg font-bold">הזמן חשמלאי עכשיו</a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(/lightning1.jpeg)`,
            opacity: 0.7
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-8">
              <ShieldCheck className="w-4 h-4" />
              חשמלאי מוסמך | רישיון מס' 1024953
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.1]">
              עידן החשמל <br />
              <span className="text-gold">חכמים בחשמל,</span> <br />
              חזקים בשירות!
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
              דור שני של מקצוענות. ביצוע כל עבודות החשמל לבית ולעסק בשקיפות מלאה ובסטנדרט הגבוה ביותר.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <motion.a 
                href="tel:0505745915"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-gold text-black text-xl font-black rounded-2xl transition-all shadow-none border-none text-center"
              >
                הזמן חשמלאי עכשיו
              </motion.a>
              <motion.a 
                href="tel:0505745915"
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-black border-2 border-white/40 text-white text-xl font-bold rounded-2xl transition-all text-center"
              >
                לשיחת ייעוץ חינם
              </motion.a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Guarantees Section */}
      <section className="py-24 bg-black relative border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {guarantees.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="mb-6 inline-block p-4 rounded-2xl bg-gold/5 border border-gold/10 group-hover:border-gold/30 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6">ביצוע כל עבודות החשמל</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              מהתקלות הקטנות ביותר ועד לפרויקטים מורכבים - אנחנו כאן כדי לתת לכם מענה מקצועי, בטוח ומהיר.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-gold/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-black transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
            
            {/* CTA Card */}
            <div className="p-8 rounded-3xl bg-gold flex flex-col justify-center items-center text-center text-black">
              <h3 className="text-3xl font-black mb-4">זקוק לעבודה אחרת?</h3>
              <p className="text-black/80 font-medium mb-8">צרו קשר עכשיו וקבלו הצעת מחיר מותאמת אישית לכל צורך.</p>
              <button className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-zinc-800 transition-colors">
                דברו איתנו
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                העבודות שלנו
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white leading-tight"
              >
                מהפכים בשטח: <span className="text-gold">לפני ואחרי</span>
              </motion.h2>
            </div>
            <div className="flex flex-col gap-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 max-w-sm"
              >
                תמונות אמיתיות מהשטח המציגות את איכות העבודה, הבטיחות והדיוק שאנחנו מביאים לכל פרויקט.
              </motion.p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scroll('right')}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scroll('left')}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          >
            {beforeAfterWorks.map((work, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[300px] md:min-w-[450px] snap-start group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 mb-6">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 right-6 left-6">
                    <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                    <p className="text-sm text-gray-300 line-clamp-2">{work.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-24 bg-zinc-950 overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block"
              >
                לקוחות ממליצים
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-black text-white leading-tight"
              >
                מה הלקוחות שלנו <span className="text-gold">אומרים?</span>
              </motion.h2>
            </div>
            <div className="flex flex-col gap-6">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-gray-400 max-w-sm"
              >
                ההצלחה שלנו נמדדת בשביעות הרצון שלכם. הנה כמה מהתגובות שקיבלנו מלקוחות מרוצים.
              </motion.p>
              <div className="flex gap-4">
                <button 
                  onClick={() => scrollReviews('right')}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => scrollReviews('left')}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          <div 
            ref={reviewsScrollRef}
            className="flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          >
            {customerReviews.map((review, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="min-w-[280px] md:min-w-[400px] snap-start group"
              >
                <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center p-2">
                  <img 
                    src={review.image} 
                    alt="ביקורת לקוח"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 pt-24 pb-12 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2 flex flex-col items-center">
              <div className="mb-8">
                <img src="/logo1.jpeg" alt="עידן החשמל" className="h-40 md:h-56 w-auto object-contain" referrerPolicy="no-referrer" />
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed mb-6 text-center">
                אנו מחויבים למתן שירותי חשמל ברמה הגבוהה ביותר, תוך הקפדה על בטיחות, אמינות ושקיפות מלאה מול הלקוח. חשמלאי מוסמך ברישיון מלא.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-gold font-bold text-xl mb-6">צרו קשר עכשיו:</h4>
              <div className="space-y-4 mb-8 w-full flex flex-col items-center md:items-end">
                <a href="tel:0505745915" className="flex items-center justify-center md:justify-end gap-3 text-xl font-medium text-white hover:text-gold transition-colors">
                  <span>050-5745915</span>
                  <Phone className="w-6 h-6 text-gold" />
                </a>
                <a href="mailto:Idanelectric1@gmail.com" className="flex items-center justify-center md:justify-end gap-3 text-lg text-white hover:text-gold transition-colors underline decoration-gold/30 underline-offset-4">
                  <span>Idanelectric1@gmail.com</span>
                  <Mail className="w-6 h-6 text-gold" />
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-4 mb-8">
                <a href="https://www.tiktok.com/@idanelectric" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.31-.75.42-1.24 1.25-1.33 2.1-.1.7.1 1.41.53 1.96.5.63 1.28 1.04 2.07 1.07.9.06 1.83-.27 2.43-.94.43-.48.63-1.12.61-1.75.03-5.53.02-11.07.03-16.61z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/search/top/?q=idan%20sharabi" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/idan_sharabi/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-gold hover:text-black transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="text-gray-500 text-sm text-center md:text-right">
                רישיון חשמלאי מוסמך מס' 1024953
              </div>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-lg font-bold mb-6 text-white text-center">ניווט מהיר</h4>
              <ul className="space-y-4 text-gray-400 text-center">
                <li><a href="#" className="hover:text-gold transition-colors">דף הבית</a></li>
                <li><a href="#services" className="hover:text-gold transition-colors">שירותים</a></li>
                <li><a href="#reviews" className="hover:text-gold transition-colors">המלצות</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} עידן החשמל. כל הזכויות שמורות. עיצוב ופיתוח פרימיום.
          </div>
        </div>
      </footer>

      {/* Floating CTA - Desktop Only */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-50 flex-col gap-4">
        <motion.a 
          href="https://wa.me/972505745915?text=%D7%94%D7%99%D7%99%20%D7%A2%D7%99%D7%93%D7%9F%20%D7%94%D7%97%D7%A9%D7%9E%D7%9C%2C%20%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%A4%D7%A8%D7%98%D7%99%D7%9D%20%D7%90%D7%95%20%D7%94%D7%A6%D7%A2%D7%AA%20%D7%9E%D7%97%D7%99%D7%A8."
          target="_blank"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </motion.a>
        <motion.a 
          href="tel:0505745915"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center shadow-2xl hover:brightness-110 transition-all"
        >
          <Phone className="w-8 h-8 fill-current" />
        </motion.a>
      </div>
    </div>
  );
}
