import React from "react";
import type { User } from "@/app/types/User";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";
import { Card } from "@/components/ui/card";

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
}

export default function UserTable({
  users,
  onView,
  currentPage,
  totalItems,
}: UserTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-100 text-green-800";
      case "INACTIVE":
        return "bg-yellow-100 text-yellow-800";
      case "BLOCKED":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "bg-purple-100 text-purple-800";
      case "DELIVERY":
        return "bg-blue-100 text-blue-800";
      case "COMPANY":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "Ativo";
      case "INACTIVE":
        return "Inativo";
      case "BLOCKED":
        return "Bloqueado";
      default:
        return status;
    }
  };

  const getRoleText = (role: string) => {
    switch (role) {
      case "ADMIN":
        return "Administrador";
      case "DELIVERY":
        return "Entregador";
      case "COMPANY":
        return "Empresa";
      default:
        return role;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <div className="text-sm text-gray-500">
          Página {currentPage} - Mostrando {users.length} itens
        </div>
        <div className="text-sm text-gray-500">Total: {totalItems} itens</div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Cargo
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    className={`${getStatusColor(
                      user.status
                    )} px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {getStatusText(user.status)}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    className={`${getRoleColor(
                      user.role
                    )} px-2 py-1 rounded-full text-xs font-medium`}
                  >
                    {getRoleText(user.role)}
                  </Badge>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <Button
                    onClick={() => onView(user)}
                    variant="ghost"
                    size="sm"
                    className="text-[#003873] hover:text-[#002a5c] hover:bg-[#003873]/10"
                  >
                    <FiEye className="h-4 w-4 mr-1" />
                    Visualizar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {users.map((user) => (
          <Card
            key={user.id}
            className="p-4 hover:shadow-md transition-shadow duration-150"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">Email</div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">Status</div>
                <Badge
                  className={`${getStatusColor(
                    user.status
                  )} px-2 py-1 rounded-full text-xs font-medium`}
                >
                  {getStatusText(user.status)}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-900">Cargo</div>
                <Badge
                  className={`${getRoleColor(
                    user.role
                  )} px-2 py-1 rounded-full text-xs font-medium`}
                >
                  {getRoleText(user.role)}
                </Badge>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => onView(user)}
                  variant="ghost"
                  size="sm"
                  className="w-full text-[#003873] hover:text-[#002a5c] hover:bg-[#003873]/10"
                >
                  <FiEye className="h-4 w-4 mr-1" />
                  Visualizar
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
