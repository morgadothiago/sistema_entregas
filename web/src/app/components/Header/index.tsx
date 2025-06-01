"use client";

import React, { useEffect, useState } from "react";
import SideBarSheet from "../sidebarsheet";
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";
import { Bell, MessageCircle, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger
            className="lg:hidden hover:bg-gray-100 transition-colors"
            size="lg"
            variant="ghost"
          >
            <Menu className="h-5 w-5" />
          </SidebarTrigger>

          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border-2 border-primary/20">
              <AvatarImage src={user?.image} alt={user?.name} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground">Bem-vindo,</span>
              <span className="font-semibold text-lg text-gray-800">
                {user?.Company?.name || "Empresa"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
            <span className="text-sm font-medium text-gray-600">Saldo:</span>
            <span className="font-bold text-primary">
              R${" "}
              {user?.Balance?.amount?.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              }) || "0,00"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <MessageCircle className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
