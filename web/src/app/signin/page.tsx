"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import type { SignInFormData } from "../types/SingInType";
import { TextInput } from "../components/TextInput";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const routes = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password
      });
  
      if (result?.error) {
        return toast.error("Credenciais invalidas", {
              description: "E-mail ou senha inválidos",
              duration: 3000,
              position: "top-right",
              richColors: true,
            });         
      }

        toast.success("Login realizado com sucesso!", {
          description: "Você está sendo redirecionado para a página inicial",
          duration: 3000,
          position: "top-right",
          richColors: true,
        });

        routes.push("/dashboard");
  
    } catch (error) {
      toast.error("Erro ao realizar login!", {
        description: (error as Error)?.message || "Por favor, tente novamente.",
        duration: 3000,
        position: "top-right",
        richColors: true,
      });

    }
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:flex w-[50%] bg-gradient-to-b from-[#003B73] to-[#5DADE2] h-screen flex-col justify-between p-10">
        <div className="flex flex-col mb-10 text-center md:text-left">
          <h1 className="text-white text-4xl font-bold sm:text-3xl">Login</h1>
          <h3 className="text-white text-lg sm:text-base whitespace-nowrap pl-3.5">
            Entre com suas credenciais
          </h3>
        </div>
        <div className="flex items-start justify-center text-center">
          <Link
            href="/signup"
            className="flex gap-2.5 py-2 items-center justify-center"
          >
            <Plus className="text-white" />
            <h4 className="text-white font-bold text-lg ">Cadastra-se</h4>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen p-4">
        <form
          className="flex flex-col items-center justify-center w-full max-w-md gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextInput
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            labelName="Email"
            type="email"
            placeholder="Digite seu email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm text-left w-full">
              Este campo é obrigatório
            </span>
          )}
          <TextInput
            className="w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out"
            labelName="Senha"
            placeholder="Digite sua senha"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm text-left w-full">
              Este campo é obrigatório
            </span>
          )}
          <div className="flex flex-col items-start w-full">
            <Link
              href="/reset-password"
              className="text-[#5dade2] hover:text-[#024db9] font-bold mb-2"
            >
              Esqueceu a senha
            </Link>
            <div className="flex justify-center w-full mt-5">
              <Button
                className="w-full bg-gradient-to-r h-12 from-[#024db9] to-[#5DADE2] hover:bg-[#5DADE2] hover:text-black transition duration-300 ease-in-out px-6 py-3 rounded-md text-white font-semibold shadow-md transform hover:scale-105"
                type="submit"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default to ensure form submission
                  handleSubmit(onSubmit)(); // Call the submit handler
                }}
              >
                Login
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0   flex lg:hidden w-full p-4 justify-center items-end ">
            <Link
              href="/signup"
              className="flex gap-2.5 py-2 w-[50%] items-center justify-center bg-[#5DADE2] text-white rounded-md"
            >
              <Plus className="text-white" />
              <h4 className="font-bold text-lg">Crie sua conta</h4>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
