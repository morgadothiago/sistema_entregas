"use client";

import React, { useEffect, useState } from "react";
import { useTokenValidation } from "@/app/hooks/useTokenValidation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TestTokenPage() {
  const { isTokenValid, status } = useTokenValidation();
  const { data: session } = useSession();
  const [tokenInfo, setTokenInfo] = useState<string>("");

  useEffect(() => {
    // Função para testar o token
    const testToken = async () => {
      try {
        const token = localStorage.getItem("token");
        setTokenInfo(`
          Status da Sessão: ${status}
          Token Válido: ${isTokenValid ? "Sim" : "Não"}
          Token no localStorage: ${token ? "Presente" : "Ausente"}
          Token: ${token ? token.substring(0, 20) + "..." : "Não encontrado"}
          Sessão: ${session ? "Ativa" : "Inativa"}
        `);
      } catch (error) {
        console.error("Erro ao testar token:", error);
        setTokenInfo("Erro ao testar token");
      }
    };

    testToken();
  }, [isTokenValid, status, session]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-[#003873] mb-6">Teste de Token</h1>

      <Card className="p-6 mb-6">
        <pre className="whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
          {tokenInfo}
        </pre>
      </Card>

      <div className="space-y-4">
        <Button
          onClick={() => window.location.reload()}
          className="bg-[#003873] text-white hover:bg-[#002a5c]"
        >
          Atualizar Status
        </Button>
      </div>
    </div>
  );
}
