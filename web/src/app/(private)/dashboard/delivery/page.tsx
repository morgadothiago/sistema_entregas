"use client"

import {
  Truck,
  Clock,
  CheckCircle,
  AlertCircle,
  MapPin,
  Package,
  Calendar,
  Hash,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for deliveries

const statusIcons = {
  pending: <Clock className="h-4 w-4 mr-2" />,
  in_transit: <Truck className="h-4 w-4 mr-2" />,
  delivered: <CheckCircle className="h-4 w-4 mr-2" />,
  problem: <AlertCircle className="h-4 w-4 mr-2" />,
}

export default function DeliveryListPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Entregas</h1>
          <p className="text-gray-500 text-sm">Lista de entregas cadastradas</p>
        </div>

        <div className="space-y-3"></div>
      </div>
    </div>
  )
}
