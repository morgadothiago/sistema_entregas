import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, Platform } from "react-native";
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
  padding: 16px;
`;

export const ImageContainer = styled.View<ImageProps>`
  width: 100%;
  height: ${({ keyboardOpen }: ImageProps) => (keyboardOpen ? "0px" : "20%")};
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? "0px" : "12px"};
  overflow: hidden;
`;

export const Image = styled.Image<ImageProps>`
  width: ${({ keyboardOpen }: ImageProps) => (keyboardOpen ? "0px" : "30%")};
  height: ${({ keyboardOpen }: ImageProps) => (keyboardOpen ? "60px" : "90px")};
  border-radius: 10px;
`;

export const Title = styled.Text`
  font-size: ${width < 360 ? "18px" : "22px"};
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const FormArea = styled.View<ImageProps>`
  width: 100%;
  margin-top: 5px;
  margin-bottom: ${({ keyboardOpen }: ImageProps) =>
    keyboardOpen ? "10%" : "32px"};
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 10px;
  width: 100%;
  align-items: center;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SocialLoginArea = styled.View`
  margin-top: 8px;
  align-items: center;
`;

export const SocialText = styled.Text`
  color: #fff;
  margin-bottom: 10px;
  font-size: ${width < 360 ? "14px" : "16px"};
  text-align: center;
`;

export const SocialButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

export const SocialButton = styled.TouchableOpacity`
  background-color: ${theme.colors.button};
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const SocialIcon = styled.Image`
  width: 32px;
  height: 32px;
`;
