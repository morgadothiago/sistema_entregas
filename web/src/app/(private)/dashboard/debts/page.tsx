"use client"

import { useAuth } from "@/app/context"
import api from "@/app/services/api"
import { Billing } from "@/app/types/Debt"
import { useEffect, useState } from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
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
import { Edit, Plus, Search } from "lucide-react"
import {
  EBillingStatus,
  EBillingType,
  FilteredBillings,
  NewBilling,
} from "@/app/types/Billing"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"

export default function BillingPage() {
  const { token, loading, user } = useAuth()
  const [billings, setBillings] = useState<Billing[] | null>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [dialogEditOpen, setDialogEditOpen] = useState(false)

  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<FilteredBillings>()

  const [amount, setAmount] = useState<number>(0)
  const [description, setDescription] = useState<string>("")
  const [status, setStatus] = useState<
    "PENDING" | "PAID" | "CANCELED" | "FAILED"
  >("PENDING")

  const router = useRouter()

  const fetchBillings = async () => {
    setIsLoading(true)
    try {
      setIsLoading(true)
      const response = await api.getBillings(token as string, {
        page: filters?.page,
        limit: filters?.limit,
        amount: filters?.amount,
        type: filters?.type,
        status: filters?.status,
        description: filters?.description,
      })

      console.log("Aqui esta buscando os dados", response)

      // Verifica se é uma resposta de erro ou sucesso
      if (response && "message" in response) {
        // É um erro
        setError(response.message)
        toast.error(error)
        setBillings([])
      } else if (
        response &&
        "data" in response &&
        Array.isArray(response.data)
      ) {
        // É uma resposta de sucesso com dados
        toast.success("Faturamentos carregados com sucesso")
        setBillings(response.data)
      } else {
        setBillings([])
      }
      setIsLoading(false)
    } catch (err) {
      setError("Erro ao carregar as entregas. Tente novamente.")
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!loading && !token) {
      signOut({
        callbackUrl: "/signin",
        redirect: true,
      })
      router.push("/signin")
      return
    }
    fetchBillings()
  }, [token, loading, router, filters])

  const handleAddNewBilling = async (data: FilteredBillings) => {
    try {
      if (typeof data.idUser !== "number") {
        toast.error("Usuário não autenticado")
        return
      }
      // Ensure idUser is always a number
      const billingData = {
        ...data,
        idUser: data.idUser as number,
      }
      const response = await api.createNewBilling(billingData, token as string)

      if (response && "message" in response) {
        toast.error(response.message)

        return
      }
      toast.success("Faturamento criado com sucesso")
      setDialogOpen(false)
      fetchBillings()
      setBillings(response.data || [])
    } catch (err) {
      toast.error("Erro ao criar novo faturamento")
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-600 text-lg">Carregando faturamentos...</p>
      </div>
    )
  }

  const handleFilterd = (prop: keyof FilteredBillings) => {
    return (data: any) => {
      setFilters((prev: any) => {
        return { ...prev, [prop]: data }
      })
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-lg shadow-sm">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Faturamentos</h1>
          <p className="text-gray-500 mt-1">
            Gerencie todos os seus faturamentos e recibos
          </p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
              <Plus className="w-4 h-4" />
              Novo Faturamento
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Criar Novo Faturamento</DialogTitle>
              <DialogDescription>
                Preencha os dados para criar um novo faturamento.
              </DialogDescription>
            </DialogHeader>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                if (!user?.id) {
                  setError("Usuário não autenticado")
                  return
                }
                handleAddNewBilling({
                  idUser: user?.id as number,
                  amount: filters?.amount || 0,
                  type: filters?.type as EBillingType,
                  status: filters?.status as EBillingStatus,
                  description: filters?.description as string,
                })
              }}
            >
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Status</label>
                <div className="space-y-1">
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
                      <SelectItem
                        value="FAILED"
                        className="bg-red-100 text-red-800"
                      >
                        Falhou
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
      </div>

      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none outline-blue-400" />
        <Input
          placeholder="Buscar faturamentos..."
          className="pl-10 pr-10 py-2 rounded-2xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
        />
      </div>

      {/* Filtros */}
      <div className=" flex flex-col  sm:flex-row sm:items-center gap-4  p-4 rounded-lg shadow-sm">
        <Select value={filters?.status} onValueChange={handleFilterd("status")}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="PAID">Pago</SelectItem>
            <SelectItem value="PENDING">Pendente</SelectItem>
            <SelectItem value="CANCELED">Cancelado</SelectItem>
            <SelectItem value="FAILED">Falhou</SelectItem>
          </SelectContent>
        </Select>

        {/* Type Filter */}

        <Select value={filters?.status} onValueChange={handleFilterd("status")}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="INCOME">ENTRADA DE VALOR</SelectItem>
            <SelectItem value="EXPENSE">SAIDA DE VALOR</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          className="w-full sm:w-auto bg-blue-400 hover:bg-blue-500 text-white hover:text-white"
          onClick={() => setFilters({} as FilteredBillings)}
        >
          Limpar filtros
        </Button>
      </div>

      {/* Lista de faturamentos */}
      {isLoading ? (
        <div className="flex items-center justify-center h-40 bg-white rounded-lg">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600 text-lg">Carregando faturamentos...</p>
          </div>
        </div>
      ) : billings?.length === 0 ? (
        <Card className="text-center py-12 bg-gray-50 shadow-md">
          <CardContent>
            <p className="text-gray-500 text-lg">
              Nenhum faturamento encontrado.
            </p>
            <Button
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => setDialogOpen(true)}
            >
              Criar Novo Faturamento
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {billings?.map((billing) => (
            <Card
              key={billing.key}
              className="hover:shadow-lg transition-shadow cursor-pointer bg-white border border-gray-200 rounded-lg"
            >
              <CardHeader className="flex flex-col space-y-2 p-4">
                <div className="flex flex-col   justify-between  items-start w-full gap-3.5">
                  <CardTitle className="text-lg font-bold text-gray-800">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(billing?.amount || 0)}
                  </CardTitle>
                  <div className="flex flex-row justify-end items-end  w-full gap-2">
                    <Badge
                      className={`px-2 py-1 text-sm ${
                        billing.status === "PAID"
                          ? "bg-green-100 text-green-800"
                          : billing.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {{
                        PAID: "Pago",
                        PENDING: "Pendente",
                        CANCELED: "Cancelado",
                        FAILED: "Falhou",
                      }[billing?.status as keyof typeof EBillingStatus] ||
                        "Desconhecido"}
                    </Badge>
                    <Badge
                      className={`px-2 py-1 text-sm rounded-md ${
                        billing.type === EBillingType.INCOME
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {billing.type === EBillingType.INCOME
                        ? "ENTRADA"
                        : "SAÍDA"}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-gray-600 line-clamp-2">
                  {billing.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => {
                    setDialogEditOpen(true)
                  }}
                >
                  <Edit className="h-4 w-4" /> Editar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Dialog de atualizar */}
      {/* <Dialog open={dialogEditOpen} onOpenChange={setDialogEditOpen}>
        <DialogTrigger asChild>
          <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4" />
            Novo Faturamento
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Editar o faturamento</DialogTitle>
            <DialogDescription>
              Preencha os dados para criar um novo faturamento.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4">
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filtrar por status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="PAID">Pendente</SelectItem>
                  <SelectItem value="PENDING">Pendente</SelectItem>
                  <SelectItem value="CANCELED">Cancelado</SelectItem>
                  <SelectItem value="FAILED">Falhou</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Descrição" />
              Editar Faturamento
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div> */}
    </div>
  )
}
