"use client"
import dynamic from "next/dynamic"
import type { ComponentType } from "react"

const LeafletMap = dynamic(() => import("./_LeafletMap"), {
  ssr: false,
}) as ComponentType<{ route: [number, number][] }>

interface MapSimulateProps {
  route: [number, number][]
}

export default function MapSimulate({ route }: MapSimulateProps) {
  if (typeof window === "undefined") return null
  return <LeafletMap route={route} />
}
