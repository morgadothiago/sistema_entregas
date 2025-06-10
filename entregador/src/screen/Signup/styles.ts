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
`;
