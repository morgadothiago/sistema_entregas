/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from "react";
import SignIn from "./components/Signin";
import { useAuth } from "./context";
import { redirect } from "next/navigation";

export default function page() {
  const { isAuthenticated } = useAuth();

  const redirectToDashboard = async () => {
    if (isAuthenticated()) {
      await redirect("/dashboard");
    }
  };

  redirectToDashboard();

  return (
    <div>
      <SignIn />
    </div>
  );
}
