import { Logo } from "../../components/Logo";
import { Title } from "../Home/styles";
import { SignInForm } from "../../components/Forms/SignInForm";
import { LinkText, Container } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

// Tipo da propriedade de navegação
type RootStackParamList = {
  signup: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signup"
>;

interface SignInProps {
  navigation: HomeScreenNavigationProp;
}

export default function SignIn({ navigation }: SignInProps) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Logo />
          <Title formSchema>Login</Title>
          <SignInForm />

          <LinkText registerSchema>
            Não tem uma conta?{" "}
            <LinkText onPress={() => navigation.navigate("signup")}>
              Cadastre-se
            </LinkText>
          </LinkText>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
