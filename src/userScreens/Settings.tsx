import * as React from 'react';
import { View, Text } from "react-native";
import { Auth } from "aws-amplify";

export default function SettingsScreen() {
  const signOut = () => {
    Auth.signOut();
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={signOut}> Sign Out </Text>
    </View>
  );
}
