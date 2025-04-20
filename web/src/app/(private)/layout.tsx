"use client";
import React, { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { useAuth } from "../context";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated()) {
    return redirect("/");
  }

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
