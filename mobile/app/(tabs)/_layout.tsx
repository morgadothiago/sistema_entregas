import React from "react"
import { Tabs } from "expo-router"
import { CustomTabs } from "@/app/components/CustomTabs"

export default function TabsLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabs {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="chat" />
      <Tabs.Screen name="delivery" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}
