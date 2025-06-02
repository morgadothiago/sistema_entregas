"use client";

import { useAuth } from "@/app/context";
import api from "@/app/services/api";
import { IUserPaginate } from "@/app/types/User";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import UserTable from "@/app/components/UserTable";
import { Loader2, ChevronLeft, ChevronRight, Users } from "lucide-react";
import { useRouter } from "next/navigation"; // IMPORTAÇÃO do router

const User: React.FC = () => {
  const router = useRouter();
  const [users, setUsers] = useState<IUserPaginate[]>({} as IUserPaginate[]);
  const [isLoading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [total, setTotal] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [email, setemail] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();
  const { token } = useAuth();

  function nextPage() {
    setPage((currentPage) =>
      currentPage < lastPage ? currentPage + 1 : lastPage
    );
  }

  function previousPage() {
    setPage((currentPage) =>
      currentPage - 1 > 0 ? currentPage - 1 : currentPage
    );
  }

  useEffect(() => {
    if (!token) return;

    setLoading(true);

    const fetchUsers = async () => {
      try {
        const response = await api.getUsers(
          { page, email, limit, role, status },
          token
        );

        if ("status" in response) {
          if (response.status === 401) {
            console.log(response);
          }
          return;
        }

        setUsers(response.data);
        setPage(response.currentPage);
        setLastPage(response.totalPage);
        setTotal(response.total);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        toast.error("Erro ao carregar usuários");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page, email, limit, role, status, token]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#003873] to-[#5DADE2] bg-clip-text text-transparent">
            Usuários
          </h1>
          <p className="text-sm text-gray-500">
            Total de {total} usuários cadastrados
          </p>
        </div>

        <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-lg">
          <button
            onClick={previousPage}
            className="p-2 rounded-lg bg-white hover:bg-[#5DADE2]/10 transition-all duration-200 disabled:opacity-50 shadow-sm"
            disabled={page === 1}
            title="Página anterior"
          >
            <ChevronLeft className="w-5 h-5 text-[#003873]" />
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow-sm">
            <span className="font-medium text-[#003873]">
              {page} / {lastPage}
            </span>
          </div>

          <button
            onClick={nextPage}
            className="p-2 rounded-lg bg-white hover:bg-[#5DADE2]/10 transition-all duration-200 disabled:opacity-50 shadow-sm"
            disabled={page === lastPage}
            title="Próxima página"
          >
            <ChevronRight className="w-5 h-5 text-[#003873]" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100">
        {isLoading ? (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <div className="relative">
              <Loader2 className="w-10 h-10 animate-spin text-[#003873]" />
              <div className="absolute inset-0 bg-white/50 blur-sm" />
            </div>
            <span className="text-gray-600 font-medium">
              Carregando usuários...
            </span>
          </div>
        ) : users.length ? (
          <UserTable
            users={users.map((u: IUserPaginate) => ({
              id: u.id,
              name: u.name,
              email: u.email,
              role: u.role,
            }))}
            onViewUser={(user) => {
              router.push(`/dashboard/user/${user.id}`);
            }}
          />
        ) : (
          <div className="flex flex-col justify-center items-center py-20 space-y-4">
            <div className="p-4 bg-gray-50 rounded-full">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <div className="text-center">
              <p className="text-gray-600 font-medium">
                Nenhum usuário encontrado
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Tente ajustar os filtros de busca
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
