import styled from "styled-components/native";
import { theme } from "../../global/theme";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

interface Props {
  keyboardOpen: boolean;
}

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${theme.colors.button};
  margin: 16px;
  margin-bottom: ${({ keyboardOpen }: Props) =>
    keyboardOpen ? `${height * 0.08}px` : "10px"};
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${theme.colors.buttonText};
  font-size: 16px;
  font-weight: bold;
`;
