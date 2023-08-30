import CustomButton from "../../CustomButton";
import ControlledInput from "../ControlledInput";

import { useForm } from "react-hook-form";
import { LinkText } from "../../../screens/SignIn/styles";
import { Container } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../../../schemas";
import { useAuth } from "../../../contexts/Auth";

type SignInData = {
  email: string;
  password: string;
};

export const SignInForm = () => {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInData>({
    resolver: yupResolver(signInSchema),
  });

  const handleSignIn = (data: SignInData) => {
    signIn(data);
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
        name="password"
        icon="lock"
        control={control}
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />

      <LinkText>Esqueceu sua senha?</LinkText>

      <CustomButton title="Acessar" onPress={handleSubmit(handleSignIn)} />
    </Container>
  );
};
