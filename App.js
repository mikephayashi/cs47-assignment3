import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LinkWebView from "./components/LinkWebView.js";
import Home from "./components/Home.js";

export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detailed" component={LinkWebView} />
          <Stack.Screen name="Preview" component={LinkWebView} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}