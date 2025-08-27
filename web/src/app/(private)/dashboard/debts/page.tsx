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
import { NewBilling } from "@/app/types/Billing"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function BillingPage() {
  const { token, loading, user } = useAuth()
  const [billings, setBillings] = useState<Billing[] | null>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [error, setError] = useState<string | null>(null)
  const [amount, setAmount] = useState<number>(0)
  const [description, setDescription] = useState<string>("")
  const [status, setStatus] = useState<
    "PENDING" | "PAID" | "CANCELED" | "FAILED"
  >("PENDING")

  const router = useRouter()
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
  }, [token, loading, router])

  const fetchBillings = async () => {
    setIsLoading(true)
    try {
      setIsLoading(true)
      const response = await api.getBillings(token as string)

      console.log(response)

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
  }, [token, loading, router])

  function filterBillings(
    billings: Billing[] | undefined,
    searchTerm: string,
    statusFilter: "all" | Billing["status"]
  ): Billing[] {
    const normalizedSearch = searchTerm.toLowerCase()

    return (billings ?? []).filter((b) => {
      const matchesSearch =
        b.key.toLowerCase().includes(normalizedSearch) ||
        b.description.toLowerCase().includes(normalizedSearch)

      const matchesStatus = statusFilter === "all" || b.status === statusFilter

      return matchesSearch && matchesStatus
    })
  }

  const filteredBillings = filterBillings(
    billings as Billing[],
    searchTerm,
    statusFilter as "all" | "PENDING" | "PAID" | "OVERDUE"
  )

  const getStatusColor = (status: string) => {
    status === "PAID"
      ? "bg-green-100 text-green-800"
      : status === "PENDING"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800"
  }

  const handleAddNewBilling = async (data: NewBilling) => {
    try {
      const response = await api.createNewBilling(data, token as string)

      if (response && "message" in response) {
        toast.error(response.message)

        return
      }
      toast.success("Faturamento criado com sucesso")
      setDialogOpen(false)
      fetchBillings()
    } catch (err) {
      toast.error("Erro ao criar novo faturamento")
      console.log(err)
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
                  amount,
                  description,
                  status,
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

      {/* Filtros */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Buscar por chave ou descrição..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="PAID">Pago</SelectItem>
            <SelectItem value="PENDING">Pendente</SelectItem>
            <SelectItem value="OVERDUE">Atrasado</SelectItem>
          </SelectContent>
        </Select>
        {searchTerm || statusFilter !== "all" ? (
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm("")
              setStatusFilter("all")
            }}
          >
            Limpar filtros
          </Button>
        ) : null}
      </div>

      {/* Lista de faturamentos */}
      {isLoading ? (
        <div className="flex items-center justify-center h-40 bg-white rounded-lg">
          <p className="text-gray-500">Carregando...</p>
        </div>
      ) : filteredBillings?.length === 0 ? (
        <Card className="text-center py-12">
          <CardContent>Nenhum faturamento encontrado.</CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBillings?.map((billing) => (
            <Card
              key={billing.key}
              className="hover:shadow-lg transition-shadow cursor-pointer bg-white"
            >
              <CardHeader className="flex flex-col space-y-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg font-bold">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(billing.amount)}
                  </CardTitle>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      billing.status
                    )}`}
                  >
                    {billing.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">
                    {new Date(billing.dueDate).toLocaleDateString("pt-BR")}
                  </p>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="line-clamp-2">
                  {billing.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
