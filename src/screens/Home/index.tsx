import CustomButton from "../../components/CustomButton";

import { Logo } from "../../components/Logo";
import { Title, Subtitle, Container, LittleText } from "./styles";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Tipo da propriedade de navegação
type RootStackParamList = {
  signin: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "signin"
>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
}

export default function Home({ navigation }: HomeProps) {
  return (
    <Container>
      <Logo />

      <Title>Finance Master</Title>

      <Subtitle>Organize as suas finanças em um só lugar</Subtitle>

      <LittleText>
        Controle suas receitas e despesas de um jeito dinâmico e simples
      </LittleText>

      <CustomButton
        title="Comece por aqui!"
        onPress={() => navigation.navigate("signin")}
      />
    </Container>
  );
}
