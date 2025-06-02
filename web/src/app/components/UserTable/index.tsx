"use client";

import * as React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

interface UserTableProps {
  users: User[];
  onViewUser?: (user: User) => void;
}

export default function UserTable({ users, onViewUser }: UserTableProps) {
  const router = useRouter();

  const handleViewUser = (user: User) => {
    if (onViewUser) {
      onViewUser(user);
    } else {
      router.push(`/dashboard/user/${user.id}`);
    }
  };

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              {["ID", "Nome", "Email", "Perfil", "Ações"].map((title) => (
                <TableHead
                  key={title}
                  className="font-medium text-muted-foreground"
                >
                  {title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, idx) => (
              <TableRow
                key={user.id}
                className={idx % 2 === 0 ? "bg-muted/30" : ""}
              >
                <TableCell className="font-mono text-sm">{user.id}</TableCell>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    {user.role || "Usuário"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-muted"
                    title="Visualizar usuário"
                    onClick={() => handleViewUser(user)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3 p-4">
        {users.length === 0 && (
          <div className="p-6 text-center text-muted-foreground">
            Nenhum usuário encontrado.
          </div>
        )}
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg border bg-card p-4 shadow-sm"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-xs bg-muted px-2 py-1 rounded">
                ID: {user.id}
              </span>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-muted"
                title="Visualizar usuário"
                onClick={() => handleViewUser(user)}
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold">{user.name}</h3>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="mt-3">
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                {user.role || "Usuário"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
