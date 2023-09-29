import React from "react";

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
