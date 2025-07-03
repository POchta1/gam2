export default function AboutSection() {
  const stats = [
    { number: "15+", label: "Лет опыта" },
    { number: "5000+", label: "Довольных клиентов" },
    { number: "24/7", label: "Аварийная служба" },
    { number: "100%", label: "Гарантия качества" }
  ];

  return (
    <section id="about" className="py-20 bg-auto-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нашей мастерской</h2>
            <p className="text-xl text-gray-300 mb-6">
              Мы работаем в сфере автомобильного ремонта уже более 15 лет. 
              Наша команда состоит из высококвалифицированных специалистов, 
              которые постоянно совершенствуют свои навыки.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-auto-red mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional mechanics working on car engine" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
