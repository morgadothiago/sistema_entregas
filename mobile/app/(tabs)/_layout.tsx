import React from "react"
import { Slot, Tabs } from "expo-router"
import { CustomTabs } from "@/app/components/CustomTabs"

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    />
  )
}
