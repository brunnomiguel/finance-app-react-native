import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { Logo } from "../../components/Logo";
import { Title } from "../Home/styles";
import { LinkText } from "../SignIn/styles";
import { Container } from "./styles";

import SignUpForm from "../../components/Forms/SignUpForm";

// Tipo da propriedade de navegação
type RootStackParamList = {
  signin: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signin"
>;

interface SignUpProps {
  navigation: HomeScreenNavigationProp;
}

export default function SignUp({ navigation }: SignUpProps) {
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="position" enabled>
          <Logo />
          <Title formSchema>Cadastro</Title>
          <SignUpForm />

          <LinkText registerSchema>
            Já possui uma conta?{" "}
            <LinkText onPress={() => navigation.navigate("signin")}>
              Faça login
            </LinkText>
          </LinkText>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
