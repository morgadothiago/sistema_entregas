"use client";

import React, { useState } from "react";
import SideBarSheet from "../sidebarsheet";
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";
import Image from "next/image";

export default function Header() {
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

  return (
    <div className="flex flex-row md:flex-row justify-between items-center p-1 bg-white ">
      <div className="text-lg font-semibold">Olá: {user?.Company?.name}</div>
      <div className="text-lg font-bold mt-2 md:mt-0 bg-gray-200 rounded-full px-4 py-1">
        R$ {user?.Balance?.amount || 0}
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <SideBarSheet isNotification={true} />
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <Image
            src="/path/to/message-icon.svg"
            alt="Message"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}
