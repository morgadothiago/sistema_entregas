import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native";
import { useAuth } from "../../context/AuthContext";

import type { RootStackParamList } from "../../types/RootParamsList";
import Home from "../../screen/Home";

const Stack = createStackNavigator<RootStackParamList>();

export function MainStack() {
  const { logout } = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Início",
          headerRight: () => (
            <Button
              title="Sair"
              onPress={logout}
              color="#f00" // vermelho para destacar
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
