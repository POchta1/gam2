import { MapPin, Phone, Mail, Clock } from "lucide-react";
import BookingForm from "./booking-form";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Адрес",
      content: "ул. Автомобильная, 123, г. Москва"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Телефон",
      content: "+7 (495) 123-45-67"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "info@profavto.ru"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Часы работы",
      content: "Пн-Пт: 8:00 - 20:00\nСб-Вс: 9:00 - 18:00"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-auto-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Запишитесь на ремонт или получите консультацию
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-auto-red rounded-full flex items-center justify-center flex-shrink-0">
                    {info.icon}
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold">{info.title}</div>
                    <div className="text-gray-300 whitespace-pre-line">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Аварийная служба 24/7</h4>
              <div className="text-auto-red text-2xl font-bold">+7 (495) 911-11-11</div>
            </div>
          </div>
          
          <div className="bg-auto-light p-8 rounded-lg">
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
