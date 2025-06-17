import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/theme";

const getPaddingTop = () =>
  Platform.OS === "android" ? `${StatusBar.currentHeight || 24}px` : "0px";

export const Container = styled.SafeAreaView`
  padding-top: ${getPaddingTop()};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  background-color: ${theme.colors.primary};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  elevation: 8;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  padding: 24px 24px 12px 24px;
`;

export const Icon = styled.View`
  height: 48px;
  width: 48px;
  background-color: ${theme.colors.tertiary};
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  elevation: 3;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: ${theme.colors.secondary};
  letter-spacing: 1px;
`;

export const Subtitle = styled.Text`
  font-size: 15px;
  color: #666;
  margin-top: 2px;
  font-family: "System";
`;

// Componente para o Feather Icon
export const IconFeather = styled(Feather)`
  color: #fff;
  font-size: 26px;
`;
