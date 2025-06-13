import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

import SignUpScreen from "../../screen/Signup";
import SignInScreen from "../../screen/SignIn";
import ResetPasswordScreen from "../../screen/reset-password";
import type { RootStackParamList } from "../../types/RootParamsList";
import { useAuth } from "../../context/AuthContext";

export default function AuthRoutes() {
  const { isAuthenticated } = useAuth();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isAuthenticated ? "Home" : "SignIn"}
    >
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />

      {/* Steps Accounts */}

      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
