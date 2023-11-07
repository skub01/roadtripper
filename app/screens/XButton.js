import React from "react";
import { Button } from "react-native";

const XButton = () => {
  return (
    <Button
      style={styles.button}
      title="X"
      onPress={() => {
      }}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 2,
    alignItems: "center",
  },
});

export default XButton;
