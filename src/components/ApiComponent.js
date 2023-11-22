import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rapidapi.com");
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
          <Text>Data received from API:</Text>
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
