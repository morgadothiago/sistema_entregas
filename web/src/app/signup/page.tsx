"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../components/TextInput";
import { Button } from "@/components/ui/button";
import cities from "../utils/citys";
import { Select } from "@/app/components/Select";
import { toast } from "sonner";

import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../schema/Validation";

interface FormData {
  companyName: string;
  cnpj: string;
  phone: string;
  address: string;
  city: string;
  businessType: string;
  cep: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    if (step < 2) {
      setStep(step + 1);
    }
    toast.success("Cadastro realizado com sucesso!", {
      description:
        "Sua conta foi criada com sucesso. Você pode agora fazer login.",
      duration: 3000,
      position: "top-right",
      richColors: true,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full ${
              step === 1 ? "bg-[#00E676]" : "bg-gray-300"
            } flex items-center justify-center`}
          >
            <span className="text-white">1</span>
          </div>
          <span className="text-[#000] font-medium">Dados Empresarial</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full ${
              step === 2 ? "bg-[#2196F3]" : "bg-gray-300"
            } flex items-center justify-center`}
          >
            <span className="text-white">2</span>
          </div>
          <span className="text-[#000] font-medium">Dados de Acesso</span>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {step === 1 && (
          <>
            <TextInput
              labelName="Nome de empresas"
              className="w-full"
              placeholder="Digite o nome da empresa"
              {...register("companyName")}
            />
            <div className="grid grid-cols-2 gap-4">
              <TextInput
                labelName="CNPJ"
                className="w-full"
                placeholder="00.000.000/0000-00"
                {...register("cnpj")}
              />
              <TextInput
                labelName="Telefone"
                className="w-full"
                placeholder="(00) 00000-0000"
                {...register("phone")}
              />
            </div>
            <TextInput
              labelName="Endereços"
              className="w-full"
              placeholder="Digite o endereço"
              {...register("address")}
            />
            <div className="grid grid-cols-2 gap-4">
              <Select
                labelName="Cidade"
                options={cities}
                {...register("city")}
                className="w-full "
              />
              <TextInput
                labelName="CEP"
                className="w-full"
                placeholder="00000-000"
                {...register("cep")}
              />
            </div>
            <TextInput
              labelName="Tipo de negocio"
              className="w-full"
              placeholder="Digite o tipo de negócio"
              {...register("businessType")}
            />
          </>
        )}

        {step === 2 && (
          <>
            <TextInput
              labelName="Email"
              type="email"
              className="w-full"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <TextInput
              labelName="Senha"
              type="password"
              className="w-full"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <TextInput
              labelName="Confirmar Senha"
              type="password"
              className="w-full"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
          </>
        )}

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#00E676] hover:bg-[#00c853] text-white px-8 py-2 rounded-md"
          >
            {step === 2 ? "Finalizar" : "Próximo →"}
          </Button>
        </div>
      </form>
    </div>
  );
}
