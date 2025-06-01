"use client";
import React, { ReactNode, useEffect } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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
    let isMounted = true;
    
    const checkSession = async () => {
      try {
        const data = await getSession();
        if (!isMounted) return;
        
        if (data) {
          setUser(data.user as unknown as User);
          setToken((data as unknown as { token: string }).token);
        } else {
          redirect("/signin");
        }
      } catch (error) {
        console.error("Erro ao verificar sessão:", error);
      }
    };
    
    // Verificar sessão apenas uma vez ao montar
    checkSession();
    
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <SidebarProvider>
        <SideBar />

        <SidebarTrigger
          className=" w-15  h-15 lg:hidden "
          size="lg"
          variant="outline"
        />
        {children}
      </SidebarProvider>
    </div>
  );
}
