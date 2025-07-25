"use client"

import { useAuth } from "@/app/context"
import api from "@/app/services/api"
import { useParams } from "next/navigation"
import React, { useEffect } from "react"

export default function page() {
  const { token } = useAuth()
  const { code } = useParams<{ code: string }>()

  useEffect(() => {
    if (!token) return

    const fetchDeliveryDetail = async () => {
      const response = await api.getDeliveryDetail(code, token as string)

      console.log("Delivery Detail:", response)
    }

    fetchDeliveryDetail()
  }, [token])

  return <div>meu codigo e: {code}</div>
}
