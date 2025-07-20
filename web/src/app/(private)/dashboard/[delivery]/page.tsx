"use client"

import React, { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, UserIcon, Package, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import api from "@/app/services/api"
import { useAuth } from "@/app/context"
import type { User } from "@/app/types/User"

// Tipo estendido para incluir DeliveryMan
interface DeliveryUser extends User {
  DeliveryMan?: {
    name: string
    phone: string
    Vehicle?: {
      Type?: {
        type: string
      }
    }
    Address?: {
      street: string
      number: string
      city: string
      state: string
      zipCode: string
    }
  }
}

export default function DeliveryDetailPage() {
  const params = useParams()
  const { token } = useAuth()
  const [deliveryDetail, setDeliveryDetail] = useState<DeliveryUser | null>(
    null
  )
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Extrair o ID da URL
  const deliveryId = params?.delivery

  useEffect(() => {
    console.log("Params completos:", params)
    console.log("ID do delivery extraído:", deliveryId)
    console.log("Token disponível:", !!token)

    if (!token) return

    const fetchDelivery = async () => {
      try {
        if (!deliveryId) {
          console.error("ID do delivery não encontrado")
          throw new Error("ID do delivery não encontrado")
        }

        console.log("Fazendo requisição para delivery ID:", deliveryId)
        const response = await api.getUser(deliveryId.toString(), token)
        console.log("Resposta da API:", response)

        if ("status" in response) {
          toast.error("Delivery não encontrado", {
            description:
              "Ocorreu um erro ao buscar os dados do delivery. Por favor, tente novamente mais tarde.",
            duration: 3000,
            position: "top-right",
            richColors: true,
          })
          setDeliveryDetail(null)
          return
        }

        setDeliveryDetail(response as User)
      } catch (error: unknown) {
        console.error("Erro ao buscar delivery:", error)
        setDeliveryDetail(null)
      } finally {
        setLoading(false)
      }
    }

    fetchDelivery()
  }, [deliveryId, token])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-white/50 backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003873]/20 to-[#5DADE2]/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative z-10 p-4 bg-white/80 rounded-full shadow-lg">
            <Loader2 className="w-12 h-12 animate-spin text-[#003873]" />
          </div>
        </div>
        <div className="mt-8 space-y-3 text-center">
          <span className="text-[#2C3E50] font-semibold text-xl animate-pulse">
            Carregando dados do delivery...
          </span>
          <p className="text-sm text-gray-500 max-w-sm">
            Estamos buscando as informações mais recentes. Isso pode levar
            alguns segundos.
          </p>
        </div>
      </div>
    )
  }

  if (!deliveryDetail) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 via-white to-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full">
          <Card className="border border-gray-200 shadow-xl rounded-2xl bg-white/90 backdrop-blur-md">
            <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
              <div className="p-4 bg-red-50 rounded-full">
                <Package className="w-12 h-12 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Delivery não encontrado
                </h3>
                <p className="text-gray-500">
                  Não foi possível encontrar o delivery solicitado. Verifique se
                  o ID está correto ou tente novamente mais tarde.
                </p>
              </div>
              <Button
                variant="default"
                onClick={() => router.push("/dashboard")}
                className="bg-[#003873] hover:bg-[#003873]/90 text-white transition-colors duration-300 px-6"
              >
                Voltar para Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="flex flex-col lg:flex-row gap-8 px-6 py-10 pb-12 max-w-screen-xl mx-auto">
        {/* Delivery Details Card */}
        <div className="w-full lg:w-1/3 xl:w-1/4">
          <Card className="border border-gray-200 shadow-xl rounded-2xl bg-white/90 backdrop-blur-md hover:shadow-[#5DADE2]/20 transition-all duration-500 sticky top-24">
            <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white border-b">
              <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
                <Package className="w-6 h-6 text-[#5DADE2]" /> Informações do
                Delivery
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-6">
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-[#5DADE2]" /> ID do Delivery
                </span>
                <span className="text-gray-900 font-mono text-base bg-gray-50 p-2 rounded-md">
                  #{deliveryDetail.id}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#5DADE2]" /> Email
                </span>
                <span className="text-gray-900 break-all text-base bg-gray-50 p-2 rounded-md">
                  {deliveryDetail.email}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <UserIcon className="w-4 h-4 text-[#5DADE2]" /> Nome
                </span>
                <span className="text-gray-900 text-base bg-gray-50 p-2 rounded-md">
                  {deliveryDetail.name || "Não informado"}
                </span>
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[#5DADE2]" /> Status
                </span>
                <span className="text-gray-900 text-base bg-gray-50 p-2 rounded-md">
                  {deliveryDetail.status || "Ativo"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Container para informações adicionais */}
        <div className="flex flex-col gap-8 w-full lg:w-2/3 xl:w-3/4">
          {/* Informações do DeliveryMan */}
          {deliveryDetail.DeliveryMan && (
            <Card className="border border-gray-200 shadow-xl rounded-2xl bg-white/90 backdrop-blur-md hover:shadow-[#5DADE2]/20 transition-all duration-500">
              <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
                  <Package className="w-6 h-6 text-[#5DADE2]" /> Informações do
                  Entregador
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-6">
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-[#5DADE2]" /> Nome do
                    Entregador
                  </span>
                  <span className="text-gray-900 text-base bg-gray-50 p-2 rounded-md">
                    {deliveryDetail.DeliveryMan.name || "Não informado"}
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#5DADE2]" /> Telefone
                  </span>
                  <span className="text-gray-900 text-base bg-gray-50 p-2 rounded-md">
                    {deliveryDetail.DeliveryMan.phone || "Não informado"}
                  </span>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-sm font-medium text-gray-500 flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#5DADE2]" /> Tipo de
                    Veículo
                  </span>
                  <span className="text-gray-900 text-base bg-gray-50 p-2 rounded-md">
                    {deliveryDetail.DeliveryMan.Vehicle?.Type?.type ||
                      "Não informado"}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Endereço do Entregador */}
          {deliveryDetail.DeliveryMan?.Address && (
            <Card className="border border-gray-200 shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm hover:shadow-[#5DADE2]/20 transition-all duration-500">
              <CardHeader className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white border-b">
                <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#5DADE2]" /> Endereço do
                  Entregador
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-base text-gray-900">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">
                    {deliveryDetail.DeliveryMan.Address.street},{" "}
                    {deliveryDetail.DeliveryMan.Address.number}
                  </p>
                  <p className="text-gray-600">
                    {deliveryDetail.DeliveryMan.Address.city} -{" "}
                    {deliveryDetail.DeliveryMan.Address.state}
                  </p>
                  <p className="text-gray-600">
                    CEP: {deliveryDetail.DeliveryMan.Address.zipCode}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
