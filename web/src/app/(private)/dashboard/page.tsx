"use client"

import { useAuth } from "@/app/context"
import { signOut } from "next-auth/react"
import { useEffect } from "react"

export default function Dashboard() {
  const { token, loading, user } = useAuth()

  useEffect(() => {
    if (!loading && !token) {
      signOut({
        callbackUrl: "/signin",
        redirect: true,
      })
    }
  }, [token, loading])

  if (loading) {
    return <div>Loading...</div>
  }

  console.log(user)

  if (!token) {
    return <div>Você não está autenticado.</div>
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bem-vindo, {user?.email}</p>
    </div>
  )
}
