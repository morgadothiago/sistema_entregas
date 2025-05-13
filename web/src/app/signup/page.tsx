/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

import api from "../services/api";
import type { ICreateUser } from "../types/User";
import { useRouter } from "next/navigation";
import { BusinessDataStep } from "./BusinessDataStep";
import { AddressStep } from "./AddressStep";
import { AccessDataStep } from "./AccessDataStep";
import { FormProvider } from "react-hook-form";
import { unmaskInput } from "../util/unmaskInput";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const methods = useForm<FormData>();
  const routes = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (step === 3) {
      const unmaskedData = {
        ...data,
        zipCode: unmaskInput((data as any).zipCode),
        phone: unmaskInput((data as any).phone),
        cnpj: unmaskInput((data as any).cnpj),
      };
      try {
        setIsLoading(true);
        const addUser = await api.newUser(
          unmaskedData as unknown as ICreateUser
        );

        if (!addUser) {
          toast.success("Login realizado com sucesso!", {
            description: "Você está sendo redirecionado para a página inicial",
            duration: 3000,
            position: "top-right",
            richColors: true,
          });
          routes.push("/signin");
        } else {
          // Exibe mensagem de erro caso a criação do usuário falhe
          toast.error("Erro ao criar usuário", {
            description:
              "Ocorreu um erro ao criar o usuário. Tente novamente mais tarde.",
            duration: 3000,
            position: "top-right",
            richColors: true,
          });
        }
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao criar usuário:", error);
        const errorMessage =
          (error as any).response?.data?.message || "Erro desconhecido";
        const statusCode =
          (error as any).response?.status || "Código de status desconhecido";
        toast.error(`Erro ${statusCode}: ${errorMessage}`, {
          description:
            "Ocorreu um erro ao criar o usuário. Tente novamente mais tarde.",
          duration: 3000,
          position: "top-right",
          richColors: true,
        });
        setIsLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="relative mb-6">
        <div className="flex justify-between p-4 bg-[#5DADE2] rounded-lg shadow-lg gap-4 border border-gray-200">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                step === 1 ? "bg-[#00E676] scale-110" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-xl font-bold">1</span>
            </div>
            <span className="text-gray-800 font-semibold mt-2 text-sm">
              Dados Empresariais
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                step === 2 ? "bg-[#00E676] scale-110" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-xl font-bold">2</span>
            </div>
            <span className="text-gray-800 font-semibold mt-2 text-sm">
              Endereço
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                step === 3 ? "bg-[#2196F3] scale-110" : "bg-gray-300"
              }`}
            >
              <span className="text-white text-xl font-bold">3</span>
            </div>
            <span className="text-gray-800 font-semibold mt-2 text-sm">
              Dados de Acesso
            </span>
          </div>
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
