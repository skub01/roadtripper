import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Profile = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const saveDetails = () => {
    console.log(`Saving user details: Name - ${name}; Location - ${location}`);
  };

  return (
    <View style={styles.container}>
      <Text>This is the profile screen!</Text>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter your location"
        value={location}
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
      />

      <Button title="Save Details" onPress={saveDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    width: 200,
    marginBottom: 20,
  },
});

export default Profile;
