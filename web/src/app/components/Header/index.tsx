"use client";

<<<<<<< HEAD
import React, { useEffect, useState } from "react";

=======
import React, { useState } from "react";
import SideBarSheet from "../sidebarsheet";
>>>>>>> develop
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
<<<<<<< HEAD
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });
  }, []); // Empty dependency array to run only on mount
=======
  const [, setIsNotification] = useState(false);
  const [user, setUser] = useState<User>({} as User);

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
    // Simulate fetching notifications from an API or other source
    const fetchNotifications = async () => {
      // Here you can set the notifications array
      // For now, we will use the hardcoded notifications
      setIsNotification(notifications.length > 0);
    };

    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });

    fetchNotifications();
  }, [notifications.length]); // Add notifications.length as dependency since it's used in the effect
>>>>>>> develop

  return (
    <div className="flex flex-row md:flex-row justify-between items-center p-4 ">
      <div className="flex items-center text-lg font-semibold text-black space-x-2">
        <SidebarTrigger className="w-10 h-10 lg:hidden" />
        <span>Olá: {user?.email}</span>
      </div>
      <div className="flex items-center space-x-4  md:mt-0">
        <div className="text-lg font-bold bg-[#5DADE2] text-[#ffff] rounded-full px-4 py-1 shadow-inner">
          R$ {user?.Balance?.amount || 0}
        </div>
        {/* <SideBarSheet isNotification={true} /> */}
      </div>
    </div>
  );
}
