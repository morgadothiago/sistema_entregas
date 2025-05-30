"use client";

import React, { useEffect, useRef, useState } from "react";
import api from "@/app/services/api";
import type { User } from "@/app/types/User";
import { useSession } from "next-auth/react";
import UserTable from "@/app/components/UserTable";
import ButtonFilter from "@/app/components/ButtonFilter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FiCheck, FiFilter, FiSearch, FiX } from "react-icons/fi";

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const [isFilterModal, setIsFilterModal] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [searchName, setSearchName] = useState<string>("");
  const [searchEmail, setSearchEmail] = useState<string>("");

  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("token", session.accessToken);
    }
  }, [session]);

  const fetchUsers = async (filters?: {
    status?: string;
    role?: string;
    name?: string;
    email?: string;
  }) => {
    try {
      setLoading(true);
      console.log("Buscando usuários com filtros:", filters);
      const data = await api.getUser(filters);
      console.log("Resultado da busca:", data);
      setUsers(Array.isArray(data) ? data : []);
    } catch (error: unknown) {
      console.error("Erro ao buscar usuários:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleApplyFilters = () => {
    const filters = {
      status: selectedStatus,
      role: selectedRole,
      name: searchName,
      email: searchEmail,
    };
    console.log("Filtros aplicados:", filters);
    fetchUsers(filters);
    setIsFilterModal(false);
  };

  const handleClearFilters = () => {
    console.log("Limpando todos os filtros");
    setSelectedStatus("");
    setSelectedRole("");
    setSearchName("");
    setSearchEmail("");
    fetchUsers();
    setIsFilterModal(false);
  };

  const openIsFilterModal = () => {
    setIsFilterModal(!isFilterModal);
  };

  return (
    <div className="p-4 sm:p-8 w-full h-auto mx-auto bg-gradient-to-br from-white to-gray-50 border border-gray-100 sm:mt-20">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 mt-10 sm:gap-6 sm:mt-10">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 justify-between">
          <h1 className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#003873] to-[#0056b3] bg-clip-text text-transparent tracking-tight">
            👥 Listagem de Usuários
          </h1>
          <span className="flex flex-wrap items-center text-[#2C3E50] text-sm font-semibold px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-100 sm:justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Atualizado em</span>
              <span className="font-medium">
                {new Date().toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="relative" ref={filterRef}>
              <ButtonFilter onClick={openIsFilterModal} />
            </div>
          </span>
        </div>
      </header>

      <div className="w-full h-full overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300">
        <div className="p-4 sm:p-6">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#003873]">
              Usuários Cadastrados
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg">
                Total: {users.length} usuários
              </span>
            </div>
          </div>
          <UserTable
            users={users}
            loading={loading}
            usersPerPage={10}
            onView={(user) => console.log("Visualizar:", user)}
          />
        </div>
      </div>

      {isFilterModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg shadow-2xl transform transition-all duration-300 ease-in-out border border-gray-100">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#003873]/10 rounded-lg">
                  <FiFilter className="text-[#003873]" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-[#003873]">Filtros</h3>
              </div>
              <Button
                onClick={openIsFilterModal}
                variant="ghost"
                size="icon"
                className="hover:bg-gray-100/80 rounded-full transition-colors"
              >
                <FiX size={24} />
              </Button>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#003873] transition-colors"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Filtrar por nome..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003873]/20 focus:border-[#003873] transition-all text-base"
                />
              </div>

              <div className="relative group">
                <FiSearch
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#003873] transition-colors"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Filtrar por e-mail..."
                  value={searchEmail}
                  onChange={(e) => setSearchEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003873]/20 focus:border-[#003873] transition-all text-base"
                />
              </div>

              <div className="space-y-4">
                <Label className="block text-base font-semibold text-gray-800">
                  Filtrar por Status:
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  {["active", "inactive"].map((status) => (
                    <Label
                      key={status}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all group"
                    >
                      <Input
                        type="radio"
                        name="status"
                        value={status}
                        checked={selectedStatus === status}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="form-radio text-[#003873] w-5 h-5"
                      />
                      <span className="text-base font-medium group-hover:text-[#003873] transition-colors">
                        {status === "active" ? "Ativo" : "Inativo"}
                      </span>
                    </Label>
                  ))}
                </div>

                <Label className="block text-base font-semibold text-gray-800">
                  Filtrar por Cargo:
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  {["Administrador", "Usuário"].map((role) => (
                    <Label
                      key={role}
                      className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl hover:bg-gray-50/80 cursor-pointer transition-all group"
                    >
                      <Input
                        type="radio"
                        name="role"
                        value={role}
                        checked={selectedRole === role}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="form-radio text-[#003873] w-5 h-5"
                      />
                      <span className="text-base font-medium group-hover:text-[#003873] transition-colors">
                        {role}
                      </span>
                    </Label>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
                <Button
                  onClick={handleClearFilters}
                  variant="outline"
                  className="px-6 py-3 text-gray-700 hover:bg-gray-50/80 transition-all text-base font-medium rounded-xl"
                >
                  Limpar Filtros
                </Button>
                <Button
                  onClick={handleApplyFilters}
                  className="px-6 py-3 bg-gradient-to-r from-[#003873] to-[#0056b3] text-white rounded-xl hover:from-[#002a5c] hover:to-[#004494] transition-all flex items-center gap-2 text-base font-medium shadow-lg shadow-[#003873]/20"
                >
                  <FiCheck size={20} />
                  Aplicar Filtros
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
