import { Wrench, Settings, Car, Wrench as Tools, Battery, CircleDot, CheckCircle } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Диагностика",
      description: "Компьютерная диагностика всех систем автомобиля с использованием профессионального оборудования",
      price: "От 1 500 ₽",
      features: [
        "Полная диагностика двигателя",
        "Проверка электронных систем",
        "Анализ выхлопных газов",
        "Тестирование подвески"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Ремонт двигателя",
      description: "Капитальный и частичный ремонт двигателей любой сложности. Гарантия на все работы",
      price: "От 15 000 ₽",
      features: [
        "Капитальный ремонт ДВС",
        "Замена поршневой группы",
        "Ремонт головки блока цилиндров",
        "Замена прокладок и сальников"
      ]
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Кузовной ремонт",
      description: "Восстановление геометрии кузова, покраска, устранение коррозии",
      price: "От 8 000 ₽",
      features: [
        "Устранение вмятин и царапин",
        "Покраска кузова",
        "Антикоррозийная обработка",
        "Восстановление геометрии"
      ]
    },
    {
      icon: <Tools className="h-6 w-6" />,
      title: "Техобслуживание",
      description: "Плановое ТО, замена масла, фильтров, свечей зажигания",
      price: "От 3 000 ₽",
      features: [
        "Замена масла и фильтров",
        "Проверка тормозной системы",
        "Замена свечей зажигания",
        "Проверка жидкостей"
      ]
    },
    {
      icon: <Battery className="h-6 w-6" />,
      title: "Электрика",
      description: "Ремонт электрооборудования, замена проводки, установка сигнализации",
      price: "От 2 000 ₽",
      features: [
        "Диагностика электросистем",
        "Ремонт генератора и стартера",
        "Установка сигнализации",
        "Замена проводки"
      ]
    },
    {
      icon: <CircleDot className="h-6 w-6" />,
      title: "Шиномонтаж",
      description: "Балансировка колес, замена шин, ремонт камер и покрышек",
      price: "От 800 ₽",
      features: [
        "Монтаж и демонтаж шин",
        "Балансировка колес",
        "Ремонт камер",
        "Сезонное хранение шин"
      ]
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
        
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-auto-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-auto-red rounded-full flex items-center justify-center text-white mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-auto-black">{service.title}</h3>
                      <div className="text-auto-red font-bold text-lg">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-auto-gray">{service.description}</p>
                </div>
                
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-auto-black mb-4">Что входит в услугу:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-auto-red mr-3 flex-shrink-0" />
                        <span className="text-auto-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
