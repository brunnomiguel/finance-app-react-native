import { StyleSheet, TouchableOpacity } from "react-native";
import { Container, Content, Username } from "./styles";

import { Feather } from "@expo/vector-icons";

import { MotiView, MotiText } from "moti";

export default function Header() {
  return (
    <Container>
      <MotiView
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800, delay: 100 }}
      >
        <Content>
          <MotiText
            from={{ translateX: -300 }}
            animate={{ translateX: 0 }}
            transition={{ type: "spring", duration: 800, delay: 800 }}
          >
            <Username>Brunno Miguel</Username>
          </MotiText>
          <TouchableOpacity activeOpacity={0.8} style={styles.buttonUser}>
            <Feather name="user" size={30} color="#FFF" />
          </TouchableOpacity>
        </Content>
      </MotiView>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonUser: {
    width: 44,
    height: 44,
    alignItems: "center",
    borderRadius: 44 / 2,
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255, 0.5)",
  },
});
