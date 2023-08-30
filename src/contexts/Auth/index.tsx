import {
  useState,
  ReactNode,
  useEffect,
  useContext,
  createContext,
} from "react";

import { apiAuth } from "../../services";

import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextProps = {
  signed: boolean;
  user: object | null;
  signIn: (data: SignInProps) => Promise<void>;
  signOut: () => void;
};

type SignInProps = {
  email: string;
  password: string;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStoragedData() {
      const storageUser = await AsyncStorage.getItem("FiMa:user");
      const storageToken = await AsyncStorage.getItem("FiMa:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStoragedData();
  }, []);

  const signIn = async (data: SignInProps) => {
    const response = await apiAuth.post("/sessions", data);

    const { token, user } = response.data;

    setUser(user);

    await AsyncStorage.setItem("FiMa:user", JSON.stringify(user));
    await AsyncStorage.setItem("FiMa:token", token);
  };

  const signOut = () => {
    AsyncStorage.clear().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
