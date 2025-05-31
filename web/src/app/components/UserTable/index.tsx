import React from "react";
import type { User } from "@/app/types/User";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FiEye } from "react-icons/fi";

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onClick: () => void;
}

export default function UserTable({
  users,

  currentPage,
  totalItems,
  itemsPerPage,
  onClick,
}: UserTableProps) {
  // Calcula o intervalo de itens sendo exibidos
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  console.log("UserTable - Página atual:", currentPage);
  console.log("UserTable - Itens nesta página:", users.length);
  console.log("UserTable - Intervalo:", `${startItem} - ${endItem}`);
  console.log("UserTable - Total de itens:", totalItems);

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
    <div className="overflow-x-auto">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Página {currentPage} - Mostrando {users.length} itens
        </div>
        <div className="text-sm text-gray-500">Total: {totalItems} itens</div>
      </div>
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
                  onClick={onClick}
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
  );
}
