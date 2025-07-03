import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Settings, Car, Wrench as Tools, Battery, CircleDot } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="h-10 w-10" />,
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля с использованием профессионального оборудования",
      price: "От 1 500 ₽"
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Ремонт двигателя",
      description: "Капитальный и частичный ремонт двигателей любой сложности. Гарантия на все работы",
      price: "От 15 000 ₽"
    },
    {
      icon: <Car className="h-10 w-10" />,
      title: "Кузовной ремонт",
      description: "Восстановление геометрии кузова, покраска, устранение коррозии",
      price: "От 8 000 ₽"
    },
    {
      icon: <Tools className="h-10 w-10" />,
      title: "Техобслуживание",
      description: "Плановое ТО, замена масла, фильтров, свечей зажигания",
      price: "От 3 000 ₽"
    },
    {
      icon: <Battery className="h-10 w-10" />,
      title: "Электрика",
      description: "Ремонт электрооборудования, замена проводки, установка сигнализации",
      price: "От 2 000 ₽"
    },
    {
      icon: <CircleDot className="h-10 w-10" />,
      title: "Шиномонтаж",
      description: "Балансировка колес, замена шин, ремонт камер и покрышек",
      price: "От 800 ₽"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-black mb-4">Наши услуги</h2>
          <p className="text-xl text-auto-gray max-w-3xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-auto-light hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-auto-red mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-auto-black mb-3">{service.title}</h3>
                <p className="text-auto-gray mb-4">{service.description}</p>
                <div className="text-auto-red font-semibold">{service.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
