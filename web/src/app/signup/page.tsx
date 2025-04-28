"use client";

import React, { useState } from "react";
import { useForm, type SubmitHandler, } from "react-hook-form";
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
  } = useForm<FormData>({
    
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (step === 3) {
      // Remover máscara do CNPJ antes de enviar
      const cnpjSemMascara = data.cnpj.replace(/\D/g, '');

      const addUser = await api.newUser({
        ...data,
        cnpj: cnpjSemMascara, // Salva sem máscara
        city: data.municipio
      } as ICreateUser);

     

      console.log(addUser);


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

  const handleConsultCNPJ = async (cnpj: string) => {
    const cnpjLimpo = cnpj.replace(/\D/g, ''); // Remove caracteres não numéricos

    console.log(cnpjLimpo);


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
      // Preenche os campos do formulário com os dados retornados
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
    <div className=" w-[100vw] sm:w-[100vw]  min-h-screen flex items-center justify-center p-4">
      <div className="w-full sm:w-[100vw]  max-w-md mx-auto  rounded-2xl shadow-lg
        sm:max-w-md
        xs:max-w-full xs:rounded-none xs:shadow-none
      ">
        {/* Cabeçalho */}
        <div className="text-center p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">
            Cadastro de Empresa
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Complete seu cadastro em poucos passos
          </p>
        </div>

        {/* Stepper Simplificado */}
        <div className="px-6 py-4 bg-white border-b">
          <div className="flex justify-between items-center">
            {[
              { step: 1, title: "Dados Empresariais", icon: "🏢" },
              { step: 2, title: "Endereço", icon: "📍" },
              { step: 3, title: "Dados de Acesso", icon: "🔐" }
            ].map((item, index) => (
              <div key={item.step} className="flex flex-col items-center relative">
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center mb-2
                  ${step === item.step 
                    ? "bg-blue-600 text-white"
                    : step > item.step
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-600"}
                `}>
                  {item.icon}
                </div>
                <span className="text-xs text-gray-600 hidden sm:block">{item.title}</span>
                {index < 2 && (
                  <div 
                    className="absolute hidden sm:block h-0.5 bg-gray-200"
                    style={{
                      width: "calc(100% - 2.5rem)",
                      left: "calc(50% + 1.25rem)",
                      top: "1.25rem"
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {step === 1 && (
            <div className="space-y-4">
              <TextInput
                labelName="Nome da Empresa"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o nome da empresa"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">Nome da empresa é obrigatório</span>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <TextInput
                    labelName="CNPJ"
                    className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="00.000.000/0000-00"
                    {...register("cnpj", {
                      required: true,
                      onBlur: (e) => handleConsultCNPJ(e.target.value)
                    })}
                  />
                  {errors.cnpj && (
                    <span className="text-red-500 text-sm">CNPJ é obrigatório</span>
                  )}
                </div>

                <div>
                  <TextInput
                    labelName="Telefone"
                    className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">Telefone é obrigatório</span>
                  )}
                </div>
              </div>

              <TextInput
                labelName="Tipo de Negócio"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o tipo de negócio"
                {...register("businessType", { required: true })}
              />
              {errors.businessType && (
                <span className="text-red-500 text-sm">Tipo de negócio é obrigatório</span>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  labelName="Endereço"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite o endereço"
                  {...register("address", { required: true })}
                />
                <TextInput
                  labelName="Número"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite o número"
                  {...register("number", { required: true })}
                />
              </div>

              <TextInput
                labelName="Complemento"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite o complemento"
                {...register("complement", { required: true })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Select
                  labelName="Cidade"
                  options={ufs.map((uf) => ({ value: uf.label, label: uf.label }))}
                  {...register("municipio", { required: true })}
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Select
                  labelName="UF"
                  options={ufs.map((uf) => ({ value: uf.value, label: uf.value }))}
                  {...register("state", { required: true })}
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <TextInput
                  labelName="CEP"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="00000-000"
                  {...register("zipCode", { required: true })}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <TextInput
                labelName="Email"
                type="email"
                className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Digite seu email"
                {...register("email", { required: true })}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <TextInput
                  labelName="Senha"
                  type="password"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Digite sua senha"
                  {...register("password", { required: true })}
                />
                <TextInput
                  labelName="Confirmar Senha"
                  type="password"
                  className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Confirme sua senha"
                  {...register("confirmPassword", { required: true })}
                />
              </div>
            </div>
          )}

          <div className="flex justify-between pt-6 border-t mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Voltar
              </button>
            )}
            <Button
              type="submit"
              className="px-6 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors ml-auto"
            >
              {step === 3 ? "Finalizar" : "Próximo"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}



