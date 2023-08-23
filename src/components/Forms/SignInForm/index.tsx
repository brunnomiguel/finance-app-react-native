import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import ControlledInput from "../ControlledInput";

import { useForm } from "react-hook-form";
import { CustomButton } from "../../CustomButton";
import { Container, LinkText } from "./styles";

const signInSchema = yup.object({
  email: yup
    .string()
    .required("Informe o seu e-mail.")
    .email("Formato de e-mail inválido."),
  senha: yup
    .string()
    .min(6, "Senha precisa conter o mínimo de 6 dígitos")
    .required("Digite a sua senha."),
});

type FormData = {
  email: string;
  senha: string;
};

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: FormData) => {
    console.log(data);
  };

  return (
    <Container>
      <ControlledInput
        name="email"
        icon="mail"
        control={control}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ControlledInput
        name="senha"
        icon="lock"
        control={control}
        placeholder="Senha"
        secureTextEntry
        error={errors.senha}
      />

      <LinkText>Esqueceu sua senha?</LinkText>

      <CustomButton title="Acessar" onPress={handleSubmit(handleSignIn)} />

      <LinkText registerSchema>Não tem uma conta? Cadastre-se</LinkText>
    </Container>
  );
};
