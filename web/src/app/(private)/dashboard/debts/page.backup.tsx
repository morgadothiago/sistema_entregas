"use client"

import { useEffect, useState } from "react"
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { toast } from "sonner"
import {
  Plus,
  Search,
  Edit,
  Receipt as ReceiptIcon,
  CreditCard,
  FileText,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react"
import api from "@/app/services/api"
import { useAuth } from "@/app/context"
import { Billing, Receipt } from "@/app/types/Debt"
import { User } from "@/app/types/User"

// Type for the API response
interface BillingApiResponse {
  id: string
  key: string
  amount: number
  status: "PENDING" | "PAID" | "OVERDUE"
  description: string
  createdAt: string
  dueDate: string
  receipts?: Receipt[]
}

interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  totalPages: number
}

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
  const [searchInput, setSearchInput] = useState("")
  const [statusFilter, setStatusFilter] = useState<string>("all")

  // Fetch billings on component mount and when token changes
  useEffect(() => {
    if (token) {
      fetchBillings(currentPage, itemsPerPage)
    }
  }, [token])

  // Fetch billings with optional pagination
  const fetchBillings = async (
    page: number = 1,
    perPage: number = itemsPerPage
  ) => {
    if (!token) return

    setLoading(true)
    try {
      console.log("Fetching billings with page:", page, "perPage:", perPage)

      const response = await api.getBillings(page, perPage, token)
      console.log("API Response:", response)

      if (response) {
        // The response is already the data we need (items array with pagination info)
        const items = Array.isArray(response) ? response : response.data || []

        // Set the billings data
        setBillings(items)

        // For now, set a default total items count
        // The API should ideally return pagination info, but we'll handle if it doesn't
        setTotalItems(items.length)

        // Set a default total pages (1 if we have items, 0 if not)
        const calculatedPages =
          items.length > 0 ? Math.ceil(items.length / perPage) : 0
        setTotalPages(calculatedPages || 1)

        setCurrentPage(page)
      } else {
        console.error("Invalid response format:", response)
        toast.error("Formato de resposta inválido da API")
      }
    } catch (error: any) {
      console.error("Error fetching billings:", error)
      toast.error(error.response?.data?.message || "Erro ao carregar faturas")
    } finally {
      setLoading(false)
    }
  }

  // Handle authentication and initial data fetch
  useEffect(() => {
    setUserInfo(user)
    if (!isAuthenticated) {
      router.push("/signin")
    } else {
      fetchBillings(currentPage)
    }
  }, [isAuthenticated, router, token])

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
      fetchBillings(currentPage)
      setIsCreateDialogOpen(false)
    } catch (error: any) {
      console.error("API Error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Erro ao criar faturamento")
    }
  }

  // Add receipt to a billing
  const handleAddReceipt = async (billing: Billing, receiptData: Receipt) => {
    try {
      const updatedBilling = {
        ...billing,
        receipts: [...(billing.receipts || []), receiptData],
        status: "PAID" as const,
      }

      // Update local state
      setBillings((prev) =>
        prev.map((b) => (b.id === billing.id ? updatedBilling : b))
      )

      toast.success("Recibo adicionado com sucesso!")
      setIsReceiptDialogOpen(false)
    } catch (error) {
      console.error("Error adding receipt:", error)
      toast.error("Erro ao adicionar recibo")
    }
  }

  // Handle search input change
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    setCurrentPage(1) // Reset to first page when searching
  }

  // Debounced search term to avoid too many re-renders
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 300) // 300ms delay

    return () => {
      clearTimeout(handler)
    }
  }, [searchTerm])

  // Filter billings based on search term and status
  const filteredBillings = billings.filter((billing: Billing) => {
    // Apply status filter
    if (statusFilter !== "all" && billing.status !== statusFilter) {
      return false
    }

    // Apply search term filter
    if (debouncedSearchTerm) {
      const searchTermLower = debouncedSearchTerm.toLowerCase()
      return (
        billing.key?.toLowerCase().includes(searchTermLower) ||
        billing.description?.toLowerCase().includes(searchTermLower) ||
        billing.status?.toLowerCase().includes(searchTermLower) ||
        billing.amount?.toString().includes(debouncedSearchTerm)
      )
    }

    return true
  })

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      console.log("Changing to page:", page)
      setCurrentPage(page)
      fetchBillings(page, itemsPerPage).then(() => {
        // Scroll to top after the data is loaded
        window.scrollTo({ top: 0, behavior: "smooth" })
      })
    }
  }

  // Handle items per page change
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items)
    setCurrentPage(1)
    fetchBillings(1, items)
    // Scroll to top when changing items per page
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Calculate pagination info
  const startIndex = (currentPage - 1) * itemsPerPage + 1
  const endIndex = Math.min(
    startIndex + itemsPerPage - 1,
    filteredBillings.length
  )
  // Update totalItems when filteredBillings changes
  useEffect(() => {
    setTotalItems(filteredBillings.length)
  }, [filteredBillings.length])

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PAID":
        return "bg-green-100 text-green-800"
      case "PENDING":
        return "bg-yellow-100 text-yellow-800"
      case "OVERDUE":
        return "bg-red-100 text-red-800"
      default:
        console.warn(`Unknown status: ${status}`)
  }

  try {
    await api.newBilling(newBilling, token as string)
    toast.success("Fatura criada com sucesso!")
    fetchBillings(currentPage)
    setIsCreateDialogOpen(false)
  } catch (error: any) {
    console.error("API Error:", error.response?.data || error.message)
    toast.error(error.response?.data?.message || "Erro ao criar faturamento")
  }
}

