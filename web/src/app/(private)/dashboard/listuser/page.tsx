"use client";

import api from "@/app/services/api";
import type { User } from "@/app/types/User";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

import React, { useEffect, useState } from "react";

export default function ListUser() {
  const [user, setUser] = useState<User>({} as User);
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.accessToken) {
      localStorage.setItem("token", session.accessToken);
    }
  }, [session]);

  useEffect(() => {
    getSession().then((data) => {
      if (data) setUser(data.user as unknown as User);
    });

    api
      .getUser()
      .then((data) => {
        console.log("User data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  console.log("Aqui", user);

  return <div>List User</div>;
}
