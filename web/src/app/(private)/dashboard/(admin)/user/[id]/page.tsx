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
    <div className="flex flex-col lg:flex-row gap-8 px-6 py-10 max-w-screen-xl mx-auto bg-gradient-to-br from-gray-50/50 to-white/80">
      {/* User Details Card */}
      <Card className="w-full lg:w-1/3 xl:w-1/4 border border-gray-200/80 shadow-xl rounded-2xl bg-white/95 backdrop-blur-md hover:shadow-[#5DADE2]/20 transition-all duration-500 transform hover:-translate-y-1">
        <CardHeader className="p-6 sm:p-8 bg-gradient-to-r from-[#003873]/5 to-[#5DADE2]/5 rounded-t-2xl">
          <CardTitle className="text-[#003873] text-xl sm:text-2xl font-bold flex items-center gap-3">
            <UserIcon className="w-7 h-7 text-[#5DADE2]" /> Informações do
            Usuário
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              ID do Usuário
            </span>
            <span className="text-gray-900 font-mono text-lg bg-gray-50 p-2 rounded-lg">
              #{userDetail.id}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Email
            </span>
            <span className="text-gray-900 break-all text-lg bg-gray-50 p-2 rounded-lg">
              {userDetail.email}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Perfil
            </span>
            <span className="text-gray-900 text-lg bg-gray-50 p-2 rounded-lg">
              {userDetail.role ?? "Usuário"}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
              Status
            </span>
            <span className="text-gray-900 text-lg bg-gray-50 p-2 rounded-lg">
              {userDetail.status ?? "Ativo"}
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Container para Company e Address */}
      {userDetail.Company && (
        <div className="flex flex-col gap-8 w-full lg:w-2/3 xl:w-3/4">
          {/* Company Details Card */}
          <Card className="border border-gray-200/80 shadow-xl rounded-2xl bg-white/95 backdrop-blur-md hover:shadow-[#5DADE2]/20 transition-all duration-500 transform hover:-translate-y-1">
            <CardHeader className="p-6 sm:p-8 bg-gradient-to-r from-[#003873]/5 to-[#5DADE2]/5 rounded-t-2xl">
              <CardTitle className="text-[#003873] text-xl sm:text-2xl font-bold flex items-center gap-3">
                <Store className="w-7 h-7 text-[#5DADE2]" /> Informações da
                Empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 space-y-6">
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Nome da Empresa
                </span>
                <span className="text-gray-900 text-lg bg-gray-50 p-2 rounded-lg">
                  {userDetail.Company.name}
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  CNPJ
                </span>
                <span className="text-gray-900 text-lg bg-gray-50 p-2 rounded-lg">
                  {userDetail.Company.cnpj}
                </span>
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                  Telefone
                </span>
                <span className="text-gray-900 text-lg bg-gray-50 p-2 rounded-lg">
                  {userDetail.Company.phone}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Address Info Card */}
          {userDetail.Company.Adress && (
            <Card className="border border-gray-200/80 shadow-xl rounded-2xl bg-white/95 backdrop-blur-md hover:shadow-[#5DADE2]/20 transition-all duration-500 transform hover:-translate-y-1">
              <CardHeader className="p-6 sm:p-8 bg-gradient-to-r from-[#003873]/5 to-[#5DADE2]/5 rounded-t-2xl">
                <CardTitle className="text-[#003873] text-xl sm:text-2xl font-bold flex items-center gap-3">
                  <MapPin className="w-7 h-7 text-[#5DADE2]" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-4 text-lg text-gray-900 bg-gray-50 rounded-lg">
                <AddressDisplay Adress={userDetail.Company.Adress} />
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
