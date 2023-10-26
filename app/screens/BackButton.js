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
      backgroundColor: '#b9c3c6', 
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
      alignItems: "center",
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20, 
    },
  });

export default BackButton;