// Add receipt to a billing
const handleAddReceipt = async (billing: Billing, receiptData: Receipt) => {
  try {
    const updatedBilling = {
      ...billing,
      receipts: [...(billing.receipts || []), receiptData],
      status: "PAID" as const,
    }

    // Update local state
    setBillings((prev) =>
      prev.map((b) => (b.id === billing.id ? updatedBilling : b))
    )

    toast.success("Recibo adicionado com sucesso!")
    setIsReceiptDialogOpen(false)
  } catch (error) {
    console.error("Error adding receipt:", error)
    toast.error("Erro ao adicionar recibo")
  }
}

// Handle search input change
const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value
  setSearchTerm(value)
  setCurrentPage(1) // Reset to first page when searching
}

// Debounced search term to avoid too many re-renders
const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)

useEffect(() => {
  const handler = setTimeout(() => {
    setDebouncedSearchTerm(searchTerm)
  }, 300) // 300ms delay

  return () => {
    clearTimeout(handler)
  }
}, [searchTerm])

// Filter billings based on search term and status
const filteredBillings = billings.filter((billing: Billing) => {
  // Apply status filter
  if (statusFilter !== "all" && billing.status !== statusFilter) {
    return false
  }

  // Apply search term filter
  if (debouncedSearchTerm) {
    const searchTermLower = debouncedSearchTerm.toLowerCase()
    return (
      billing.key?.toLowerCase().includes(searchTermLower) ||
      billing.description?.toLowerCase().includes(searchTermLower) ||
      billing.status?.toLowerCase().includes(searchTermLower) ||
      billing.amount?.toString().includes(debouncedSearchTerm)
    )
  }

  return true
})

