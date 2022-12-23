import React from "react";
import { View, Text, Button } from "react-native";

import PushIOManager from '@oracle/react-native-pushiomanager';

export default function SettingsScreen({ navigation }) {

    PushIOManager.trackEvent("Setting", {});

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go Linking Buttons"
        onPress={() => navigation.navigate("LinkingButton")}
      />
    </View>
  );
}
