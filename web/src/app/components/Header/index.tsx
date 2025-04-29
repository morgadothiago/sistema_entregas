"use client";
import React, { useState } from "react";
import SideBarSheet from "../sidebarsheet";
import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  const [user, setUser] = useState<User>({} as User);

  React.useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="flex items-center justify-between h-16 px-5 shadow-md rounded-lg">
      <div className="flex items-center  flex-1">
        <SidebarTrigger className="mr-3" />
        <span className="text-black text-sm font-semibold">Olá: {user?.Company?.name}</span>
      </div>
      <div className="flex gap-5 ">
        <div className="bg-zinc-400 sm:w-full text-black font-bold rounded-full px-4 py-1 shadow-sm text-sm sm:text-base">
          R$ {user?.Balance?.amount || 0}
        </div>
        <div className="flex items-center">
          <SideBarSheet isNotification={true} />
        </div>
      </div>
    </div>
  );
}