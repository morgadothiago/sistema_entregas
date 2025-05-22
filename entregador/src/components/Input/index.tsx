import { Feather } from "@expo/vector-icons";
import {
  Controller,
  type FieldValues,
  type UseControllerProps,
} from "react-hook-form";
import clsx from "clsx";

import {
  Container,
  FormArea,
  Inputs,
  IconBox,
  Label,
  ErrorTitle,
} from "./styles";
import { type TextInput, type TextInputProps } from "react-native";
import { forwardRef } from "react";

type Props<T extends FieldValues> = {
  error?: string;
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps<T>; // **Aqui é importante o generic**
  inputProps?: TextInputProps; // inputProps pode ser opcional
  label: string;
};

export const Input = forwardRef(
  <T extends FieldValues>(
    { icon, formProps, inputProps, label }: Props<T>,
    ref: React.Ref<TextInput>
  ) => {
    return (
      <Controller
        {...formProps}
        render={({ field, fieldState }) => (
          <Container>
            <Label>{label}</Label>
            <FormArea>
              <IconBox>
                <Feather
                  name={icon}
                  size={24}
                  color={clsx({
                    ["#dc1637"]: fieldState.error,
                    ["#fff"]: field.value,
                    ["#ccc"]: !field.value && !fieldState.error,
                  })}
                />
              </IconBox>

              <Inputs
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                $hasError={!!fieldState.error}
                {...inputProps}
              />
            </FormArea>

            {fieldState.error?.message && (
              <ErrorTitle>{fieldState.error.message}</ErrorTitle>
            )}
          </Container>
        )}
      />
    );
  }
);
