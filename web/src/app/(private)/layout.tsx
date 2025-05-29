"use server";
import React, { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { redirect } from "next/navigation";
import { auth } from "../util/auth";

interface LayoutProps {
  children: ReactNode;
}

export default async function Layout({ children }: LayoutProps) {
  const session = await auth();

  if (!session?.accessToken) {
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
