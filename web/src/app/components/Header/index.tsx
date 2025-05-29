"use client";

import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";

import { SidebarTrigger } from "@/components/ui/sidebar";
import SideBarSheet from "../sidebarsheet";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });
  }, []);

  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Menu e Nome da Empresa */}
      <div className="flex items-center flex-1/2 bg-red-500">
        <SidebarTrigger className="lg:hidden" size="lg" variant="outline" />
        <span className="text-gray-700 font-semibold text-lg">
          Olá, {user?.Company?.name || "Usuário"}
        </span>
      </div>

      {/* Saldo */}
      <div className="md:flex items-center bg-gray-100 text-gray-800 font-medium px-4 py-1 rounded-full">
        R$ {user?.Balance?.amount?.toFixed(2) || "0,00"}
      </div>

      {/* Ações */}
      <div className="flex items-center space-x-4">
        <Button
          asChild
          variant={"outline"}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <SideBarSheet isNotification={true} />
        </Button>
      </div>
    </header>
  );
}
