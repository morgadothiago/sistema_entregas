"use client";

import React from "react";
import SideBarSheet from "../sidebarsheet";

import Image from "next/image";
import { useAuth } from "@/app/context";

export default function Header() {
  const { user } = useAuth()
  
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
