"use server";
import React, { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { redirect } from "next/navigation";
import { auth } from "../util/auth";

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
