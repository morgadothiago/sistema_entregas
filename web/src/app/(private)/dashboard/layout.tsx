import Header from "@/app/components/Header";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-1 flex-col">
      <Header />

      {children}
    </div>
  );
}
