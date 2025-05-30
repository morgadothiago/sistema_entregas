table user


"use client";

import { useEffect, useState, useRef, useMemo } from "react";
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
import { FiSearch, FiFilter, FiChevronDown, FiChevronUp } from "react-icons/fi";
import api from "@/app/services/api";
import { useDebounce } from "use-debounce";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Filtros
  const [nameFilter, setNameFilter] = useState("");
  const [emailFilter, setEmailFilter] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  // Debounce para filtros
  const [debouncedNameFilter] = useDebounce(nameFilter, 300);
  const [debouncedEmailFilter] = useDebounce(emailFilter, 300);

  // Dropdown aberto?
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 2;

  // Buscar usuários uma vez ao montar componente
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await api.getUser();
        setUsers(data as User[]);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
      } finally {
        setLoading(false);
      }
    };
    // Simula delay
    const timer = setTimeout(() => {
      fetchUsers();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    }
    if (filterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [filterOpen]);

  // Filtra usuários memoizado (com debounce)
  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(debouncedNameFilter.toLowerCase()) &&
        user.email.toLowerCase().includes(debouncedEmailFilter.toLowerCase()) &&
        (roleFilter === "" || user.role === roleFilter)
    );
  }, [users, debouncedNameFilter, debouncedEmailFilter, roleFilter]);

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Resetar página ao mudar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedNameFilter, debouncedEmailFilter, roleFilter]);

  return (
    <div className="p-6 max-w-7xl mx-auto bg-white rounded-lg shadow-lg">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="flex-1 flex flex-row sm:flex-row sm:items-center sm:justify-between justify-between gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Lista de Usuários</h1>

          <div className="relative" ref={filterRef}>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <FiFilter size={18} />
              Filtros
              {filterOpen ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
            </Button>

            {filterOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-50 p-4 flex flex-col gap-4">
                <div className="relative">
                  <FiSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Filtrar por nome..."
                    value={nameFilter}
                    onChange={(e) => setNameFilter(e.target.value)}
                    className="pl-9 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  />
                </div>

                <div className="relative">
                  <FiSearch
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Filtrar por e-mail..."
                    value={emailFilter}
                    onChange={(e) => setEmailFilter(e.target.value)}
                    className="pl-9 pr-3 py-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-700">Filtrar por cargo:</label>
                  <div className="flex flex-col gap-1">
                    {["Administrador", "Usuário", "Moderador"].map((role) => (
                      <label key={role} className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          checked={roleFilter === role}
                          onChange={(e) => setRoleFilter(e.target.value)}
                          className="form-radio text-blue-500"
                        />
                        {role}
                      </label>
                    ))}
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="role"
                        value=""
                        checked={roleFilter === ""}
                        onChange={() => setRoleFilter("")}
                        className="form-radio text-blue-500"
                      />
                      Todos
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="overflow-x-auto">
        <Table className="min-w-full table-auto border border-gray-200 rounded-md">
          <TableHeader>
            <TableRow className="bg-blue-50">
              <TableHead className="whitespace-nowrap text-left text-gray-700 font-semibold py-3 px-4">
                Nome
              </TableHead>
              <TableHead className="whitespace-nowrap text-left text-gray-700 font-semibold py-3 px-4">
                Email
              </TableHead>
              <TableHead className="whitespace-nowrap text-left text-gray-700 font-semibold py-3 px-4">
                Cargo
              </TableHead>
              <TableHead className="whitespace-nowrap text-left text-gray-700 font-semibold py-3 px-4">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading
              ? Array.from({ length: usersPerPage }).map((_, index) => (
                  <TableRow
                    key={index}
                    className="border-t border-gray-100 even:bg-gray-50 animate-pulse"
                  >
                    <TableCell className="py-3 px-4">
                      <Skeleton className="h-4 w-[100px]" />
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <Skeleton className="h-4 w-[150px]" />
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <Skeleton className="h-4 w-[80px]" />
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <div className="flex space-x-2">
                        <Skeleton className="h-8 w-16" />
                        <Skeleton className="h-8 w-16" />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              : currentUsers.map((user) => (
                  <TableRow
                    key={user.id}
                    className="border-t border-gray-100 even:bg-gray-50 hover:bg-blue-50 transition-colors duration-200 cursor-pointer"
                  >
                    <TableCell className="py-3 px-4 whitespace-nowrap font-medium text-gray-900">
                      {user.name}
                    </TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap text-gray-700">
                      {user.email}
                    </TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap text-gray-700">
                      {user.role}
                    </TableCell>
                    <TableCell className="py-3 px-4 whitespace-nowrap">
                      <Button variant="outline" size="sm">
                        Ver mais
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </div>

      {/*
