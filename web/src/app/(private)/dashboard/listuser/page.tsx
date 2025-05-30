"use client";

import React, { useEffect, useState } from "react";
import api from "@/app/services/api";
import type { User } from "@/app/types/User";
import { ERole } from "@/app/types/User";
import { useSession } from "next-auth/react";
import UserTable from "@/app/components/UserTable";
import ButtonFilter from "@/app/components/ButtonFilter";
import { Pagination } from "@/app/components/Pagination";
import { FilterModal } from "@/app/components/FilterModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Enum para os status possíveis
enum EStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<EStatus | "">("");
  const [selectedRole, setSelectedRole] = useState<ERole | "">("");
  const [searchName, setSearchName] = useState<string>("");
  const [searchEmail, setSearchEmail] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5;

  // Função auxiliar para limpar filtros undefined
  const cleanFilters = (filters: Record<string, unknown>) => {
    const cleanedFilters = { ...filters };
    Object.keys(cleanedFilters).forEach((key) => {
      if (cleanedFilters[key] === undefined) {
        delete cleanedFilters[key];
      }
    });
    return cleanedFilters;
  };

  // Função principal para buscar usuários da API
  const fetchUsers = async (filters: {
    status?: EStatus;
    role?: ERole;
    name?: string;
    email?: string;
    page: number;
    limit: number;
  }) => {
    try {
      setLoading(true);
      const currentFilters = cleanFilters({
        ...filters,
        size: 5, // Fixa em 5 itens por página
        page: filters.page - 1, // Ajusta para começar do 0
      });
      delete currentFilters.limit;

      console.log("Enviando requisição com filtros:", currentFilters);
      const response = await api.getUser(currentFilters);
      console.log("Resposta completa da API:", response);

      if (response) {
        // Atualiza o estado com os dados da API
        const usersArray = response.users || [];
        const totalItems = response.totalItems || 0;
        const totalPages = Math.ceil(totalItems / 5);

        console.log("Dados da API:", {
          usersCount: usersArray.length,
          totalItems,
          totalPages,
          currentPage: filters.page,
          itemsPerPage: 5,
        });

        setUsers(usersArray);
        setTotalPages(totalPages);
        setTotalItems(totalItems);
      } else {
        console.error("Resposta vazia da API");
        setUsers([]);
        setTotalPages(1);
        setTotalItems(0);
      }
    } catch (error) {
      console.error("Erro ao buscar dados dos usuários:", error);
      setUsers([]);
      setTotalPages(1);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  // Efeito para gerenciar o token da sessão
  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("token", session.accessToken);
    }
  }, [session]);

  // Efeito para buscar usuários quando os filtros ou página mudam
  useEffect(() => {
    console.log("Efeito disparado - Página atual:", currentPage);
    const currentFilters = {
      status: selectedStatus || undefined,
      role: selectedRole || undefined,
      name: searchName || undefined,
      email: searchEmail || undefined,
    };

    console.log("Buscando usuários com filtros:", {
      ...currentFilters,
      page: currentPage,
      limit: 5,
    });

    fetchUsers({
      ...currentFilters,
      page: currentPage,
      limit: 5,
    });
  }, [selectedStatus, selectedRole, searchName, searchEmail, currentPage]);

  // Handlers para paginação e filtros
  const handlePageChange = (newPage: number) => {
    console.log("Mudando para página:", newPage);
    if (newPage < 1 || newPage > totalPages) {
      console.log("Página inválida:", newPage);
      return;
    }
    setCurrentPage(newPage);
  };

  const handleApplyFilters = () => {
    setCurrentPage(1);
    setIsFilterModal(false);
  };

  const handleClearFilters = () => {
    setSelectedStatus("");
    setSelectedRole("");
    setSearchName("");
    setSearchEmail("");
    setCurrentPage(1);
    setIsFilterModal(false);
  };

  const openIsFilterModal = () => {
    setIsFilterModal(!isFilterModal);
  };

  return (
    <div className="p-4 sm:p-8 w-full h-full mx-auto bg-[#FFFFFF] border-[#003873] sm:mt-16">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 justify-between">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#003873] tracking-tight drop-shadow-sm">
            👥 Listagem de Usuários
          </h1>
          <span className="flex flex-wrap items-center text-[#2C3E50] text-sm font-semibold px-3 sm:px-4 sm:py-1 rounded-full shadow sm:justify-between gap-2 justify-between">
            <div>Atualizado em {new Date().toLocaleDateString("pt-BR")}</div>
            <ButtonFilter onClick={openIsFilterModal} />
          </span>
        </div>
      </header>

      <div className="w-full h-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300">
        <div className="p-4 sm:p-6">
          <div className="mb-4 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#003873]">
                Usuários Cadastrados
              </h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">
                  Total: {totalItems} usuários
                </span>
              </div>
            </div>

            {(selectedStatus || selectedRole || searchName || searchEmail) && (
              <div className="flex flex-wrap gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <span className="text-sm font-medium text-gray-700">
                  Filtros ativos:
                </span>
                {selectedStatus && (
                  <Badge className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Status:{" "}
                    {selectedStatus === "ACTIVE"
                      ? "Ativo"
                      : selectedStatus === "INACTIVE"
                      ? "Inativo"
                      : "Bloqueado"}
                  </Badge>
                )}
                {selectedRole && (
                  <Badge className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                    Cargo:{" "}
                    {selectedRole === "ADMIN"
                      ? "Administrador"
                      : selectedRole === "DELIVERY"
                      ? "Entregador"
                      : "Empresa"}
                  </Badge>
                )}
                {searchName && (
                  <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    Nome: {searchName}
                  </Badge>
                )}
                {searchEmail && (
                  <Badge className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    Email: {searchEmail}
                  </Badge>
                )}
                <Button
                  onClick={handleClearFilters}
                  variant="ghost"
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  Limpar filtros
                </Button>
              </div>
            )}

            {users.length === 0 && !loading && (
              <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-gray-600">
                  {selectedStatus || selectedRole || searchName || searchEmail
                    ? "Nenhum usuário encontrado com os filtros selecionados."
                    : "Nenhum usuário cadastrado."}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <UserTable
              users={users}
              onView={(user) => console.log("Visualizar:", user)}
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
            {loading && (
              <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#003873]"></div>
              </div>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModal}
        onClose={openIsFilterModal}
        selectedStatus={selectedStatus}
        selectedRole={selectedRole}
        searchEmail={searchEmail}
        onStatusChange={setSelectedStatus}
        onRoleChange={setSelectedRole}
        onEmailChange={setSearchEmail}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}
