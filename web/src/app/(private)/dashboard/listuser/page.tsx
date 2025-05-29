"use client";

import React, { useEffect, useState } from "react";
import api from "@/app/services/api";
import type { User } from "@/app/types/User";
import { useSession } from "next-auth/react";
import UserTable from "@/app/components/UserTable";
import ButtonFilter from "@/app/components/ButtonFilter";

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("token", session.accessToken);
    }
  }, [session]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getUser();
        setUsers(Array.isArray(data) ? data : []);
      } catch (error: unknown) {
        console.error("Error fetching user data:", error);
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4 sm:p-8 w-full h-full mx-auto bg-[#FFFFFF] border-[#003873]  sm:mt-16">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
        <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 justify-between">
          <h1 className="text-2xl sm:text-4xl font-extrabold text-[#003873] tracking-tight drop-shadow-sm">
            👥 Listagem de Usuários
          </h1>
          <span className="flex flex-wrap items-center text-[#2C3E50] text-sm font-semibold px-3  sm:px-4 sm:py-1 rounded-full shadow sm:justify-between gap-2 justify-between">
            <div className="">
              Atualizado em {new Date().toLocaleDateString("pt-BR")}
            </div>
            <div className="">
              <ButtonFilter onClick={() => alert("Abrir filtro")} />
            </div>
          </span>
        </div>
      </header>

      <div className="w-full h-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300">
        <div className="p-4 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#003873]">
              Usuários Cadastrados
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
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
    </div>
  );
}
