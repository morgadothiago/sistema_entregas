"use client";

import { Select } from "@/app/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";

import React, { useState } from "react";

export default function SimulatePage() {
  const handleSeedData = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="flex flex-1 w-full">
      <div className="w-full md:px-10">
        <div className="bg-gradient-to-r p-5 m-1 rounded-2xl shadow-lg">
          <h1 className="font-bold text-black text-xl">
            Cadastro e simulação de entrega
          </h1>
        </div>

        <Form action={handleSeedData} className="flex flex-col md:flex-row">
          <div className="w-full flex flex-col md:flex-row justify-between gap-5 p-5">
            <div className="flex flex-col md:w-[50%] gap-3">
              <Label>Nome do cliente</Label>
              <Input
                type="text"
                name="nome"
                placeholder="Nome do cliente"
                className="w-full"
              />
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                className="w-full"
              />
              <Label>Telefone:</Label>
              <Input type="tel" name="telefone" placeholder="telefone" />

              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <Label>Endereço</Label>
                  <Input
                    type="text"
                    name="endereco"
                    placeholder="endereço"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Numero</Label>
                  <Input
                    type="text"
                    name="numero"
                    placeholder="numero"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Cep</Label>
                  <Input
                    type="text"
                    name="cep"
                    placeholder="cep"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-[50%] gap-2.5">
              <Label>Nome do Produto</Label>
              <Input
                type="text"
                name="nome"
                placeholder="Nome do produto"
                className="w-full"
              />

              <div className="flex justify-between flex-row">
                <div className="flex">
                  <Label>largura</Label>
                  <Input type="text" />
                </div>

                <div className="flex">
                  <Label>Altura</Label>
                  <Input type="text" />
                </div>

                <div className="flex">
                  <Label>comprimento</Label>
                  <Input type="text" />
                </div>

                <div className="flex">
                  <Label>Peso</Label>
                  <Input type="text" />
                </div>
              </div>

              <div className="flex justify-between">
                <Select
                  labelName="Selecione o tipo do veiculo"
                  options={[
                    { value: "express", label: "Entrega Expressa" },
                    { value: "standard", label: "Entrega Padrão" },
                    { value: "economy", label: "Entrega Econômica" },
                  ]}
                >
                  <option value="express">Entrega Expressa</option>
                  <option value="standard">Entrega Padrão</option>
                  <option value="economy">Entrega Econômica</option>
                </Select>
              </div>

              <Button type="submit">
                <span>Simular entrega</span>
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
