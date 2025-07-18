"use client"

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
} from "@/components/ui/sidebar"

import { itemAdm, items, itemSupport } from "@/app/utils/menu"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { useAuth } from "@/app/context"
import Image from "next/image"

import logo from "@/app/assets/img1.png"

export function SideBar() {
  const { user } = useAuth()
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const router = useRouter()
  const { setOpenMobile } = useSidebar()

  function handleNextPage(itemTitle: string) {
    setSelectedItem(itemTitle)
    router.push(`/dashboard/${itemTitle}`)
    setOpenMobile(false)
  }

  return (
    <Sidebar className="flex-1 flex h-screen shadow-xl transition-all duration-300 ease-in-out">
      <div className="bg-gradient-to-b from-[#003B73] via-[#2E86C1] to-[#5DADE2] flex-1 flex flex-col p-6">
        <SidebarHeader className="bg-none mb-8">
          <div className="flex items-center space-x-4">
            <div className="w-[60px] h-[60px] rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-white font-bold text-2xl tracking-tight">
              Nome da empresa
            </h1>
          </div>
        </SidebarHeader>
        <SidebarContent className="overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <SidebarGroup className="mb-6">
            <SidebarGroupLabel className="text-lg text-white/90 font-semibold mb-3">
              Application
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {items.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`transition-all duration-200 rounded-xl ${
                      selectedItem === item.title
                        ? "bg-white/95 text-[#003B73] shadow-lg transform scale-[1.02]"
                        : "text-white hover:bg-white/10 hover:transform hover:scale-[1.02]"
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <a
                        onClick={() => handleNextPage(item.url)}
                        className="flex items-center p-3 w-full"
                      >
                        <item.icon className="mr-3 flex-shrink-0 w-5 h-5" />
                        <span className="text-[15px] font-medium truncate">
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
            <SidebarGroup className="mb-6">
              <SidebarGroupLabel className="text-lg text-white/90 font-semibold mb-3">
                Administrativa
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {itemAdm.map((item) => (
                    <SidebarMenuItem
                      key={item.title}
                      className={`transition-all duration-200 rounded-xl ${
                        selectedItem === item.subTile
                          ? "bg-white/95 text-[#003B73] shadow-lg transform scale-[1.02]"
                          : "text-white hover:bg-white/10 hover:transform hover:scale-[1.02]"
                      }`}
                    >
                      <SidebarMenuButton asChild>
                        <a
                          onClick={() => handleNextPage(item.url)}
                          className="flex items-center p-3 w-full"
                        >
                          <item.icon className="mr-3 flex-shrink-0 w-5 h-5" />
                          <span className="text-[15px] font-medium truncate">
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
            <SidebarGroupLabel className="text-lg text-white/90 font-semibold mb-3">
              Suporte
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                {itemSupport.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`transition-all duration-200 rounded-xl ${
                      selectedItem === item.title
                        ? "bg-white/95 text-[#003B73] shadow-lg transform scale-[1.02]"
                        : "text-white hover:bg-white/10 hover:transform hover:scale-[1.02]"
                    }`}
                  >
                    <SidebarMenuButton asChild>
                      <button
                        onClick={item.action}
                        className="flex items-center p-3 w-full"
                      >
                        <item.icon className="mr-3 flex-shrink-0 w-5 h-5" />
                        <span className="text-[15px] font-medium truncate">
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
        <SidebarFooter className="mt-auto pt-6 border-t border-white/10">
          <div className="flex justify-between gap-3">
            <Button
              variant="destructive"
              onClick={handleLogOut}
              className="flex items-center flex-1 bg-red-500 hover:bg-red-600 transition-colors duration-200 rounded-xl"
            >
              <LogOutIcon className="mr-2 w-5 h-5" />
              <span className="font-medium">Sair</span>
            </Button>

            <Button
              onClick={handleLogOut}
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              <User2 className="w-5 h-5 text-white" />
            </Button>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  )
}
