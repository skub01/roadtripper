import React from "react";

const PastTripsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Past Trips</Text>
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

export default PastTripsScreen;
