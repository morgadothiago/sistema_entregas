"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

import { itemAdm, items, itemSupport } from "@/app/utils/menu";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context";
import Image from "next/image";

import logo from "@/app/assets/img1.png";

export function SideBar() {
  const { user } = useAuth();
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  function handleNextPage(itemTitle: string) {
    setSelectedItem(itemTitle);
    router.push(`/dashboard/${itemTitle}`);
    setOpenMobile(false);
  }

  return (
    <Sidebar className="flex-1 flex h-screen shadow-lg">
      <div className="bg-gradient-to-b from-[#003B73] to-[#5DADE2] flex-1 flex flex-col p-4">
        <SidebarHeader className="bg-none">
          <div className="flex items-center mb-4">
            <div className="w-[57px] h-[56px] rounded-full overflow-hidden shadow-md">
              <Image
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white font-bold text-1xl ml-2 truncate">
              Nome da empresa
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="overflow-y-auto">
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg text-white">
              Application
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="rounded-lg p-2">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`transition duration-200 rounded-md ${
                      selectedItem === item.title
                        ? "bg-[#fff] text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <a
                        onClick={() => handleNextPage(item.url)}
                        className="flex items-center p-2 w-full"
                      >
                        <item.icon className="mr-2 flex-shrink-0" />
                        <span className="text-[16px] md:text-sm truncate">
                          {item.subTile}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {user?.role === "ADMIN" && (
            <SidebarGroup>
              <SidebarGroupLabel className="text-lg text-white">
                Administrativa
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {itemAdm.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={`transition duration-200 rounded-md ${
                        selectedItem === item.subTile
                          ? "bg-[#fff] text-black"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      <SidebarMenuButton asChild>
                        <a
                          onClick={() => handleNextPage(item.url)}
                          className="flex items-center p-2 w-full"
                        >
                          <item.icon className="mr-2 flex-shrink-0" />
                          <span className="text-sm md:text-sm truncate">
                            {item.subTile}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )}
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg text-white">
              Suporte
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {itemSupport.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`transition duration-200 rounded-md ${
                      selectedItem === item.title
                        ? "bg-[#fff] text-black"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <button
                        onClick={item.action}
                        className="flex items-center p-2 w-full"
                      >
                        <item.icon className="mr-2 flex-shrink-0" />
                        <span className="text-sm md:text-base truncate">
                          {item.title}
                        </span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}
