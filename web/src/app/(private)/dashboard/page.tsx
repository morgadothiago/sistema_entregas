"use client";

import React from "react";
import { useAuth } from "@/app/context/";

import { Button } from "@/components/ui/button";

export default function Page() {
  const auth = useAuth();

  async function handleGetUser() {}

  return (
    <div>
      <div className="">
        <h1>Tela do dashboard: {auth.user?.email}</h1>
      </div>
      <Button onClick={handleGetUser}>Get Info user</Button>
    </div>
  );
}
