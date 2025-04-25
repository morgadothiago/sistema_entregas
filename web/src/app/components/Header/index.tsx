"use client";
"use client";
import React, { useState } from "react";
import SideBarSheet from "../sidebarsheet";

export default function Header() {
  const [isNotification, setIsNotification] = useState(false);
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
    const fetchNotifications = () => {
      // Here you can set the notifications array
      // For now, we will use the hardcoded notifications
      setIsNotification(notifications.length > 0);
    };

    fetchNotifications();
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="flex flex-row md:flex-row justify-between items-center p-1 bg-white ">
      <div className="text-lg font-semibold">Olá: Fulano</div>
      <div className="text-lg font-bold mt-2 md:mt-0 bg-gray-200 rounded-full px-4 py-1">
        R$ 100,00
      </div>
      <div className="flex items-center space-x-4 mt-2 md:mt-0">
        <SideBarSheet isNotification={true} />
        <button className="p-2 rounded-full hover:bg-gray-100 transition">
          <img
            src="/path/to/message-icon.svg"
            alt="Message"
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}
