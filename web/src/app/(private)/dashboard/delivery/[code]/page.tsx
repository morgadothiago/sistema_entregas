"use client"

import { useAuth } from "@/app/context"
import api from "@/app/services/api"
import { Delivery } from "@/app/types/DeliveryTypes"
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

export default function page() {
  const { token } = useAuth()
  const { code } = useParams<{ code: string }>()
  const [deliveryDetails, setDeliveryDetails] = useState<Delivery | null>(null)

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
    socket.on("menssage", (data) => {
      console.log("Socket message received:", data)
    })

    const fetchDeliveryDetail = async () => {
      const response = await api.getDeliveryDetail(
        code,
        token as string,
        socket.id as string
      )
      if ("error" in response) {
        toast.error("Erro ao carregar detalhes da entrega")
      } else {
        toast.success("Dados recebidos com sucesso!", {
          description: "Você pode ver os detalhes da entrega",
          duration: 3000,
          position: "top-right",
          richColors: true,
        })
        setDeliveryDetails(response)
      }
      console.log("Delivery Detail:", response)
    }
  }, [token])

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
          <CardContent className="h-96 flex items-center justify-center">
            {/* Substitua pelo seu componente de mapa */}
            <span className="text-muted-foreground">Mapa aqui</span>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
