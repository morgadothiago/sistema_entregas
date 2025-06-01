"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "../types/User";
import type { AuthContextType } from "../types/AuthContextType";
import { getSession } from "next-auth/react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>({} as User);
  const [token, setToken] = useState<string | null>(null);
 
  useEffect(() => {
    let isMounted = true;
    
    const fetchSession = async () => {
      try {
        const data = await getSession();
        if (data && isMounted){ 
          setUser(data.user as unknown as User);
          setToken((data as unknown as {token: string}).token);
        }
      } catch (error) {
        console.error("Erro ao buscar sessão:", error);
      }
    };
    
    fetchSession();
    
    return () => {
      isMounted = false;
    };
  }, []);

  const isAuthenticated = (): boolean => {
    return !!token;
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, setToken, token, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
