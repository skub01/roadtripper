import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function Welcome( {navigation}) {
  return (
    <>
    <View style={styles.container}>
      <Text>Welcome to Roadtripper!</Text>
      <Button title="click here" onPress={() => Alert.alert("This is a test", "Testing",
      [ {text: "Yes", onPress: () => console.log('Yes')},
      {text: "No", onPress: () => console.log('No')}
      ])}/>
      <StatusBar style="auto" />
    </View>
     <Button
     title="Go to your profile"
     onPress={() =>
       navigation.navigate('Profile')
     }
   />
   </>
  );
}

const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
