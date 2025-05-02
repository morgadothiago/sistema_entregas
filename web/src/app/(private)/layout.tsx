"use server";
import React, { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { auth } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();

  if (!session) {
    redirect("/signin");
  }

  return (
    <div>
      <SidebarProvider>
        <SideBar />
        {children}
      </SidebarProvider>
    </div>
  );
}
