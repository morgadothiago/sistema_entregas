"use client";

import React, { useEffect, useState } from "react";
import api from "@/app/services/api";
import type { User, IUserFilters } from "@/app/types/User";
import { ERole, EStatus } from "@/app/types/User";
import { useSession } from "next-auth/react";
import UserTable from "@/app/components/UserTable";
import ButtonFilter from "@/app/components/ButtonFilter";
import { Pagination } from "@/app/components/Pagination";
import { FilterModal } from "@/app/components/FilterModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

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
  const { toast } = useToast();
  const router = useRouter();

  const itemsPerPage = 5;

  const fetchUsers = async (filters: IUserFilters) => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");
      if (!token) {
        toast({
          title: "Erro de autenticação",
          description: "Token não encontrado. Por favor, faça login novamente.",
          variant: "destructive",
        });
        router.push("/login");
        return;
      }

      const response = await api.getUser({
        ...filters,
        page: filters.page,
        size: itemsPerPage,
      });

      setUsers(response.data);
      setTotalPages(response.totalPages);
      setTotalItems(response.totalItems);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);

      if (error instanceof Error && error.message === "jwt expired") {
        toast({
          title: "Sessão expirada",
          description: "Sua sessão expirou. Por favor, faça login novamente.",
          variant: "destructive",
        });
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      toast({
        title: "Erro",
        description: "Erro ao carregar usuários",
        variant: "destructive",
      });
      setUsers([]);
      setTotalPages(1);
      setTotalItems(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("token", session.accessToken);
    }
  }, [session]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const filters: IUserFilters = {
      status: selectedStatus || undefined,
      role: selectedRole || undefined,
      name: searchName || undefined,
      email: searchEmail || undefined,
      page: currentPage,
      size: itemsPerPage,
    };

    fetchUsers(filters);
  }, [currentPage, selectedStatus, selectedRole, searchName, searchEmail]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
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
            onView={(user) => router.push(`/dashboard/listuser/${user.id}`)}
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

        {totalPages > 1 && (
          <div className="mt-4 flex justify-center">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        )}
      </div>

      <FilterModal
        isOpen={isFilterModal}
        onClose={() => setIsFilterModal(false)}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        selectedStatus={selectedStatus}
        onStatusChange={setSelectedStatus}
        selectedRole={selectedRole}
        onRoleChange={setSelectedRole}
        searchEmail={searchEmail}
        onEmailChange={setSearchEmail}
      />
    </div>
  );
}
