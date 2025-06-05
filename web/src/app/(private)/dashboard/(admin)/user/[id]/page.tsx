"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/app/services/api";
import { useAuth } from "@/app/context";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, UserIcon, Store, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import type { User } from "@/app/types/User";
import AddressDisplay from "@/app/components/AndressDisplay";

export default function UserDetailPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [userDetail, setUserDetail] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!token) return;
    const fetchUser = async () => {
      try {
        if (!id) throw new Error("ID do usuário não encontrado");
        const response = await api.getUser(id.toString(), token);

        if (response.status === 500) {
          console.log("Aqui");
          toast.error("Usuário não encontrado", {
            description:
              "Ocorreu um erro ao buscar os dados do usuário. Por favor, tente novamente mais tarde.",
            duration: 3000,
            position: "top-right",
            richColors: true,
          });
          setUserDetail(null);
        }

        if (response.status === 404) {
          toast.error("Usuário não encontrado", {
            description:
              "Ocorreu um erro ao buscar os dados do usuário. Por favor, tente novamente mais tarde.",
            duration: 3000,
            position: "top-right",
            richColors: true,
          });
          setUserDetail(null);

          return;
        }

        console.log(response);
        setUserDetail(response as User);
      } catch (error: unknown) {
        console.error("Erro ao buscar usuário:", error);
        setUserDetail(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id, token]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white/50 backdrop-blur-sm">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#003873]/10 to-[#5DADE2]/10 rounded-full blur-xl animate-pulse" />
          <Loader2 className="w-12 h-12 animate-spin text-[#003873] relative z-10" />
        </div>
        <div className="mt-6 space-y-2 text-center">
          <span className="text-[#2C3E50] font-semibold text-lg animate-pulse">
            Carregando dados do usuário...
          </span>
          <p className="text-sm text-gray-500">
            Isso pode levar alguns segundos
          </p>
        </div>
      </div>
    );
  }

  if (!userDetail) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <div className="p-4 bg-red-50 rounded-full">
          <UserIcon className="w-8 h-8 text-red-500" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold text-gray-900">
            Usuário não encontrado
          </h3>
          <p className="text-sm text-gray-500 max-w-sm">
            Não foi possível encontrar o usuário solicitado. Verifique se o ID
            está correto ou tente novamente mais tarde.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => router.push("/dashboard/user/")}
          className="mt-4"
        >
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 px-4 py-8 max-w-screen-xl mx-auto">
      {/* User Details Card */}
      <Card className="w-full lg:w-1/3 xl:w-1/4 border border-gray-100/50 shadow-lg rounded-xl bg-white/90 backdrop-blur-md hover:shadow-[#5DADE2]/10 transition-all duration-500">
        <CardHeader className="p-4 sm:p-6 bg-gray-50/50">
          <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
            <UserIcon className="w-6 h-6 text-[#5DADE2]" /> Informações do
            Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              ID do Usuário
            </span>
            <span className="text-gray-900 font-mono text-base">
              #{userDetail.id}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Email</span>
            <span className="text-gray-900 break-all text-base">
              {userDetail.email}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Perfil</span>
            <span className="text-gray-900 text-base">
              {userDetail.role ?? "Usuário"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Status</span>
            <span className="text-gray-900 text-base">
              {userDetail.status ?? "Ativo"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Container para Company e Address, ocupando o restante do espaço e empilhando em mobile */}
      {userDetail.Company && (
        <div className="flex flex-col gap-6 w-full lg:w-2/3 xl:w-3/4">
          {/* Company Details Card */}
          <Card className="border border-gray-100/50 shadow-lg rounded-xl bg-white/90 backdrop-blur-md hover:shadow-[#5DADE2]/10 transition-all duration-500">
            <CardHeader className="p-4 sm:p-6 bg-gray-50/50">
              <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
                <Store className="w-6 h-6 text-[#5DADE2]" /> Informações da
                Empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  Nome da Empresa
                </span>
                <span className="text-gray-900 text-base">
                  {userDetail.Company.name}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">CNPJ</span>
                <span className="text-gray-900 text-base">
                  {userDetail.Company.cnpj}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-500">
                  Telefone
                </span>
                <span className="text-gray-900 text-base">
                  {userDetail.Company.phone}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Address Info Card (Only if Company has Address info) */}
          {userDetail.Company.Adress && (
            <Card className="border border-gray-100/50 shadow-lg rounded-xl bg-white/90 backdrop-blur-sm hover:shadow-[#5DADE2]/10 transition-all duration-500">
              <CardHeader className="p-4 sm:p-6 bg-gray-50/50">
                <CardTitle className="text-[#003873] text-lg sm:text-xl flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[#5DADE2]" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-4 text-base text-gray-900">
                <AddressDisplay Adress={userDetail.Company.Adress} />
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
