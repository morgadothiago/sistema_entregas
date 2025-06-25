"use client";
import { useAuth } from "@/app/context";
import api from "@/app/services/api";
import type { VehicleType } from "@/app/types/VehicleType";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  PlusCircle,
  Edit,
  Trash2,
  Car,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import React, { useEffect, useState } from "react";

export default function page() {
  const { token } = useAuth();
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados de paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    getAllVehicleTypes();
  }, [currentPage, itemsPerPage]);

  // Reset para primeira página quando mudar o número de itens por página
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  async function getAllVehicleTypes() {
    try {
      setLoading(true);
      setError(null);
      const response = await api.getAllVehicleType(currentPage, itemsPerPage);

      // Verifica se é uma resposta de erro ou sucesso
      if (response && "message" in response) {
        // É um erro
        setError(response.message);
        setVehicleTypes([]);
      } else if (
        response &&
        "data" in response &&
        Array.isArray(response.data)
      ) {
        // É uma resposta de sucesso com dados
        setVehicleTypes(response.data);
        setTotalPages(response.totalPage);
        setTotalItems(response.total);
      } else {
        setVehicleTypes([]);
      }
    } catch (err: any) {
      console.error("Erro ao carregar tipos de veículos:", err);
      setError(err.message || "Erro ao carregar tipos de veículos");
      setVehicleTypes([]);
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteVehicleType(type: string) {
    if (
      !confirm(`Tem certeza que deseja excluir o tipo de veículo "${type}"?`)
    ) {
      return;
    }

    if (!token) {
      alert("Token não encontrado. Faça login novamente.");
      return;
    }

    try {
      await api.deleteVehicleType(type, token);
      await getAllVehicleTypes(); // Recarrega a lista
    } catch (err: any) {
      console.error("Erro ao excluir tipo de veículo:", err);
      alert(err.message || "Erro ao excluir tipo de veículo");
    }
  }

  function handleEditVehicleType(vehicleType: VehicleType) {
    // TODO: Implementar modal de edição
    console.log("Editar:", vehicleType);
    alert("Funcionalidade de edição será implementada em breve");
  }

  function formatCurrency(value: number) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  }

  function nextPage() {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  }

  function previousPage() {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  }

  function goToPage(page: number) {
    setCurrentPage(page);
  }

  // Gera array de páginas para exibir
  function getPageNumbers() {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Se temos poucas páginas, mostra todas
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Se temos muitas páginas, mostra uma janela
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(totalPages, start + maxVisiblePages - 1);

      if (end - start + 1 < maxVisiblePages) {
        start = Math.max(1, end - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mt-10">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">
              Carregando tipos de veículos...
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50 px-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8 mt-10">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 text-center">
          Tipo de veículos cadastrados
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Gerencie os tipos de veículos disponíveis no sistema. Adicione, edite
          ou remova conforme necessário.
        </p>

        <div className="flex justify-center mb-8">
          <Button
            className="gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            aria-label="Adicionar um novo tipo de veículo"
          >
            <PlusCircle size={18} /> Adicionar novo tipo
          </Button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        {vehicleTypes.length === 0 ? (
          <div className="border-t pt-4">
            <p className="text-gray-400 text-center">
              Nenhum tipo de veículo cadastrado ainda.
            </p>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {vehicleTypes.map((vehicleType) => (
                <div
                  key={vehicleType.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Car className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {vehicleType.type}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Tarifa Base:</span>
                            <br />
                            <span className="text-green-600 font-semibold">
                              {formatCurrency(vehicleType.tarifaBase)}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">KM Adicional:</span>
                            <br />
                            <span className="text-green-600 font-semibold">
                              {formatCurrency(vehicleType.valorKMAdicional)}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">
                              Parada Adicional:
                            </span>
                            <br />
                            <span className="text-green-600 font-semibold">
                              {formatCurrency(vehicleType.paradaAdicional)}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium">
                              Ajudante Adicional:
                            </span>
                            <br />
                            <span className="text-green-600 font-semibold">
                              {formatCurrency(vehicleType.ajudanteAdicional)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        onClick={() => handleEditVehicleType(vehicleType)}
                        variant="outline"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                      >
                        <Edit size={16} className="mr-1" />
                        Editar
                      </Button>
                      <Button
                        onClick={() =>
                          handleDeleteVehicleType(vehicleType.type)
                        }
                        variant="outline"
                        size="sm"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 size={16} className="mr-1" />
                        Excluir
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Informações de paginação */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <div className="text-sm text-gray-500">
                  {totalItems === 0
                    ? "Nenhum tipo de veículo encontrado"
                    : totalPages === 1
                    ? `Mostrando todos os ${totalItems} tipos de veículos`
                    : `Mostrando ${
                        (currentPage - 1) * itemsPerPage + 1
                      } a ${Math.min(
                        currentPage * itemsPerPage,
                        totalItems
                      )} de ${totalItems} tipos de veículos`}
                </div>

                {totalItems > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Itens por página:
                    </span>
                    <select
                      value={itemsPerPage}
                      onChange={(e) => setItemsPerPage(Number(e.target.value))}
                      className="px-2 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={5}>5</option>
                      <option value={10}>10</option>
                      <option value={20}>20</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <div className="flex gap-2">
                  <Button
                    onClick={previousPage}
                    variant="outline"
                    size="sm"
                    disabled={currentPage === 1}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Anterior
                  </Button>

                  <Pagination>
                    <PaginationContent>
                      {getPageNumbers().map((page) => (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => goToPage(page)}
                            isActive={currentPage === page}
                            className="cursor-pointer"
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      ))}
                    </PaginationContent>
                  </Pagination>

                  <Button
                    onClick={nextPage}
                    variant="outline"
                    size="sm"
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-2"
                  >
                    Próxima
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
