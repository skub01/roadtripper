import React from "react";
import { Button } from "react-native";

const BackButton = ({ navigation }) => {
  return (
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
  );
};

export default BackButton;