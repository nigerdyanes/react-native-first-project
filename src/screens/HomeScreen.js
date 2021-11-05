import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToProfile = (page) => {
    navigation.navigate(page);
  };

  return (
    <View>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Text>Home</Text>
      <Button title="Go to Profile" onPress={() => goToProfile("Profile")} />
    </View>
  );
}
