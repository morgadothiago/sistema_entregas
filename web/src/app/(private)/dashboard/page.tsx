"use client";

import React from "react";
import { useAuth } from "@/app/context/";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Page() {
  const auth = useAuth();
  const token = auth.token; // Assuming token is stored in auth
  const isAuthenticate = !!token;

  if (!isAuthenticate) {
    // Redirect to login page if token is not present
    redirect("/");
  }

  async function handleGetUser() {}

  return (
    <div>
      <h1>Tela do dashboard: {auth.user?.name}</h1>

      <Button onClick={handleGetUser}>Get INfo user</Button>
    </div>
  );
}
