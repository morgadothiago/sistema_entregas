"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../components/TextInput";
import { Button } from "@/components/ui/button";
import { cities } from "../utils/citys";
import { ufs } from "../utils/citys";
import { Select } from "@/app/components/Select";
import { toast } from "sonner";

import * as yup from "yup";
import api from "../services/api";
import type { ICreateUser } from "../types/User";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  cnpj: string;
  phone: string;
  address: string;
  city: string; // Updated to use the value type from cities
  state: string;
  complement: string;
  number: string;
  businessType: string;
  zipCode: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const schema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  cnpj: yup.string().required("CNPJ é obrigatório"),
  phone: yup.string().required("Telefone é obrigatório"),
  address: yup.string().required("Endereço é obrigatório"),
  city: yup.string().required("Cidade é obrigatória"),
  businessType: yup.string().required("Tipo de negócio é obrigatório"),
  zipCode: yup.string().required("CEP é obrigatório"),
  state: yup.string().required("Estado UF obrigatorio"),
  complement: yup.string().required("Complemento obrigatorio"),
  number: yup.string().required("Numero e obrigatorio"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("Senha é obrigatória"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem corresponder")
    .required("Confirmação de senha é obrigatória"),
});

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const routes = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (step === 3) {

      const addUser = await api.newUser(data as ICreateUser);

      if (!addUser) {
        toast.success("Login realizado com sucesso!", {
          description: "Você está sendo redirecionado para a página inicial",
          duration: 3000,
          position: "top-right",
          richColors: true,
        });
        routes.push("/signin");
      }
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="max-w-md mx-auto  w-full">
      <div className="relative mb-6 ">
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

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        {step === 1 && (
          <div className="space-y-4 ">
            <TextInput
              labelName="Nome da Empresa"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              placeholder="Digite o nome da empresa"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Nome da empresa é obrigatório
              </span>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <TextInput
                labelName="CNPJ"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] "
                placeholder="00.000.000/0000-00"
                {...register("cnpj", { required: true })}
              />
              {errors.cnpj && (
                <span className="text-red-500 text-sm">CNPJ é obrigatório</span>
              )}
              <TextInput
                labelName="Telefone"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                placeholder="(00) 00000-0000"
                {...register("phone", { required: true })}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">
                  Telefone é obrigatório
                </span>
              )}
            </div>
            <TextInput
              labelName="Tipo de Negócio"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              placeholder="Digite o tipo de negócio"
              {...register("businessType", { required: true })}
            />
            {errors.businessType && (
              <span className="text-red-500 text-sm">
                Tipo de negócio é obrigatório
              </span>
            )}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <TextInput
              labelName="Endereço"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] bg-[#5DADE2]"
              placeholder="Digite o endereço"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                Endereço é obrigatório
              </span>
            )}
            <TextInput
              labelName="Numero"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              placeholder="Digite o endereço"
              {...register("number", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                Endereço é obrigatório
              </span>
            )}
            <TextInput
              labelName="Complemento"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              placeholder="Digite o complemento"
              {...register("complement", { required: true })}
            />
            {errors.complement && (
              <span className="text-red-500 text-sm">
                Complemento é obrigatório
              </span>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Select
                labelName="Cidade"
                options={cities}
                {...register("city", { required: true })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  Cidade é obrigatória
                </span>
              )}
              <Select
                labelName="UF"
                options={ufs}
                {...register("state", { required: true })}
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              />
              {errors.state && (
                <span className="text-red-500 text-sm">
                  Estado UF é obrigatório
                </span>
              )}
              <TextInput
                labelName="CEP"
                className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                placeholder="00000-000"
                {...register("zipCode", { required: true })}
              />
              {errors.zipCode && (
                <span className="text-red-500 text-sm">CEP é obrigatório</span>
              )}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-3">Dados de Acesso</h2>
            <TextInput
              labelName="Email"
              type="email"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] mb-2"
              placeholder="Digite seu email"
              {...register("email", { required: true })}
            />
            <TextInput
              labelName="Senha"
              type="password"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] mb-2"
              placeholder="Digite sua senha"
              {...register("password", { required: true })}
            />
            <TextInput
              labelName="Confirmar Senha"
              type="password"
              className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
              placeholder="Confirme sua senha"
              {...register("confirmPassword", { required: true })}
            />
          </div>
        )}

        <div className="flex justify-end mt-4">
          <Button
            type="submit"
            className="bg-[#00E676] hover:bg-[#00c853] text-white px-6 py-2 rounded-md transition duration-200"
          >
            {step === 3 ? "Finalizar" : "Próximo →"}
          </Button>
        </div>
      </form>
    </div>
  );
}
