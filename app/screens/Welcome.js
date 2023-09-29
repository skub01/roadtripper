import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Roadtripper!</Text>
      <Button
        title="Log in"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Button
        title="Sign up"
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Welcome;
