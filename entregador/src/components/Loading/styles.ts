import styled from "styled-components/native"
import { Text } from "react-native"
import { theme } from "../../global/theme"

export const Container = styled.View`
  flex: 1;
`
export const SpashScreen = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const LoadingArea = styled.View`
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`
export const ProgressText = styled(Text)`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
`
export const LoadingIndicator = styled.ActivityIndicator.attrs(({}) => ({
  color: theme.colors.button,
  size: "small",
}))`
  align-items: center;
  justify-content: center;
`
