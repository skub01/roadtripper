import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const XButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClose}>
      <Text style={styles.buttonText}>X</Text>
    </TouchableOpacity>
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
