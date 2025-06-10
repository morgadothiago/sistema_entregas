import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Container, HeaderContainer, Icon, Title } from "./styles";
import { Feather } from "@expo/vector-icons";
import { Button } from "../Button";

type headerProps = {
  title: string;
  icon: keyof typeof Feather.glyphMap;
  onPress: () => void;
};

export default function Header({ title, icon, onPress }: headerProps) {
  return (
    <Container>
      <HeaderContainer>
        <TouchableOpacity onPress={onPress}>
          <Feather name={icon} size={24} color={"#fff"} />
        </TouchableOpacity>
        <Title>{title}</Title>
      </HeaderContainer>
    </Container>
  );
}
