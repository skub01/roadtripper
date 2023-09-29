import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./app/screens/Welcome";
import Profile from "./app/screens/ProfileScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={Welcome}
          options={({ navigation }) => ({
            title: "Welcome",
            headerRight: () => <LoginScreen navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Log in" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Sign up" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