// Handle page change
const handlePageChange = (page: number) => {
  if (page >= 1 && page <= totalPages) {
    console.log("Changing to page:", page)
    setCurrentPage(page)
    fetchBillings(page, itemsPerPage).then(() => {
      // Scroll to top after the data is loaded
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  }
}

// Handle items per page change
const handleItemsPerPageChange = (items: number) => {
  setItemsPerPage(items)
  setCurrentPage(1)
  fetchBillings(1, items)
  // Scroll to top when changing items per page
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Calculate pagination info
const startIndex = (currentPage - 1) * itemsPerPage + 1
const endIndex = Math.min(
  startIndex + itemsPerPage - 1,
  filteredBillings.length
)

// Update totalItems when filteredBillings changes
useEffect(() => {
  setTotalItems(filteredBillings.length)
}, [filteredBillings.length])

// Get status badge color
const getStatusColor = (status: string) => {
  switch (status) {
    case "PAID":
      return "bg-green-100 text-green-800"
    case "PENDING":
      return "bg-yellow-100 text-yellow-800"
    case "OVERDUE":
      return "bg-red-100 text-red-800"
    default:
      console.warn(`Unknown status: ${status}`)
      return "bg-gray-100 text-gray-800"
  }
}

return (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6">
    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold">Dashboard de Faturamento</h1>
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

    {/* Loading State */}
    {loading ? (
      <div className="flex flex-col items-center justify-center p-12 space-y-4 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-100 border-t-blue-600"></div>
        <p className="text-gray-500">Carregando faturamentos...</p>
      </div>
    ) : filteredBillings.length === 0 ? (
      <div className="flex flex-col items-center justify-center p-12 space-y-4 bg-white rounded-2xl shadow-sm border border-gray-100 text-center">
        <FileText className="h-12 w-12 text-gray-300" />
        <h3 className="text-lg font-medium text-gray-900">Nenhum faturamento encontrado</h3>
        <p className="text-gray-500 max-w-md">
          {searchTerm
            ? "Não encontramos faturamentos com o termo pesquisado."
            : "Parece que você ainda não tem nenhum faturamento cadastrado."}
        </p>
        <Button
          onClick={() => {
            setSearchTerm("")
            setSearchInput("")
            setStatusFilter("all")
          }}
          variant="outline"
          className="mt-2"
        >
          Limpar filtros
        </Button>
      </div>
    ) : (
      <div className="space-y-4">
        {filteredBillings.map((billing) => {
          const statusColors = {
            PAID: { bg: "bg-green-50", text: "text-green-700", border: "border-green-100" },
            PENDING: { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-100" },
            OVERDUE: { bg: "bg-red-50", text: "text-red-700", border: "border-red-100" },
          }
          const status = statusColors[billing.status] || statusColors.PENDING

          return (
            <div key={billing.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg ${status.bg} ${status.border} ${status.text}`}>
                        <CreditCard className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-medium text-gray-900 truncate">
                          {billing.description || "Faturamento sem descrição"}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                          <span className="flex items-center">
                            <CalendarDays className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                            {new Date(billing.dueDate).toLocaleDateString("pt-BR", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                          <span className="text-gray-300">•</span>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bg} ${status.text}`}>
                            {billing.status === "PAID"
                              ? "Pago"
                              : billing.status === "PENDING"
                              ? "Pendente"
                              : "Atrasado"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-lg font-semibold text-gray-900">
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(billing.amount / 100)}
                    </span>
                    <div className="mt-3 flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 text-sm text-gray-700 hover:bg-gray-50 border-gray-200"
                        onClick={() => {
                          setSelectedBilling(billing)
                          setIsReceiptDialogOpen(true)
                        }}
                      >
                        <ReceiptIcon className="h-3.5 w-3.5 mr-1.5" />
                        Comprovantes
                      </Button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            className="h-8 text-sm text-gray-700 hover:bg-gray-50 border-gray-200"
                          >
                            <Pencil className="h-3.5 w-3.5 mr-1.5" />
                            Editar
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] md:max-w-lg">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-semibold">Editar Faturamento</DialogTitle>
                            <DialogDescription>
                              Atualize os detalhes do faturamento
                            </DialogDescription>
                          </DialogHeader>
                          <form className="space-y-5 pt-2">
                            <div className="space-y-2">
                              <Label htmlFor="edit-amount" className="text-sm font-medium">
                                Valor (R$)
                              </Label>
                              <div className="relative">
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                                <Input
                                  id="edit-amount"
                                  name="amount"
                                  type="number"
                                  step="0.01"
                                  min="0"
                                  placeholder="0,00"
                                  defaultValue={(billing.amount / 100).toFixed(2)}
                                  className="pl-10 h-11 text-base"
                                  required
                                />
                              </div>
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="edit-description" className="text-sm font-medium">
                                Descrição
                              </Label>
                              <Textarea
                                id="edit-description"
                                name="description"
                                placeholder="Descreva o faturamento"
                                defaultValue={billing.description}
                                rows={3}
                                className="min-h-[100px] text-base"
                                required
                              />
                            </div>

                            <div className="space-y-2">
                              <Label htmlFor="edit-dueDate" className="text-sm font-medium">
                                Data de Vencimento
                              </Label>
                              <Input
                                id="edit-dueDate"
                                name="dueDate"
                                type="date"
                                defaultValue={new Date(billing.dueDate).toISOString().split("T")[0]}
                                className="h-11 text-base"
                                required
                              />
                            </div>

                            <div className="flex space-x-3 pt-2">
                              <Button
                                type="button"
                                variant="outline"
                                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                                onClick={() => document.querySelector("button[aria-label='Close']")?.click()}
                              >
                                Cancelar
                              </Button>
                              <Button
                                type="submit"
                                className="flex-1 bg-blue-600 hover:bg-blue-700"
                              >
                                <Save className="w-4 h-4 mr-2" />
                                Salvar Alterações
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>

                {/* Receipts Dialog */}
                <Dialog
                  open={isReceiptDialogOpen && selectedBilling?.id === billing.id}
                  onOpenChange={(open) => {
                    if (open) {
                      setSelectedBilling(billing)
                      setIsReceiptDialogOpen(true)
                    } else {
                      setSelectedBilling(null)
                      setIsReceiptDialogOpen(false)
                    }
                  }}
                >
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-semibold">Comprovantes de Pagamento</DialogTitle>
                      <DialogDescription className="text-base">
                        {billing.description || "Faturamento sem descrição"} •{" "}
                        {new Intl.NumberFormat("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        }).format(billing.amount / 100)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-2">
                      {billing.receipts && billing.receipts.length > 0 ? (
                        <div className="space-y-3">
                          {billing.receipts.map((receipt) => (
                            <div
                              key={receipt.id}
                              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-50/80 transition-colors"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="p-2 bg-white rounded-lg border border-gray-200">
                                  <FileText className="h-5 w-5 text-blue-600" />
                                </div>
                                <div>
                                  <p className="font-medium text-gray-900">
                                    Comprovante #{receipt.id.slice(0, 8)}
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {new Date(receipt.createdAt).toLocaleDateString("pt-BR", {
                                      day: "2-digit",
                                      month: "short",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-9"
                                onClick={() => window.open(receipt.url, "_blank")}
                              >
                                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                Visualizar
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center py-8 text-center border-2 border-dashed border-gray-200 rounded-xl">
                          <FileText className="h-12 w-12 text-gray-300 mb-3" />
                          <h3 className="text-base font-medium text-gray-900">
                            Nenhum comprovante encontrado
                          </h3>
                          <p className="text-sm text-gray-500 mt-1 max-w-xs">
                            Faça upload de um comprovante para anexar a este faturamento.
                          </p>
                        </div>
                      )}
                      <div className="flex justify-end pt-2">
                        <Button
                          onClick={() => {
                            // Handle upload new receipt
                          }}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          <UploadCloud className="h-4 w-4 mr-2" />
                          Adicionar Comprovante
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            )
          })}
        </div>

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
