"use client"

import { useAuth } from "@/app/context"
import api from "@/app/services/api"
import { Delivery, DeliveryRoutes } from "@/app/types/DeliveryTypes"
import { useParams } from "next/navigation"
import React, { use, useEffect, useState } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { io } from "socket.io-client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { toast } from "sonner"
import { StatusBadge } from "@/app/components/StatusBadge"
import { deliveryLabels } from "@/app/components/deliveryLabels"
import LeafletMap from "../../simulate/_LeafletMap"

export default function page() {
  const { token } = useAuth()
  const { code } = useParams<{ code: string }>()
  const [deliveryDetails, setDeliveryDetails] = useState<Delivery | null>(null)
  const [routes, setRoutes] = useState<[number, number][]>([])

  useEffect(() => {
    if (!token) return

    const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
      transports: ["websocket"],
      auth: {
        token: `barrer ${token}`,
      },
    })
    socket.on("connect", async () => {
      console.log("Socket connected")

      await fetchDeliveryDetail()
    })
    socket.on("disconnect", () => {
      console.log("Socket disconnected")
    })
    socket.on("update-location", (data: DeliveryRoutes) => {
      setRoutes((routes) => [...routes, [data.latitude, data.longitude]])
    })

    const fetchDeliveryDetail = async () => {
      const response = await api.getDeliveryDetail(
        code,
        token as string,
        socket.id as string
      )
      console.log(socket.id, "Socket ID")

      if ("message" in response) {
        toast.error("Erro ao carregar detalhes da entrega")
        return
      }
      toast.success("Dados recebidos com sucesso!", {
        description: "Você pode ver os detalhes da entrega",
        duration: 3000,
        position: "top-right",
        richColors: true,
      })
      setDeliveryDetails(response as Delivery)
      setRoutes(
        response.Routes.map((r) => [Number(r.latitude), Number(r.longitude)])
      )

      console.log("Delivery Detail:", response)
    }
  }, [token])

  console.log("Delivery Details: ckient", deliveryDetails?.ClientAddress)
  console.log("Delivery Details: Origim", deliveryDetails?.OriginAddress)

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-5xl mx-auto">
      <div className="flex-1 p-5">
        {deliveryDetails ? (
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Detalhes da Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(deliveryDetails).map(([key, value]) => {
                  return (
                    <div
                      key={key}
                      className="flex flex-col gap-1 p-3 border rounded-md bg-muted/50"
                    >
                      <span className="text-xs text-muted-foreground font-medium mb-1">
                        {deliveryLabels[key] || key}
                      </span>
                      {key === "status" ? (
                        <StatusBadge status={value as any} />
                      ) : key === "Routes" && Array.isArray(value) ? (
                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value="rotas">
                            <AccordionTrigger>
                              Ver rotas ({value.length})
                            </AccordionTrigger>
                            <AccordionContent>
                              {value.length === 0 ? (
                                <span className="text-muted-foreground">
                                  Nenhuma rota
                                </span>
                              ) : (
                                <div className="flex flex-col gap-2">
                                  {value.map((route, idx) => (
                                    <div
                                      key={idx}
                                      className="text-xs p-2 bg-background rounded border"
                                    >
                                      <span>Lat: {route.latitude}</span>
                                      <br />
                                      <span>Lng: {route.longitude}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      ) : key === "isFragile" ? (
                        <span className="font-semibold text-primary">
                          {value ? "Sim" : "Não"}
                        </span>
                      ) : key === "email" ? (
                        <span className="font-semibold text-primary text-xs break-all">
                          {String(value)}
                        </span>
                      ) : (
                        <span className="font-semibold text-primary break-words">
                          {String(value)}
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center text-muted-foreground">
            Carregando detalhes...
          </div>
        )}
      </div>
      <div className="flex-1 flex items-stretch">
        <Card className="w-full h-full">
          <CardHeader>
            <CardTitle>Mapa</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 p-4">
            {/* Mapa */}
            <div className="w-full h-64 flex flex-col rounded-lg overflow-hidden border bg-muted/40 shadow-sm">
              <div className="px-4 py-2 border-b bg-background flex items-center gap-2">
                <span className="font-semibold text-primary text-base">
                  Rota da Entrega
                </span>
              </div>
              <div className="flex-1 w-full h-full">
                {deliveryDetails?.Routes &&
                deliveryDetails.Routes.length > 0 ? (
                  <LeafletMap
                    route={routes}
                    addressOrigem={{
                      latitude: deliveryDetails.OriginAddress.latitude,
                      longitude: deliveryDetails.OriginAddress.longitude,
                    }}
                    clientAddress={{
                      latitude: deliveryDetails.ClientAddress.latitude,
                      longitude: deliveryDetails.ClientAddress.longitude,
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-muted-foreground text-sm">
                    Mapa ou rota não disponível.
                  </div>
                )}
              </div>
            </div>

            {/* Progresso da Entrega */}
            <div className="w-full flex flex-col gap-4 rounded-lg overflow-hidden border bg-muted/40 shadow-sm">
              <div className="px-4 py-2 border-b bg-background flex items-center gap-2">
                <span className="font-semibold text-primary text-base">
                  Progresso da Entrega (atualizado em tempo real via socket)
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center gap-4 p-4">
                <div className="flex flex-col items-center gap-2 w-full">
                  <span className="text-sm text-muted-foreground">
                    Status atual
                  </span>
                  {deliveryDetails?.status ? (
                    <div className="mb-2">
                      <StatusBadge status={deliveryDetails.status as any} />
                    </div>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Indisponível
                    </span>
                  )}
                </div>
                {/* Timeline */}
                <div className="w-full flex flex-col gap-2 max-w-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs">Criada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`
                        w-2 h-2 rounded-full
                        ${
                          deliveryDetails?.status === "IN_PROGRESS" ||
                          deliveryDetails?.status === "COMPLETED"
                            ? "bg-blue-500"
                            : "bg-gray-300"
                        }
                      `}
                    />
                    <span className="text-xs">Em andamento</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`
                        w-2 h-2 rounded-full
                        ${
                          deliveryDetails?.status === "COMPLETED"
                            ? "bg-green-700"
                            : deliveryDetails?.status === "CANCELLED"
                            ? "bg-red-500"
                            : "bg-gray-300"
                        }
                      `}
                    />
                    <span className="text-xs">
                      {deliveryDetails?.status === "COMPLETED"
                        ? "Concluída"
                        : deliveryDetails?.status === "CANCELLED"
                        ? "Cancelada"
                        : "Concluída"}
                    </span>
                  </div>
                </div>
              </div>
              {/* Informações extras */}
              <div className="px-4 pb-2 text-xs text-muted-foreground text-center">
                {/* Última atualização: não exibido pois não existe updatedAt */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
