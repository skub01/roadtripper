import React from "react";

const LoginScreen = ({ navigation }) => {
  return (
    <Button
      title="Log in"
      onPress={() => {
        // Implement your login logic here
        // For now, navigate to the Profile screen as an example
        navigation.navigate("Profile");
      }}
    />
  );
};

export default LoginScreen;