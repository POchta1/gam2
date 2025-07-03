import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Star } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickStats = [
    { icon: <Star className="h-6 w-6" />, text: "15+ лет опыта" },
    { icon: <Clock className="h-6 w-6" />, text: "24/7 аварийная служба" },
    { icon: <MapPin className="h-6 w-6" />, text: "м. Автозаводская" },
  ];

  return (
    <section id="home" className="relative bg-auto-dark text-white min-h-screen flex items-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-auto-dark/80 via-auto-dark/60 to-auto-dark"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-auto-red/20 border border-auto-red rounded-full px-4 py-2 mb-4">
                <Star className="h-4 w-4 text-auto-red mr-2 fill-current" />
                <span className="text-sm font-medium text-auto-red">Рейтинг 4.9/5 на основе 500+ отзывов</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Профессиональный <span className="text-auto-red">автосервис</span> в Москве
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Качественный ремонт и обслуживание автомобилей любой сложности. 
              Опытные мастера, современное оборудование, гарантия на все работы.
              <span className="block mt-2 text-auto-red font-semibold">Работаем с 2009 года - более 15 лет безупречной репутации</span>
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                  <div className="text-auto-red mr-2">{stat.icon}</div>
                  <span className="text-sm font-medium">{stat.text}</span>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-auto-red hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Записаться на ремонт
              </Button>
              <Button
                onClick={() => scrollToSection("services")}
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold py-4 px-8 rounded-lg text-lg transition-all"
              >
                Наши услуги
              </Button>
            </motion.div>

            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Phone className="h-5 w-5 text-auto-red mr-3" />
              <div>
                <div className="text-auto-red font-semibold">Аварийная служба 24/7</div>
                <a href="tel:+74959111111" className="text-2xl font-bold hover:text-auto-red transition-colors">
                  +7 (495) 911-11-11
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="relative lg:ml-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Быстрая запись на ремонт</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg">
                  <span>Диагностика</span>
                  <span className="text-auto-red font-semibold">от 1 500 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg">
                  <span>Техобслуживание</span>
                  <span className="text-auto-red font-semibold">от 3 000 ₽</span>
                </div>
                <div className="flex justify-between items-center py-3 px-4 bg-white/10 rounded-lg">
                  <span>Ремонт двигателя</span>
                  <span className="text-auto-red font-semibold">от 15 000 ₽</span>
                </div>
              </div>
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-6 bg-auto-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg"
              >
                Узнать точную стоимость
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
