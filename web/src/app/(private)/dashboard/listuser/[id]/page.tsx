"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiMail, FiUser, FiShield, FiClock } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import api from "@/app/services/api";
import type { User } from "@/app/types/User";
import { EStatus, ERole } from "@/app/types/User";

export default function UserId() {
  const { id } = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.getUserById(Number(id));
        setUser(response);
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Erro ao carregar usuário";
        toast({
          title: "Erro",
          description: errorMessage,
          variant: "destructive",
        });
        router.push("/dashboard/listuser");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, router, toast]);

  const getStatusColor = (status: EStatus) => {
    switch (status) {
      case EStatus.ACTIVE:
        return "bg-green-100 text-green-800";
      case EStatus.INACTIVE:
        return "bg-yellow-100 text-yellow-800";
      case EStatus.BLOCKED:
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleColor = (role: ERole) => {
    switch (role) {
      case ERole.ADMIN:
        return "bg-purple-100 text-purple-800";
      case ERole.DELIVERY:
        return "bg-blue-100 text-blue-800";
      case ERole.COMPANY:
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: EStatus) => {
    switch (status) {
      case EStatus.ACTIVE:
        return "Ativo";
      case EStatus.INACTIVE:
        return "Inativo";
      case EStatus.BLOCKED:
        return "Bloqueado";
      default:
        return status;
    }
  };

  const getRoleText = (role: ERole) => {
    switch (role) {
      case ERole.ADMIN:
        return "Administrador";
      case ERole.DELIVERY:
        return "Entregador";
      case ERole.COMPANY:
        return "Empresa";
      default:
        return role;
    }
  };

  if (loading) {
    return (
      <div className="p-6 space-y-6">
        <Skeleton className="h-8 w-48" />
        <div className="grid gap-6 md:grid-cols-2">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          Usuário não encontrado
        </h2>
        <Button
          onClick={() => router.back()}
          className="mt-4"
          variant="outline"
        >
          <FiArrowLeft className="mr-2" />
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <Button
          onClick={() => router.back()}
          variant="ghost"
          className="hover:bg-gray-100"
        >
          <FiArrowLeft className="mr-2" />
          Voltar
        </Button>
        <div className="flex gap-2">
          <Badge className={getStatusColor(user.status)}>
            {getStatusText(user.status)}
          </Badge>
          <Badge className={getRoleColor(user.role)}>
            {getRoleText(user.role)}
          </Badge>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiUser className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Nome</p>
                <p className="font-medium">{user.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Informações da Conta</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FiShield className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Cargo</p>
                <p className="font-medium">{getRoleText(user.role)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FiClock className="text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium">{getStatusText(user.status)}</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
