import { Feather } from "@expo/vector-icons";
import { Controller, useForm, type UseControllerProps } from "react-hook-form";

import { Container, FormArea, Input, IconBox } from "./styles";
import type { TextInputProps } from "react-native";

type Props = {
  icon: keyof typeof Feather.glyphMap;
  formProps: UseControllerProps;
  inputProps: TextInputProps;
};

export function TextInput({ icon, formProps, inputProps }: Props) {
  return (
    <Controller
      render={() => (
        <Container>
          <FormArea>
            <IconBox>
              <Feather name={icon} size={24} />
            </IconBox>

            <Input {...inputProps} />
          </FormArea>
        </Container>
      )}
      {...formProps}
    />
  );
}
