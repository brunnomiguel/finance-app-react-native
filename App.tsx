import "react-native-reanimated";

import Routes from "./src/routes";

import { Providers } from "./src/contexts";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Providers>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Providers>
  );
}
