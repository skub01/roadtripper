import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
    source={require('../assets/bg.jpg')} 
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to Roadtripper!</Text>
      <Button
        title="Log in"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Button
        title="Sign up"
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      />
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});

export default Welcome;
