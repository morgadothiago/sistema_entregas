import React from "react";

import { LinkTitle, LinkContainer } from "./styles";

type LinkProps = {
  linkTitle: string;
  onPress: () => void;
};

export function LinkButton({ linkTitle, onPress }: LinkProps) {
  return (
    <LinkContainer onPress={onPress}>
      <LinkTitle>{linkTitle}</LinkTitle>
    </LinkContainer>
  );
}
