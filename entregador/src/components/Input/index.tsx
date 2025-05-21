import { Feather } from "@expo/vector-icons";
import { Controller, type UseControllerProps } from "react-hook-form";

import { Container, FormArea, Inputs, IconBox, Label } from "./styles";
import type { TextInput, TextInputProps } from "react-native";
import { forwardRef } from "react";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
  label: string;
};

export const Input = forwardRef<TextInput, Props>(
  ({ icon, formProps, inputProps, label }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <Container>
            <Label>{label}</Label>
            <FormArea>
              <IconBox>
                <Feather name={icon} size={24} color={"#fff"} />
              </IconBox>

              <Inputs
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                {...inputProps}
              />
            </FormArea>
          </Container>
        )}
        {...formProps}
      />
    );
  }
);
