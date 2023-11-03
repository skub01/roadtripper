import React from "react";
import { Button, View, StyleSheet } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Log in"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
