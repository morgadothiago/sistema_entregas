"use client";

import React, { useEffect, useState } from "react";

import { getSession } from "next-auth/react";
import { User } from "@/app/types/User";

import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });
  }, []); // Empty dependency array to run only on mount

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
