import { Container } from "./styles";

import CustomButton from "../../CustomButton";
import ControlledInput from "../ControlledInput";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../../schemas";

type SignUpData = {
  usuario: string;
  email: string;
  senha: string;
  confirma_senha: string | undefined;
};

export default function SignUpForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(signUpSchema),
  });

  const handleSignUp = (data: SignUpData) => {
    console.log(data);
  };

  return (
    <Container>
      <ControlledInput
        name="usuario"
        icon="user"
        control={control}
        placeholder="Nome completo"
        error={errors.usuario}
      />
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
      <ControlledInput
        name="confirma_senha"
        icon="lock"
        control={control}
        placeholder="Confirme a sua senha"
        secureTextEntry
        error={errors.confirma_senha}
      />

      <CustomButton title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
    </Container>
  );
}
