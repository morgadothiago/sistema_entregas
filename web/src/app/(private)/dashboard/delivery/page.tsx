"use client"

import { Truck, Clock, CheckCircle, AlertCircle, MapPin, Package, Calendar, Hash } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for deliveries
const mockDeliveries = [
  {
    id: "DEL-001",
    client: "João Silva",
    address: "Rua das Flores, 123 - Centro",
    status: "pending",
    date: "28/07/2023",
    value: 45.90,
    items: 3
  },
  {
    id: "DEL-002",
    client: "Maria Santos",
    address: "Avenida Paulista, 1000 - Bela Vista",
    status: "in_transit",
    date: "27/07/2023",
    value: 89.50,
    items: 5
  },
  {
    id: "DEL-003",
    client: "Carlos Oliveira",
    address: "Rua Augusta, 500 - Consolação",
    status: "delivered",
    date: "26/07/2023",
    value: 120.00,
    items: 2
  },
  {
    id: "DEL-004",
    client: "Ana Costa",
    address: "Alameda Santos, 200 - Jardins",
    status: "problem",
    date: "25/07/2023",
    value: 65.30,
    items: 4
  },
]

const statusVariants = {
  pending: { label: "Pendente", color: "bg-yellow-100 text-yellow-800" },
  in_transit: { label: "Em trânsito", color: "bg-blue-100 text-blue-800" },
  delivered: { label: "Entregue", color: "bg-green-100 text-green-800" },
  problem: { label: "Problema", color: "bg-red-100 text-red-800" },
}

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

        <div className="space-y-3">
          {mockDeliveries.map((delivery) => (
            <Card key={delivery.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <Hash className="h-4 w-4 text-gray-400" />
                    <span className="font-medium text-gray-900">{delivery.id}</span>
                  </div>
                  <Badge 
                    className={`${
                      statusVariants[delivery.status as keyof typeof statusVariants].color
                    } flex items-center text-xs`}
                  >
                    {statusIcons[delivery.status as keyof typeof statusIcons]}
                    {statusVariants[delivery.status as keyof typeof statusVariants].label}
                  </Badge>
                </div>

                <h3 className="font-semibold text-gray-800 text-lg mb-2">{delivery.client}</h3>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="line-clamp-2">{delivery.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Package className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{delivery.items} itens</span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="font-medium">
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(delivery.value)}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                    <span>{delivery.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}