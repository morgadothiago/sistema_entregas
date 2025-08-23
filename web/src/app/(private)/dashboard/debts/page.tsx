"use client"

import { useEffect, useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { toast } from "sonner"
import {
  Plus,
  Search,
  Edit,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import api from "@/app/services/api"
import { useAuth } from "@/app/context"
import { Billing } from "@/app/types/Debt"
import { User } from "@/app/types/User"
import { SelectItem } from "@radix-ui/react-select"
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function BillingDashboard() {
  // State
  const [billings, setBillings] = useState<Billing[]>([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBilling, setSelectedBilling] = useState<Billing | null>(null)
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [isReceiptDialogOpen, setIsReceiptDialogOpen] = useState(false)

  // Pagination state
  const [totalItems, setTotalItems] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  // Auth and routing
  const { token, isAuthenticated, user } = useAuth()
  const router = useRouter()
  const [userInfo, setUserInfo] = useState<User | null>(null)
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Fetch billings with optional pagination + retry
  const fetchBillings = async (
    page: number = 1,
    perPage: number = itemsPerPage,
    retries: number = 2
  ) => {
    if (!token) return

    setLoading(true)
    try {
      console.log("Fetching billings with page:", page, "perPage:", perPage)

      const response = await api.getBillings(page, perPage, token)
      console.log("API Response:", response)

      if (response && "data" in response) {
        const items = Array.isArray(response.data)
          ? response.data
          : response.data || []

        setBillings(items)
        setTotalItems(items.length)
        const calculatedPages =
          items.length > 0 ? Math.ceil(items.length / perPage) : 0
        setTotalPages(calculatedPages || 1)
        setCurrentPage(page)
      } else {
        console.error("Invalid response format:", response)
        toast.error("Formato de resposta inválido da API")
      }
    } catch (error: any) {
      if (error.response?.status === 429 && retries > 0) {
        console.warn("Rate limit atingido, tentando novamente...")
        setTimeout(() => fetchBillings(page, perPage, retries - 1), 1000)
      } else {
        console.error("Error fetching billings:", error)
        toast.error(error.response?.data?.message || "Erro ao carregar faturas")
      }
    } finally {
      setLoading(false)
    }
  }

  // ✅ Unificado: só um useEffect para evitar chamadas duplicadas
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin")
      return
    }

    if (token) {
      setUserInfo(user)
      fetchBillings(currentPage, itemsPerPage)
    }
  }, [isAuthenticated, token, currentPage, itemsPerPage, user, router])

  // Create a new billing
  const handleCreateBilling = async (formData: FormData) => {
    const newBilling = {
      amount: Number(formData.get("amount")),
      description: formData.get("description") as string,
      status: "PENDING" as const,
      key: formData.get("key") as string,
      idUser: userInfo?.id,
    }

    try {
      await api.newBilling(newBilling, token as string)
      toast.success("Fatura criada com sucesso!")
      fetchBillings(currentPage, itemsPerPage)
      setIsCreateDialogOpen(false)
    } catch (error: any) {
      console.error("API Error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Erro ao criar faturamento")
    }
  }

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setCurrentPage(1)
  }

  // Debounce search
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300)
    return () => clearTimeout(handler)
  }, [searchTerm])

  // Filter billings
  const filteredBillings = useMemo(() => {
    return billings.filter((billing) => {
      if (statusFilter !== "all" && billing.status !== statusFilter) {
        return false
      }
      if (debouncedSearchTerm) {
        const searchTermLower = debouncedSearchTerm.toLowerCase()
        return (
          (billing.key || "").toLowerCase().includes(searchTermLower) ||
          (billing.description || "").toLowerCase().includes(searchTermLower) ||
          billing.status.toLowerCase().includes(searchTermLower) ||
          billing.amount.toString().includes(debouncedSearchTerm)
        )
      }
      return true
    })
  }, [billings, statusFilter, debouncedSearchTerm])

  // Atualiza totalItems quando filteredBillings mudar
  useEffect(() => {
    setTotalItems(filteredBillings.length)
  }, [filteredBillings.length])

  // Paginação
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      fetchBillings(page, itemsPerPage).then(() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      )
    }
  }

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
    setCurrentPage(1)
    fetchBillings(1, items)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Status badge
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PAID":
        return "bg-green-100 text-green-800"
      case "PENDING":
        return "bg-yellow-100 text-yellow-800"
      case "OVERDUE":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Faturamento</h1>
          <p className="text-muted-foreground">
            Gerencie todos os seus faturamentos e recibos
          </p>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Novo Faturamento
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Criar Novo Faturamento</DialogTitle>
              <DialogDescription>
                Preencha os dados para criar um novo faturamento.
              </DialogDescription>
            </DialogHeader>
            <form action={handleCreateBilling} className="space-y-4">
              <div>
                <Label htmlFor="amount">Valor</Label>
                <Input
                  id="amount"
                  name="amount"
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  required
                />
              </div>
              <div>
                <Label htmlFor="description">Descrição</Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Descrição do faturamento"
                  required
                />
              </div>
              <div>
                <Label htmlFor="key">Chave</Label>
                <Input
                  id="key"
                  name="key"
                  placeholder="Chave de identificação"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Criar Faturamento
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar por chave, descrição, status ou valor..."
              className="pl-9 w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="w-full sm:w-48">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="all">Todos os status</option>
              <option value="PENDING">Pendente</option>
              <option value="PAID">Pago</option>
              <option value="OVERDUE">Atrasado</option>
            </select>
          </div>
          {(searchTerm || statusFilter !== "all") && (
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setDebouncedSearchTerm("")
                setStatusFilter("all")
              }}
              className="whitespace-nowrap"
            >
              Limpar filtros
            </Button>
          )}
        </div>
      </div>

      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          {filteredBillings.length} resultado
          {filteredBillings.length !== 1 ? "s" : ""} para "{searchTerm}"
        </div>
      )}

      <div className="grid gap-6">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Carregando...</p>
          </div>
        ) : filteredBillings.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">
                Nenhum faturamento encontrado
              </h3>
              <p className="text-muted-foreground">
                {searchTerm
                  ? "Tente ajustar sua pesquisa"
                  : "Comece criando seu primeiro faturamento"}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredBillings.map((billing: Billing, index: number) => (
            <Card
              key={`billing-${billing.id || `index-${index}`}`}
              className="hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CardTitle className="text-lg">{billing.key}</CardTitle>
                    <Badge className={getStatusColor(billing.status)}>
                      {billing.status === "PAID"
                        ? "Pago"
                        : billing.status === "PENDING"
                        ? "Pendente"
                        : "Vencido"}
                    </Badge>
                  </div>
                  <div className="text-xl font-bold">
                    R${" "}
                    {billing.amount.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </div>
                </div>
                <CardDescription>{billing.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Criado em:{" "}
                    {new Date(billing.createdAt).toLocaleDateString("pt-BR")}
                    {billing.receipts && billing.receipts.length > 0 && (
                      <span className="ml-4">
                        {billing.receipts.length} recibo(s)
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4 mr-1" />
                          Editar
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Editar Faturamento</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4">
                          <div>
                            <Label htmlFor="edit-amount">Valor</Label>
                            <Input
                              id="edit-amount"
                              name="amount"
                              type="number"
                              step="0.01"
                              defaultValue={billing.amount}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-description">Descrição</Label>
                            <Textarea
                              id="edit-description"
                              name="description"
                              defaultValue={billing.description}
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label
                              htmlFor="status"
                              className="text-sm font-medium text-gray-700"
                            >
                              Status
                            </Label>
                            <Select name="status" defaultValue={billing.status}>
                              <SelectTrigger className="w-full h-10 px-3 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors">
                                <SelectValue>
                                  {billing.status && (
                                    <div className="flex items-center">
                                      <span
                                        className={`w-2 h-2 rounded-full mr-2 ${
                                          billing.status === "PENDING"
                                            ? "bg-yellow-500"
                                            : billing.status === "PAID"
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                        }`}
                                      />
                                      {billing.status === "PENDING"
                                        ? "Pendente"
                                        : billing.status === "PAID"
                                        ? "Pago"
                                        : "Atrasado"}
                                    </div>
                                  )}
                                </SelectValue>
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
                                <SelectItem
                                  value="PENDING"
                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                                    Pendente
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  value="PAID"
                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                    Pago
                                  </div>
                                </SelectItem>
                                <SelectItem
                                  value="OVERDUE"
                                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                                >
                                  <div className="flex items-center">
                                    <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                                    Atrasado
                                  </div>
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <Button type="submit" className="w-full">
                            Atualizar
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 p-4 bg-gray-50 rounded-lg border">
            <div className="text-sm text-gray-600">
              Mostrando {filteredBillings.length} de {totalItems} itens
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-1"
              >
                Primeira
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex items-center gap-1 mx-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number
                  if (totalPages <= 5) {
                    pageNum = i + 1
                  } else if (currentPage <= 3) {
                    pageNum = i + 1
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i
                  } else {
                    pageNum = currentPage - 2 + i
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      className={`w-10 h-10 ${
                        currentPage === pageNum ? "font-bold" : ""
                      }`}
                      onClick={() => handlePageChange(pageNum)}
                    >
                      {pageNum}
                    </Button>
                  )
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-1"
              >
                Última
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-600">Itens por página:</span>
              <select
                value={itemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(Number(e.target.value))
                }
                className="border rounded p-1 text-sm w-16 text-center"
                disabled={loading}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
