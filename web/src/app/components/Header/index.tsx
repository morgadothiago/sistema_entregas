"use client";

import React from "react";
import { useAuth } from "@/app/context";
import { Bell, MessageCircle, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  Avatar,
  AvatarFallback /* , AvatarImage */,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-md">
      <div className="container flex h-16 items-center justify-between px-2 sm:px-4">
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
              {/* <AvatarImage src={user?.image} alt={user?.name} /> */}
              <AvatarFallback className="bg-primary/10 text-primary">
                {user?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="flex flex-col hidden md:flex">
              <span className="text-sm text-gray-500 hidden md:flex">
                Bem-vindo,
              </span>
              <span className="font-bold text-lg text-gray-800">
                {user?.Company?.name || "Empresa"}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-2 bg-primary/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-primary/10">
            <span className="text-sm font-medium text-gray-600">Debitos:</span>
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
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <MessageCircle className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0.5 right-0.5 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
                3
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
