import React from "react";
import { Button } from "react-native";

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
    borderRadius: 5,
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
