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
        console.log("data", data);
        if (data) {
          setUser(data.user as unknown as User);
          setToken((data as unknown as { token: string }).token);
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
