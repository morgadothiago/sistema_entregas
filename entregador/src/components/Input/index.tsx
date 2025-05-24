import { Feather } from "@expo/vector-icons";
import { Controller, type UseControllerProps } from "react-hook-form";

import { Container, FormArea, Inputs, IconBox } from "./styles";
import type { TextInput, TextInputProps } from "react-native";
import { forwardRef } from "react";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

export const Input = forwardRef<TextInput, Props>(
  ({ icon, formProps, inputProps }, ref) => {
    return (
      <Controller
        render={() => (
          <Container>
            <FormArea>
              <IconBox>
                <Feather name={icon} size={24} color={"#fff"} />
              </IconBox>

              <Inputs {...inputProps} />
            </FormArea>
          </Container>
        )}
        {...formProps}
      />
    );
  }
);
