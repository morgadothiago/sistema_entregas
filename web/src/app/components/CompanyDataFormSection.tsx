import React from "react";
import { TextInput } from "./TextInput";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types/formData";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  handleConsultCNPJ: (cnpj: string) => void;
}

export const CompanyDataFormSection: React.FC<Props> = ({ register, errors, handleConsultCNPJ }) => (
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
          {...register("number", { required: true })}
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
);