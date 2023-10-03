import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.welcome}>Roadtripper</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Log in"
          onPress={() => {
            navigation.navigate("Login");
          }}
          style={styles.button}
        />
        <Button
          title="Sign up"
          onPress={() => {
            navigation.navigate("SignUp");
          }}
          style={styles.button}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    paddingTop: 100,
  },
  welcome: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 150,
  },
  button: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20, 
  },
});

export default Welcome;
