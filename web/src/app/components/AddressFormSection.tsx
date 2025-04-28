import React from "react";
import { TextInput } from "./TextInput";
import { Select } from "@/app/components/Select";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types/formData";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  ufs: Array<{ label: string; value: string }>;
}

export const AddressFormSection: React.FC<Props> = ({ register, errors, ufs }) => (
  <div className="space-y-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <TextInput
          labelName="Endereço"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Digite o endereço"
          {...register("address", { required: true })}
        />
        {errors.address && <span className="text-red-500">Endereço é obrigatório</span>}
      </div>
      <div>
        <TextInput
          labelName="Número"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Digite o número"
          {...register("number", { required: true })}
        />
        {errors.number && <span className="text-red-500">Número é obrigatório</span>}
      </div>
    </div>
    <div>
      <TextInput
        labelName="Complemento"
        className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Digite o complemento"
        {...register("complement", { required: true })}
      />
      {errors.complement && <span className="text-red-500">Complemento é obrigatório</span>}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div>
        <Select
          labelName="Cidade"
          options={ufs.map((uf) => ({ value: uf.label, label: uf.label }))}
          {...register("state", { required: true })}
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.municipio && <span className="text-red-500">Cidade é obrigatória</span>}
      </div>
      <div>
        <Select
          labelName="UF"
          options={ufs.map((uf) => ({ value: uf.value, label: uf.value }))}
          {...register("state", { required: true })}
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {errors.state && <span className="text-red-500">UF é obrigatória</span>}
      </div>
      <div>
        <TextInput
          labelName="CEP"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="00000-000"
          {...register("zipCode", { required: true })}
        />
        {errors.zipCode && <span className="text-red-500">CEP é obrigatório</span>}
      </div>
    </div>
  </div>
);