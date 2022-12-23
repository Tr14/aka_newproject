import React from "react";
import { View, Button } from "react-native";

import PushIOManager from '@oracle/react-native-pushiomanager';

export default function HomeScreen({ navigation }) {

    PushIOManager.trackEvent("Login_Success", {});

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile", { id: 1 })}
      />
    </View>
  );
}
