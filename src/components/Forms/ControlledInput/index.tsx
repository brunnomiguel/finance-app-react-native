import { Control, Controller, FieldError } from "react-hook-form";

import { ErrorMessage } from "./styles";
import Input, { InputProps } from "../Input";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};

export default function ControlledInput({
  control,
  name,
  error,
  ...rest
}: Props) {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            value={value}
            error={error}
            onChangeText={onChange}
            {...rest}
          />
        )}
      />

      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </>
  );
}
