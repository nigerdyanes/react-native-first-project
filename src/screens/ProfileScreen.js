import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen(props) {
  const { navigation } = props;

  const goToHome = (page) => {
    navigation.navigate(page);
  };

  return (
    <View>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Text>Profile</Text>
      <Button title="Go to Home" onPress={() => goToHome("Home")} />
    </View>
  );
}
