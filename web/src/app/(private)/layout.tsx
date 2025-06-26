"use client";
import React, { ReactNode, useEffect } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { redirect } from "next/navigation";
import { useAuth } from "../context";
import { getSession } from "next-auth/react";
import { User } from "../types/User";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { setUser, setToken } = useAuth();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const data = await getSession();
        console.log("=== LAYOUT SESSION DATA ===");
        console.log("Session data:", data);
        console.log(
          "Session token:",
          (data as unknown as { token: string }).token
        );
        console.log("Session user:", data?.user);
        console.log("===========================");

        if (data) {
          setUser(data.user as unknown as User);
          const sessionToken = (data as unknown as { token: string }).token;
          if (sessionToken) {
            setToken(sessionToken);
          } else {
            console.error("Token não encontrado na sessão do layout!");
          }
        } else {
          redirect("/signin");
        }
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
        redirect("/signin");
      }
    };

    // Verificar sessão apenas uma vez ao montar
    checkSession();

    return () => {};
  }, []);

  return (
    <div>
      <SidebarProvider>
        <SideBar />

        {children}
      </SidebarProvider>
    </div>
  );
}
