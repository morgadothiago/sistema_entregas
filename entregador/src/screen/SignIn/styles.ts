import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";
import { theme } from "../../global/theme";

const { width, height } = Dimensions.get("window");

interface ImageProps {
  keyboardOpen: boolean;
}

export const GradientBackground = styled(LinearGradient).attrs({
  colors: ["#00387A", "#0052B4", "#4A90E2", "#A9CCE3"],
  start: { x: 0.5, y: 0 },
  end: { x: 0.5, y: 1.5 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${height * 0.02}px;
`;

export const ImageContainer = styled.View<ImageProps>`
  width: 100%;
  height: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? "0px" : `${height * 0.2}px`};
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? "0px" : `${height * 0.0}px`};
  overflow: hidden;
`;

export const Image = styled.Image<ImageProps>`
  width: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? "0px" : `${width * 0.3}px`};
  height: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? `${height * 0.2}px` : `${height * 0.15}px`};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${width * 0.06}px;
  font-weight: bold;
  color: #fff;
`;

export const FormArea = styled.View`
  width: 100%;
  margin-top: ${height * 0.02}px;
  margin-bottom: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen
      ? `${height * 0.2}px`
      : `${height * 0.08}px`}; /* Ajustável conforme necessidade */
`;

export const Footer = styled.View`
  position: absolute;
  bottom: ${height * 0.01}px;
  width: 100%;
  align-items: center;
  padding: ${height * 0.025}px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialLoginArea = styled.View`
  margin-top: ${height * 0.03}px;
  align-items: center;
`;

export const SocialText = styled.Text`
  color: #fff;
  margin-bottom: ${height * 0.015}px;
  font-size: ${width * 0.045}px;
`;

export const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: ${width * 0.09}px;
`;

export const SocialButton = styled.TouchableOpacity`
  background-color: ${theme.colors.button};
  border-radius: 10px;
  padding: ${width * 0.02}px;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.Image`
  width: ${width * 0.08}px;
  height: ${width * 0.08}px;
  background-size: contain;
`;
