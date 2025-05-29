"use client";
import React, { createContext, useContext, useEffect } from "react";

import api from "../services/api";
import { getCsrfToken } from "next-auth/react";

const AuthContext = createContext({});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    getCsrfToken().then((token) => {
      if (token) {
        api.setToken(token);
      }
      console.log("CSRF Token set:", token);
    });
  }, []);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
