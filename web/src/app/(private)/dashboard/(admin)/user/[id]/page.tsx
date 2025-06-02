"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/app/services/api";
import { useAuth } from "@/app/context";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, User as UserIcon, Mail, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  name: string;
  email: string;
  role?: string;
}

export default function UserDetailPage() {
  const { token } = useAuth();
  const params = useParams();
  const [userDetail, setUserDetail] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const id = params?.id;
        if (!id || !token) {
          console.warn("ID ou token não está disponível.");
          return;
        }
        const response = await api.getUser(String(id), token);
        setUserDetail(response as User);
      } catch (error: unknown) {
        console.error("Erro ao buscar usuário:", error);
        setUserDetail(null);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [params, token]);

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
          onClick={() => router.back()}
          className="mt-4"
        >
          Voltar
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4 py-12 bg-gradient-to-b from-[#F5FAFF] to-white">
      <Card className="w-full max-w-2xl border border-gray-100 shadow-2xl rounded-3xl bg-white/80 backdrop-blur-sm">
        <CardContent>
          <dl className="space-y-8">
            {[
              { icon: Shield, label: "ID", value: userDetail.id, type: "id" },
              {
                icon: UserIcon,
                label: "Nome",
                value: userDetail.name,
                type: "text",
              },
              {
                icon: Mail,
                label: "Email",
                value: userDetail.email,
                type: "email",
              },
              {
                icon: Shield,
                label: "Perfil",
                value: userDetail.role ?? "Usuário",
                type: "role",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-4 rounded-xl hover:bg-gray-50/50 transition-all duration-300"
              >
                <dt className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-[#5DADE2] transition-colors">
                  <item.icon className="w-4 h-4" /> {item.label}
                </dt>
                <dd className="mt-1 sm:mt-0">
                  {item.type === "role" ? (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00FFB3] to-[#00E6A3] text-[#003873] shadow-sm border border-[#003873]/10">
                      {item.value}
                    </span>
                  ) : (
                    <span
                      className={`text-lg font-semibold ${
                        item.type === "id" ? "font-mono" : ""
                      } text-[#2C3E50] break-words`}
                    >
                      {item.value}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}
