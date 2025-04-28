"use client";
"use client";
import React, { useState } from "react";
import SideBarSheet from "../sidebarsheet";
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";
import Image from "next/image";

export default function Header() {
  const [setIsNotification] = useState(false);
  const [user, setUser] = useState<User>({} as User)
  
  const notifications = [
    {
      id: 1,
      message: "Nova mensagem recebida",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 2,
      message: "Seu pedido foi enviado",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      id: 3,
      message: "Atualização disponível",
      timestamp: new Date().toLocaleTimeString(),
    },
  ];

  React.useEffect(() => {
 

    getSession().then((data) =>{
      if(data) setUser(data.user as unknown as User)
    });

   
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="md:px-20 md:p-2 flex flex-row md:flex-row justify-between items-center p-1 bg-white ">
      <div className="text-base md:text-lg font-semibold md:w-[85%]">Olá: {user?.Company?.name}</div>
      <div className="flex gap-4">
      <div className="text-lg font-bold mt-2 md:mt-0 bg-gray-200 rounded-full px-4 py-1">
        R$ {user?.Balance?.amount || 0}
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <SideBarSheet isNotification={true} />
      </div>
      </div>
    </div>
  );
}