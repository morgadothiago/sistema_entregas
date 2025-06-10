import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/theme";

const getPaddingTop = () =>
  Platform.OS === "android" ? `${StatusBar.currentHeight || 24}px` : "0px";

export const Container = styled.SafeAreaView`
  padding-top: ${getPaddingTop()};

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.04);
  elevation: 3;
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
  background-color: #4f8cff;
  border-radius: 24px;
  align-items: center;
  justify-content: center;
  shadow-color: #4f8cff;
  shadow-opacity: 0.18;
  shadow-radius: 12px;
  elevation: 6;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 700;
  color: ${theme.colors.text};
  letter-spacing: 1px;
  font-family: "System";
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
