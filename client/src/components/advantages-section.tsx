import { Shield, Clock, Award, Users, Wrench, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Гарантия качества",
      description: "Письменная гарантия на все виды работ от 6 месяцев до 2 лет. Используем только оригинальные запчасти.",
      color: "bg-auto-red"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Экономим ваше время",
      description: "Быстрая диагностика, четкие сроки выполнения работ. Аварийная служба работает круглосуточно.",
      color: "bg-auto-dark"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Сертифицированные мастера",
      description: "Все специалисты имеют профильное образование и регулярно проходят курсы повышения квалификации.",
      color: "bg-auto-red"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Индивидуальный подход",
      description: "Персональный менеджер для каждого клиента. Подберем оптимальное решение под ваш бюджет.",
      color: "bg-auto-gray"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Современное оборудование",
      description: "Используем диагностическое оборудование последнего поколения и профессиональный инструмент.",
      color: "bg-auto-dark"
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Удобная оплата",
      description: "Принимаем наличные, банковские карты, безналичный расчет. Возможна рассрочка на крупные работы.",
      color: "bg-auto-gray"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-auto-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-black mb-4">
            Почему выбирают именно нас?
          </h2>
          <p className="text-xl text-auto-gray max-w-3xl mx-auto">
            Мы предлагаем полный комплекс услуг с гарантией качества и конкурентными ценами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-auto-red">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${advantage.color} rounded-full flex items-center justify-center text-white mb-4 mx-auto`}>
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold text-auto-black mb-3 text-center">
                  {advantage.title}
                </h3>
                <p className="text-auto-gray text-center leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-auto-red text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Бесплатная диагностика при ремонте!</h3>
          <p className="text-lg mb-6">
            При заказе любого ремонта стоимостью от 10 000 ₽ - диагностика в подарок. 
            Акция действует до конца месяца!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>Экономия 1 500 ₽</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              <span>Гарантия результата</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}