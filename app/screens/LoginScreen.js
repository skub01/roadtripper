import React from "react";
import { Button } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <Button
      title="Log in"
      onPress={() => {
        navigation.navigate("Profile");
      }}
    />
  );
};

export default LoginScreen;