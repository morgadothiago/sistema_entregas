import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

import SignUpScreen from "../../screen/Signup";
import SignInScreen from "../../screen/SignIn";
import ResetPasswordScreen from "../../screen/reset-password";
import type { RootStackParamList } from "../../types/RootParamsList";

export default function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
}
