import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Главная", href: "home" },
    { label: "О нас", href: "about" },
    { label: "Команда", href: "team" },
    { label: "Галерея", href: "gallery" },
    { label: "Контакты", href: "contact" },
  ];

  const services = [
    { label: "Диагностика", href: "services" },
    { label: "Ремонт двигателя", href: "services" },
    { label: "Кузовной ремонт", href: "services" },
    { label: "Техобслуживание", href: "services" },
    { label: "Электрика", href: "services" },
    { label: "Шиномонтаж", href: "services" },
  ];

  return (
    <header className="bg-auto-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-auto-red">ПрофАвто</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="hover:text-auto-red px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-auto-red px-3 py-2 text-sm font-medium transition-colors flex items-center"
                >
                  Услуги
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
                    <div className="py-2">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(service.href)}
                          className="block w-full text-left px-4 py-2 text-sm text-auto-black hover:bg-auto-light hover:text-auto-red transition-colors"
                        >
                          {service.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </nav>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white hover:text-auto-red">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-auto-black text-white border-auto-gray">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="text-left hover:text-auto-red px-3 py-2 text-lg font-medium transition-colors"
                    >
                      {item.label}
                    </button>
                  ))}
                  
                  <div className="border-t border-auto-gray pt-4 mt-4">
                    <div className="text-lg font-medium mb-2 text-auto-red">Услуги</div>
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => scrollToSection(service.href)}
                        className="block text-left hover:text-auto-red px-6 py-1 text-base transition-colors"
                      >
                        {service.label}
                      </button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
