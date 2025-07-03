import { Facebook, Instagram } from "lucide-react";
import { SiVk } from "react-icons/si";

export default function Footer() {
  const services = [
    "Диагностика",
    "Ремонт двигателя",
    "Кузовной ремонт",
    "Техобслуживание",
    "Электрика",
    "Шиномонтаж"
  ];

  const information = [
    "О нас",
    "Гарантии",
    "Цены",
    "Вакансии",
    "Отзывы"
  ];

  return (
    <footer className="bg-auto-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-auto-red mb-4">ПрофАвто</h3>
            <p className="text-gray-300 mb-4">
              Профессиональный автосервис с 15-летним опытом работы.
              Качество, надежность, гарантия.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-auto-red transition-colors">
                <SiVk className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="text-gray-300 space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-auto-red transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Информация</h4>
            <ul className="text-gray-300 space-y-2">
              {information.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-auto-red transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="text-gray-300 space-y-2">
              <div>ул. Автомобильная, 123</div>
              <div>г. Москва</div>
              <div>+7 (495) 123-45-67</div>
              <div>info@profavto.ru</div>
              <div className="mt-4">
                <div className="text-auto-red font-semibold">Аварийная служба:</div>
                <div>+7 (495) 911-11-11</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; 2024 ПрофАвто. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
