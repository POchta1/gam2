import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-auto-dark text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Профессиональный <span className="text-auto-red">автосервис</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Качественный ремонт и обслуживание автомобилей любой сложности. 
            Опытные мастера, современное оборудование, гарантия на все работы.
            Работаем с 2009 года - более 15 лет безупречной репутации.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-auto-red hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg text-lg"
            >
              Записаться на ремонт
            </Button>
            <Button
              onClick={() => scrollToSection("services")}
              variant="outline"
              className="border-2 border-white hover:bg-white hover:text-auto-dark text-white font-semibold py-4 px-8 rounded-lg text-lg"
            >
              Наши услуги
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
