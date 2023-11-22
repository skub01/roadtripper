import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const ApiComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("apiEndpointHere");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []); 

  return (
    <View>
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

export default ApiComponent;
