"use client";

import React, { useState } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import api from "../services/api";
import { useRouter } from "next/navigation";
import { BusinessDataStep } from "./BusinessDataStep";
import { AddressStep } from "./AddressStep";
import { AccessDataStep } from "./AccessDataStep";
import { unmaskInput } from "../util/unmaskInput";
import type { ICreateUser } from "../types/User";

type FormData = {
  companyName: string;
  cnpj: string;
  email: string;
  password: string;
  address: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
};

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (step < 3) {
      setStep((prev) => prev + 1);
      return;
    }

    // Último passo: enviar dados
    const unmaskedData: ICreateUser = {
      name: data.companyName,
      ...data,
      zipCode: unmaskInput(data.zipCode),
      phone: unmaskInput(data.phone),
      cnpj: unmaskInput(data.cnpj),
    };

    console.log(unmaskedData);

    setIsLoading(true);

    try {
      const response = await api.newUser(unmaskedData);

      console.log(response);

      if (response && "status" in response) {
        if (response.status === 409) {
          toast.warning(response.message, {
            duration: 3000,
            position: "top-right",
            richColors: true,
          });
        }
      } else {
        console.log("O que esta acontecendo aqui?");
      }

      toast.success("Cadastro realizado com sucesso!", {
        duration: 3000,
        position: "top-right",
        richColors: true,
      });

      setIsLoading(false);

      setTimeout(() => {
        router.push("/signin");
      }, 1500);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="relative mb-6">
        <div className="flex justify-between p-4 bg-[#5DADE2] rounded-lg shadow-lg gap-4 border border-gray-200">
          {["Dados Empresariais", "Endereço", "Dados de Acesso"].map(
            (label, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    step === index + 1
                      ? "bg-[#00E676] scale-110"
                      : "bg-gray-300"
                  }`}
                >
                  <span className="text-white text-xl font-bold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-gray-800 font-semibold mt-2 text-sm">
                  {label}
                </span>
              </div>
            )
          )}
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-1 bg-[#00E676] transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
          {step === 1 && <BusinessDataStep />}
          {step === 2 && <AddressStep />}
          {step === 3 && <AccessDataStep />}

          <div className="flex justify-between mt-4">
            {step > 1 && (
              <Button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white px-6 py-2 rounded-md transition duration-200"
                onClick={handleBack}
                disabled={isLoading}
              >
                Voltar
              </Button>
            )}
            <Button
              type="submit"
              className={`bg-[#00E676] hover:bg-[#00c853] text-white px-6 py-2 rounded-md transition duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading
                ? "Carregando..."
                : step === 3
                ? "Finalizar"
                : "Próximo →"}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
