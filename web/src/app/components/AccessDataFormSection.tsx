import React from "react";
import { TextInput } from "./TextInput";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { FormData } from "../types/formData";

interface Props {
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

export const AccessDataFormSection: React.FC<Props> = ({ register, errors }) => (
  <div className="space-y-4">
    <div>
      <TextInput
        labelName="Email"
        type="email"
        className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Digite seu email"
        {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">Email é obrigatório</span>}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <TextInput
          labelName="Senha"
          type="password"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Digite sua senha"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="text-red-500">Senha é obrigatória</span>}
      </div>
      <div>
        <TextInput
          labelName="Confirmar Senha"
          type="password"
          className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Confirme sua senha"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span className="text-red-500">Confirmação de senha é obrigatória</span>}
      </div>
    </div>
  </div>
);