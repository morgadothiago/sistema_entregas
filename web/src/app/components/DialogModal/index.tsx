"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react"
import { NewBilling } from "@/app/types/Billing"

interface BillingDialogProps {
  triggerText?: string
  title?: string
  description?: string
  onSubmit: (data: NewBilling) => void
  initialAmount?: number
  initialDescription?: string
  initialStatus?: "PENDING" | "PAID" | "CANCELED" | "FAILED"
  userId: number
}

export function BillingDialog({
  triggerText = "Novo Faturamento",
  title = "Criar Novo Faturamento",
  description = "Preencha os dados para criar um novo faturamento.",
  onSubmit,
  initialAmount = 0,
  initialDescription = "",
  initialStatus = "PENDING",
  userId,
}: BillingDialogProps) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [amount, setAmount] = useState<number>(initialAmount)
  const [billingDescription, setBillingDescription] =
    useState<string>(initialDescription)
  const [status, setStatus] = useState<
    "PENDING" | "PAID" | "CANCELED" | "FAILED"
  >(initialStatus)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({
      idUser: userId,
      amount,
      description: billingDescription,
      status,
    })
    setDialogOpen(false)
    setAmount(initialAmount)
    setBillingDescription(initialDescription)
    setStatus(initialStatus)
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" /> {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-sm font-medium">Valor</label>
            <Input
              type="number"
              placeholder="0.00"
              required
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Descrição</label>
            <Input
              placeholder="Descrição do faturamento"
              required
              value={billingDescription}
              onChange={(e) => setBillingDescription(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium">Status</label>
            <Select
              value={status}
              onValueChange={(val) => setStatus(val as typeof status)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecione o status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value="PAID"
                  className="bg-green-100 text-green-800"
                >
                  Pago
                </SelectItem>
                <SelectItem
                  value="PENDING"
                  className="bg-yellow-100 text-yellow-800"
                >
                  Pendente
                </SelectItem>
                <SelectItem
                  value="CANCELED"
                  className="bg-red-100 text-red-800"
                >
                  Cancelado
                </SelectItem>
                <SelectItem value="FAILED" className="bg-red-100 text-red-800">
                  Falhou
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Criar Faturamento
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
