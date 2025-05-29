import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
};

interface UserTableProps {
  users: User[];
  loading: boolean;
  usersPerPage: number;
  onView?: (user: User) => void;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
}

export const UserTable: React.FC<UserTableProps> = ({
  users,
  loading,
  usersPerPage,
  onView,
}) => {
  console.log("Users recebidos:", users);

  return (
    <div className="overflow-x-auto  border-[#5DADE2] P-10 my-10">
      <div className="overflow-x-auto">
        <Table className="min-w-full table-auto">
          <TableHeader>
            <TableRow className="bg-[#003873]">
              <TableHead className="hidden sm:table-cell whitespace-nowrap text-left font-semibold py-3 px-4 text-[#FFFFFF]">
                Nome
              </TableHead>
              <TableHead className="hidden sm:table-cell whitespace-nowrap text-left font-semibold py-3 px-4 text-[#FFFFFF]">
                Email
              </TableHead>
              <TableHead className="hidden sm:table-cell whitespace-nowrap text-left font-semibold py-3 px-4 text-[#FFFFFF]">
                Status
              </TableHead>
              <TableHead className="hidden sm:table-cell whitespace-nowrap text-left font-semibold py-3 px-4 text-[#FFFFFF]">
                Cargo
              </TableHead>
              <TableHead className="whitespace-nowrap text-left font-semibold py-3 px-4 text-[#FFFFFF]">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: usersPerPage }).map((_, index) => (
                <TableRow key={index} className="border-t border-[#5DADE2]">
                  <TableCell className="py-3 px-4">
                    <Skeleton className="h-4 w-[100px]" />
                  </TableCell>
                </TableRow>
              ))
            ) : users && users.length > 0 ? (
              users.map((user) => (
                <TableRow
                  key={user.id}
                  className="border-t border-[#5DADE2] even:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <TableCell className="hidden sm:table-cell py-3 px-4 whitespace-nowrap font-medium text-[#2C3E50]">
                    {user.name}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell py-3 px-4 whitespace-nowrap text-[#2C3E50]">
                    {user.email}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell py-3 px-4 whitespace-nowrap text-[#2C3E50]">
                    {user.status}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell py-3 px-4 whitespace-nowrap text-[#2C3E50]">
                    {user.role}
                  </TableCell>
                  <TableCell className="py-3 px-4 whitespace-nowrap flex flex-col sm:flex-row gap-2">
                    <div className="sm:hidden mb-2">
                      <p className="font-medium text-[#2C3E50]">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <p className="text-sm text-gray-600">
                        {user.status} - {user.role}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-[#00FFB3] text-[#003873] border-[#003873] hover:bg-[#003873] hover:text-[#00FFB3] transition-colors duration-200"
                      onClick={() => onView && onView(user)}
                    >
                      Ver mais
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-[#2C3E50] py-8"
                >
                  Nenhum usuário cadastrado encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserTable;
