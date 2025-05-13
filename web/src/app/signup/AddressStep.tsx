import React from "react";
import { TextInput } from "../components/TextInput";
import { Select } from "@/app/components/Select";
import { useFormContext, UseFormRegister } from "react-hook-form";
import { cities } from "../utils/citys";
import { ufs } from "../utils/citys";
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
  }>
>;

export function AddressStep() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const registerWithMask = useHookFormMask(
    register
  ) as unknown as RegisterWithMask;

  return (
    <div className="space-y-4">
      <TextInput
        labelName="Endereço"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] bg-[#5DADE2]"
        placeholder="Digite o endereço"
        {...register("address", { required: true })}
      />
      {errors.address && (
        <span className="text-red-500 text-sm">Endereço é obrigatório</span>
      )}
      <TextInput
        labelName="Numero"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
        placeholder="Digite o número"
        {...register("number", { required: true })}
      />
      {errors.number && (
        <span className="text-red-500 text-sm">Número é obrigatório</span>
      )}
      <TextInput
        labelName="Complemento"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
        placeholder="Digite o complemento"
        {...register("complement", { required: true })}
      />
      {errors.complement && (
        <span className="text-red-500 text-sm">Complemento é obrigatório</span>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <Select
          labelName="Cidade"
          options={cities}
          {...register("city", { required: true })}
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
        />
        {errors.city && (
          <span className="text-red-500 text-sm">Cidade é obrigatória</span>
        )}
        <Select
          labelName="UF"
          options={ufs}
          {...register("state", { required: true })}
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
        />
        {errors.state && (
          <span className="text-red-500 text-sm">Estado UF é obrigatório</span>
        )}

        <TextInput
          {...registerWithMask("zipCode", {
            mask: ["99999-999"],
            required: true,
          })}
          labelName="CEP"
          className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
          placeholder="00000-000"
        />

        {errors.zipCode && (
          <span className="text-red-500 text-sm">CEP é obrigatório</span>
        )}
      </div>
    </div>
  );
}
