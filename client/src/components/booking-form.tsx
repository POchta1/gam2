import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { insertBookingSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const bookingFormSchema = insertBookingSchema.extend({
  phone: z.string().min(10, "Номер телефона должен содержать минимум 10 цифр"),
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  carBrand: z.string().min(2, "Марка автомобиля обязательна"),
  serviceType: z.string().min(1, "Выберите тип услуги"),
  description: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

export default function BookingForm() {
  const { toast } = useToast();
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      carBrand: "",
      serviceType: "",
      description: "",
    },
  });

  const createBookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest("POST", "/api/bookings", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Заявка отправлена",
        description: "Спасибо за заявку! Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при отправке заявки. Попробуйте еще раз.",
        variant: "destructive",
      });
      console.error("Booking error:", error);
    },
  });

  const onSubmit = (data: BookingFormData) => {
    createBookingMutation.mutate(data);
  };

  const serviceOptions = [
    { value: "diagnostic", label: "Диагностика" },
    { value: "engine", label: "Ремонт двигателя" },
    { value: "body", label: "Кузовной ремонт" },
    { value: "maintenance", label: "Техобслуживание" },
    { value: "electrical", label: "Электрика" },
    { value: "tires", label: "Шиномонтаж" },
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-auto-black mb-6">Записаться на ремонт</h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-auto-black">Имя</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Ваше имя"
                    className="text-gray-900 bg-white border-gray-300 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-auto-black">Телефон</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="text-gray-900 bg-white border-gray-300 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="carBrand"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-auto-black">Марка автомобиля</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="BMW, Mercedes, Toyota..."
                    className="text-gray-900 bg-white border-gray-300 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-auto-black">Тип услуги</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="text-gray-900 bg-white border-gray-300 focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-auto-black">Описание проблемы</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Опишите проблему с автомобилем..."
                    rows={4}
                    className="text-gray-900 bg-white border-gray-300 placeholder-gray-500 focus:border-red-500 focus:ring-red-500"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-auto-red hover:bg-red-700 text-white font-semibold py-3 px-6"
            disabled={createBookingMutation.isPending}
          >
            {createBookingMutation.isPending ? "Отправляем..." : "Отправить заявку"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
