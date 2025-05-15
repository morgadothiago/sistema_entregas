import React from "react";
import { TextInput } from "../components/TextInput";
import { useFormContext, UseFormRegister } from "react-hook-form";
import { useHookFormMask } from "use-mask-input";

type MaskOptions = {
  mask: string[];
  required?: boolean;
};

type RegisterWithMask = (
  name: string,
  options: MaskOptions
) => ReturnType<
  UseFormRegister<{
    address: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    zipCode: string;
    name: string;
    cnpj: string;
    phone: string;
    businessType: string;
  }>
>;

type FormData = {
  address: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  zipCode: string;
  name: string;
  cnpj: string;
  phone: string;
  businessType: string;
};

export function BusinessDataStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>();

  const registerWithMask = useHookFormMask(register) as unknown as RegisterWithMask;
  return (
    <div className="space-y-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <TextInput
          labelName="CNPJ"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
          placeholder="00.000.000/0000-00"
          {...registerWithMask("cnpj", {
            mask: ["99.999.999/9999-99"] as string[],
            required: true,
          })}
        />
        {errors.cnpj && (
          <span className="text-red-500 text-sm">CNPJ é obrigatório</span>
        )}
        <TextInput
          labelName="Telefone"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
          placeholder="(00) 00000-0000"
          {...registerWithMask("phone", {
            mask: ["(99) 99999-9999"] as string[],
            required: true,
          })}
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">Telefone é obrigatório</span>
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
  );
}
