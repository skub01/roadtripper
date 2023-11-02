import React from 'react';
import { View, Text, ActivityIndicator} from 'react-native';

const LoadingScreen = () => {
  return (
    <View>
      <ActivityIndicator size="large" color="#007BFF" />
      <Text>Loading...</Text>
    </View>
  );
};


export default LoadingScreen;
