import React, { ReactNode } from "react";

import { SidebarProvider } from "@/components/ui/sidebar";
import { SideBar } from "../components/MenuSheet";
import { SidebarButton } from "../components/SidebarButton";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <SidebarProvider>
        <SideBar />
        <SidebarButton className=" md:hidden border-none" />
        {children}
      </SidebarProvider>
    </div>
  );
}
