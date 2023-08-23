import { Logo } from "../../components/Logo";
import { Title } from "../Home/styles";
import { Container } from "./styles";
import { SignInForm } from "../../components/Forms/SignInForm";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

export default function SignIn() {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Logo />
          <Title loginSchema>Login</Title>
          <SignInForm />
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
