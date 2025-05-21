import styled from "styled-components/native";
import { Dimensions, Platform } from "react-native";
import { theme } from "../../global/theme";

const { width, height } = Dimensions.get("window");

type InputProps = {
  $hasError?: boolean;
};

export const Container = styled.View`
  width: 100%;
  padding: ${height * 0.02}px ${width * 0.03}px;
`;

export const FormArea = styled.View`
  width: 100%;
  height: 56px;
  background-color: red;

  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  overflow: hidden;
`;

export const Icon = styled.View`
  width: ${width * 0.14}px;
  height: 100%;

  align-items: center;
  justify-content: center;
`;
export const IconBox = styled.View`
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.buttonText};
  align-items: center;
  justify-content: center;
`;

export const Inputs = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  height: 56px;
  color: ${theme.colors.text};
  font-size: ${width * 0.035}px;
  background-color: ${theme.colors.buttonText};
`;

export const Label = styled.Text`
  color: ${theme.colors.button};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: -20px;
`;

export const ErrorTitle = styled.Text`
  font-size: 14px;
  color: #dc1637;
  margin-top: 7px;
  font-weight: bold;
  margin-left: 5px;
`;
