"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { TextInput } from "../components/TextInput";
import { Button } from "@/components/ui/button";
import { ufs } from "../utils/citys";
import { Select } from "@/app/components/Select";
import { toast } from "sonner";
import api from "../services/api";
import type { ICreateUser } from "../types/User";
import { useRouter } from "next/navigation";
import { consult_cnpj } from "../utils/consult_cnpj";
import { FormData } from "../types/formData";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const routes = useRouter();
  const {
    register,
    handleSubmit,
    setValue, 
    formState: { errors },
  } = useForm<FormData>({});

  const onSubmit: SubmitHandler<FormData> = async (data) => {
   
    if (step === 3) {
      const cnpjSemMascara = data.cnpj.replace(/\D/g, '');
      const addUser = await api.newUser({
        ...data,
        cnpj: cnpjSemMascara,
        city: data.municipio
      } as ICreateUser);

      if(addUser) {
        toast.success("Usuário cadastrado com sucesso!", {
          description: "Você será redirecionado para a página de login.",
          duration: 3000,
          position: "top-right",
          richColors: true,
        });
       } else {
        toast.error("Erro ao cadastrar usuário!", {
          description: "Verifique os dados e tente novamente.",
          duration: 3000,
          position: "top-right",
          richColors: true,
        });
       }


      setStep(step + 1);
     
      return; // Impede o envio do formulário se houver algum campo em branco
    }
  };

  const handleConsultCNPJ = async (cnpj: string) => {
    const cnpjLimpo = cnpj.replace(/\D/g, '');
    if (cnpjLimpo.length !== 14) {
      toast.error("CNPJ inválido!", {
        description: "O CNPJ deve conter 14 dígitos numéricos.",
        duration: 3000,
        position: "top-right",
        richColors: true,
      });
      return;
    }
    const data = await consult_cnpj(cnpjLimpo);
    if(data) {
      setValue('name', data.razao_social);
      setValue('address', data.logradouro);
      setValue('municipio', data.municipio);
      setValue('state', data.uf);
      setValue('zipCode', data.cep);
      setValue('complement', data.complemento || '');
      setValue('number', data.ddd_telefone_1 || '');
      toast.success("CNPJ encontrado com sucesso!", {
        description: "Dados preenchidos automaticamente!",
        duration: 3000,
        position: "top-right",
        richColors: true,
      });      
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md mx-auto">
        <div className="text-center p-4">
          <h1 className="text-xl font-bold text-blue-600">Cadastro de Empresa</h1>
          <p className="text-gray-600 mt-1 text-sm">Complete seu cadastro em poucos passos</p>
        </div>
        <div className="flex justify-between items-center px-4 py-2">
          {[
            { step: 1, title: "Dados Empresariais", icon: "🏢" },
            { step: 2, title: "Endereço", icon: "📍" },
            { step: 3, title: "Dados de Acesso", icon: "🔐" }
          ].map((item) => (
            <div key={item.step} className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                ${step === item.step 
                  ? "bg-blue-600 text-white"
                  : step > item.step
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"}
              `}>
                {item.icon}
              </div>
              <span className="text-xs text-gray-600">{item.title}</span>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          {step === 1 && (
            <div className="space-y-3">
              <TextInput
                labelName="Nome da Empresa"
                className="w-full"
                placeholder="Digite o nome da empresa"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-xs">Nome da empresa é obrigatório</span>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <TextInput
                    labelName="CNPJ"
                    className="w-full"
                    placeholder="00.000.000/0000-00"
                    {...register("cnpj", {
                      required: true,
                      onBlur: (e) => handleConsultCNPJ(e.target.value)
                    })}
                  />
                  {errors.cnpj && (
                    <span className="text-red-500 text-xs">CNPJ é obrigatório</span>
                  )}
                </div>
                <div>
                  <TextInput
                    labelName="Telefone"
                    className="w-full"
                    placeholder="(00) 00000-0000"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">Telefone é obrigatório</span>
                  )}
                </div>
              </div>
              <TextInput
                labelName="Tipo de Negócio"
                className="w-full"
                placeholder="Digite o tipo de negócio"
                {...register("businessType", { required: true })}
              />
              {errors.businessType && (
                <span className="text-red-500 text-xs">Tipo de negócio é obrigatório</span>
              )}
            </div>
          )}
          {step === 2 && (
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TextInput
                  labelName="Endereço"
                  className="w-full"
                  placeholder="Digite o endereço"
                  {...register("address", { required: true })}
                />
                <TextInput
                  labelName="Número"
                  className="w-full"
                  placeholder="Digite o número"
                  {...register("number", { required: true })}
                />
              </div>
              <TextInput
                labelName="Complemento"
                className="w-full"
                placeholder="Digite o complemento"
                {...register("complement", { required: true })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Select
                  labelName="Cidade"
                  options={ufs.map((uf) => ({ value: uf.label, label: uf.label }))}
                  {...register("municipio", { required: true })}
                  className="w-full"
                />
                <Select
                  labelName="UF"
                  options={ufs.map((uf) => ({ value: uf.value, label: uf.value }))}
                  {...register("state", { required: true })}
                  className="w-full"
                />
                <TextInput
                  labelName="CEP"
                  className="w-full"
                  placeholder="00000-000"
                  {...register("zipCode", { required: true })}
                />
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-3">
              <TextInput
                labelName="Email"
                type="email"
                className="w-full"
                placeholder="Digite seu email"
                {...register("email", { required: true })}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <TextInput
                  labelName="Senha"
                  type="password"
                  className="w-full"
                  placeholder="Digite sua senha"
                  {...register("password", { required: true })}
                />
                <TextInput
                  labelName="Confirmar Senha"
                  type="password"
                  className="w-full"
                  placeholder="Confirme sua senha"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>
          )}
          <div className="flex justify-between pt-4 mt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded hover:bg-gray-200"
              >
                Voltar
              </button>
            )}
            <Button
              type="submit"
              className="px-6 py-2 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 ml-auto"
            >
              {step === 3 ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}



