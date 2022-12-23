import React from "react";
import { View, Button } from "react-native";
import PushIOManager from '@oracle/react-native-pushiomanager';

export default function NotificationsScreen({ navigation }) {
    PushIOManager.trackEvent("Noti_Screen", {});
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
