import { Feather } from "@expo/vector-icons";

import { FieldError } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Container, InputText, IconContainer } from "./styles";
import { ComponentProps, useCallback, useEffect, useState } from "react";

export type InputProps = TextInputProps & {
  icon: ComponentProps<typeof Feather>["name"];
  value?: string;
  label?: string;
  error?: FieldError;
};

type inputVariationOptions = {
  [key: string]: string;
};

const inputVariation: inputVariationOptions = {
  error: "#dc1637",
  default: "#4f4f4f",
  focus: "#1a13e681",
  filled: "#10790d",
};

export default function Input({
  icon,
  value,
  label,
  error,
  ...rest
}: InputProps) {
  const [inputVariationColor, setInputVariationColor] =
    useState<string>("default");

  useEffect(() => {
    if (error) {
      setInputVariationColor("error");
    }
  }, [error]);

  const handleInputFocus = useCallback(() => {
    if (!error) {
      setInputVariationColor("focus");
    }
  }, [error]);

  const handleInputBlur = useCallback(() => {
    if (value && value.length > 1 && !error) {
      setInputVariationColor("filled");
    }
  }, [error, value]);

  return (
    <Container>
      <IconContainer inputColor={inputVariationColor}>
        <Feather
          name={icon}
          size={24}
          color={inputVariation[inputVariationColor]}
        />
      </IconContainer>

      <InputText
        value={value}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        inputColor={inputVariationColor}
        onChangeText={rest.onChangeText}
        {...rest}
      />
    </Container>
  );
}
