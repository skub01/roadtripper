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
          placeholder="Enter your starting location"
          value={startLocation}
          onChangeText={(text) => setStartLocation(text)}
          style={styles.input}
        />
  
        <TextInput
          placeholder="Enter your destination"
          value={endLocation}
          onChangeText={(text) => setEndLocation(text)}
          style={styles.input}
        />
  
        <Button title="View Trip" onPress={saveDetails} />
      </View>
    );
  };

export default NewTripScreen;
