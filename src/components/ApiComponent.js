import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rapidapi.com", {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "API_KEY",
            "Content-Type": "application/json",
          },
        });

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data ? (
        <View>
          <Text>{JSON.stringify(data)}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ApiComponent;
