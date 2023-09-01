import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Dashboard from "../screens/Dashboard";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
}
