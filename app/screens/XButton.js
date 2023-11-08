import React from "react";
import { Button } from "react-native";

const XButton = () => {
  return (
    <>
    <Button
      style={styles.button}
      title="X"
      onPress={() => {
      }}
    />
    <Text style={styles.buttonText}>X</Text>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50, 
    width: 40, 
    height: 40,
  },
  buttonText: {
    color: "#fff", 
    fontSize: 16,
  },
});

export default XButton;
