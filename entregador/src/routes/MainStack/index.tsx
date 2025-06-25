import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import type { RootStackParamList } from "../../types/RootParamsList";
import Home from "../../screen/Home";

const Stack = createStackNavigator<RootStackParamList>();

export function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
