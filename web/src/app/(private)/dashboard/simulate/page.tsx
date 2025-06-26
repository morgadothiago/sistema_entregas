"use client";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polyline,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import {
  FaMapMarkerAlt,
  FaTruck,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBoxOpen,
} from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const fakeRoute: [number, number][] = [
  [-23.55052, -46.633308], // São Paulo (Origem)
  [-23.559616, -46.658823], // Ponto intermediário
  [-23.564224, -46.652857], // Destino
];

const MapSimulate = dynamic(() => import("./MapSimulate"), { ssr: false });

const initialForm = {
  clientAddress: {
    city: "",
    state: "",
    street: "",
    number: "",
    zipCode: "",
  },
  address: {
    city: "",
    state: "",
    street: "",
    number: "",
    zipCode: "",
  },
  useAddressCompany: false,
  vehicleType: "",
  height: "",
  width: "",
  length: "",
  information: "",
  email: "",
  telefone: "",
  weight: "",
};

export default function Page() {
  const [form, setForm] = useState(initialForm);
  const [showMap, setShowMap] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, dataset } = e.target;
    if (dataset.group) {
      const group = dataset.group as "clientAddress" | "address";
      setForm({
        ...form,
        [group]: {
          ...form[group],
          [name]: value,
        },
      });
    } else if (type === "checkbox" && e.target instanceof HTMLInputElement) {
      setForm({ ...form, [name]: e.target.checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSimulate = () => {
    console.log("Botão Simular clicado");
    setLoading(true);
    setTimeout(() => {
      console.log("Definindo showMap como true");
      setShowMap(true);
      setLoading(false);
    }, 800);
  };

  // Função para converter dados para minúsculas
  const convertToLowerCase = (data: any): any => {
    if (typeof data === "string") {
      return data.toLowerCase();
    }
    if (typeof data === "object" && data !== null) {
      if (Array.isArray(data)) {
        return data.map(convertToLowerCase);
      }
      const result: any = {};
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          result[key] = convertToLowerCase(data[key]);
        }
      }
      return result;
    }
    return data;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowMap(false);

    // Converter dados para minúsculas antes de enviar para a API
    const formDataLowerCase = convertToLowerCase(form);
    console.log("Dados convertidos para minúsculas:", formDataLowerCase);

    // Aqui você pode enviar formDataLowerCase para a API
    // Exemplo: await api.post('/deliveries', formDataLowerCase);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-8 px-0">
      <div className="w-full max-w-[1200px] bg-white/50 backdrop-blur-xl rounded-2xl shadow-2xl p-2 sm:p-4 md:p-12 mb-8 animate-fade-in border border-blue-100 overflow-x-hidden transition-all duration-500">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2 text-center flex items-center justify-center gap-2 drop-shadow-sm animate-fade-in-up">
          <FaTruck className="inline-block text-blue-400" /> Simulação de
          Entrega
        </h1>
        <p className="text-lg text-blue-500 mb-10 text-center font-medium animate-fade-in-up">
          Preencha os dados para cadastrar e simular uma entrega.
        </p>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 w-full max-w-full animate-fade-in-up"
          autoComplete="off"
        >
          <div className="md:col-span-2 font-bold text-blue-600 mt-2 flex items-center gap-2 text-xl mb-4 border-b border-blue-200 pb-2">
            <FaUser className="text-blue-400" /> Endereço do Cliente
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="city"
              data-group="clientAddress"
              placeholder=" "
              value={form.clientAddress.city}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Cidade
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="state"
              data-group="clientAddress"
              placeholder=" "
              value={form.clientAddress.state}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Estado
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="street"
              data-group="clientAddress"
              placeholder=" "
              value={form.clientAddress.street}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Rua
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="number"
              data-group="clientAddress"
              placeholder=" "
              value={form.clientAddress.number}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Número
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="zipCode"
              data-group="clientAddress"
              placeholder=" "
              value={form.clientAddress.zipCode}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              CEP
            </label>
          </div>

          <div className="md:col-span-2 font-bold text-blue-600 mt-10 flex items-center gap-2 text-xl mb-4 border-b border-blue-200 pb-2">
            <FaMapMarkerAlt className="text-blue-400" /> Endereço de Entrega
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="city"
              data-group="address"
              placeholder=" "
              value={form.address.city}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Cidade
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="state"
              data-group="address"
              placeholder=" "
              value={form.address.state}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Estado
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="street"
              data-group="address"
              placeholder=" "
              value={form.address.street}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Rua
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="number"
              data-group="address"
              placeholder=" "
              value={form.address.number}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              Número
            </label>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <input
              type="text"
              name="zipCode"
              data-group="address"
              placeholder=" "
              value={form.address.zipCode}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 placeholder-transparent border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 peer"
              required
            />
            <label className="absolute left-3 top-2 text-base text-blue-700 font-semibold pointer-events-none transition-all duration-200 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-blue-700 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-blue-900 bg-white/70 px-1 rounded">
              CEP
            </label>
          </div>

          <div className="md:col-span-2 flex items-center gap-3 mt-6 mb-2">
            <input
              type="checkbox"
              name="useAddressCompany"
              checked={form.useAddressCompany}
              onChange={handleChange}
              id="useAddressCompany"
              className="accent-blue-500 w-5 h-5 rounded focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            />
            <label
              htmlFor="useAddressCompany"
              className="text-blue-700 font-medium select-none cursor-pointer text-base"
            >
              Usar endereço da empresa
            </label>
          </div>

          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Tipo de veículo
            </label>
            <input
              type="text"
              name="vehicleType"
              placeholder="Ex: Caminhão, Van, Moto"
              value={form.vehicleType}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200"
              required
            />
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Altura (cm)
            </label>
            <input
              type="number"
              name="height"
              placeholder="Ex: 50"
              value={form.height}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200"
              required
              min={0}
            />
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Largura (cm)
            </label>
            <input
              type="number"
              name="width"
              placeholder="Ex: 30"
              value={form.width}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200"
              required
              min={0}
            />
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Comprimento (cm)
            </label>
            <input
              type="number"
              name="length"
              placeholder="Ex: 40"
              value={form.length}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200"
              required
              min={0}
            />
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Peso (kg)
            </label>
            <input
              type="number"
              name="weight"
              placeholder="Ex: 5.5"
              value={form.weight}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200"
              required
              min={0}
              step={0.1}
            />
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Telefone
            </label>
            <div className="relative">
              <FaPhone className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-400" />
              <input
                type="text"
                name="telefone"
                placeholder="Ex: (11) 99999-9999"
                value={form.telefone}
                onChange={handleChange}
                className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 pl-10"
                required
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-2 group">
            <label className="text-base text-blue-700 font-semibold">
              E-mail
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-2 top-1/2 -translate-y-1/2 text-blue-400" />
              <input
                type="email"
                name="email"
                placeholder="Ex: email@email.com"
                value={form.email}
                onChange={handleChange}
                className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 pl-10"
                required
              />
            </div>
          </div>
          <div className="relative flex flex-col gap-2 md:col-span-2 group">
            <label className="text-base text-blue-700 font-semibold">
              Informações adicionais
            </label>
            <textarea
              name="information"
              placeholder="Ex: produtos frágeis, pesados, etc."
              value={form.information}
              onChange={handleChange}
              className="input bg-white/30 backdrop-blur-md text-blue-900 border-blue-300 focus:ring-2 focus:ring-blue-400 rounded-xl shadow-inner focus:shadow-lg transition-all duration-200 min-h-[48px]"
            />
          </div>
        </form>
        <div className="flex justify-center mt-12">
          <Button
            className="px-12 py-4 text-lg font-bold tracking-wide rounded-2xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-200 ring-2 ring-blue-200 focus:ring-4 focus:ring-blue-400 active:scale-95"
            onClick={handleSimulate}
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
            )}
            <FaTruck className="inline-block mr-2 -mt-1" /> Simular entrega
          </Button>
        </div>
      </div>
      <Dialog open={showMap} onOpenChange={setShowMap}>
        <DialogContent className="max-w-3xl w-full p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-2 border-b">
            <DialogTitle className="flex items-center gap-3 text-2xl">
              <FaMapMarkerAlt className="text-blue-400 text-2xl" /> Rota da
              Entrega
            </DialogTitle>
            <DialogDescription className="mt-2">
              Veja o resumo e o trajeto da entrega simulada.
            </DialogDescription>
          </DialogHeader>
          <div className="p-6 pt-2">
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100 shadow-sm text-sm text-gray-700 divide-y divide-blue-100">
              <div className="mb-2 font-semibold text-blue-700 flex items-center gap-2">
                <FaBoxOpen className="text-blue-400" /> Resumo dos Dados
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2">
                <div className="flex items-center gap-2">
                  <FaUser className="text-blue-400" />
                  <span className="font-medium">Cliente:</span>{" "}
                  {form.clientAddress.street}, {form.clientAddress.number} -{" "}
                  {form.clientAddress.city}/{form.clientAddress.state} (
                  {form.clientAddress.zipCode})
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="font-medium">Entrega:</span>{" "}
                  {form.address.street}, {form.address.number} -{" "}
                  {form.address.city}/{form.address.state} (
                  {form.address.zipCode})
                </div>
                <div className="flex items-center gap-2">
                  <FaTruck className="text-blue-400" />
                  <span className="font-medium">Veículo:</span>{" "}
                  {form.vehicleType}
                </div>
                <div className="flex items-center gap-2">
                  <FaBoxOpen className="text-blue-400" />
                  <span className="font-medium">Dimensões:</span> {form.height}{" "}
                  x {form.width} x {form.length} cm
                </div>
                <div className="flex items-center gap-2">
                  <FaBoxOpen className="text-blue-400" />
                  <span className="font-medium">Peso:</span> {form.weight} kg
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-blue-400" />
                  <span className="font-medium">Contato:</span> {form.telefone}{" "}
                  | {form.email}
                </div>
                <div className="md:col-span-2 flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  <span className="font-medium">Info:</span> {form.information}
                </div>
              </div>
            </div>
            <div className="h-72 w-full rounded-xl border-2 border-blue-100 shadow-lg overflow-hidden">
              <MapSimulate route={fakeRoute} />
            </div>
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={() => setShowMap(false)}>
                Cancelar
              </Button>
              <Button
                onClick={() => {
                  // Converter dados para minúsculas antes de enviar para a API
                  const formDataLowerCase = convertToLowerCase(form);
                  console.log(
                    "Dados convertidos para minúsculas:",
                    formDataLowerCase
                  );

                  // Aqui você pode enviar formDataLowerCase para a API
                  // Exemplo: await api.post('/deliveries', formDataLowerCase);

                  setShowMap(false);
                }}
              >
                Finalizar cadastro
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
