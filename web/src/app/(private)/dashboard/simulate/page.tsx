"use client"

import React, { useEffect, useState } from "react"
import {
  FaTruck,
  FaCalculator,
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaBoxOpen,
} from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import api from "@/app/services/api"
import { useSession } from "next-auth/react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet"
import MapSimulate from "./MapSimulate"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Sparkles, DollarSign, MapPin, Clock, Car } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const initialForm = {
  clientAddress: { city: "", state: "", street: "", number: "", zipCode: "" },
  address: { city: "", state: "", street: "", number: "", zipCode: "" },
  useAddressCompany: false,
  vehicleType: "",
  height: "",
  width: "",
  length: "",
  information: "",
  email: "",
  telefone: "",
  weight: "",
}

export default function Page() {
  const { data: session } = useSession()
  const [form, setForm] = useState(initialForm)
  const [simulating, setSimulating] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [vehicleTypes, setVehicleTypes] = useState<
    { id: number; type: string }[]
  >([])
  const [sheetOpen, setSheetOpen] = useState(false)
  const [simulationResult, setSimulationResult] = useState<any>(null)

  useEffect(() => {
    async function fetchVehicleTypes() {
      const result = await api.getAllVehicleType()
      if (result && "data" in result && Array.isArray(result.data)) {
        setVehicleTypes(result.data)
      }
    }
    fetchVehicleTypes()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, dataset } = e.target
    if (dataset.group) {
      const group = dataset.group as "clientAddress" | "address"
      setForm({
        ...form,
        [group]: {
          ...form[group],
          [name]: value,
        },
      })
    } else {
      setForm({ ...form, [name]: value })
    }
  }

  const submitToAPI = async (data: any) => {
    setSubmitting(true)
    try {
      const token = (session as any)?.token
      if (!token) throw new Error("Token de autenticação não encontrado.")
      const result = await api.AddNewDelivery(data, token)
      if (result && result.status && result.status !== 200) {
        toast.error(
          Array.isArray(result.message)
            ? result.message.map((m: any) => m.message).join(" | ")
            : result.message || "Erro ao processar solicitação.",
          {
            duration: 5000,
            position: "top-center",
            className: "bg-red-100 text-red-800 border border-red-300",
          }
        )
        return false
      }
      toast.success("Entrega cadastrada com sucesso!", {
        duration: 4000,
        position: "top-center",
        className: "bg-green-100 text-green-800 border border-green-300",
      })
      return true
    } catch (error: any) {
      toast.error(
        Array.isArray(error?.message)
          ? error.message.map((m: any) => m.message).join(" | ")
          : error?.message ||
              "Erro de conexão. Verifique sua internet e tente novamente.",
        {
          duration: 5000,
          position: "top-center",
          className: "bg-red-100 text-red-800 border border-red-300",
        }
      )
      return false
    } finally {
      setSubmitting(false)
    }
  }

  const validateForm = () => {
    // Checa campos de endereço do cliente
    const addressKeys: (keyof typeof form.clientAddress)[] = [
      "city",
      "state",
      "street",
      "number",
      "zipCode",
    ]
    for (const key of addressKeys) {
      if (!form.clientAddress[key]) {
        toast.error(`Preencha o campo "${key}" do endereço do cliente.`, {
          className: "bg-red-100 text-red-800 border border-red-300",
        })
        return false
      }
    }
    // Checa campos de endereço de entrega
    for (const key of addressKeys) {
      if (!form.address[key]) {
        toast.error(`Preencha o campo "${key}" do endereço de entrega.`, {
          className: "bg-red-100 text-red-800 border border-red-300",
        })
        return false
      }
    }
    // Checa tipo de veículo
    if (!form.vehicleType) {
      toast.error("Selecione o tipo de veículo.", {
        className: "bg-red-100 text-red-800 border border-red-300",
      })
      return false
    }
    // Checa dimensões e peso
    const numberKeys: (keyof typeof form)[] = [
      "height",
      "width",
      "length",
      "weight",
    ]
    for (const key of numberKeys) {
      if (!form[key] || isNaN(Number(form[key])) || Number(form[key]) <= 0) {
        toast.error(
          `Preencha corretamente o campo "${key}" (valor positivo).`,
          { className: "bg-red-100 text-red-800 border border-red-300" }
        )
        return false
      }
    }
    // Checa e-mail
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      toast.error("Preencha um e-mail válido.", {
        className: "bg-red-100 text-red-800 border border-red-300",
      })
      return false
    }
    // Checa telefone
    if (
      !form.telefone ||
      !/^\(?\d{2}\)? ?9?\d{4}-?\d{4}$/.test(form.telefone.replace(/\D/g, ""))
    ) {
      toast.error(
        "Preencha um telefone válido no formato brasileiro. Ex: (11) 91234-5678",
        { className: "bg-red-100 text-red-800 border border-red-300" }
      )
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    // Formatar telefone para padrão BR
    const telefoneLimpo = form.telefone.replace(/\D/g, "")
    let telefoneFormatado = form.telefone
    if (telefoneLimpo.length === 11) {
      telefoneFormatado = `(${telefoneLimpo.slice(0, 2)}) ${telefoneLimpo.slice(
        2,
        7
      )}-${telefoneLimpo.slice(7)}`
    }
    const payload = {
      clientAddress: form.clientAddress,
      address: form.address,
      useAddressCompany: false,
      vehicleType: form.vehicleType, // já é string (nome do tipo)
      height: Number(form.height),
      width: Number(form.width),
      length: Number(form.length),
      information: form.information,
      email: String(form.email),
      telefone: telefoneFormatado,
      weight: Number(form.weight),
    }
    await submitToAPI(payload)
  }

  const handleSimulate = async () => {
    if (!validateForm()) return
    setSimulating(true)
    setSimulationResult(null)
    try {
      const token = (session as any)?.token
      if (!token) throw new Error("Token de autenticação não encontrado.")
      const payload = {
        clientAddress: form.clientAddress,
        address: form.address,
        useAddressCompany: false,
        vehicleType: form.vehicleType,
      }
      const result = await api.simulateDelivery(payload, token)
      if (result && result.status && result.status !== 200) {
        toast.error(
          Array.isArray(result.message)
            ? result.message.map((m: any) => m.message).join(" | ")
            : result.message || "Erro ao simular entrega.",
          {
            duration: 5000,
            position: "top-center",
            className: "bg-red-100 text-red-800 border border-red-300",
          }
        )
        setSimulating(false)
        return
      }
      setSimulationResult(result)
      setSheetOpen(true)
    } catch (error: any) {
      toast.error(
        Array.isArray(error?.message)
          ? error.message.map((m: any) => m.message).join(" | ")
          : error?.message || "Erro de conexão ao simular.",
        {
          duration: 5000,
          position: "top-center",
          className: "bg-red-100 text-red-800 border border-red-300",
        }
      )
    } finally {
      setSimulating(false)
    }
  }

  const addressFields = [
    { name: "city", label: "Cidade" },
    { name: "state", label: "Estado" },
    { name: "street", label: "Rua" },
    { name: "number", label: "Número" },
    { name: "zipCode", label: "CEP" },
  ] as const

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center items-center py-8 px-2 md:px-8 lg:px-16 overflow-x-hidden w-full">
      <div className="w-full max-w-4xl bg-white/80 md:bg-white/70 md:backdrop-blur-lg rounded-3xl shadow-3xl p-4 sm:p-10 md:p-16 mx-auto animate-fade-in-up transition-all duration-700 border border-blue-100">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-14">
          <h1 className="text-3xl md:text-5xl font-extrabold text-blue-800 flex items-center gap-4 tracking-tight drop-shadow-md">
            <FaTruck className="text-blue-500" />
            Cadastro de Entrega
          </h1>
          <p className="text-blue-500 text-lg font-medium text-center max-w-xl">
            Simule e cadastre uma nova entrega rapidamente, com visual moderno e
            responsivo.
          </p>
        </div>
        <form className="space-y-16" onSubmit={handleSubmit} autoComplete="off">
          {/* Seção Cliente */}
          <div className="space-y-8 group">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-blue-700 mb-2 tracking-tight transition-colors duration-300 group-focus-within:text-blue-900">
              <FaUser className="text-blue-500 transition-colors duration-300 group-focus-within:text-blue-700" />{" "}
              Endereço do Cliente
            </div>
            <div className="border-b border-blue-100 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Cidade
                </label>
                <input
                  type="text"
                  name="city"
                  data-group="clientAddress"
                  value={form.clientAddress.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite a cidade"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Estado
                </label>
                <input
                  type="text"
                  name="state"
                  data-group="clientAddress"
                  value={form.clientAddress.state}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o estado"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Rua
                </label>
                <input
                  type="text"
                  name="street"
                  data-group="clientAddress"
                  value={form.clientAddress.street}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite a rua"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Número
                </label>
                <input
                  type="text"
                  name="number"
                  data-group="clientAddress"
                  value={form.clientAddress.number}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o número"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-blue-700 font-medium mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  name="zipCode"
                  data-group="clientAddress"
                  value={form.clientAddress.zipCode}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o CEP"
                  required
                />
              </div>
            </div>
          </div>
          {/* Seção Entrega */}
          <div className="space-y-8 group">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-blue-700 mb-2 tracking-tight transition-colors duration-300 group-focus-within:text-blue-900">
              <FaMapMarkerAlt className="text-blue-500 transition-colors duration-300 group-focus-within:text-blue-700" />{" "}
              Endereço de Entrega
            </div>
            <div className="border-b border-blue-100 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Cidade
                </label>
                <input
                  type="text"
                  name="city"
                  data-group="address"
                  value={form.address.city}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite a cidade"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Estado
                </label>
                <input
                  type="text"
                  name="state"
                  data-group="address"
                  value={form.address.state}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o estado"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Rua
                </label>
                <input
                  type="text"
                  name="street"
                  data-group="address"
                  value={form.address.street}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite a rua"
                  required
                />
              </div>
              <div>
                <label className="block text-blue-700 font-medium mb-1">
                  Número
                </label>
                <input
                  type="text"
                  name="number"
                  data-group="address"
                  value={form.address.number}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o número"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-blue-700 font-medium mb-1">
                  CEP
                </label>
                <input
                  type="text"
                  name="zipCode"
                  data-group="address"
                  value={form.address.zipCode}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                  placeholder="Digite o CEP"
                  required
                />
              </div>
            </div>
          </div>
          {/* Seção Detalhes */}
          <div className="space-y-8 group">
            <div className="flex items-center gap-2 text-xl md:text-2xl font-bold text-blue-700 mb-2 tracking-tight transition-colors duration-300 group-focus-within:text-blue-900">
              <FaBoxOpen className="text-blue-500 transition-colors duration-300 group-focus-within:text-blue-700" />{" "}
              Detalhes da Entrega
            </div>
            <div className="border-b border-blue-100 mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Tipo de veículo
                  </label>
                  <select
                    name="vehicleType"
                    value={form.vehicleType}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    required
                  >
                    <option value="">Selecione...</option>
                    {vehicleTypes.map((v) => (
                      <option key={v.id} value={v.type}>
                        {v.type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Altura (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    value={form.height}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: 50"
                    required
                    min={0}
                  />
                </div>
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Largura (cm)
                  </label>
                  <input
                    type="number"
                    name="width"
                    value={form.width}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: 30"
                    required
                    min={0}
                  />
                </div>
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Comprimento (cm)
                  </label>
                  <input
                    type="number"
                    name="length"
                    value={form.length}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: 40"
                    required
                    min={0}
                  />
                </div>
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Peso (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    value={form.weight}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: 5.5"
                    required
                    min={0}
                    step={0.1}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    Telefone
                  </label>
                  <input
                    type="text"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: (11) 99999-9999"
                    required
                  />
                </div>
                <div>
                  <label className="block text-blue-700 font-medium mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: email@email.com"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-blue-700 font-medium mb-1">
                    Informações adicionais
                  </label>
                  <textarea
                    name="information"
                    value={form.information}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-blue-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition min-h-[48px] focus:shadow-lg hover:shadow-md hover:-translate-y-0.5 duration-200"
                    placeholder="Ex: produtos frágeis, pesados, etc."
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Botões */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Button
              variant="secondary"
              className="w-full sm:w-auto py-3 px-8 text-lg font-bold rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-200 focus:ring-4 focus:ring-blue-200 focus:outline-none"
              type="button"
              onClick={handleSimulate}
              disabled={simulating}
            >
              {simulating ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-blue-500"
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
                  Simulando...
                </>
              ) : (
                <>Simular entrega</>
              )}
            </Button>
            <Button
              variant="default"
              className="w-full sm:w-auto py-3 px-8 text-lg font-bold rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-200 focus:ring-4 focus:ring-blue-200 focus:outline-none"
              type="submit"
              disabled={submitting}
            >
              {submitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-blue-500"
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
                  Enviando...
                </>
              ) : (
                <>Cadastrar entrega</>
              )}
            </Button>
          </div>
        </form>
      </div>
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent
          side="right"
          className="max-w-md w-full p-4 md:p-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 border-0 shadow-2xl"
        >
          <SheetTitle asChild>
            <VisuallyHidden>Resultado da Simulação de Entrega</VisuallyHidden>
          </SheetTitle>
          <Card className="bg-white/90 shadow-2xl rounded-2xl border-0 overflow-hidden animate-fade-in">
            <CardHeader className="bg-gradient-to-r from-[#003B73] via-[#00449a] to-[#5DADE2] p-6 text-white border-b-0">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-7 h-7 text-[#00FFB3] animate-pulse" />
                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-[#00FFB3] bg-clip-text text-transparent">
                  Simulação de Entrega
                </CardTitle>
              </div>
              <CardDescription className="text-blue-100 text-sm mt-1">
                Veja o resultado detalhado da sua simulação
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {simulationResult ? (
                <>
                  <div className="flex flex-col items-center gap-2 mb-4">
                    <div className="relative">
                      <span className="text-4xl font-extrabold bg-gradient-to-r from-[#003B73] to-[#5DADE2] bg-clip-text text-transparent">
                        R$ {simulationResult.price?.toFixed(2)}
                      </span>
                      <Sparkles className="w-5 h-5 text-[#00FFB3] absolute -top-2 -right-6 animate-bounce" />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">
                      Preço estimado
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg border border-blue-100">
                      <MapPin className="h-5 w-5 text-blue-600" />
                      <div>
                        <span className="block text-xs text-gray-500">
                          Distância
                        </span>
                        <span className="font-bold text-blue-700 text-lg">
                          {simulationResult.location?.distance?.toFixed(2)} km
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg border border-orange-100">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <div>
                        <span className="block text-xs text-gray-500">
                          Duração
                        </span>
                        <span className="font-bold text-orange-700 text-lg">
                          {simulationResult.location?.duration} min
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg border border-purple-100 mb-4">
                    <Car className="h-5 w-5 text-purple-600" />
                    <span className="font-medium text-purple-700">
                      {form.vehicleType || "Tipo de veículo"}
                    </span>
                  </div>
                  {simulationResult.location?.geometry && (
                    <div className="h-56 w-full rounded-xl overflow-hidden border border-blue-100 shadow-lg">
                      <MapSimulate
                        route={decodePolyline(
                          simulationResult.location.geometry
                        )}
                      />
                    </div>
                  )}
                </>
              ) : (
                <div className="text-gray-500 text-center">
                  Nenhum resultado para exibir.
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col gap-2 p-6 pt-0">
              <SheetClose asChild>
                <Button className="w-full bg-gradient-to-r from-[#003B73] to-[#00FFB3] text-white font-bold py-3 rounded-xl shadow-lg hover:scale-[1.03] transition-transform duration-200">
                  Fechar
                </Button>
              </SheetClose>
            </CardFooter>
          </Card>
        </SheetContent>
      </Sheet>
    </div>
  )
}

// Função utilitária para decodificar polyline (adicionar no final do arquivo)
function decodePolyline(encoded: string): [number, number][] {
  let index = 0,
    lat = 0,
    lng = 0,
    coordinates = [] as [number, number][]
  while (index < encoded.length) {
    let b,
      shift = 0,
      result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    const dlat = result & 1 ? ~(result >> 1) : result >> 1
    lat += dlat
    shift = 0
    result = 0
    do {
      b = encoded.charCodeAt(index++) - 63
      result |= (b & 0x1f) << shift
      shift += 5
    } while (b >= 0x20)
    const dlng = result & 1 ? ~(result >> 1) : result >> 1
    lng += dlng
    coordinates.push([lat / 1e5, lng / 1e5])
  }
  return coordinates
}
