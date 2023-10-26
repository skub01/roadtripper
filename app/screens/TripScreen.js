import React from "react";
import { Button } from "react-native";

const TripScreen = ({ navigation }) => {
  return (
    <>
    <Text>My Trips</Text>

    <Button
    title="New Trip"
    onPress={() => {
      navigation.navigate("NewTripScreen");
    }}
  />

  <Button
  title="Past Trips"
  onPress={() => {
    navigation.navigate("PastTripsScreen");
  }}
/>
</>
  );
};

export default TripScreen;
