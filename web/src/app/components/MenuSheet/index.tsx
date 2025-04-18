"use client";
import { useAuth } from "@/app/context";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";

import LogoMenuLateral from "@/app/assets/img2.png";

export function SideBar() {
  const { user } = useAuth();
  return (
    <Sidebar className=" flex-1 flex h-screen">
      <div className="bg-gradient-to-b from-[#003B73] to-[#5DADE2] flex-1 justify-between flex flex-col">
        <SidebarHeader className="bg-none">
          <div className=" flex items-center">
            <div className=" w-[57px] h-[56px] rounded-[10px] m-2 items-center justify-center flex">
              <Image
                src={LogoMenuLateral}
                alt=""
                className=" w-[57px] h-[56px] rounded-[10px] "
              />
            </div>

            <h1 className="text-white font-bold  text-[16px]">Quid</h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="">
          <SidebarGroup>
            <h1>Lista normal</h1>
          </SidebarGroup>
          {user?.role === "ADMIN" && (
            <SidebarGroup>
              <h1>Lista Administrativa</h1>
              <ul>
                <li>item adm</li>
              </ul>
            </SidebarGroup>
          )}
          <SidebarGroup>
            <h1>Suporte</h1>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="">
          <div className="">
            <Button variant="destructive">
              <LogOutIcon />
              Sair
            </Button>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
