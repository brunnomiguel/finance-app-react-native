import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";

import Search from "../screens/Search";
import Details from "../screens/Details";
import Profile from "../screens/Profile";
import Dashboard from "../screens/Dashboard";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#8080ff",
          borderTopColor: "transparent",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#d1d1d1",
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />

      <Tab.Screen
        name="search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
          tabBarLabel: "Pesquisa",
        }}
      />

      <Tab.Screen
        name="details"
        component={Details}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="more-horizontal" color={color} size={size} />
          ),
          tabBarLabel: "Detalhes",
        }}
      />

      <Tab.Screen
        name="perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          tabBarLabel: "Perfil",
        }}
      />
    </Tab.Navigator>
  );
}
