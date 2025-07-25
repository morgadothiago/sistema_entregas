"use client"

import { useAuth } from "@/app/context"
import api from "@/app/services/api"
import { useParams } from "next/navigation"
import React, { use, useEffect } from "react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { io } from "socket.io-client"

export default function page() {
  const { token } = useAuth()
  const { code } = useParams<{ code: string }>()

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

      console.log("Delivery Detail:", response)
    }
  }, [token])

  return (
    <div>
      <div className="">Area do detail</div>
      <div className="">Area do socket</div>
    </div>
  )
}
