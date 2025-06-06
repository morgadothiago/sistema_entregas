import { Plus } from "lucide-react";
import Link from "next/link";
import React, { type ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:flex w-[50%] bg-gradient-to-b from-[#003B73] to-[#5DADE2] h-screen flex-col justify-between p-10">
        <div className="flex flex-col mb-10 text-center md:text-left">
          <h1 className="text-white text-4xl font-bold sm:text-3xl">
            Cadastro
          </h1>
          <h3 className="text-white text-lg sm:text-base whitespace-nowrap pl-3.5">
            Crie sua conta agora
          </h3>
        </div>
        <div className="flex items-start justify-center text-center">
          <Link
            href="/signin"
            className="flex gap-2.5 py-2 items-center justify-center"
          >
            <Plus className="text-white" />
            <h4 className="text-white font-bold text-lg ">Já tem uma conta?</h4>
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-screen">
        {children}
      </div>
    </div>
  );
}
