"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LogOutIcon, User2 } from "lucide-react";
import Image from "next/image";

import LogoMenuLateral from "@/app/assets/img2.png";

import { itemAdm, items, itemSupport } from "@/app/utils/menu";
import { useEffect, useState } from "react"; // Import useState
import { useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";
import { User } from "@/app/types/User";

export function SideBar() {
  const [user, setUser] = useState<User>({} as User)
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const router = useRouter();

  const handleLogOut = async () => {
    
    await signOut({redirect: true, redirectTo:  '/signin'})
    router.push("/");
  };

  function handleNextPage(itemTitle: string) {
    setSelectedItem(itemTitle);
   
    router.push(`/dashboard/${itemTitle}`);
  }

  useEffect(() => {
    getSession().then((data) =>{
      if(data) setUser(data.user as unknown as User)
    });
  }, []); 

  

  return (
 
      <Sidebar className="flex-1 flex h-screen shadow-lg ">
        <div className="bg-gradient-to-b from-[#003B73] to-[#5DADE2] flex-1 flex flex-col p-4">
          <SidebarHeader className="bg-none">
            <div className="flex items-center mb-4">
              <div className="w-[57px] h-[56px] rounded-full overflow-hidden shadow-md">
                <Image
                  src={LogoMenuLateral}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-white font-bold text-1xl ml-2">
                Nome da empresa
              </h1>
            </div>
          </SidebarHeader>
          <SidebarContent>
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
                          : "text-white"
                      }`}
                    >
                      <SidebarMenuButton asChild>
                        <a
                          onClick={() => {
                            handleNextPage(item.url);
                          
                          }}
                          className="flex items-center p-2"
                        >
                          <item.icon className="mr-2" />
                          <span className="text-[16px] md:text-sm">
                            {item.title}
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
                          selectedItem === item.title
                            ? "bg-[#fff] text-black"
                            : "text-white"
                        }`}
                      >
                        <SidebarMenuButton asChild>
                          <a
                            onClick={() => handleNextPage(item.title)}
                            className="flex items-center p-2"
                          >
                            <item.icon className="mr-2" />
                            <span className="text-sm md:text-sm">
                              {item.title}
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
                          : "text-white"
                      }`}
                    >
                      <SidebarMenuButton asChild>
                        <button
                          onClick={item.action}
                          className="flex items-center p-2"
                        >
                          <item.icon className="mr-2" />
                          <span className="text-sm md:text-base">
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
          <SidebarFooter>
            <div className="flex justify-between">
              <Button
                variant="destructive"
                onClick={handleLogOut}
                className="flex items-center"
              >
                <LogOutIcon className="mr-2" />
                Sair
              </Button>
  
              <Button
                onClick={handleLogOut}
                className="flex items-center rounded-full bg-[#5DADE2] hover:bg-[#003B73]"
              >
                <User2 />
              </Button>
            </div>
          </SidebarFooter>
        </div>
      </Sidebar>
    )
  
}
