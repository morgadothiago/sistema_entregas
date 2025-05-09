"use client";

import { Select } from "@/app/components/Select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Form from "next/form";

import React, { useState } from "react";
import Modal from "./Modal";

export default function SimulatePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSeedData = async (formData: FormData) => {
    const data = Object.fromEntries(formData);

    const newDelivery = {
      name: data.nome,
      email: data.email,
      phone: data.telefone,
      address: {
        street: data.endereco,
        number: data.numero,
        cep: data.cep,
      },
      product: {
        name: data.nome,
        dimensions: {
          width: data.largura,
          height: data.altura,
          length: data.comprimento,
          weight: data.peso,
        },
      },
    };

    console.log(newDelivery);
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
                className="w-full border rounded-md p-2 shadow-sm"
              />
              <Label>Email:</Label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                className="w-full border rounded-md p-2 shadow-sm"
              />
              <Label>Telefone:</Label>
              <Input
                type="tel"
                name="telefone"
                placeholder="telefone"
                className="w-full border rounded-md p-2 shadow-sm"
              />

              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex flex-col gap-2">
                  <Label>Endereço</Label>
                  <Input
                    type="text"
                    name="endereco"
                    placeholder="endereço"
                    className="w-full border rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Numero</Label>
                  <Input
                    type="text"
                    name="numero"
                    placeholder="numero"
                    className="w-full border rounded-md p-2 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Cep</Label>
                  <Input
                    type="text"
                    name="cep"
                    placeholder="cep"
                    className="w-full border rounded-md p-2 shadow-sm"
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
                className="w-full border rounded-md p-2 shadow-sm"
              />

              <div className="w-full flex justify-between flex-row gap-2">
                <div className="flex flex-col md:flex-row gap-5 w-full">
                  <div className="flex flex-col gap-2">
                    <Label>largura</Label>
                    <Input
                      type="text"
                      className="border rounded-md p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Altura</Label>
                    <Input
                      type="text"
                      className="border rounded-md p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>comprimento</Label>
                    <Input
                      type="text"
                      className="border rounded-md p-2 shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Peso</Label>
                    <Input
                      type="text"
                      className="border rounded-md p-2 shadow-sm"
                    />
                  </div>
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

              <div className="mt-4">
                <Label>Observações</Label>
                <textarea
                  name="observacoes"
                  placeholder="Digite suas observações aqui..."
                  className="w-full border rounded-md p-2 shadow-sm"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                onClick={() => setIsModalOpen(true)}
                className="mt-4 bg-blue-500 text-white rounded-md p-2 shadow-md"
              >
                <span>Simular entrega</span>
              </Button>
            </div>
          </div>
        </Form>

        {isModalOpen && (
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </div>
  );
}
