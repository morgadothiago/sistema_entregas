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
import {
  Edit,
  Plus,
  Search,
  Filter,
  TrendingUp,
  TrendingDown,
  DollarSign,
} from "lucide-react"
import {
  EBillingStatus,
  EBillingType,
  FilteredBillings,
  NewBilling,
} from "@/app/types/Billing"
import DialogModal from "@/app/components/DialogModal"

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
  const [status, setStatus] = useState<EBillingStatus>(EBillingStatus.PENDING)

  const [editingBilling, setEditingBilling] = useState<Billing | null>(null)
  const [editAmount, setEditAmount] = useState<number>(0)
  const [editDescription, setEditDescription] = useState<string>("")
  const [editStatus, setEditStatus] = useState<EBillingStatus>(
    EBillingStatus.PENDING
  )
  const [editType, setEditType] = useState<EBillingType>(EBillingType.INCOME)

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

      // Verifica se é uma resposta de erro ou sucesso
      if (response && "message" in response) {
        // É um erro
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

  console.log("aqui esta buscando os dados", billings)

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
        toast.error(response.message, {
          position: "top-left",
          duration: 5000,
          style: {
            background: "#ef4444",
            color: "white",
            border: "2px solid #dc2626",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "600",
            boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
          },
          icon: "❌",
        })

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

  const handleEditBilling = (billing: Billing) => {
    setEditingBilling(billing)
    setEditAmount(billing.amount || 0)
    setEditDescription(billing.description || "")
    setEditStatus((billing.status as EBillingStatus) || EBillingStatus.PENDING)
    setEditType((billing.type as EBillingType) || EBillingType.INCOME)
    setDialogEditOpen(true)
  }

  const handleUpdateBilling = async () => {
    if (!editingBilling || !user?.id) {
      toast.error("Dados inválidos para edição")
      return
    }

    try {
      const updateData = {
        ...editingBilling,
        amount: editAmount,
        description: editDescription,
        status: editStatus,
        type: editingBilling.type,
      }

      const response = await api.upDateBilling(updateData, token as string)

      if (response && "message" in response) {
        toast.error(response.message, {
          duration: 3000,
          position: "top-right",
          richColors: true,
        })

        return
      }

      toast.success("Faturamento atualizado com sucesso")
      setDialogEditOpen(false)
      setEditingBilling(null)
      fetchBillings()
    } catch (err) {
      toast.error("Erro ao atualizar faturamento")
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[500px]">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-100 border-t-blue-600 mb-6"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-ping"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">
          Carregando faturamentos...
        </p>
        <p className="text-gray-400 text-sm mt-2">Aguarde um momento</p>
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
  const handleNextPage = () => {
    setFilters((prev: any) => {
      return { ...prev, page: (prev?.page || 1) + 1 }
    })
  }
  const handlePrevPage = () => {
    setFilters((prev: any) => {
      return { ...prev, page: (prev?.page || 1) - 1 }
    })
  }

  // Calcular estatísticas
  const totalIncome =
    billings
      ?.filter(
        (b) =>
          b.type === EBillingType.INCOME && b.status === EBillingStatus.PAID
      )
      .reduce((sum, b) => sum + (b.amount || 0), 0) || 0
  const totalExpense =
    billings
      ?.filter(
        (b) =>
          b.type === EBillingType.EXPENSE && b.status === EBillingStatus.PAID
      )
      .reduce((sum, b) => sum + (b.amount || 0), 0) || 0
  const balance = totalIncome - totalExpense

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto p-6 space-y-8">
        {/* Header com gradiente */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 rounded-2xl shadow-2xl">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">
                  Faturamentos
                </h1>
                <p className="text-blue-100 text-lg max-w-2xl">
                  Gerencie todos os seus faturamentos, receitas e despesas de
                  forma inteligente
                </p>
              </div>

              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-3 bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg">
                    <Plus className="w-5 h-5" />
                    Novo Faturamento
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold">
                      Criar Novo Faturamento
                    </DialogTitle>
                    <DialogDescription className="text-gray-600">
                      Preencha os dados para criar um novo faturamento.
                    </DialogDescription>
                  </DialogHeader>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault()
                      if (!user?.id) {
                        setError("Usuário não autenticado")
                        return
                      }
                      handleAddNewBilling({
                        idUser: user?.id as number,
                        amount: amount,
                        type: filters?.type as EBillingType,
                        status: status,
                        description: description,
                      })
                    }}
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Valor
                      </label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="number"
                          placeholder="0.00"
                          required
                          value={amount}
                          onChange={(e) => setAmount(Number(e.target.value))}
                          className="pl-10 h-12 text-lg font-medium"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Descrição
                      </label>
                      <Input
                        placeholder="Descrição do faturamento"
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="h-12 text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700">
                        Status
                      </label>
                      <Select
                        value={status}
                        onValueChange={(val) => setStatus(val as typeof status)}
                      >
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem
                            value={EBillingStatus.PAID}
                            className="bg-green-50 text-green-800 hover:bg-green-100"
                          >
                            Pago
                          </SelectItem>
                          <SelectItem
                            value={EBillingStatus.PENDING}
                            className="bg-yellow-50 text-yellow-800 hover:bg-yellow-100"
                          >
                            Pendente
                          </SelectItem>
                          <SelectItem
                            value={EBillingStatus.CANCELED}
                            className="bg-red-50 text-red-800 hover:bg-red-100"
                          >
                            Cancelado
                          </SelectItem>
                          <SelectItem
                            value={EBillingStatus.FAILED}
                            className="bg-red-50 text-red-800 hover:bg-red-100"
                          >
                            Falhou
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Criar Faturamento
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Cards de estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600">Receitas</p>
                  <p className="text-2xl font-bold text-green-800">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalIncome)}
                  </p>
                </div>
                <div className="p-3 bg-green-200 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-red-600">Despesas</p>
                  <p className="text-2xl font-bold text-red-800">
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(totalExpense)}
                  </p>
                </div>
                <div className="p-3 bg-red-200 rounded-full">
                  <TrendingDown className="w-6 h-6 text-red-700" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">Saldo</p>
                  <p
                    className={`text-2xl font-bold ${
                      balance >= 0 ? "text-blue-800" : "text-red-800"
                    }`}
                  >
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(balance)}
                  </p>
                </div>
                <div className="p-3 bg-blue-200 rounded-full">
                  <DollarSign className="w-6 h-6 text-blue-700" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Barra de busca moderna */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            placeholder="Buscar faturamentos por descrição, valor ou status..."
            className="pl-12 pr-4 h-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-sm hover:shadow-md"
          />
        </div>

        {/* Filtros modernos */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-800">Filtros</h3>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Select
              value={filters?.status}
              onValueChange={handleFilterd("status")}
            >
              <SelectTrigger className="w-full sm:w-[200px] h-12 border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value={EBillingStatus.PAID}
                  className="hover:bg-green-50"
                >
                  Pago
                </SelectItem>
                <SelectItem
                  value={EBillingStatus.PENDING}
                  className="hover:bg-yellow-50"
                >
                  Pendente
                </SelectItem>
                <SelectItem
                  value={EBillingStatus.CANCELED}
                  className="hover:bg-red-50"
                >
                  Cancelado
                </SelectItem>
                <SelectItem
                  value={EBillingStatus.FAILED}
                  className="hover:bg-red-50"
                >
                  Falhou
                </SelectItem>
              </SelectContent>
            </Select>

            <Select value={filters?.type} onValueChange={handleFilterd("type")}>
              <SelectTrigger className="w-full sm:w-[200px] h-12 border-2 border-gray-200 hover:border-blue-300 transition-colors">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem
                  value={EBillingType.INCOME}
                  className="hover:bg-green-50"
                >
                  Entrada
                </SelectItem>
                <SelectItem
                  value={EBillingType.EXPENSE}
                  className="hover:bg-red-50"
                >
                  Saída
                </SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              className="h-12 px-6 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-300"
              onClick={() => setFilters({} as FilteredBillings)}
            >
              Limpar Filtros
            </Button>
          </div>
        </div>

        {/* Lista de faturamentos */}
        {isLoading ? (
          <div className="flex items-center justify-center h-40 bg-white rounded-2xl shadow-sm">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-100 border-t-blue-600 mb-4"></div>
              <p className="text-gray-600 text-lg">
                Carregando faturamentos...
              </p>
            </div>
          </div>
        ) : billings?.length === 0 ? (
          <Card className="text-center py-16 bg-gradient-to-br from-gray-50 to-gray-100 shadow-sm border-2 border-dashed border-gray-300">
            <CardContent>
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Nenhum faturamento encontrado
              </h3>
              <p className="text-gray-500 mb-6">
                Comece criando seu primeiro faturamento para organizar suas
                finanças
              </p>
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => setDialogOpen(true)}
              >
                <Plus className="w-5 h-5 mr-2" />
                Criar Primeiro Faturamento
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {billings?.map((billing) => (
                <Card
                  key={billing.key}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer bg-white border-2 border-gray-100 hover:border-blue-200 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="p-6 pb-4">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`p-2 rounded-full ${
                              billing.type === EBillingType.INCOME
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {billing.type === EBillingType.INCOME ? (
                              <TrendingUp className="w-4 h-4" />
                            ) : (
                              <TrendingDown className="w-4 h-4" />
                            )}
                          </div>
                          <Badge
                            className={`px-3 py-1 text-xs font-medium rounded-full ${
                              billing.status === "PAID"
                                ? "bg-green-100 text-green-700 border-green-200"
                                : billing.status === "PENDING"
                                ? "bg-yellow-100 text-yellow-700 border-yellow-200"
                                : "bg-red-100 text-red-700 border-red-200"
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
                        </div>
                      </div>

                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          }).format(billing?.amount || 0)}
                        </CardTitle>
                        <CardDescription className="text-gray-600 text-sm leading-relaxed">
                          {billing.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pt-0">
                    <div className="flex items-center justify-between">
                      <Badge
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          billing.type === EBillingType.INCOME
                            ? "bg-green-100 text-green-700 border-green-200"
                            : "bg-red-100 text-red-700 border-red-200"
                        }`}
                      >
                        {billing.type === EBillingType.INCOME
                          ? "ENTRADA"
                          : "SAÍDA"}
                      </Badge>

                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full p-2 transition-all duration-300"
                        onClick={() => handleEditBilling(billing)}
                      >
                        <Edit className="h-4 w-4" />
                        <span className="">Editar</span>
                      </Button>

                      <div className="">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-full p-2 transition-all duration-300"
                          onClick={() => {}}
                        >
                          <Edit className="h-4 w-4" />
                          <span className="">Criar ou Editar recibos</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Paginação moderna */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                onClick={handlePrevPage}
                className="h-12 px-6 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                disabled={!filters?.page || filters.page <= 1}
              >
                Anterior
              </Button>

              {filters?.page && (
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 flex items-center justify-center rounded-xl font-semibold shadow-lg">
                  {filters.page}
                </div>
              )}

              <Button
                variant="outline"
                onClick={handleNextPage}
                className="h-12 px-6 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                Próximo
              </Button>
            </div>
          </div>
        )}

        {/* Dialog de edição comentado */}
        <Dialog open={dialogEditOpen} onOpenChange={setDialogEditOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Editar Faturamento
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Edite os dados do faturamento para atualizar.
              </DialogDescription>
            </DialogHeader>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                if (!user?.id) {
                  setError("Usuário não autenticado")
                  return
                }
                handleUpdateBilling()
              }}
            >
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Valor
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="number"
                    placeholder="0.00"
                    required
                    value={editAmount}
                    onChange={(e) => setEditAmount(Number(e.target.value))}
                    className="pl-10 h-12 text-lg font-medium"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Descrição
                </label>
                <Input
                  placeholder="Descrição do faturamento"
                  required
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="h-12 text-base"
                />
              </div>
              <div className="flex w-full gap-4">
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Status
                  </label>
                  <Select
                    value={editStatus}
                    onValueChange={(val) =>
                      setEditStatus(val as typeof editStatus)
                    }
                  >
                    <SelectTrigger className="h-12 w-full">
                      <SelectValue placeholder="Selecione o status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value={EBillingStatus.PAID}
                        className="bg-green-50 text-green-800 hover:bg-green-100"
                      >
                        Pago
                      </SelectItem>
                      <SelectItem
                        value={EBillingStatus.PENDING}
                        className="bg-yellow-50 text-yellow-800 hover:bg-yellow-100"
                      >
                        Pendente
                      </SelectItem>
                      <SelectItem
                        value={EBillingStatus.CANCELED}
                        className="bg-red-50 text-red-800 hover:bg-red-100"
                      >
                        Cancelado
                      </SelectItem>
                      <SelectItem
                        value={EBillingStatus.FAILED}
                        className="bg-red-50 text-red-800 hover:bg-red-100"
                      >
                        Falhou
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2 flex-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Tipo
                  </label>
                  <Select
                    value={editType}
                    onValueChange={(val) => setEditType(val as typeof editType)}
                  >
                    <SelectTrigger className="h-12 w-full">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem
                        value={EBillingType.INCOME}
                        className="bg-green-50 text-green-800 hover:bg-green-100"
                      >
                        Entrada
                      </SelectItem>
                      <SelectItem
                        value={EBillingType.EXPENSE}
                        className="bg-red-50 text-red-800 hover:bg-red-100"
                      >
                        Saída
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Atualizar Faturamento
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
