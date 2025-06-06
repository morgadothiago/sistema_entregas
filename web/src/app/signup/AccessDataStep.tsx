import React from "react";
import { TextInput } from "../components/TextInput";
import { useFormContext } from "react-hook-form";

export function AccessDataStep() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-3">Dados de Acesso</h2>
      <TextInput
        labelName="Email"
        type="email"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] mb-2"
        placeholder="Digite seu email"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-red-500 text-sm">Email é obrigatório</span>
      )}
      <TextInput
        labelName="Senha"
        type="password"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676] mb-2"
        placeholder="Digite sua senha"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span className="text-red-500 text-sm">Senha é obrigatória</span>
      )}
      <TextInput
        labelName="Confirmar Senha"
        type="password"
        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00E676]"
        placeholder="Confirme sua senha"
        {...register("confirmPassword", { required: true })}
      />
      {errors.confirmPassword && (
        <span className="text-red-500 text-sm">
          Confirmação de senha é obrigatória
        </span>
      )}
    </div>
  );
}