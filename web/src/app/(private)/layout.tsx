"use client";
import React, { ReactNode, useEffect } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { useAuth } from "../context";
import { useRouter } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();
  const routes = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      return routes.push("/signin");
    }
  }, [isAuthenticated]);

  return (
    <div>
      <SidebarProvider>
        <SideBar />
        <SidebarTrigger className=" w-15  h-15" size="lg" variant="outline" />
        {children}
      </SidebarProvider>
    </div>
  );
}
