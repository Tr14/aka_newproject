import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import PushIOManager from '@oracle/react-native-pushiomanager';

const ProfileScreen = ({ route, navigation }) => {

    PushIOManager.trackEvent("Profile", {});

  const {
    params: { id },
  } = route;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {id != 1 && <Text style={styles.attributeTitle}>Deeplink id = {id}</Text>}
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate("Notifications")}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
const styles = StyleSheet.create({
  attributeTitle: {
    padding: 20,
    color: "#e4002b",
  },
});
export default ProfileScreen;
