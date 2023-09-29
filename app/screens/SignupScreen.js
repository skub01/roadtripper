import React from "react";
import { Button } from "react-native";

const SignUpScreen = ({ navigation }) => {
  return (
    <Button
      title="Sign up"
      onPress={() => {
        navigation.navigate("Profile");
      }}
    />
  );
};

export default SignUpScreen;
