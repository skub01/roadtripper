import React from "react";
import { Button, StyleSheet } from "react-native";

const BackButton = ({ navigation }) => {
  return (
    <Button
      style={styles.button}
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BackButton;
