import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

import SignUpScreen from "../../screen/Signup";
import SignInScreen from "../../screen/SignIn";
import ResetPasswordScreen from "../../screen/reset-password";
import type { RootStackParamList } from "../../types/RootParamsList";
import { useAuth } from "../../context/AuthContext";
import Home from "../../screen/Home";

export default function AuthRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "Home" : "SignIn"}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen name="Home" component={Home} />

      {/* Steps Accounts */}

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
