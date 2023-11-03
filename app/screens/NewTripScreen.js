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
        <Text>Let's get roadtripping!</Text>
  
        <TextInput
          placeholder="Starting location"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
          style={styles.input}
        />
   <Text>to</Text>
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
  });

export default NewTripScreen;
