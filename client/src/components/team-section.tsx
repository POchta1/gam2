import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TeamSection() {
  const team = [
    {
      name: "Александр Иванов",
      position: "Главный механик",
      experience: "20 лет",
      specialization: "Двигатели, трансмиссии",
      initials: "АИ",
      description: "Эксперт по ремонту двигателей европейских и японских автомобилей. Сертифицированный специалист BMW и Mercedes-Benz."
    },
    {
      name: "Михаил Петров",
      position: "Мастер по кузовному ремонту",
      experience: "15 лет",
      specialization: "Кузовной ремонт, покраска",
      initials: "МП",
      description: "Специалист по восстановлению кузова после ДТП. Владеет современными технологиями покраски и антикоррозийной обработки."
    },
    {
      name: "Сергей Николаев",
      position: "Электрик-диагност",
      experience: "12 лет",
      specialization: "Электрооборудование, диагностика",
      initials: "СН",
      description: "Эксперт по диагностике и ремонту электронных систем современных автомобилей. Работает с самым современным оборудованием."
    },
    {
      name: "Дмитрий Козлов",
      position: "Мастер по ходовой части",
      experience: "18 лет",
      specialization: "Подвеска, тормоза, рулевое",
      initials: "ДК",
      description: "Специалист по ремонту подвески и тормозных систем. Имеет сертификаты ведущих производителей автозапчастей."
    },
    {
      name: "Андрей Федоров",
      position: "Мастер по ТО",
      experience: "10 лет",
      specialization: "Техобслуживание, шиномонтаж",
      initials: "АФ",
      description: "Ответственный за плановое техническое обслуживание автомобилей. Качественно и быстро выполняет все виды регламентных работ."
    },
    {
      name: "Владимир Смирнов",
      position: "Мастер-приемщик",
      experience: "8 лет",
      specialization: "Консультации, оценка работ",
      initials: "ВС",
      description: "Консультирует клиентов по всем вопросам ремонта и обслуживания. Помогает выбрать оптимальный вариант решения проблем."
    }
  ];

  return (
    <section id="team" className="py-20 bg-auto-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-black mb-4">Наша команда</h2>
          <p className="text-xl text-auto-gray max-w-3xl mx-auto">
            Профессиональные мастера с многолетним опытом работы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-16 w-16 bg-auto-red text-white mr-4">
                    <AvatarFallback className="bg-auto-red text-white font-bold text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-semibold text-auto-black">{member.name}</h3>
                    <p className="text-auto-red font-medium">{member.position}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Badge variant="outline" className="border-auto-red text-auto-red mb-2">
                    Опыт: {member.experience}
                  </Badge>
                  <div className="text-sm text-auto-gray font-medium mb-2">
                    Специализация: {member.specialization}
                  </div>
                </div>
                
                <p className="text-auto-gray text-sm leading-relaxed">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}