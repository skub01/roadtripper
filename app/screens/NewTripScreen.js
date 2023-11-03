import React from "react";
import { Button } from "react-native";

const NewTripScreen = ({ navigation }) => {
    const [startLocation, setStartLocation] = useState("");
    const [endLocation, setEndLocation] = useState("");
  
    const saveDetails = () => {
      console.log(`Saving trip details: Start - ${startLocation}; End - ${endLocation}`);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Let's get roadtripping!</Text>
  
        <TextInput
          placeholder="Starting location"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
          style={styles.input}
        />
   <Text style={styles.toText}>to</Text>
        <TextInput
          placeholder="Destination"
          value={endLocation}
          onChangeText={(text) => setEndLocation(text)}
          style={styles.input}
        />
  
        <Button title="View Trip" onPress={saveDetails} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    input: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderColor: "gray",
      marginBottom: 10,
      padding: 10,
    },
    toText: {
      fontSize: 16,
      marginVertical: 10,
    },
  });

export default NewTripScreen;
