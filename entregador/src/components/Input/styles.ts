import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { theme } from "../../global/theme";

const { width, height } = Dimensions.get("window");

export const Container = styled.View`
  width: 100%;
  padding: ${height * 0.015}px ${width * 0.04}px;
`;

export const FormArea = styled.View`
  width: 100%;
  height: 56px;
  background-color: ${theme.colors.secondary};
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;

  ${Platform.select({
    ios: `
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.2;
      shadow-radius: 4px;
    `,
    android: `
      elevation: 4;
    `,
  })}
`;

export const Icon = styled.View`
  width: ${width * 0.14}px;
  height: 100%;
  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
`;
export const IconBox = styled.View`
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.TextInput`
  flex: 1;
  padding-left: 16px;
  height: 56px;
  padding: 0 ${width * 0.04}px;
  color: ${theme.colors.text};
  font-size: ${width * 0.045}px;
  background-color: ${theme.colors.background};
`;
