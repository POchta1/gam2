import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Александр Смирнов",
      role: "Владелец BMW X5",
      initials: "АС",
      text: "Отличный сервис! Быстро и качественно отремонтировали мою машину. Цены адекватные, мастера профессионалы своего дела.",
      rating: 5
    },
    {
      name: "Мария Петрова",
      role: "Владелец Volkswagen Polo",
      initials: "МП",
      text: "Обращаюсь сюда уже третий год. Всегда качественно, в срок, с гарантией. Рекомендую всем друзьям и знакомым!",
      rating: 5
    },
    {
      name: "Дмитрий Иванов",
      role: "Владелец Toyota Camry",
      initials: "ДИ",
      text: "Профессиональный подход к работе. Честно объяснили, что нужно делать, а что можно отложить. Очень доволен результатом!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-auto-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-black mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-auto-gray max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex text-auto-red">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-auto-gray mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 bg-auto-red text-white">
                    <AvatarFallback className="bg-auto-red text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <div className="font-semibold text-auto-black">{testimonial.name}</div>
                    <div className="text-sm text-auto-gray">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
