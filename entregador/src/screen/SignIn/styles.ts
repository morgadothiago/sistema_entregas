import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import { Dimensions } from "react-native";

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
  justify-content: space-evenly;
  align-items: center;
  padding: ${height * 0.01}px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: ${height * 0.2}px;

  align-items: center;
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
  margin-top: ${height * 0.01}px;
  margin-bottom: ${height * 0.03}px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: ${height * 0.01}px;
  width: 100%;
  align-items: center;
  padding: ${height * 0.025}px;
`;
